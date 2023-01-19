import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  redes: RedesContacto[] = [
    {
      nombre: 'Correo',
      icono: 'bi bi-envelope-fill',
      enlace: 'chechomens@gmail.com'
    },
    {
      nombre: 'Linkedin',
      icono: 'bi bi-linkedin',
      enlace: 'linkedin.com/in/rosyec05'
    },
    {
      nombre: 'Youtube',
      icono: 'bi bi-youtube',
      enlace: '@rosyecparrado6899'
    },
    {
      nombre: 'Teléfono',
      icono: 'bi bi-telephone-fill',
      enlace: '3114486298'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  modal( enlace: string, red: string, icono: string ): void {
    console.log( enlace.includes('http') )
    Swal.fire({
      title: `<strong>${ red }</strong>`,
      icon: 'success',
      html:
      `<pre><a class"mt-3"> ${ enlace } </a></pre>
      <hr>`,
      showCloseButton: true,
      confirmButtonText:
        'Lo tengo',
  
    })
  }

}

interface RedesContacto {
  nombre: string,
  icono: string,
  enlace: string
}
