'use strict';
/* Lo primero que debemos hacer es seleccionar todo lo que vamos a necesitiar para hacer el proyecto, los guardamos en variables y luego los podremos usar cada vez que queramos, asi tendremos siempre un codigo limpio y sin repeticion de codigos.*/

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

//siempre que usemos queryselector para seleccionar clases del html, cuando haya varios elementos con la misma clase, solo el primero sera seleccionado.
// const btnsOpenModal = document.querySelector('.show-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

//  para poder remover una clase, se pueden remover varias clases al mismo tiempo, no se debe usar el '.' ya que solo se una para los selectors, en classlist se debe usar solo un string
const openModal = function () {
  // console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

//   usamos este bloque de codigo para esconder el modal a travez del boton cruz
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// lo podemos hacer para cuando clickeamos en la cruz o cuando clikeamos fuera del modal
btnCloseModal.addEventListener('click', closeModal); // cuando clickeamos en la cruz
overlay.addEventListener('click', closeModal); // cuando clickeamos fuera del modal

/* cuando queremos usar la misma funcion en varios eventListeners lo correcto es especificar la funcion de manera separada y luego pasarla como argumento cada vez que queramos hacer uso de ella, asi tendremos un codilo legible, que no se repite y facil de cambiar en caso de ser necesario.
classList.add y classList.remove generalmente son bastante usados a la hora de programar con javascript.
*/

/* Tambien podemos hacer que nuestro codigo reaccione a keyboard events o tambien llamados global events. Para este tipo de reaccion a evento generalmente se trabaja sobre el documento entero, es decir que no importa donde nos encontremos dentro de la pagina siempre se activara el evento especificado al apretar una tecla especificada */

/* keydown -> en el momento que presionamos una tecla
keypress -> cuando mantenemos el dedo sobre una tecla
keyup -> cuando levantamos el dedo de la tecla presionada
 */

document.addEventListener('keydown', function (evt) {
  // se puede saber que tecla fue presionada ya que esa informacion sera guardada en el eventListener, y javascript creara un objeto con la informacion guardada y podremos acceder a esa informacion. Tendremos acceso a toda esa informacion a travez de el parametro pasado a la funcion(el parametro es toda la informacion del evento).
  if (evt.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
});
