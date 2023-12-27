import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appShowOnEnter]',
  standalone: true 
})
export class ShowOnEnterDirective {
  private isVisible: boolean = false;

  constructor(private el: ElementRef) {
    // Inicializa o elemento como oculto
    this.el.nativeElement.style.display = 'none';
  }

  @HostListener('keydown.enter') onEnter() {
    this.isVisible = !this.isVisible;
    this.updateVisibility();
  }

  private updateVisibility() {
    this.el.nativeElement.style.display = this.isVisible ? 'block' : 'none';
  }
}

