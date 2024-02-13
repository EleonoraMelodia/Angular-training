import { Component, OnInit } from "@angular/core";
import { FirebaseService } from "../../services/firebase.service";

export interface PeriodicElement {
  name: string;
  quantity: number;
  where: string;
  when: string;
}

@Component({
  selector: "app-pag1",
  templateUrl: "./pag1.component.html",
  styleUrl: "./pag1.component.css",
})
export class Pag1Component implements OnInit {
  displayedColumns: string[] = ["name", "quantity", "where", "when"];
  dataSource : any;


  constructor(private firebase: FirebaseService) {}
  ngOnInit(): void {
    this.firebase
      .getElements(`${this.firebase.url}elements.json`)
      .subscribe((data: Record<string, any>) => {
       this.dataSource  = Object.keys(data).map((key) => {
          return data[key];
          
        });
      });
  }

 
  
}
