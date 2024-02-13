import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { LoginComponent } from "./components/login/login.component";
import { SignUpComponent } from "./components/sign-up/sign-up.component";
import { Pag1Component } from "./components/pag1/pag1.component";
import { Pag2Component } from "./components/pag2/pag2.component";
import { Pag3Component } from "./components/pag3/pag3.component";
import { authGuard } from "./auth/auth.guard";

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    canActivate: [authGuard],
    children: [
      { path: "", redirectTo:'pagina1', pathMatch: "full" },
      { path: "pagina1", component: Pag1Component },
      { path: "pagina2", component: Pag2Component },
      { path: "pagina3", component: Pag3Component },
    ],
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "signup",
    component: SignUpComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
