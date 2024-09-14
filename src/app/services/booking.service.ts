import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  events: any[] = JSON.parse(localStorage.getItem('booking') || '[]')
  constructor() { }

  bookticket(event: any) {
    this.events.push({ ...event, quantity: 1 })
    localStorage.setItem("booking", JSON.stringify(this.events))
  }

  getbooking() {
    return this.events
  }

  delete(item: any) {
    this.events = this.events.filter((i) => i.id !== item.id)
    localStorage.setItem("booking", JSON.stringify(this.events))
  }

  increase(id: any) {
    let item = this.events.find((i) => i.id == id)
    if (item) {
      item.quantity++
    }
  }

  decrease(id: any) {
    let item = this.events.find((i) => i.id == id)
    if (item) {
      if (item.quantity > 0) {
        item.quantity--
      }
    }
  }

  getTotal() {
    return this.events.reduce((acc, event) => {
      return acc + event.price * event.quantity
    }, 0)
  }
}
