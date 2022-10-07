import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookbyisbnComponent } from './bookbyisbn.component';

describe('BookbyisbnComponent', () => {
  let component: BookbyisbnComponent;
  let fixture: ComponentFixture<BookbyisbnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookbyisbnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookbyisbnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
