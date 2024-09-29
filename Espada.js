const Habilidad = require("./Habilidad");

class Espada{
    #danio=100;
    #durabilidad=1000;

    actualizarDanioCon(esteValor){
        this.#danio *=esteValor;
        this.#danio = Number(this.#danio.toFixed(0));
    }

    actualizarDurabilidadCon(esteValor){
        this.#durabilidad *=esteValor;
        this.#durabilidad = Number(this.#durabilidad.toFixed(0));
    }

    /**
     * Aplica una habilidad a esta espada
     * @param {Habilidad} unaHabilidad a aplicar
     */
    aplicar(unaHabilidad){
        unaHabilidad.usarseCon(this)
    }

    getDanio(){
        return this.#danio;
    }

    getDurabilidad(){
        return this.#durabilidad;
    }


    aplicarConHabilidadHielo(modifDanio, modifDurabilidad){
        throw new Error("Err");
    }

    aplicarConHabilidadFuego(modifDanio, modifDurabilidad){
        throw new Error("Err");
    }

    aplicarConHabilidadElectricidad(modifDanio, modifDurabilidad){
        throw new Error("Err");
    }

    aplicarConHabilidadLuz(modifDanio, modifDurabilidad){
        throw new Error("Err");
    }
}

module.exports = Espada;