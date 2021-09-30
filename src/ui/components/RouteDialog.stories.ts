import 'leaflet/dist/leaflet.css';

import RouteDialog from './RouteDialog.vue';
import vuetify from '../../../.storybook/vuetify';

export default {
  title: 'Map/Route/Dialog',
  component: RouteDialog,
};

const Template = (args: unknown, { argTypes }: any) => ({
  vuetify,
  props: Object.keys(argTypes),
  components: { RouteDialog },
  template: '<v-app><route-dialog v-model="value" v-bind="$props" /></v-app>',
});

export const Main = Template.bind({});
// @ts-expect-error exist
Main.args = {
  value: false,
};
