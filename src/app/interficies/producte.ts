//  Una interficie defineix l'estructura d'un objecte
// QUALSEVOL OBJECTE de tipus Producte ha de tenir aquests camps 

export interface Producte {
    id: number;
    nom: string;
    preu: number;
    disponible: boolean;
    estoc ?: number; 
    descripcio ?: string; // ? vol dir que es un camp opcional
    categoria?: string;
}


