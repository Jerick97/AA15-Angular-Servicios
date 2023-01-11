import { Component, OnInit } from '@angular/core';
import { ServiceRegisterService } from 'src/app/services/service-register.service';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {
  usuariosHijo !: any[];
  constructor(private dataServices: ServiceRegisterService) { }

  ngOnInit(): void {
    this.usuariosHijo = this.dataServices.UsuariosRegistrados;
  }

  eliminarUser(id:number){
    const items = this.usuariosHijo.filter((item,index) => index !== id); //Nos retorna un array con todos los elementos que no cumplen con una determinada condición
    this.usuariosHijo = items; //Actualizamos el Array
    this.dataServices.updateUser(items); //Actualizamos el Array del Services utilizando el método updateUser();
    //Para ver si se actualiza los array - Borrar en Producción
    console.log("Servicio")
    console.log(this.dataServices.UsuariosRegistrados);
    console.log("Hijo Array")
    console.log(this.usuariosHijo);
  }
}
