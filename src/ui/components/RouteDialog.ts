import {
  Component, Emit, Prop, Vue, Watch,
} from 'vue-property-decorator';

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
  protected onOriginSearchInput(value: string) {
    try {
      this.origin.loading = true;

      this.origin.items.push(Math.random().toPrecision(2));
    } finally {
      this.origin.loading = false;
    }
    // throw new Error('Not implemented');
  }

  @Watch('dest.search')
  protected onDestSearchInput(value: string) {
    try {
      this.dest.loading = true;

      this.dest.items.push(Math.random().toPrecision(2));
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
}
