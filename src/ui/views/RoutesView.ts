import { Component, Vue } from 'vue-property-decorator';
import MapComponent from '../components/MapComponent.vue';
import Navigator from '../components/Navigator.vue';

@Component({
  components: {
    MapComponent,
    Navigator,
  },
})
export default class RoutesView extends Vue {}
