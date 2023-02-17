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
        color: '#ffff',
        github: 'https://github.com/Rosyec/ProyectoGestionUsuarios',
        nombre: 'Control de Usuarios (JSP)',
        tecnologias: 'JAVA 8 - HTML/CSS - JSP',
        youtube: 'https://www.youtube.com/watch?v=yUK78iESKS0&ab_channel=RosyecParrado'
      },
      {
        color: '#ffff',
        nombre: 'Blog',
        github: 'https://github.com/Rosyec/ProyectoBlog',
        tecnologias: 'JAVA 8 - HTML/CSS - JSF',
        youtube: 'https://www.youtube.com/watch?v=8E-f4O5cPQI&ab_channel=RosyecParrado'
      },
      {
        color: '#ffff',
        nombre: 'Películas',
        github: 'https://github.com/Rosyec/Springboot-AppPeliculas',
        tecnologias: 'SPINGBOOT - JAVA 11 - JWT - SPRINGDATA - HTML/CSS - JAVASCRIPT - MYSQL',
        youtube: 'https://www.youtube.com/watch?v=zf_mAxHx4Eo&ab_channel=RosyecParrado'
      },
      {
        color: '#ffff',
        nombre: 'Control de Usuarios (Springboot)',
        github: 'https://github.com/Rosyec/SpringBoot-ControlUsuarios',
        tecnologias: 'SPRINGBOOT - JAVA 11 - SPRINGDATA - HTML/CSS - JAVASCRIPT - MYSQL',
        deploy: 'https://control-usuarios.herokuapp.com/app/listar'
      },
      {
        color: '#ffff',
        nombre: 'Gifs',
        github: 'https://github.com/Rosyec/Angular-AppGifs',
        tecnologias: 'ANGULAR - TYPESCRIPT - API GIPHY',
        deploy: 'https://super-cajeta-e135e6.netlify.app/'
      },
      {
        color: '#ffff',
        nombre: 'Países',
        github: 'https://github.com/Rosyec/Angular-AppPaises',
        tecnologias: 'ANGULAR - TYPESCRIPT - API RESTCOUNTRIES',
        deploy: 'https://stalwart-faloodeh-26b0d9.netlify.app/'
      }
      ,
      {
        color: '#ffff',
        nombre: 'Mapas',
        github: 'https://github.com/Rosyec/Angular-AppMapas',
        tecnologias: 'ANGULAR - TYPESCRIPT - MAPBOX',
        deploy: 'https://glistening-piroshki-d265d2.netlify.app/'
      },
      {
        color: '#ffff',
        nombre: 'Héroes (Angular)',
        github: 'https://github.com/Rosyec/Angular-AppHeroes',
        tecnologias: 'ANGULAR - TYPESCRIPT - SPRINGBOOT - JAVA - MONGO DB',
        youtube: 'https://www.youtube.com/watch?v=7U4fQ5GOp_k&ab_channel=RosyecParrado'
      },
      {
        color: '#ffff',
        nombre: 'Auth',
        github: 'https://github.com/Rosyec/Angular-AppAuth',
        tecnologias: 'MONGO - EXPRESS - ANGULAR - NODE',
        deploy: 'https://angular-node.herokuapp.com/auth/login'
      },
      {
        color: '#ffff',
        nombre: 'Imágenes',
        github: 'https://github.com/Rosyec/React-AppImagenes',
        tecnologias: 'REACT - TYPESCRIPT - REDUX - JEST - API UNSPLASH',
        deploy: 'https://storied-vacherin-3d8d3b.netlify.app/'
      },
      {
        color: '#ffff',
        nombre: 'Tareas',
        github: 'https://github.com/Rosyec/React-AppTareas',
        tecnologias: 'REACT - TYPESCRIPT',
        deploy: 'https://react-app-tareas.vercel.app/'
      },
      {
        color: '#ffff',
        nombre: 'Preguntas',
        github: 'https://github.com/Rosyec/Vue-AppPreguntas',
        tecnologias: 'VUE - COMPOSITION API - TYPESCRIPT - VITEST - API YESNO',
        deploy: 'https://vue-app-preguntas.vercel.app/'
      },
      {
        color: '#ffff',
        nombre: 'Héroes (React)',
        github: 'https://github.com/Rosyec/React-AppHeroes',
        tecnologias: 'REACT - TYPESCRIPT',
        deploy: 'https://react-app-heroes.vercel.app/login'
      }
      
    ];

    this.habilidades = [
      {
        nombre: 'Backend',
        imagen: 'bi bi-cpu-fill',
        habilidades: ['SPRING BOOT', 'NODE-JS', 'MONGO DB', 'MYSQL']
      },
      {
        nombre: 'Fronted',
        imagen: 'bi bi-window-stack',
        habilidades: ['HTML/CSS', 'ANGULAR', 'REACT', 'VUE']
      },
      {
        nombre: 'Lenguajes',
        imagen: 'bi bi-tools',
        habilidades: ['JAVA', 'TYPESCRIPT', 'JAVASCRIPT']
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

