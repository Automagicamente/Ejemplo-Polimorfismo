const EspadaElectricidad = require("./EspadaElectricidad");
const EspadaFuego = require("./EspadaFuego");
const EspadaHielo = require("./EspadaHielo");
const EspadaLuz = require("./EspadaLuz");
const HabilidadElectricidad = require("./HabilidadElectricidad");
const HabilidadFuego = require("./HabilidadFuego");
const HabilidadHielo = require("./HabilidadHielo");
const HabilidadLuz = require("./HabilidadLuz");

const COLOR_ERROR = "\x1b[31m%s\x1b[0m";

const DANIO_ESPERADO = 130;
const DURABILIDAD_ESPERADA = 1100;



const unaEspada = new EspadaLuz();
const unaHabilidad = new HabilidadLuz();


unaEspada.aplicar(unaHabilidad);








console.assert(unaEspada.getDanio() === DANIO_ESPERADO, COLOR_ERROR,"error danio: "+ unaEspada.getDanio()+ " deberia ser "+DANIO_ESPERADO);
console.assert(unaEspada.getDurabilidad() === DURABILIDAD_ESPERADA, COLOR_ERROR,"error durabilidad: "+ unaEspada.getDurabilidad()+ " deberia ser "+DURABILIDAD_ESPERADA);
