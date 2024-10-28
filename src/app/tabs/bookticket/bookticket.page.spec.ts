import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookticketPage } from './bookticket.page';

describe('BookticketPage', () => {
  let component: BookticketPage;
  let fixture: ComponentFixture<BookticketPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BookticketPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
