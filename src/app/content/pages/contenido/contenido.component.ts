import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit {
  proyectos: Proyecto[] = [];
  habilidades: Habilidades[] = [];
  mostrar: boolean[] = [false, false, false];

  constructor() { }

  ngOnInit(): void {
    this.proyectos = [
      {
        color: '#E97777',
        github: 'https://github.com/Rosyec/ProyectoGestionUsuarios',
        nombre: 'App - Control Usuarios',
        tecnologias: 'JAVA - HTML/CSS - JSF',
        youtube: 'https://www.youtube.com/watch?v=yUK78iESKS0&ab_channel=RosyecParrado'
      },
      {
        color: '#3D1766',
        nombre: 'App - Blog',
        github: 'https://github.com/Rosyec/ProyectoBlog',
        tecnologias: 'JAVA - HTML/CSS - JSP',
        youtube: 'https://www.youtube.com/watch?v=8E-f4O5cPQI&ab_channel=RosyecParrado'
      },
      {
        color: '#39B5E0',
        nombre: 'App - Películas',
        github: 'https://github.com/Rosyec/Springboot-AppPeliculas',
        tecnologias: 'SPINGBOOT - HTML/CSS - JAVASCRIPT - MYSQL',
        youtube: 'https://www.youtube.com/watch?v=zf_mAxHx4Eo&ab_channel=RosyecParrado'
      },
      {
        color: '#7F669D',
        nombre: 'App - Control Usuarios',
        github: 'https://github.com/Rosyec/SpringBoot-ControlUsuarios',
        tecnologias: 'SPRINGBOOT - HTML/CSS - JAVASCRIPT - MYSQL',
        deploy: 'https://control-usuarios.herokuapp.com/app/listar'
      },
      {
        color: '#B1AFFF',
        nombre: 'App - Gifs',
        github: 'https://github.com/Rosyec/Angular-AppGifs',
        tecnologias: 'ANGULAR - TYPESCRIPT - API GIPHY',
        deploy: 'https://super-cajeta-e135e6.netlify.app/'
      },
      {
        color: '#FEC868',
        nombre: 'App - Paises',
        github: 'https://github.com/Rosyec/Angular-AppPaises',
        tecnologias: 'ANGULAR - TYPECRIPT - API RESTCOUNTRIES',
        deploy: 'https://stalwart-faloodeh-26b0d9.netlify.app/'
      }
      ,
      {
        color: '#F675A8',
        nombre: 'App - Mapas',
        github: 'https://github.com/Rosyec/Angular-AppMapas',
        tecnologias: 'ANGULAR - TYPECRIPT - MAPBOX',
        deploy: 'https://glistening-piroshki-d265d2.netlify.app/'
      },
      {
        color: '#C4DFAA',
        nombre: 'App - Héroes',
        github: 'https://github.com/Rosyec/Angular-AppHeroes',
        tecnologias: 'ANGULAR - TYPECRIPT - SPRINGBOOT',
        youtube: 'https://www.youtube.com/watch?v=7U4fQ5GOp_k&ab_channel=RosyecParrado'
      },
      {
        color: '#CA965C',
        nombre: 'App - Auth',
        github: 'https://github.com/Rosyec/Angular-AppAuth',
        tecnologias: 'MONGO - EXPRESS - ANGULAR - NODE',
        deploy: 'https://angular-node.herokuapp.com/auth/login'
      },
      {
        color: '#82AAE3',
        nombre: 'App - Imágenes',
        github: 'https://github.com/Rosyec/React-AppImagenes',
        tecnologias: 'REACT - TYPESCRIPT - API UNSPLASH',
        deploy: 'https://stalwart-creponne-18840c.netlify.app/'
      }
    ];

    this.habilidades = [
      {
        nombre: 'Backend',
        imagen: '../../../../assets/icons/backend.png',
        habilidades: ['SPRING BOOT', 'NODE JS']
      },
      {
        nombre: 'Fronted',
        imagen: '../../../../assets/icons/front-end.png',
        habilidades: ['ANGULAR', 'REACT']
      },
      {
        nombre: 'Lenguajes',
        imagen: '../../../../assets/icons/tools.png',
        habilidades: ['JAVA', 'HTML/CSS', 'JAVASCRIPT']
      }
    ];

  }

  hover(id: string): void {
    switch (id) {
      case 'Backend':
        this.mostrar[0] = !this.mostrar[0]
        this.setVisibility(id, 0, this.mostrar[0])
        break;
      case 'Fronted':
        this.mostrar[1] = !this.mostrar[1]
        this.setVisibility(id, 1, this.mostrar[1])
        break;
      case 'Lenguajes':
        this.mostrar[2] = !this.mostrar[2]
        this.setVisibility(id, 2, this.mostrar[2])
        break;
    }

  }

  setVisibility(id: string, text: number, show?: boolean) {
    const habilidades = document.getElementById(id);
    const items = document.getElementById(text.toString());
    if (show) {
      if (habilidades && items) {
        habilidades.style.visibility = 'visible';
        habilidades.style.height = '500px';
        items.style.visibility = 'visible';
      }
    } else {
      if (habilidades && items) {
        habilidades.style.visibility = 'hidden';
        habilidades.style.height = '220px';
        items.style.visibility = 'hidden';
      }
    }
  }




}





interface Proyecto {
  color: string,
  nombre: string,
  youtube?: string,
  github: string,
  deploy?: string,
  tecnologias: string

}

interface Habilidades {
  imagen: string,
  nombre: string
  habilidades: string[]
}

