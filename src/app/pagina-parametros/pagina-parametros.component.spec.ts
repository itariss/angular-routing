import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaParametrosComponent } from './pagina-parametros.component';

describe('PaginaParametrosComponent', () => {
  let component: PaginaParametrosComponent;
  let fixture: ComponentFixture<PaginaParametrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaParametrosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaParametrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
