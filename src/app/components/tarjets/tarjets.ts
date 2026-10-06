/*Aquest fitxer conté la lògica:propietats,mètodes, getters...*/

import { Component } from '@angular/core';
import { Producte } from '../../interficies/producte';

@Component({
  imports: [],
  selector: 'app-tarjets', /* Per usar-lo al HTML d'altres components. com una etiqueta HTML personalitzada*/ 
  styleUrl: './tarjets.css',
  templateUrl: './tarjets.html',
})
export class Tarjets {


/*
INTERPOLACIÓ DE DADES
Permet connectar les dades del TS a l'HTML
Permet incrustar expressions TS dins de l'HTML, angular avalua l'expressió i mostra el resultat com a text.

{{nomPropietat}} --> mostra el valor d'una propietat de la classe
{{2 + 3}} --> mostra 5
{{text.toUpperCase()}} --> mostra el text en majúscules
{{edat >= 18 ? 'Major d'edat : Menor d'edat'}} --> operador temerari

amb {{nom}} --> el valor por canviar i l'HTML s'actualitzarà automàticament. Hardocoded es x sempre és estàtic.



*/

  nom: String = 'Ordenador Gamer Pro'
  preu: number = 2223
  estoc: number = 5


  producte : Producte = {
    id: 1,
    nom: 'Ordinador Gamer Pro',
    preu: 2223,
    disponible: true

  };


  /* Getter --> és un tipus especial de propietat calculada. En lloc de guardar un valor, el CALCULA cada cop que s'accedeix.
  get nomDelGetter(): TipusRetorn {
     return calcul;
  }

     Al TEMPLATE s'usa com una PROPIETAT, sense parentesis {{nomDelGetter}}
  */


    // Getter1: preu amb IVA del 21%
    get preuAmbIva(): number {
      return this.producte.preu * 1.21;
    }

    // Getter2: estat de disponibilitat en text
    

}
