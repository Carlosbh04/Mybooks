import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {
  loginForm: FormGroup;
  email: string;
  password: string;
  submitted = false;
  passwordFieldType = 'password';

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(12),
          this.validatePassword
        ]
      ]
    });
  }

  validatePassword(control) {
    const hasUppercase = /[A-Z]/.test(control.value);
    const hasLowercase = /[a-z]/.test(control.value);
    const valid = hasUppercase && hasLowercase;
    if (!valid) {
      return { invalidPassword: true };
    }
    return null;
  }

  togglePasswordVisibility() {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }

  onPasswordInput(event: any) {
    const value = event.target.value;
    if (value.length > 12) {
      event.target.value = value.slice(0, 12); // Recortar el valor a 12 caracteres
      this.loginForm.get('password').setValue(value.slice(0, 12)); // Actualizar el valor en el formulario
    }
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched(); // Marcar todos los campos como "touched" para mostrar los mensajes de error
      return;
    }

    // Lógica adicional para enviar el formulario o realizar otras acciones
    // ...

    // Reiniciar los campos y el formulario después de enviarlo
    this.loginForm.reset();
    this.submitted = false;
  }
}
