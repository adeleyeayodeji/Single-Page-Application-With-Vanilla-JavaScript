import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Page not found");
  }

  async getHtml() {
    return `
        <h1>404 Error</h1>
        `;
  }
}
