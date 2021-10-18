import { Component, Vue } from 'vue-property-decorator';
import RouteDialog from './RouteDialog.vue';
import { IRouteCardModel } from './RouteCard';

@Component({
  components: {
    RouteDialog,
  },
})
export default class Navigator extends Vue {
  protected selectedRoute = '';

  protected searchQuery = '';

  protected loading = false;

  protected routeDialogState = false;

  // TODO replace type
  // FIXME delete test init
  protected items: Array<IRouteCardModel> = [
    {
      time: '12h 30m',
      cost: 123,
      vehicles: [],
    },
    {
      time: '2h 31m',
      cost: 231,
      vehicles: [],
    },
    {
      time: '3h 21m',
      cost: 321,
      vehicles: [],
    },
  ];

  get hasItems(): boolean {
    return this.items.length > 0;
  }

  get isLoading(): boolean {
    return this.loading;
  }

  protected onSearch(value: string): void {
    try {
      this.loading = true;
      // TODO API request and fill items
    } catch (error) {
      console.error(error);
    } finally {
      this.loading = false;
    }
  }

  protected showDialog(): void {
    this.routeDialogState = true;
  }

  protected closeDialog(): void {
    this.routeDialogState = false;
  }

  protected onRouteSubmit(): void {
    this.routeDialogState = false;
  }
}
