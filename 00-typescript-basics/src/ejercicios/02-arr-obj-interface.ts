//Buena practica poner tipos
let habilidades: string[] = ['Bash','Counter','Healing'];


//Definimos Interfaces
/*Para que
    un objeto
    luzca como
    nosotros queramos*/
interface Personaje{
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;
}



const personaje: Personaje = {
    nombre: 'Strinder',
    hp: 100,
    habilidades: ['Bash','Counter','Healing']
}

personaje.puebloNatal = 'Pueblo Paleta';

console.table(personaje);