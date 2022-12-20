import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilidadesBlandasComponent } from './habilidades-blandas.component';

describe('HabilidadesBlandasComponent', () => {
  let component: HabilidadesBlandasComponent;
  let fixture: ComponentFixture<HabilidadesBlandasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabilidadesBlandasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabilidadesBlandasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
