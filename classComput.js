// clase padre
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
let ratonP = new Raton("USB","HP");
console.log(ratonP.toString());

let raton1 = new Raton("Blutooth","Microsoft");

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
let tecladoP = new Teclado("USB", "PHP");
console.log(tecladoP.toString());

let teclado1 = new Teclado("Blutooth", "Razer");

// --------------------------------------------
// Inicio clase independiente - Monitor 
// ---------------------------------------------
class Monitor{
  // atributo estatico permite inicializar y agregar valor unico
    static contadorMonitores = 0; 

    constructor(marca,tamaño){
      this._idMonitor = ++Monitor.contadorMonitores;

      this._marca = marca; 
      this._tamaño = tamaño;
    }
    // Se agrega get atributo solo lectura
    get idMonitor(){
      return this._idMonitor;
    }

    get marca(){
      return this._marca;
    }
    
    get tamaño(){
      return this._tamaño;
    }

    set marca(marca){
      this._marca = marca;
    }

    set tamaño(tamaño){
      this._tamaño = tamaño;
    }

    toString() {
      return `Id Monitor: #${this.idMonitor}, Marca: ${this.marca}, Tamaño: ${this.tamaño}`;
  }

}

// Prueba de objeto monitor
let monitorP = new Monitor ("Asus","27 pulgadas" );
console.log(monitorP.toString());

let monitor1 = new Monitor ("Dell","18 pulgadas" );

// Fin clase monitor

// ----------------------------------------------------
// Inicio clase computadora
// ----------------------------------------------------

class Computadora {

  static contadorComputadoras = 0;

  constructor(nombre,Monitor,Teclado,Raton){

    this._idComputadora = ++Computadora.contadorComputadoras;
    this._nombre = nombre;

    this._Monitor = Monitor;
    this._Teclado = Teclado;
    this._Raton = Raton;

  }
  // Inicio getters para leer la información
  get idComputadora(){
    return this._idComputadora;
  }

  get nombre(){
    return this._nombre;
  }

  get Monitor(){
    return this._Monitor;
  }
  get Teclado(){
    return this._Teclado;
  }

  get Raton(){
    return this._Raton;
  }

  // Incio setters para modificar la información
  set nombre(nombre){
    this._nombre = nombre;
  }
  set Monitor(Monitor){
    this._Monitor = Monitor;
  }
  set Teclado(Teclado){
    this._Teclado = Teclado;
  }
  set Raton(Ratos){
    this._Raton = Raton;
  }

  toString(){
    return `Id Computadora: #${this.idComputadora},Nombre: ${this.nombre},\nMonitor: ${this.Monitor},\nTeclado: ${this.Teclado},\nRaton: ${this.Raton}`;
  }
 

}
// Creo objeto de prueba agregando los atributos de los objetos creados anteriormente.
let computadoraP = new Computadora ("Asus", monitorP,tecladoP,ratonP);

console.log(computadoraP.toString());

let computadora1 = new Computadora ("Dell", monitor1,teclado1,raton1);

// --------------------------------------------------

// Inicio clase Orden 

class Orden {
  static contadorOdenes = 0;

  constructor(){
    this._idOrden = ++Orden.contadorOdenes;
    this._computadora = [];
  }

  get idOrden(){
    return this._idOrden;
  }

  agregarComputadora(computadora){
    // metodo push, para agregar productos al arreglo
    this._computadora.push(computadora);

  }

  mostrarOrden(){
    // inicia variables vacia para acomular productos
    let productosOrden = " ";

    for (let computadora of this._computadora){
      productosOrden += '\n['+computadora.toString() + "]";
    }

    console.log(`Orden: ${this._idOrden} \n Computadora: ${productosOrden}`);
}

}

let orden1 = new Orden();

orden1.agregarComputadora(computadoraP);
orden1.mostrarOrden();

// ----------------------------------------

let orden2 = new Orden();

orden2.agregarComputadora(computadora1);
orden2.mostrarOrden();
