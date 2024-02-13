import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class FirebaseService {
  url = "https://dashboard-exercise-ad87c-default-rtdb.europe-west1.firebasedatabase.app/";

  constructor(private http: HttpClient) {}

  addElement(url: string, body: any): Observable<any> {
    return this.http.post<any>(url, body);
  }

  getElements(url: string) {
    return this.http.get(url)
    
  }
}
