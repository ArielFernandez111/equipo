import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  aux: boolean = false;
  date;
  constructor() {
    this.date = new Date().getFullYear()
  }
 
  ngOnInit() {
    setTimeout(() => {
      this.aux = !this.aux
    }, 6000)
  }
  
  nombre: string = 'Capitán América';
  nombre2: string = 'AriEl FernAndEz AlI';
  arreglo = [1,2,3,4,5,6,7,8,9,10];
  personajes: string[] = ['Ironman', 'Spiderman', 'Thor', 'Loki', 'Groot'];
  PI: number = Math.PI;
  porcentaje: number = 0.234;
  salario: number = 1234.5;
  fecha: Date = new Date();
  activar: boolean = true;

  idioma: string = 'en';
  videoUrl: string = 'https://www.youtube.com/embed/9E8Nm3hun0g';

  valorPromesa = new Promise<string>( (resolve) => {
    setTimeout(() => {
      resolve('llego la data');
    }, 4500);
  });

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: 20
    }
  }
}
