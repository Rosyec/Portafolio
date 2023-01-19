import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ContenidoComponent } from './pages/contenido/contenido.component';

const routes: Routes = [
  {
    path: 'portafolio', children: [
      {
        path: '', component: ContenidoComponent
      },
      {
        path: 'contacto', component: ContactoComponent
      },
      {
        path: '**', redirectTo: ''
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
