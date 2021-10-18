import {
  Component, Vue, Prop, Emit,
} from 'vue-property-decorator';

interface IVehicle {
  type: string
}

export interface IRouteCardModel {
  time: string,
  cost: number,
  vehicles: Array<IVehicle>
}

@Component
export default class RouteCard extends Vue {
  @Prop({ type: String, required: true })
  protected time!: string;

  @Prop({ type: Number, required: true })
  protected cost!: number;

  @Prop({ type: Array, required: true })
  protected vehicles!: Array<IVehicle>;

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
