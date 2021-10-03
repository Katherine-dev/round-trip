import 'leaflet/dist/leaflet.css';

import MapComponent from './MapComponent.vue';

export default {
  title: 'Map/Component',
  component: MapComponent,
};

const Template = (args: unknown, { argTypes }: any) => ({
  props: Object.keys(argTypes),
  components: { MapComponent },
  template: '<map-component v-bind="$props" />',
});

export const Main = Template.bind({});
// @ts-expect-error exist
Main.args = {
};
