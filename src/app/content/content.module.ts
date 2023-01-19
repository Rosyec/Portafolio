import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { ContenidoComponent } from './pages/contenido/contenido.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { SharedModule } from "../shared/shared.module";
import { RouterModule } from '@angular/router';


@NgModule({
    declarations: [
        ContenidoComponent,
        ContactoComponent
    ],
    imports: [
        CommonModule,
        ContentRoutingModule,
        SharedModule,
        RouterModule
    ]
})
export class ContentModule { }
