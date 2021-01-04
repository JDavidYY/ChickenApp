import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ClientModel } from 'src/app/client/models/client-info.model';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  
  client: ClientModel = new ClientModel();
  nacimiento: string;

 

  passwordFormControl = new FormControl('', [
  Validators.required,
  ]);


 
  emailFormControl = new FormControl('', [
  Validators.required,
  Validators.email
  ]);


  constructor() { }

  ngOnInit(): void {
  }

  changePassword(){
    
  }
}
