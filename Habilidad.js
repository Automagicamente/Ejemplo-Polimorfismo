class Habilidad{
    #modifDanio = 0;
    #modifDurabilidad = 0;

    constructor(modifDanio=-1, modifDurabilidad=-1){
        this.#modifDanio = modifDanio;
        this.#modifDurabilidad = modifDurabilidad;
    }

    getModifDanio(){
        return this.#modifDanio/100;
    }

    getModifDurabilidad(){
        return this.#modifDurabilidad/100;
    }

    usarseCon(unaEspada){
        throw new Error("Comportamiento abstracto no implementado para "+this.constructor.name);
    }
}

module.exports = Habilidad;