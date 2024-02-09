class DispositivoEntrada {
  constructor(tipoEntrada, marca) {
    this._tipoEntrada = tipoEntrada;
    this._marca = marca;
  }
  //  inicio getters
  get tipoEntrada() {
    return this._tipoEntrada;
  }

  get marca() {
    return this._marca;
  }

  //  inicio setters

  set tipoEntrada(tipoEntrada) {
    this._tipoEntrada = tipoEntrada;
  }

  set marca(marca) {
    this._marca = marca;
  }
}
// -----------------------------------------------
// Inicio clase hija de raton
// -------------------------------------------------
class Raton extends DispositivoEntrada {
  // atributo estatico
  static contadorRatones = 0;
//   ------------------------------
//   inicializar a tributos de la clase padrea
  constructor(tipoEntrada,marca) {
    // super para acceder  atributos de la clase padre
    super(tipoEntrada,marca);
    this._idRaton = ++Raton.contadorRatones;
  }

  get idRaton() {
    return this._idRaton;
  }

  // creacion de metodo toString
  toString() {
    return `Id Raton: #${this._idRaton}, Entrada:  ${this.tipoEntrada}, Marca:  ${this.marca}`; ;
  }

}

// Prueba para validar que la class Raton esta funcionando correctamente
let ratonp = new Raton("USB","HP");
console.log(ratonp.toString());

// -------------------------------------------------
// incion clase hija teclado
// --------------------------------------------------
// clase hija hereda atributos de la clase padre "DispositivosEntrada"

class Teclado  extends DispositivoEntrada{
  static contadorTeclados = 0;

  constructor(tipoEntrada,marca) {
    super(tipoEntrada,marca);

    this._idTeclado = ++Teclado.contadorTeclados;
  }

  get idTeclado()  {
    return this._idTeclado;
  }
 // creacion de metodo toString
 toString() {
    return `Id Teclado: #${this._idTeclado}, Entrada: ${this.tipoEntrada}, Marca:  ${this.marca}`; 
  }

}

// Pruba teclado 
let Tecladop = new Teclado("USB", "PHP");
console.log(Tecladop.toString());


