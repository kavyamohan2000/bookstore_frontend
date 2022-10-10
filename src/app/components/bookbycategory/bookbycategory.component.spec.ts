import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookbycategoryComponent } from './bookbycategory.component';

describe('BookbycategoryComponent', () => {
  let component: BookbycategoryComponent;
  let fixture: ComponentFixture<BookbycategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookbycategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookbycategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
