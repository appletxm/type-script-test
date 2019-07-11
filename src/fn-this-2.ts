interface UIElement {
  addClickListener(onclick: (this: void, e: Event) => void): void;
}

class Handler {
  info: number;
  onClickBad(this: Handler, event: Event) {
    this.info = event.timeStamp
  }
}

let uiElement: UIElement
let handler = new Handler()
