import RouteCard from './RouteCard.vue';
import vuetify from '../../../.storybook/vuetify';

export default {
  title: 'View/RouteCard',
  component: RouteCard,
};

const template = (args: unknown, { argTypes }: any) => ({
  vuetify,
  props: Object.keys(argTypes),
  components: {
    RouteCard,
  },
  template: '<v-app><route-card v-bind="$props" /></v-app>',
});

export const Main = template.bind({});
// @ts-expect-error exist
Main.args = {
  vehicles: [{ type: 'train' }, { type: 'plain' }, { type: 'bicycle' }],

  routeCost: '1232323$',
};
