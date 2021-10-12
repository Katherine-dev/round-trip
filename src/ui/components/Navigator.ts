import { Component, Vue } from 'vue-property-decorator';
import RouteDialog from './RouteDialog.vue';

@Component({
  components: {
    RouteDialog,
  },
})
export default class Navigator extends Vue {
  protected searchQuery = '';

  protected loading = false;

  protected routeDialogState = false;

  protected oname = '';

  protected dname = '';

  // TODO replace type
  protected items: Array<any> = [];

  get hasItems(): boolean {
    return this.items.length > 0;
  }

  get isLoading(): boolean {
    return this.loading;
  }

  get getOname(): string {
    return this.oname;
  }

  get getDname(): string {
    return this.dname;
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

  protected onRouteSubmit(payload: { origin: string, dest: string }): void {
    this.routeDialogState = false;
    this.oname = payload.origin;
    this.dname = payload.dest;
  }
}
