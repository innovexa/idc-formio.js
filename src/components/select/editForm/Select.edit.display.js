export default [
  {
    weight: 400,
    type: 'select',
    input: true,
    key: 'esType',
    label: 'Field Type',
    data: {
      values: [
        { label: 'Text', value: 'keyword' },
        { label: 'Floating Number', value: 'float' },
        { label: 'Boolean', value: 'boolean' }
      ]
    }
  },
  {
    type: 'select',
    input: true,
    weight: 20,
    tooltip: 'Select the type of widget you\'d like to use.',
    key: 'widget',
    defaultValue: 'choicesjs',
    label: 'Widget Type',
    dataSrc: 'values',
    data: {
      values: [
        { label: 'ChoicesJS', value: 'choicesjs' },
        { label: 'HTML 5', value: 'html5' },
      ],
    },
  },
];
