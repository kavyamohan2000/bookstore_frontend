import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookbynameComponent } from './bookbyname.component';

describe('BookbynameComponent', () => {
  let component: BookbynameComponent;
  let fixture: ComponentFixture<BookbynameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookbynameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookbynameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
