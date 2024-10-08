import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroCrearComponent } from './libro-crear.component';

describe('LibroCrearComponent', () => {
  let component: LibroCrearComponent;
  let fixture: ComponentFixture<LibroCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibroCrearComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibroCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
