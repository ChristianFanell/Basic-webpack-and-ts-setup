export class Header {
  /**
   *
   */
  private title: string;

  constructor() {
    this.title = "Flanell";
  }

  injectHeaderToDOM() {
    return `<div>Welcome to ${this.title}</div>`;
  }
}
