import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../model/user.model';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sgin-up',
  templateUrl: './sgin-up.component.html',
  styleUrls: ['./sgin-up.component.css']
})
export class SginUpComponent implements OnInit {

  constructor(private userService: UsersService,private router: Router,
    private authService : AuthService) {}

  user = new User();

  ngOnInit(): void {}

  register() {
    this.userService.registerUser(this.user).subscribe((data) => {
      
      console.log('User registered');
      alert('User registered');
    });
  }

}
