const Habilidad = require("./Habilidad");

class HabilidadElectricidad extends Habilidad{
    constructor(modifDanio=15, modifDurabilidad=-5){
        super(modifDanio, modifDurabilidad);
    }

    usarseCon(unaEspada){
        unaEspada.aplicarConHabilidadElectricidad(this.getModifDanio(), this.getModifDurabilidad());
    }
}

module.exports = HabilidadElectricidad;