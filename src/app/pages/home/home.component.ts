import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceRegisterService } from 'src/app/services/service-register.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  correcto : boolean = false;
  public formRegister !: FormGroup;
  constructor(private formBuilder:FormBuilder, private dataServices:ServiceRegisterService) { }

  ngOnInit(): void {
    this.formRegister = this.formBuilder.group({
      name: ['', [
        Validators.required,
        Validators.minLength(4)
      ]],
      apellido: ['', [
        Validators.required,
        Validators.minLength(8)
      ]],
      carrera: ['', [
        Validators.required
      ]],
    })
  }
  send(): any{
    this.dataServices.UsuariosRegistrados.push(this.formRegister.value); //Almacenamos en el Servicio los Usuarios Registrados
    //Después de 3 Segundos, Reinicia el Form
    setTimeout(() => {
      this.correcto = false;
      this.formRegister.get('carrera')?.setValue("");
      this.formRegister.reset();
      
    }, 3000);

    this.correcto = true;
  }

}
