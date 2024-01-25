import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-new-component",
  templateUrl: "./new-component.component.html",
  styleUrl: "./new-component.component.css",
})
export class NewComponentComponent {
  @Input() data: any;

  article = {
    color: "red",
    year: 2024,
    category: "bags",
  };

  @Output() sendDataEvent = new EventEmitter<object>();

  sendDataToParent() {
    this.sendDataEvent.emit(this.article);
  }
}
