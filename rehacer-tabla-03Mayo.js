//EJERCICIO CREAR TABLA - Julio Cabanillas Delgado
//- Crearemos una función createTable(numero1, numero2) que reciba por parametros
//dos números, el primero de ellos determinará el número de filas y el segundo el numero de columnas
//- La función retornará una tabla que añadiremos a nuestro HTML [APPENDCHILD]
//(añade al final o borra la última) intentaremos que los botones Añadir y Borrar
//estén deshabilitados hasta que se cree la tabla.
window.addEventListener("load", eventos);
const btnCrear = document.getElementById("crear");
const btnAnadir = document.getElementById("anadir");
const btnElim = document.getElementById("eliminar");

btnCrear.disabled = false;
btnAnadir.disabled = true;
btnElim.disabled = true;

let num1 = 0; //filas
let currentRows = 0;
let num2 = 0; //celdas por fila   (a.k.a. columnas)
let cell = 0; //celdas            (numeración)

function eventos() {
  btnCrear.addEventListener("click", crearTabla);
  btnAnadir.addEventListener("click", anadirFila);
  btnElim.addEventListener("click", eliminarFila);

  function crearTabla() {
    num1 = Number(document.getElementById("row").value);
    num2 = Number(document.getElementById("column").value);
    const newTable = document.createElement("table");
    newTable.setAttribute("id", "table");
    for (let i = 0; i < num1; i++) filaExtra(newTable); //Principio de Responsabilidad Única
    document.getElementById("cuerpo").append(newTable);
    btnCrear.disabled = true;
    btnAnadir.disabled = false;
  }

  function anadirFila() {
    filaExtra(document.getElementById("table"));
  }

  function filaExtra(element) {
    let newRow = document.createElement("tr");
    for (let j = 0; j < num2; j++) {
      let newCell = document.createElement("td");
      newCell.innerHTML = ++cell;
      newRow.append(newCell);
    }
    element.append(newRow);
    currentRows++;
    btnElim.disabled = !(currentRows > 1); //branchless
  }

  function eliminarFila() {
    const nodeList = document.getElementById("table");
    const node = nodeList.lastElementChild;
    node.remove();
    cell -= num2;
    currentRows--;
    btnElim.disabled = !(currentRows > 1); //branchless
  }
}
