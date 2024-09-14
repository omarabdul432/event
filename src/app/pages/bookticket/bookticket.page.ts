import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonList, IonItem, IonThumbnail, IonLabel, IonButton, IonIcon, IonCardHeader, IonCardTitle, IonCardContent, IonBackButton, IonText, IonRow, IonCol, IonButtons, IonFooter } from '@ionic/angular/standalone';
import { Events } from 'src/app/model/events';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from 'src/app/services/events.service';
import { BookingService } from 'src/app/services/booking.service';
import { addIcons } from 'ionicons';
import { trashBinOutline, trashOutline, addCircleOutline, removeCircleOutline } from 'ionicons/icons';

@Component({
  selector: 'app-bookticket',
  templateUrl: './bookticket.page.html',
  styleUrls: ['./bookticket.page.scss'],
  standalone: true,
  imports: [IonFooter, IonButtons, IonCol, IonRow, IonText, IonBackButton, IonItem, IonList, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonThumbnail, IonLabel, IonButton, IonIcon, IonCardHeader, IonCardContent, IonCardTitle]
})
export class BookticketPage implements OnInit {
  // book!: Events
  constructor(private route: ActivatedRoute) {
    addIcons({ trashOutline, removeCircleOutline, addCircleOutline });
  }

  book = inject(BookingService)
  ngOnInit() {
    this.book.getbooking()
    console.log(this.book)
  }

  increase(id: any) {
    this.book.increase(id)
  }

  decrease(id: any) {
    this.book.decrease(id)
  }

  delete(item: any) {
    this.book.delete(item)
  }
}
