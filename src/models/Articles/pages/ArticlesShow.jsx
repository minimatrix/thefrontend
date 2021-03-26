import React, { useEffect } from 'react';
import { useInputField, useModel } from '../../../hooks';
import { Box, Button, Heading } from '@chakra-ui/react';
import InputField from '../../../components/inputs/InputField';

export default function ArticlesShow({ id }) {
  const { model, getModelInstance, updateModelInstance, deleteModelInstance } = useModel({ modelName: 'articles' });

  useEffect(() => {
    getModelInstance({ id });
  }, []);

  const nameInput = useInputField({
    type: 'text',
    name: 'name',
    label: 'Name',
    validationRules: [
      {
        type: 'required',
      },
    ],
    defaultValue: model && model.name,
  });

  const headingInput = useInputField({
    type: 'text',
    name: 'heading',
    label: 'Heading',
    defaultValue: model && model.heading,
  });

  const slugInput = useInputField({
    type: 'text',
    name: 'slug',
    label: 'Slug',
    defaultValue: model && model.slug,
  });

  const bodyInput = useInputField({
    type: 'text',
    name: 'body',
    label: 'Article Body',
    defaultValue: model && model.body,
  });

  const publishedInput = useInputField({
    type: 'checkbox',
    name: 'published',
    label: 'Published',
    defaultValue: model && model.body,
  });

  const publishAtInput = useInputField({
    type: 'date',
    name: 'publish_at',
    label: 'Publish At',
    defaultValue: model && model.body,
  });

  return model ? (
    <Box>
      <Heading size="md" as="h3">{`${model.name}`}</Heading>
      <Box>
        <InputField {...nameInput} />
        <InputField {...headingInput} />
        <InputField {...slugInput} />
        <InputField {...bodyInput} />
        <InputField {...publishedInput} />
        <InputField {...publishAtInput} />

        <Button
          size="sm"
          onClick={() => {
            const formIsValid =
              [nameInput, headingInput, slugInput, bodyInput, publishedInput, publishAtInput]
                .map(input => {
                  return input.validate();
                })
                .filter(result => result == false).length < 1;

            if (formIsValid) {
              updateModelInstance({ id, data: { name: nameInput.value, heading: headingInput.value, slug: slugInput, body: bodyInput, published: publishedInput, published_at: publishAtInput.value } });
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
