import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-form-shopping-list',
  templateUrl: './form-shopping-list.component.html',
  styleUrl: './form-shopping-list.component.css'
})
export class FormShoppingListComponent {
  shoppingItem: any = {};


  constructor(private firebase : FirebaseService) {
    
  }

  onSubmit(form: NgForm) {
    const { name, quantity, where, when } = form.value;
this.firebase
      .addElement(`${this.firebase.url}elements.json`, {
        name: name,
        quantity: quantity,
        where: where,
        when: when,
      })
      .subscribe((arg: any) => console.log(arg));
  }
    
  }


