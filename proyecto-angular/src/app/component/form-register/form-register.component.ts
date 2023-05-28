import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent implements OnInit {
  registrationForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      contrasena: ['', Validators.required],
      repetirContrasena: ['', Validators.required],
      url: ['', Validators.required],
      terms: [false, Validators.requiredTrue]
    });
  }

markAllFieldsAsTouched() {
  Object.values(this.registrationForm.controls).forEach(control => {
    control.markAsTouched();
  });
}

  onSubmit() {
    this.submitted = true;

    if (this.registrationForm.invalid) {
      this.markAllFieldsAsTouched();
      return;
    }
    // Realizar acciones adicionales para enviar los datos o realizar otras tareas
  }
}







