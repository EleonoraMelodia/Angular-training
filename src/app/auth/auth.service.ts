import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  url_signup = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";
  url_signin =
    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=";
  API = "AIzaSyAi6fqZx07D6yW2CA8EqOamlEslQPbLQWs";
  body: any;
  isLoggedIn = true;

  constructor(private http: HttpClient) {}

  signUp() {
    return this.http.post(this.url_signup, this.body);
  }
}
