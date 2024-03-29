import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit {
  proyectos: Proyecto[] = [];
  habilidades: Habilidades[] = [];
  mostrar: boolean[] = [false, false, false];
  redes: RedesContacto[] = [
    {
      nombre: 'Correo',
      icono: 'bi bi-envelope-fill',
      enlace: 'ceysorparrado@gmail.com'
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
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.proyectos = [
      // {
      //   color: '#ffff',
      //   github: 'https://github.com/Rosyec/ProyectoGestionUsuarios',
      //   nombre: 'Control de Usuarios (JSP)',
      //   tecnologias: 'JAVA 8 - HTML/CSS - JPA - JSP - MYSQL',
      //   youtube: 'https://www.youtube.com/watch?v=yUK78iESKS0&ab_channel=RosyecParrado'
      // },
      // {
      //   color: '#ffff',
      //   nombre: 'Blog',
      //   github: 'https://github.com/Rosyec/ProyectoBlog',
      //   tecnologias: 'JAVA 8 - HTML/CSS - JPA - JSF - MYSQL',
      //   youtube: 'https://www.youtube.com/watch?v=8E-f4O5cPQI&ab_channel=RosyecParrado'
      // },
      // {
      //   color: '#ffff',
      //   nombre: 'Películas',
      //   github: 'https://github.com/Rosyec/Springboot-AppPeliculas',
      //   tecnologias: 'SPINGBOOT - JAVA 11 - JWT - SPRINGDATA - HTML/CSS - MYSQL',
      //   youtube: 'https://www.youtube.com/watch?v=zf_mAxHx4Eo&ab_channel=RosyecParrado'
      // },
      {
        color: '#ffff',
        nombre: 'Gestión de Usuarios',
        github: 'https://github.com/Rosyec/SpringBoot-ControlUsuarios',
        tecnologias: 'SPRINGBOOT - JAVA 11 - SPRINGDATA - HTML/CSS - JAVASCRIPT - MYSQL',
        deploy: 'https://control-usuarios.herokuapp.com/app/listar'
      },
      // {
      //   color: '#ffff',
      //   nombre: 'Gifs',
      //   github: 'https://github.com/Rosyec/Angular-AppGifs',
      //   tecnologias: 'ANGULAR - TYPESCRIPT - API GIPHY',
      //   deploy: 'https://super-cajeta-e135e6.netlify.app/'
      // },
      // {
      //   color: '#ffff',
      //   nombre: 'Países',
      //   github: 'https://github.com/Rosyec/Angular-AppPaises',
      //   tecnologias: 'ANGULAR - TYPESCRIPT - API RESTCOUNTRIES',
      //   deploy: 'https://stalwart-faloodeh-26b0d9.netlify.app/'
      // },
      {
        color: '#ffff',
        nombre: 'Mapa',
        github: 'https://github.com/Rosyec/Angular-AppMapas',
        tecnologias: 'ANGULAR - TYPESCRIPT - MAPBOX',
        deploy: 'https://glistening-piroshki-d265d2.netlify.app/'
      },
      // {
      //   color: '#ffff',
      //   nombre: 'Héroes (Angular)',
      //   github: 'https://github.com/Rosyec/Angular-AppHeroes',
      //   tecnologias: 'ANGULAR - TYPESCRIPT - SPRINGBOOT - JAVA 11 - MONGO DB',
      //   youtube: 'https://www.youtube.com/watch?v=7U4fQ5GOp_k&ab_channel=RosyecParrado'
      // },
      // {
      //   color: '#ffff',
      //   nombre: 'Auth',
      //   github: 'https://github.com/Rosyec/Angular-AppAuth',
      //   tecnologias: 'MONGO - EXPRESS - ANGULAR - NODE',
      //   deploy: 'https://angular-node.herokuapp.com/auth/login'
      // },
      {
        color: '#ffff',
        nombre: 'Imágenes',
        github: 'https://github.com/Rosyec/React-AppImagenes',
        tecnologias: 'REACT - TYPESCRIPT - REDUX - JEST - AXIOS - API UNSPLASH',
        deploy: 'https://storied-vacherin-3d8d3b.netlify.app/'
      },
      // {
      //   color: '#ffff',
      //   nombre: 'Tareas',
      //   github: 'https://github.com/Rosyec/React-AppTareas',
      //   tecnologias: 'REACT - TYPESCRIPT',
      //   deploy: 'https://react-app-tareas.vercel.app/'
      // },
      // {
      //   color: '#ffff',
      //   nombre: 'Preguntas',
      //   github: 'https://github.com/Rosyec/Vue-AppPreguntas',
      //   tecnologias: 'VUE - COMPOSITION API - TYPESCRIPT - VITEST - API YESNO',
      //   deploy: 'https://vue-app-preguntas.vercel.app/'
      // },
      {
        color: '#ffff',
        nombre: 'Agenda',
        github: 'https://github.com/Rosyec/React-AppAgenda',
        tecnologias: 'REACT - TYPESCRIPT - REDUX - FIREBASE - AXIOS',
        deploy: 'https://react-app-agenda.vercel.app/auth/login'
      },
      {
        color: '#ffff',
        nombre: 'Héroes',
        github: 'https://github.com/Rosyec/React-AppHeroes',
        tecnologias: 'REACT - TYPESCRIPT',
        deploy: 'https://react-app-heroes.vercel.app/login'
      },
      {
        color: '#ffff',
        nombre: 'Nutrient',
        github: 'https://github.com/Rosyec/Angular-AppNutrient',
        tecnologias: 'ANGULAR - TYPESCRIPT - HTML/CSS',
        deploy: 'https://ephemeral-gecko-b04e20.netlify.app'
      },
      {
        color: '#ffff',
        nombre: 'Chat',
        github: 'https://github.com/Rosyec/React-Chat',
        tecnologias: 'REACT - NODEJS - MONGO - SOCKET.OI - FIREBASE - REDUX - AZURE',
        youtube: 'https://youtu.be/Q_kVi16TaDo',
        deploy: 'https://react-login-deploy.vercel.app'
      },
      {
        color: '#ffff',
        nombre: 'Bot Whatsapp',
        github: 'https://github.com/Rosyec/Node-BotWhatsapp', 
        tecnologias: 'NODEJS - TYPESCRIPT - AZURE - WHATSAPP API - CHATGPT',
        youtube: 'https://youtu.be/lDsyJD8fOkE',
        deploy: 'https://wa.me/+573232775818?text=Hola'
      }
      
    ];

    this.habilidades = [
      {
        nombre: 'Backend',
        imagen: 'bi bi-cpu-fill',
        habilidades: ['SPRING BOOT', 'NODE-JS', 'MONGO DB', 'MYSQL', 'FIREBASE']
      },
      {
        nombre: 'Fronted',
        imagen: 'bi bi-window-stack',
        habilidades: ['HTML/CSS', 'BOOTSTRAP', 'ANGULAR', 'REACT', 'VUE']
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

  modal( enlace: string, red: string, icono: string ): void {
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

interface RedesContacto {
  nombre: string,
  icono: string,
  enlace: string
}

