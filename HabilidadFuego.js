const Espada = require("./Espada");
const Habilidad = require("./Habilidad");

class HabilidadFuego extends Habilidad{
    constructor(modifDanio=30, modifDurabilidad=-10){
        super(modifDanio, modifDurabilidad);
    }

    /**
     * modifica las propiedades de una espada
     * @param {Espada} unaEspada a modificar
     */
    usarseCon(unaEspada){
        unaEspada.aplicarConHabilidadFuego(this.getModifDanio(), this.getModifDurabilidad());
    }
}

module.exports = HabilidadFuego;