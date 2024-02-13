import { CanActivateFn } from '@angular/router';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = new AuthService();

  const router = new Router();

if (authService.isLoggedIn) {
    return true;
  } else {
    router.navigate(['login']); // Usa il router iniettato anziché creare una nuova istanza
    return false; // Assicurati di restituire false se la navigazione viene interrotta
  }
};