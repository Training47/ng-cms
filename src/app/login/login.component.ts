import { Component, OnInit } from '@angular/core';

import { UserService } from '../services/user.service';
// 1. Import the user model
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // 2. Instantiate a new user
  user:User = new User();

  // 4. Call the login method in the constructor
  constructor(private userService: UserService) {
    this.login();
  }

  ngOnInit() {}

  // 3. Add a login method
  login(): void{

    this.user.username = 'testuser5';
    this.user.password = 'test123';

    this.userService.login(this.user).subscribe(
      (response)=>{
        console.log(response);
      }
    );
  }

}
