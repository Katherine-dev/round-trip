import { Component, Vue } from 'vue-property-decorator';
import NavigatorView from './NavigatorView.vue';

@Component({
  components: {
    NavigatorView,
  },
})
export default class RoutesView extends Vue {}
