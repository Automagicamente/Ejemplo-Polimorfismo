const Espada = require("./Espada");

class EspadaHielo extends Espada{

    aplicarConHabilidadHielo(modifDanio, modifDurabilidad){
        this.actualizarDanioCon(1+modifDanio-0.05);
        this.actualizarDurabilidadCon(1+modifDurabilidad-0.05);
    }

    aplicarConHabilidadFuego(modifDanio, modifDurabilidad){
        this.actualizarDanioCon(1+modifDanio-0.25);
        this.actualizarDurabilidadCon(1+modifDurabilidad-0.15);
    }

    aplicarConHabilidadElectricidad(modifDanio, modifDurabilidad){
        this.actualizarDanioCon(1+(modifDanio));
        this.actualizarDurabilidadCon( 1+modifDurabilidad-0.05);
    }

    aplicarConHabilidadLuz(modifDanio, modifDurabilidad){
        this.actualizarDanioCon(1+(modifDanio-0.1));
        this.actualizarDurabilidadCon( 1+modifDurabilidad);
    }
}

module.exports = EspadaHielo;