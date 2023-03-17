import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  rutas: Rutas[] = [
    {
      ruta: '/app/portafolio/',
      nombre: 'Home'
    },
    // {
    //   ruta: '/app/portafolio/contacto',
    //   nombre: 'Contacto'
    // }
  ];

  constructor() { }

  ngOnInit(): void {
    this.closeMenu();
  }

  public closeMenu() {
    const btnClose: HTMLElement = document.getElementById('closeMenu')!;
    btnClose.click();
  }

}

interface Rutas  {
  ruta: string,
  nombre: string
}
