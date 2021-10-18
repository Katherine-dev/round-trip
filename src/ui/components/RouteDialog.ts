import {
  Component, Emit, Prop, Vue, Watch,
} from 'vue-property-decorator';
import ApiProvider from '@/api/ApiProvider';

interface ISearchBox {
  value: string;
  items: Array<any>;
  loading: boolean;
  search: string;
}

@Component
export default class RouteDialog extends Vue {
  @Prop({ type: Boolean, required: true })
  protected value!: boolean;

  protected origin: ISearchBox = {
    value: '',
    items: [],
    loading: false,
    search: '',
  }

  protected dest: ISearchBox = {
    value: '',
    items: [],
    loading: false,
    search: '',
  }

  @Watch('origin.search')
  protected async onOriginSearchInput(value: string) {
    try {
      this.origin.loading = true;

      if (value) {
        const foundResults = await (await ApiProvider.autocomplete(value)).data;
        this.origin.items = foundResults.results.map((it) => it.shortName);
      } else {
        this.origin.items = [];
      }
    } finally {
      this.origin.loading = false;
    }
    // throw new Error('Not implemented');
  }

  @Watch('dest.search')
  protected async onDestSearchInput(value: string) {
    try {
      this.dest.loading = true;

      if (value) {
        const foundResults = await (await ApiProvider.autocomplete(value)).data;
        this.dest.items = foundResults.results.map((it) => it.shortName);
      } else {
        this.dest.items = [];
      }
    } finally {
      this.dest.loading = false;
    }
    // throw new Error('Not implemented');
  }

  protected get isSubmitEnabled(): boolean {
    return !!this.origin.value && !!this.dest.value;
  }

  @Emit('input')
  protected closeDialog(): boolean {
    return false;
  }

  @Emit('route:submit')
  protected submitRoute(): { origin: string, dest: string } {
    return {
      origin: this.origin.value,
      dest: this.dest.value,
    };
  }

  @Emit('route:cancel')
  protected missClick(): boolean {
    return false;
  }
}
