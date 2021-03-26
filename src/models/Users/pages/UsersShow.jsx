import React, { useEffect } from 'react';
import { useInputField, useModel } from '../../../hooks';
import { Box, Button, Heading } from '@chakra-ui/react';
import InputField from '../../../components/inputs/InputField';

export default function UsersShow({ id }) {
  const { model, getModelInstance, updateModelInstance, deleteModelInstance } = useModel({ modelName: 'users' });

  useEffect(() => {
    getModelInstance({ id });
  }, []);

  const firstNameInput = useInputField({
    type: 'text',
    name: 'first_name',
    label: 'First name',
    validationRules: [
      {
        type: 'required',
      },
    ],
    defaultValue: model && model.first_name,
  });

  const lastNameInput = useInputField({
    type: 'text',
    name: 'last_name',
    label: 'Last name',
    validationRules: [
      {
        type: 'required',
      },
    ],
    defaultValue: model && model.last_name,
  });

  const emailInput = useInputField({
    type: 'email',
    name: 'email',
    label: 'Email',
    validationRules: [
      {
        type: 'required',
      },
    ],
    defaultValue: model && model.email,
  });

  return model ? (
    <Box>
      <Heading size="md" as="h3">{`${model.first_name} ${model.last_name}`}</Heading>
      <Box>
        <InputField {...firstNameInput} />
        <InputField {...lastNameInput} />
        <InputField {...emailInput} />
        <Button
          size="sm"
          onClick={() => {
            const formIsValid =
              [firstNameInput, lastNameInput, emailInput]
                .map(input => {
                  return input.validate();
                })
                .filter(result => result == false).length < 1;

            if (formIsValid) {
              updateModelInstance({ id, data: { first_name: firstNameInput.value, last_name: lastNameInput.value, email: emailInput.value } });
            }
          }}
        >
          Save
        </Button>

        <Button
          size="sm"
          color="red.600"
          onClick={() => {
            deleteModelInstance({ id });
          }}
        >
          Delete
        </Button>
      </Box>
    </Box>
  ) : null;
}
