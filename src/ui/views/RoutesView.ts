import { Component, Vue } from 'vue-property-decorator';
import MapComponent from '../components/MapComponent.vue';
import Navigator from '../components/Navigator.vue';
import RouteCard from '../components/RouteCard.vue';

@Component({
  components: {
    MapComponent,
    Navigator,
    RouteCard,
  },
})
export default class RoutesView extends Vue {}
