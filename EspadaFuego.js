const Espada = require("./Espada");

class EspadaFuego extends Espada{
    aplicarConHabilidadHielo(modifDanio, modifDurabilidad){
        this.actualizarDanioCon(1-modifDanio+0.05);
        this.actualizarDurabilidadCon(1+modifDurabilidad);
    }

    aplicarConHabilidadFuego(modifDanio, modifDurabilidad){
        this.actualizarDanioCon(1+modifDanio);
        this.actualizarDurabilidadCon(1+modifDurabilidad);
    }

    aplicarConHabilidadElectricidad(modifDanio, modifDurabilidad){
        this.actualizarDanioCon(1+(modifDanio-0.05));
        this.actualizarDurabilidadCon( 1+modifDurabilidad);
    }

    aplicarConHabilidadLuz(modifDanio, modifDurabilidad){
        this.actualizarDanioCon(1+(modifDanio-0.05));
        this.actualizarDurabilidadCon( 1+modifDurabilidad-0.05);
    }
}

module.exports = EspadaFuego;