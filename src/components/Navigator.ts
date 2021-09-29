import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Navigator extends Vue {
  private text = '';

  private isLoading = false;

  private searchResult = false;

  private isFilled = false;

  takeInput(text: string): void {
    if (text !== '') {
      this.isFilled = true;
    } else {
      this.isFilled = false;
    }
  }
}
