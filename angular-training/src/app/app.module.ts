import { NgModule } from "@angular/core";
import {
  BrowserModule,
  provideClientHydration,
} from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NewComponentComponent } from "./new-component/new-component.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [AppComponent, NewComponentComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MatCardModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
