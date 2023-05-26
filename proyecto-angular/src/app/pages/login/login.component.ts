import { Component, ViewChild } from '@angular/core';
import { FormLoginComponent } from 'src/app/component/form-login/form-login.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @ViewChild(FormLoginComponent) formLoginComponent: FormLoginComponent;

  onSubmit(){
    this.formLoginComponent.onSubmit();
  }
}

