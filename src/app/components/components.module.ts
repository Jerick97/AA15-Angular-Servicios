import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HijoComponent } from './hijo/hijo.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    HijoComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HijoComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
