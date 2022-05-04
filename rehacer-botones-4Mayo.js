// Ejercicio de Julio Cabanillas Delgado
// Creamos un index.html que contenga:
// - Section (1) , article (1), h2(1)
/*  - 5 botones (
        1 para añadir parrafo, 
        1 para eliminar el ultimo parrafo que haya 
        1 para reemplazar el ÚLTIMO parrafo por otro parrafo con distinto contenido
        1 para colorear el fondo de los pares
        1 pare eliminar los artículos sustitutos
         */
window.addEventListener('load', eventos);

function eventos() {
    const btnAnadir     = document.getElementById('anadir');
    const btnEliminar   = document.getElementById('eliminar');
    const btnReemplazar = document.getElementById('reemplazar');
    const btnElimReem   = document.getElementById('eliminarReem');
    const btnColor      = document.getElementById('colorear');

    btnAnadir     .addEventListener('click',anadir);
    btnEliminar   .addEventListener('click',eliminar);
    btnReemplazar .addEventListener('click',reemplazar);
    btnElimReem   .addEventListener('click',eliminarReem);
    btnColor      .addEventListener('click',colorear);

    btnAnadir    .disabled  = false;
    btnEliminar  .disabled  = true;
    btnReemplazar.disabled  = false;
    btnElimReem  .disabled  = true;
    btnColor     .disabled  = true;

    const lorem = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam repellendus beatae quos animi quam architecto impedit accusamus sunt, alias ex nobis tempore voluptates! Corporis quas quidem error iusto quam. Consequuntur molestias magni officia fugiat, reprehenderit, dolore suscipit nemo quas veritatis sit aliquam non atque iste?';
    const sust = 'TEXTO DE REEMPLAZO';
    
    let nodeCount;

    function anadir() {
        const newPara = document.createElement('p');
        const text    = document.createTextNode(lorem);
        newPara.appendChild(text);
        document.getElementById('myArticle').append(newPara);
        adjustButtons();
    }
    
    function eliminar() {
        const oldPara = document.getElementById('myArticle').lastElementChild;
        oldPara.remove();
        nodeCount = document.getElementById('myArticle').childElementCount;
        adjustButtons();
    }
    
    function reemplazar() {
        const para    = document.getElementById('myArticle');
        const oldPara = para.lastElementChild;
        const newPara = document.createElement('p');
        const text    = document.createTextNode(sust);
        newPara.appendChild(text);
        para.replaceChild(newPara, oldPara);
        adjustButtons();
    }

    function eliminarReem() {
        let nodeList = document.getElementsByTagName('p');
        nodeList = [...nodeList];
        nodeList.forEach(para => {
            if (para.innerText==='TEXTO DE REEMPLAZO') para.remove()
        });
        adjustButtons();
    }
    
    function colorear() {
        let nodeList = document.getElementsByTagName('p');
        nodeList = [...nodeList];
        nodeList.forEach((para, i) => i%2? para.style.backgroundColor='lightgreen': null);
        adjustButtons();
    }
    
    function adjustButtons() {
        nodeCount = document.getElementById('myArticle').childElementCount;
        btnEliminar.disabled = (nodeCount<2);
        btnElimReem.disabled = btnEliminar.disabled;
        btnColor.disabled    = !(nodeCount>1)
    }
}