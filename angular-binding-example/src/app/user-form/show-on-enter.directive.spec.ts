import { ShowOnEnterDirective } from './show-on-enter.directive';
import { ElementRef } from '@angular/core';

describe('ShowOnEnterDirective', () => {
  let directive: ShowOnEnterDirective;
  let elementRefMock: ElementRef;

  beforeEach(() => {
    // Criando um mock para ElementRef
    elementRefMock = {
      nativeElement: document.createElement('div')
    };
    directive = new ShowOnEnterDirective(elementRefMock);
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should toggle visibility when Enter is pressed', () => {
    // Inicialmente invisível
    expect(elementRefMock.nativeElement.style.display).toBe('');

    // Simulando a pressão da tecla Enter
    directive.onEnter();
    expect(elementRefMock.nativeElement.style.display).toBe('block');

    // Pressionando Enter novamente
    directive.onEnter();
    expect(elementRefMock.nativeElement.style.display).toBe('none');
  });
});
