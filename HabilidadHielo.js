const Habilidad = require("./Habilidad");

class HabilidadHielo extends Habilidad{
    constructor(modifDanio=25, modifDurabilidad=25){
        super(modifDanio, modifDurabilidad);
    }

    usarseCon(unaEspada){
        unaEspada.aplicarConHabilidadHielo(this.getModifDanio(), this.getModifDurabilidad());
    }
}

module.exports = HabilidadHielo;