import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceRegisterService {
  UsuariosRegistrados : any[] = [];
  constructor() { }
  updateUser(newData: any) {
     this.UsuariosRegistrados= newData;
  }
}
