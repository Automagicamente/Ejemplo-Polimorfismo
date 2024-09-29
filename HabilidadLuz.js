const Habilidad = require("./Habilidad");

class HabilidadLuz extends Habilidad{
    constructor(modifDanio=20, modifDurabilidad=10){
        super(modifDanio, modifDurabilidad);
    }

    usarseCon(unaEspada){
        unaEspada.aplicarConHabilidadLuz(this.getModifDanio(), this.getModifDurabilidad());
    }
}


module.exports=HabilidadLuz;