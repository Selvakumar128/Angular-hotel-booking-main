import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '.toggle_btn'
})
export class ToggleButtonDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('click')
  onClick() {
    const toggleBtn1: HTMLElement | null = this.el.nativeElement.querySelector('.toggle_btn i');
    const dropDown: HTMLElement | null = this.el.nativeElement.querySelector('.drop_down');

    if (dropDown && toggleBtn1) {
      dropDown.classList.toggle('open');
      const isOpen: boolean = dropDown.classList.contains('open');
      toggleBtn1.className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
    }
  }
}