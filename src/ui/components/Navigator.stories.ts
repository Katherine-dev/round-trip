import Navigator from './Navigator.vue';
import vuetify from '../../../.storybook/vuetify';

export const template = (args: any) => ({
  vuetify,
  components: {
    Navigator,
  },
  setup() {
    return {
      args,
    };
  },
  template: '<v-app><navigator /></v-app>',
});

export default {
  component: Navigator,
  title: 'View/Navigator',
  argTypes: {},
};
