const Espada = require("./Espada");

class EspadaElectricidad extends Espada{

    aplicarConHabilidadFuego(modifDanio, modifDurabilidad){
        this.actualizarDanioCon(1+modifDanio-0.1);
        this.actualizarDurabilidadCon(1+modifDurabilidad-0.05);
    }

    aplicarConHabilidadHielo(modifDanio, modifDurabilidad){
        this.actualizarDanioCon(1+modifDanio-0.2);
        this.actualizarDurabilidadCon(1+modifDurabilidad+0.05);
    }

    aplicarConHabilidadElectricidad(modifDanio, modifDurabilidad){
        this.actualizarDanioCon(1+modifDanio+0.10);
        this.actualizarDurabilidadCon( 1+modifDurabilidad-0.15);
    }

    aplicarConHabilidadLuz(modifDanio, modifDurabilidad){
        this.actualizarDanioCon(1+(modifDanio-0.1));
        this.actualizarDurabilidadCon( 1+modifDurabilidad+0.05);
    }
}

module.exports = EspadaElectricidad;