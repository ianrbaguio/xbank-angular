import { NgModule } from '@angular/core';
import { LibrariesComponent } from './libraries.component';
import { HeaderComponent } from '../header/header.component';



@NgModule({
  declarations: [
    HeaderComponent,
    LibrariesComponent
  ],
  imports: [
  ],
  exports: [
    HeaderComponent,
    LibrariesComponent
  ]
})
export class LibrariesModule { }
