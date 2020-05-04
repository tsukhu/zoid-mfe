import zoid from 'zoid';

zoid.create({
  tag: 'guage-widget',
  url: `${process.env.REACT_APP_HOST_URL}`,
  dimensions: {
    width: '300px',
    height: '350px',
  },
  // The properties they can (or must) pass down to my component. This is optional.

  props: {
    title: {
      type: 'string',
      required: true,
    },
  },
});
