import { Component, Vue } from 'vue-property-decorator';
import RouteCard from './RouteCard.vue';

interface Vehicle {
  type: string
}

@Component
export default class RouteCard extends Vue {
  @Prop({ type: string, required: true })
  protected routeTitle: string;

  @Prop({ type: Array, required: true })
  protected vehicles: Array<Vehicle>;

  // TODO change return type
  @Emit('route:get')
  protected chooseRoute(): any {
    return null;
  }
}
