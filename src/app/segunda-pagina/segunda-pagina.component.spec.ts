import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundaPaginaComponent } from './segunda-pagina.component';

describe('SegundaPaginaComponent', () => {
  let component: SegundaPaginaComponent;
  let fixture: ComponentFixture<SegundaPaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SegundaPaginaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SegundaPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
