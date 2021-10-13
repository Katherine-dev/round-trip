import {
  Component, Vue, Prop, Emit,
} from 'vue-property-decorator';
import RouteCard from './RouteCard.vue';

interface Vehicle {
  type: string
}

@Component
export default class RouteCard extends Vue {
  @Prop({ type: String, required: true })
  protected routeTitle: string;

  @Prop({ type: String, required: true })
  protected routeCost: string;

  @Prop({ type: Array, required: true })
  protected vehicles: Array<Vehicle>;

  protected expanded = false;

  get isExpanded(): boolean {
    return this.expanded;
  }

  protected showRoute():void {
    this.expanded = true;
  }

  protected hideRoute():void {
    this.expanded = false;
  }

  // TODO change return type
  @Emit('route:get')
  protected chooseRoute(): any {
    return null;
  }
}
