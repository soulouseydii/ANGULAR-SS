import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Producte } from './interficies/producte'; // PER PODER USAR LA interface de TIPUS producte que s'ha d'importar
import { producte as ProducteClass } from './producte'; // IMPORTEM LA CLASSE PRODUCTE 
import { Basket } from './models/basket';
import { funcions } from './models/funcions';
import { Tarjets } from './components/tarjets/tarjets';
import { Perfil } from './components/perfil/perfil';
import { Alumne } from './models/alumne';
import { Info } from './components/info/info';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Perfil, Tarjets, Info],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('prueba1');

  // Veure la diferencia entre JS i TS --> TS = JS + tipus

  // TIPUS BASICS
  nom: string = 'Angular ';
  nom2: string = 'Laravel';
  versio: number = 20;
  actiu: boolean = true;

  // ARRAYS TIPATS
  colors: string[] = ['rojo', 'verde', 'azul'];
  frameworks: string[] = [this.nom, this.nom2];
  punts: number[] = [10, 15, 20];

  // TypeScript infereix (adivina) el tipus automàticament
  ciutat = 'Lleida'; // string
  codiP = 25605; // number

  // Objectes de tipus Producte per a la pràctica
  productes: Producte[] = [
    { id: 1, nom: 'PC Gaming', preu: 999, disponible: true, categoria: 'informàtica' },
    { id: 2, nom: 'Curs Inicial Linux', preu: 0, disponible: true, categoria: 'informàtica' },
    { id: 3, nom: 'Auriculares de cable', preu: 15, disponible: true, categoria: 'informàtica' },
  ]; 

  p1 = new ProducteClass('Teclat', 89.99);
  
// 1. AFEGIU UN MÈTODE A LA CLASSE PRODUCTE descripcio() que retorni un string amb nom i preu.
// 2. MÈTODE descompte() que retorni el preu amb un descompte del 10% (preu * 0.9)
// 3. creeu un nou producte i mostreu el descompte per consola
// 4. cerqueu la manera de mostrar el descompte amb un popup

p2 = new ProducteClass('Airpods', 249.99);


  constructor() {
    console.log(this.p1.toSting());
    console.log(this.p1.preuAmbIva);
    console.log(this.p2.toSting());
    console.log(this.p2.descompte());
  } 


  // Part B: Dades mock i funcions
  // Un array de mínim 5 elements del teu tema que compleixi la interfície

  basket: Basket[] = [
    { id: 1, nom: 'Lleida', equip: 'iLERNA Lleida', jugadors: 12, partits: 20, guanyador: true },
    { id: 2, nom: 'Barcelona', equip: 'FC Barcelona Baloncesto', jugadors: 15, partits: 25, guanyador: false },
    { id: 3, nom: 'Madrid', equip: 'Real Madrid Baloncesto', jugadors: 14, partits: 26, guanyador: true },
    { id: 4, nom: 'Valencia', equip: 'Valencia Basket', jugadors: 13, partits: 24, guanyador: false },
    { id: 5, nom: 'Malaga', equip: 'Unicaja Baloncesto', jugadors: 16, partits: 20, guanyador: true }
  ];


  // funció getActius() (o similar) que retorni els elements amb boolean = true

  getActius(): Basket[] {
    return this.basket.filter(equip => equip.guanyador === true);
  }

  // funció findById(id: number) que retorni un element o undefined

  findById(id: number): Basket | undefined {
    return this.basket.find(equip => equip.id === id);
  }

  // Una funció formatarElement(element) que retorni un string amb informació de l'element

  formatarElement(element:Basket): string {
    return `Nom: ${element.nom}, Equip: ${element.equip}, Jugadors: ${element.jugadors}, Partits: ${element.partits}, Guanyador: ${element.guanyador}`;
  }



  // Comprobar que les funcions de la classe funcions funcionen correctament
  constructor2() {
    // saludar('Soulou');

    /*console.log(esMajorEdat(20));
    console.log(sumarArray([1, 2, 3, 4, 5]));
    */
  }


  // Instàncies de Alumnes

  alumne1 = new Alumne('Soulou', 18, 'DAW', [10, 8, 7]);
  alumne2 = new Alumne('Eric', 19, 'DAM', [6, 4, 2]);


  // Comprobar que les funcions de la classe Alumne funcionen correctament
  
  constructor3() {
      console.log(this.alumne1.presentar());
      console.log(this.alumne1.gethaAprobat());
  }
  

  // ciutats: string[] = ['Lleida', 'Barcelona', 'Girona', 'Tarragona'];

  marcas: string[] = ['Nike', 'Adidas', 'Jordan', 'Asics', 'New Balance'];

}