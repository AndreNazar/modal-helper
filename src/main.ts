import ModalHelper from './ModalHelper';
import './style.scss'

type TAnimation = 'fade' | 'top' | 'bottom' | 'left' | 'right' | 'zoom' | false

const mhElement:        HTMLElement | null = document.querySelector('.modal-helper');
const mhContentElement: HTMLElement | null = document.querySelector('.modal-helper-content-block');
const mhButtonClose:    HTMLElement | null = document.querySelector('.modal-helper-content-block .button-close');

const buttonNoAnim: HTMLElement | null = document.querySelector('.btn-no-anim');
const buttonFade:   HTMLElement | null = document.querySelector('.btn-fade');
const buttonZoom:   HTMLElement | null = document.querySelector('.btn-zoom');
const buttonTop:    HTMLElement | null = document.querySelector('.btn-top');
const buttonBottom: HTMLElement | null = document.querySelector('.btn-bottom');
const buttonRight:  HTMLElement | null = document.querySelector('.btn-right');
const buttonLeft:   HTMLElement | null = document.querySelector('.btn-left');

const checkboxBlackout:   HTMLElement | null = document.querySelector('.checkbox-blackout');

let isBlackout:   boolean = false;

let currentAnim: TAnimation = false;

mhElement?.addEventListener('click', () => { // Клик в пустоту
  const mh = new ModalHelper(mhElement);
  mh.hide(currentAnim)
})
mhButtonClose?.addEventListener('click', () => { // Клик на крестик
  const mh = new ModalHelper(mhElement);
  mh.hide(currentAnim)
})
document.addEventListener('keydown', (e: KeyboardEvent) => { // Нажатие на Esc
  if(e.key === 'Escape') {
    const mh = new ModalHelper(mhElement);
    mh.hide(currentAnim)
  }
})
mhContentElement?.addEventListener('click', (e: MouseEvent) => { // Клики в диалоге
  e.stopPropagation()
})


checkboxBlackout?.addEventListener('click', () => {
  if(isBlackout) {
    isBlackout = false
    checkboxBlackout.classList.replace('checked', 'unchecked')
  }
  else {
    isBlackout = true
    checkboxBlackout.classList.replace('unchecked', 'checked')
  }
})


buttonNoAnim!.addEventListener('click', () => {
  const mh = new ModalHelper(mhElement);
  mh.show(false, isBlackout)
  currentAnim = false // для демо
})
buttonFade!.addEventListener('click', () => {
  const mh = new ModalHelper(mhElement);
  mh.show('fade', isBlackout)
  currentAnim = 'fade'
})
buttonZoom!.addEventListener('click', () => {
  const mh = new ModalHelper(mhElement);
  mh.show('zoom', isBlackout)
  currentAnim = 'zoom'
})
buttonTop!.addEventListener('click', () => {
  const mh = new ModalHelper(mhElement);
  mh.show('top', isBlackout)
  currentAnim = 'top'
})
buttonBottom!.addEventListener('click', () => {
  const mh = new ModalHelper(mhElement);
  mh.show('bottom', isBlackout)
  currentAnim = 'bottom'
})
buttonLeft!.addEventListener('click', () => {
  const mh = new ModalHelper(mhElement);
  mh.show('left', isBlackout)
  currentAnim = 'left'
})
buttonRight!.addEventListener('click', () => {
  const mh = new ModalHelper(mhElement);
  mh.show('right', isBlackout)
  currentAnim = 'right'
})