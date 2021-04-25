const modalOne = document.querySelector('.modal-1');
const modalTwo = document.querySelector('.modal-2');
const modalThree = document.querySelector('.modal-3');
const btnCloseOne = document.querySelector('.btn-close-1');
const btnCloseTwo = document.querySelector('.btn-close-2');
const btnCloseThree = document.querySelector('.btn-close-3');
const overlay = document.querySelector('.overlay');
const btnOne = document.querySelector('.btn-1');
const btnTwo = document.querySelector('.btn-2');
const btnThree = document.querySelector('.btn-3');

function showModal1(){
  modalOne.classList.remove('hidden');
  overlay.classList.remove('hidden');
}
function showModal2(){
  modalTwo.classList.remove('hidden');
  overlay.classList.remove('hidden');
}
function showModal3(){
  modalThree.classList.remove('hidden');
  overlay.classList.remove('hidden');
}
function closeModal1(){
  modalOne.classList.add('hidden');
  overlay.classList.add('hidden');
}
function closeModal2(){
  modalTwo.classList.add('hidden');
  overlay.classList.add('hidden');
}
function closeModal3(){
  modalThree.classList.add('hidden');
  overlay.classList.add('hidden');
}

btnOne.addEventListener('click',showModal1);
btnTwo.addEventListener('click',showModal2);
btnThree.addEventListener('click',showModal3);

btnCloseOne.addEventListener('click',closeModal1);
btnCloseTwo.addEventListener('click',closeModal2);
btnCloseThree.addEventListener('click',closeModal3);

overlay.addEventListener('click',closeModal1);
overlay.addEventListener('click',closeModal2);
overlay.addEventListener('click',closeModal3);

document.addEventListener('keydown',function(e){
  if(e.key==="Escape"){
    closeModal1();
    closeModal2();
    closeModal3();
  }
})