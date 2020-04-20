var CardFormComponent = zoid.create({
  tag: 'card-form',
  url: 'http://localhost:8001/',
  dimensions: {
    width: '100%',
    height: '300px',
  },
  // The properties they can (or must) pass down to my component. This is optional.

  props: {
    userName: {
      type: 'string',
      required: true,
    },

    onUpdate: {
      type: 'function',
      required: true,
    },
  },
});
