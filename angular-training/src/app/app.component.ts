import { Component } from "@angular/core";
import { log } from "console";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "angular-training";
  color = '';

  foods = [
    {
      name: "pizza",
      src:
        "https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      taste: "salty",
      color: "yellow",
    },
    {
      name: "sushi",
      src:
        "https://images.pexels.com/photos/271715/pexels-photo-271715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      taste: "salty",
      color: "hot-pink",
    },
    {
      name: "pancakes",
      src:
        "https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      taste: "sweet",
      color: "teal",
    },
    {
      name: "CheeseBurgher",
      src:
        "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      taste: "salty",
      color: "green",
    },

    {
      name: "Ramen",
      src:
        "https://images.pexels.com/photos/1907229/pexels-photo-1907229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      taste: "salty",
      color: "purple",
    },
    {
      name: "Chocolate",
      src:
        "https://images.pexels.com/photos/7551446/pexels-photo-7551446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      taste: "sweet",
      color: "orange",
    },
  ];

  onGetData(value: object) {
    console.log(value);
  }

  handleColorChange(color: string) {
  this.color = color
}

}
