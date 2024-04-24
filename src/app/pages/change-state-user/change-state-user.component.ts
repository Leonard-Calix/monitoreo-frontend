import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'app/services/users.service';

@Component({
  selector: 'app-change-state-user',
  templateUrl: './change-state-user.component.html',
  styleUrls: ['./change-state-user.component.css']
})
export class ChangeStateUserComponent {


  formGruopUser = new FormGroup({

    firstName: new FormControl("Gerson", Validators.required),
    lastName: new FormControl("Adonay Moreira", Validators.required),
    userName: new FormControl("gmoreira", Validators.required),
    email: new FormControl("gmoreira@gmail.com", Validators.required),
    password: new FormControl("asd456", Validators.required),
    confirmation: new FormControl("asd456", [Validators.required]),
  });

  constructor(private userService: UsersService, private router: Router) {
  }

  create() {

  }


}
