import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'last';
  
  constructor (public authService: AuthService,
    private router :Router) {}

  ngOnInit () {
    this.authService.loadToken();
if (this.authService.getToken()==null ||
 this.authService.isTokenExpired())
this.router.navigate(['/login']);

    }

  onLogout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
