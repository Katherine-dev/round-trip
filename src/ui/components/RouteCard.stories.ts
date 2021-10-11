import RouteCard from './RouteCard.vue';
import vuetify from '../../../.storybook/vuetify';

export const template = (args: any) => ({
  vuetify,
  components: {
    RouteCard,
  },
  setup() {
    return {
      args,
    };
  },
  template: '<v-app><route-card /></v-app>',
});

export default {
  component: RouteCard,
  title: 'MyComps/RouteCard',
  argTypes: {},
};
