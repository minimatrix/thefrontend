import React, { useCallback } from 'react';
import { get, mapValues, isArray } from 'lodash';
import pluralize from 'pluralize';
import { useForm } from '../..formbuilder';
import styled from 'styled-components';
import {
  Customfield,
  replaceStringsFromConfig,
  useConfig,
  useForcedValues,
} from '..';
import { ReadOnlyField, CalculatedField } from '../components';

const useBuildForm = ({
  configKey,
  config,
  entity,
  forcedValues,
  fieldOverrides,
  ...additionalProps
}) => {
  const allConfigs = useConfig();
  const form = useForm();
  const imageForm = useForm();
  const { addForcedValuesToForm } = useForcedValues({ form, forcedValues });
  const originalClear = form.clearValues;

  form.clearValues = useCallback(() => {
    originalClear();
    addForcedValuesToForm();
  }, [addForcedValuesToForm]);

  // Removing 'hidden', 'hiddenUnless' and 'hiddenIf' fields so they never show in the form.
  const fields = config
    ? config.fields.filter(
        f => !(f.rules && f.rules.map(r => r.rule).includes('hidden'))
      )
    : [];

  const renderFields = ({
    defaultValues,
    onCheckboxChange,
    displayOnly,
    isCreateForm = false,
  } = {}) => {
    const renderField = field => {
      if (forcedValues && Object.keys(forcedValues).includes(field.name)) {
        return null;
      }

      // get the displayName of the linked model and replace the displayName of the field
      if (field.linkoptions && !field.displayName) {
        field.displayName = get(field, 'linkoptions.model')
          ? get(
              get(allConfigs, `${pluralize(get(field, 'linkoptions.model'))}`),
              'strings.classNameSingular'
            )
          : 'Unresolveable';
      }

      if (field.type == 'image') {
        additionalProps.configKey = configKey;
        additionalProps.model_id = entity && entity.id;
      }

      const fieldprops = {
        key: `field-${field.name}`,
        field,
        form: field.type == 'image' ? imageForm : form,
        onCheckboxChange,
        ...additionalProps,
        isCreateForm,
      };

      const overridesForThisField =
        fieldOverrides && fieldOverrides.find(f => f.name === field.name);

      if (overridesForThisField) {
        const overridenFieldProps = mapValues(
          overridesForThisField,
          (overrideValue, fieldPropKey) => {
            const originalProps = field[fieldPropKey]
              ? field[fieldPropKey]
              : [];
            return isArray(overrideValue)
              ? [...originalProps, ...overrideValue]
              : overrideValue;
          }
        );

        fieldprops.field = { ...fieldprops.field, ...overridenFieldProps };

        fieldprops.accessPathURL = overridesForThisField.accessPath;
      }

      if (fieldprops.field?.defaultValue) {
        fieldprops.defaultValue = fieldprops.field.defaultValue;
      }

      if (entity) {
        if (field.linkoptions && entity[field.name]) {
          const primaryField = `${get(field, 'linkoptions.primaryfield')}`;
          const linkedModel = pluralize(`${get(field, 'linkoptions.model')}`);

          // Does the model have the "primaryfield"
          const primaryFieldExists =
            allConfigs[linkedModel] &&
            allConfigs[linkedModel].isCustomObject &&
            allConfigs[linkedModel]?.additionalfields.filter(
              field => field.name === primaryField
            ).length > 0;

          // Retrieve the primary field
          const actualPrimaryField =
            allConfigs[linkedModel] && allConfigs[linkedModel].isCustomObject
              ? primaryField && primaryField !== '' && primaryFieldExists
                ? primaryField
                : allConfigs[linkedModel]?.primaryfield
              : primaryField;

          const labelVal = replaceStringsFromConfig(
            allConfigs,
            entity[field.name][
              actualPrimaryField ? actualPrimaryField : 'name'
            ],
            false
          );
          const valueVal = entity[field.name].id;

          fieldprops.defaultValue =
            labelVal && valueVal
              ? {
                  label: labelVal,
                  value: valueVal,
                }
              : undefined;

          fieldprops.getLink = target => {
            const url = get(
              allConfigs,
              `${pluralize(get(field, 'linkoptions.model'))}.strings.url`
            );
            const link = target ? `/${url}/${target}` : undefined;
            return link;
          };
        } else {
          switch (field.type) {
            case 'file':
              fieldprops.src = entity[field.name];
              break;
            case 'image':
              fieldprops.src = entity[field.name];
              break;
            default:
              fieldprops.defaultValue = entity[field.name];
          }
        }

        if (field.type === 'email') {
          fieldprops.blrecords = entity[field.name + '_sesblacklist'];
        }
      }

      if (
        defaultValues &&
        defaultValues.some &&
        defaultValues.some(defaultVal => defaultVal.field === field.name)
      ) {
        fieldprops.defaultValue = defaultValues
          .filter(item => item.field === field.name)
          .shift().value;
      }

      const isOverride =
        fieldprops.field &&
        fieldprops.field.rules &&
        fieldprops.field.rules.filter(rule => rule.rule == 'readOnly').length >
          0;

      if (displayOnly) {
        const copyOfField = fieldprops.field;
        const newField = {
          ...copyOfField,
          rules: [...get(copyOfField, 'rules', []), { rule: 'readOnly' }],
        };
        return <Customfield {...{ ...fieldprops, field: newField }} />;
      }

      switch (field.type) {
        case 'image':
          return !isCreateForm && <Customfield {...fieldprops} />;
          break;

        case 'calculated':
          return !isCreateForm && <CalculatedField {...fieldprops} />;
          break;

        default:
          return isOverride ? (
            <ReadOnlyField {...fieldprops} />
          ) : (
            <Customfield {...fieldprops} />
          );
      }
    };

    if (config.fieldgroups && config.fieldgroups.length > 0) {
      const corefieldsgroup = config.corefieldsgroup || 'Core Fields';

      //foreach field groups
      //add corefields group to those which dont have a group
      const corefields = [...fields.filter(f => !f.group)];
      corefields.forEach(field => {
        field['group'] = corefieldsgroup;
      });

      // if corefieldsgroup not in the fieldsgroup array, prepend it.. to ensure always have the corefields
      const fieldgroups = config.fieldgroups.includes(corefieldsgroup)
        ? config.fieldgroups
        : [corefieldsgroup, ...config.fieldgroups];

      return fieldgroups.map(fieldGroup => (
        <FieldGroupContainer>
          <h5>{fieldGroup}</h5>
          {fields.filter(f => f.group === fieldGroup).map(renderField)}
        </FieldGroupContainer>
      ));
    } else {
      return fields.map(renderField);
    }
  };

  return { form, imageForm, renderFields };
};

const FieldGroupContainer = styled.div`
  :not(:first-child) {
    // background: red !important;
  }
`;

export default useBuildForm;
