import { Component,ViewChild } from '@angular/core';
import { FormRegisterComponent } from 'src/app/component/form-register/form-register.component';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
 @ViewChild(FormRegisterComponent)registro: FormRegisterComponent

 onSubmit(){
  this.registro.onSubmit();
}
}


