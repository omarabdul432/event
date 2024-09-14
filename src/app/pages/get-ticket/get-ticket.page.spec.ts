import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GetTicketPage } from './get-ticket.page';

describe('GetTicketPage', () => {
  let component: GetTicketPage;
  let fixture: ComponentFixture<GetTicketPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GetTicketPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
