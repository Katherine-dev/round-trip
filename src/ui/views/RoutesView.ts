import { Component, Vue } from 'vue-property-decorator';
import MapComponent from '../components/MapComponent.vue';

@Component({
  components: {
    MapComponent,
  },
})
export default class RoutesView extends Vue {}
