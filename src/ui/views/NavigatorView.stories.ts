import NavigatorView from './NavigatorView.vue';

export const template = (args: any) => ({
  components: {
    NavigatorView,
  },
  setup() {
    return {
      args,
    };
  },
  template: '<navigator-view />',
});

export default {
  component: NavigatorView,
  title: 'View/Navigator',
  argTypes: {},
};
