import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Navigator extends Vue {
  protected searchQuery = '';

  protected loading = false;

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
}
