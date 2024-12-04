import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAtracaoComponent } from './modal-atracao.component';

describe('ModalAtracaoComponent', () => {
  let component: ModalAtracaoComponent;
  let fixture: ComponentFixture<ModalAtracaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalAtracaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalAtracaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
