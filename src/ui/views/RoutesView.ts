import { Component, Vue } from 'vue-property-decorator';
import Navigator from '@/components/Navigator.vue';

@Component({
  components: {
    Navigator,
  },
})
export default class RoutesView extends Vue {}
