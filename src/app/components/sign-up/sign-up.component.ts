import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrl: "./sign-up.component.css",
})
export class SignUpComponent {
  onSubmit(form: NgForm) {
    const { email, password } = form.value;
    console.log(email)
    form.reset();
  }
}
