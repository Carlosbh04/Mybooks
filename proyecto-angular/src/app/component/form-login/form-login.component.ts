import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import Swal from 'sweetalert2';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/service/user-service.service';
import { Router } from '@angular/router';
import { Response } from 'src/app/models/response';
import { catchError, map } from 'rxjs';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {

  public form_login: FormGroup;
  public user:User;
  public errorMsgFromServer: string;

  constructor(public userService: UserService, public router: Router){}

  ngOnInit(){
    let minLength:number = 8;
    this.form_login = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(minLength)])
    })
  }

  successMsg(){
    Swal.fire({
      icon: 'success',
      title: '¡Bienvenido/a!',
      text: 'Has iniciado sesión correctamente. Disfruta de todas las funciones y características de nuestra aplicación. ¡Gracias por ser parte de nuestra comunidad!'
    }).then(()=>{
      this.router.navigateByUrl('/books');
    })
  }

  errorMsg(){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Lo sentimos, no fue posible iniciar sesión con las credenciales proporcionadas. Por favor, verifica tus datos e intenta nuevamente. Si el problema persiste, no dudes en contactarnos para recibir asistencia. ¡Gracias!'
    })

    console.log("Los datos no coinciden con ningún usuario registrado");
  }

  onSubmit() {
    let email = this.form_login.get('email').value;
    let password = this.form_login.get('password').value;
    this.user = new User(null, null, null, email, null, password);
  
    this.userService.loginUser(this.user).pipe(
      map((data: Response) => {
        if (data.result && data.result.length > 0) {
          this.userService.logueado = true;
          this.userService.user = data.result[0];
          this.successMsg();
        } else {
          throw new Error('Los datos no coinciden con ningún usuario registrado');
        }
      }),
      catchError((error) => {
        this.errorMsgFromServer = 'Hubo un problema al comunicarse con el servidor.';
        this.errorMsg();
        throw error;
      })
    ).subscribe();
  }
}
