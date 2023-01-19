import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'app', loadChildren: () => import('./content/content.module').then( m => m.ContentModule )
  },
  {
    path: '**', redirectTo: 'app/portafolio/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
