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

  // TODO replace type
  protected items: Array<any> = [];

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
