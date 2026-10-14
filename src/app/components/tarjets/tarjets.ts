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
  preu: number = 3899
  disponible: boolean = true
  estoc: number = 5


  producte : Producte = {
    id: 1,
    nom: 'Ordinador Gamer Pro',
    preu: 3899,
    disponible: true,
    estoc: 5

  };

  producte2 : Producte = {
    id: 2,
    nom: 'MacBook Pro',
    preu: 3000,
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

    get estatDisponibilitat(): string {
      if (this.producte.estoc === 0) { 
        return 'Esgotat';
      } else {
        return 'Disponible';
      }
    }
}

/* AFEGIR ETIUETA OFERTA I GRATIUIT 

si el preu es inferior a 20 : oferta
si el preu es 0 : gratuit
si el preu es superior a 100 : premium

*/

/*
if dins d'un for per marcar productes especials

si la categoria es informàtica: div amb "destacat"

*/