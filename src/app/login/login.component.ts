// login.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private authService: AuthService) {}

  login(): void {
    this.authService.login(this.username, this.password).subscribe(response => {
      if (response.success) {
        console.log('Connexion réussie');
        // Redirigez l'utilisateur vers une autre page après la connexion réussie si nécessaire
      } else {
        console.log('Échec de la connexion');
      }
    });
  }
}
