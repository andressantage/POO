/**
 * *La palabra lapiz hace referencia a una clase
 */
class lapiz{
    color
    tamano
    #material
    #mina
    /**
     * 
     * @param {*color} color
     * @param {*color} color
     * 
     */
    constructor({color="amarillo", tamano="9cm", material="carbon", mina="carbon"}){
        this.color=color;
        this.tamano=tamano;
        this.#material=material;
        this.#mina=mina;
    }
    /**
     * get llama al resultado
     */
    get getMina(){
        return this.#mina
    }
    /**
     * set permite agregar, eliminar y verificar existencia de un elemento dentro de algo
     */
    set setMina(p1){
        this.#mina=p1;
    }
    /**
     * static es para decir que afilar es un metodo estatico
     */
    /** Metodos estaticos: es un metodo que pertenece a la clase en si y no a una instancia de la clase
     * Estos se pueden llamar directamente en la clase sin necesidad de crear un objeto o instancia de la misma
     **/ 
    static afilar(p1){
        return `la mina de ${p1} ha sido afilada`;
    }
}
let lapiz1=new lapiz({material: "Diamante"});
let lapiz2=new lapiz({material: "Acero", mina: "grafito"});
console.log(lapiz1, lapiz2)
/**
 * se agrega a lapiz
 */
lapiz1.setMina="Tinta"
/**
 * se usa 
 */
console.log(lapiz.afilar(lapiz1.getMina));
console.log(lapiz.afilar(lapiz2.getMina));

/**
 * el extends se refiere a que extiende las propiedades de lapiz al boligrafo
 * esto es principalmente para HERENCIA
 */
class boligrafo extends lapiz{
    constructor({mina="Metalica"}){
        super({mina});
    }
}

let obj=new boligrafo({});
obj.setMina="Aluminio"

console.log(obj.getMina);