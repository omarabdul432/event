import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonItem, IonLabel, IonRow, IonIcon, IonCol, IonCard, IonList, IonListHeader, IonFooter, IonButton, IonFab, IonFabButton } from '@ionic/angular/standalone';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Events } from 'src/app/model/events';
import { EventsService } from 'src/app/services/events.service';
import { addIcons } from 'ionicons';
import { calendarOutline, locationOutline, heart, heartOutline } from 'ionicons/icons';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
  standalone: true,
  imports: [RouterLink, IonFabButton, IonFab, IonButton, IonFooter, IonListHeader, IonList, IonCard, IonCol, IonIcon, IonRow, IonLabel, IonItem, IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class EventsPage implements OnInit {

  constructor(private route: ActivatedRoute, private events: EventsService, private router: Router, private booking: BookingService) {
    addIcons({ calendarOutline, locationOutline, heartOutline });
  }

  event!: Events

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')
    console.log(id)
    if (id) {
      this.getEvent(id)
    }
  }
  getEvent(id: string) {
    const events = this.events.getEvents()
    this.event = events.find(event => event.id === id)!
  }

  bookTicket(event: any) {
    this.router.navigateByUrl('/bookticket')
    this.booking.bookticket(event)
  }
}
