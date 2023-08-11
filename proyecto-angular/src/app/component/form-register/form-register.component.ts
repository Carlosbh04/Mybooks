import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/service/user-service.service';
import { Router } from '@angular/router';
import { Response } from 'src/app/models/response';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent {

  public form_register: FormGroup;
  public user: User;

  constructor(public userService: UserService, public router: Router) {}

  ngOnInit() {
    let minLength: number = 8;
    this.form_register = new FormGroup({
      'name': new FormControl(null, [Validators.required, Validators.minLength(3)]),
      'lastname': new FormControl(null, [Validators.required, Validators.minLength(3)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'photo': new FormControl(null),  // Adding the photo FormControl
      'password': new FormControl(null, [Validators.required, Validators.minLength(minLength)]),
      'repeatPassword': new FormControl(null, [Validators.required, Validators.minLength(minLength)])
    });
  }

  successMsg() {
    Swal.fire({
      icon: 'success',
      title: '¡Felicidades!',
      text: 'Tu registro ha sido exitoso. Ahora eres parte de nuestra comunidad. Inicia sesión con tu nueva cuenta y comienza a explorar todas las funcionalidades que ofrecemos. ¡Gracias por unirte a nosotros!'
    }).then(() => {
      this.router.navigateByUrl('/Login');
    });
  }

  errorMsg() {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Las contraseñas no coinciden. Vuelve a intentarlo.'
    });
  }

  onSubmit() {
    let name = this.form_register.get('name').value;
    let lastname = this.form_register.get('lastname').value;
    let email = this.form_register.get('email').value;
    let photo = this.form_register.get('photo').value;  // Get the value of the photo field
    let password = this.form_register.get('password').value;
    let repeatPassword = this.form_register.get('repeatPassword').value;

    this.user = new User(null, name, lastname, email, photo, password);

    if (password === repeatPassword) {
      this.userService.registerUser(this.user).subscribe((data: Response) => {
        console.log(data);
        this.successMsg();
      });
    } else {
      this.errorMsg();
      console.log("Las contraseñas no coinciden");
    }
  }
}
