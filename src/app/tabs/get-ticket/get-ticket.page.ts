import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonButton, IonIcon, IonCard, IonCardContent, IonCardHeader, IonList, IonLabel, IonImg, IonText } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { barcode, downloadOutline } from 'ionicons/icons';
import { QRCodeModule } from 'angularx-qrcode';
import { BookingService } from 'src/app/services/booking.service';
import { EventsService } from 'src/app/services/events.service';
import { ActivatedRoute } from '@angular/router';
import { Events } from 'src/app/model/events';
import * as JsBarcode from 'jsbarcode'

@Component({
  selector: 'app-get-ticket',
  templateUrl: './get-ticket.page.html',
  styleUrls: ['./get-ticket.page.scss'],
  standalone: true,
  imports: [IonText, IonImg, IonLabel, IonList, IonCardHeader, IonCardContent, IonCard, IonIcon, IonButton, IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, QRCodeModule]
})
export class GetTicketPage implements OnInit {

  constructor(private events: EventsService, private route: ActivatedRoute) {
    addIcons({ downloadOutline });
  }
  event!: Events
  itemModel: any = {}
  showBarCode: boolean = false

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')
    if (id) {
      this.getticket(id)
    }
    console.log('event', this.itemModel);
    console.log(this.event);



  }
  getticket(id: string) {
    const events = this.events.getEvents()
    this.event = events.find(event => event.id === id)!
  }

  getBarcodeData(item: any) {
    // this.itemModel = this.event.id 
    this.showBarCode = true
    setTimeout(() => {
      this.getBarCode(item.barcode)
      console.log("bar", item.barcode);

    }, 500)
  }

  getBarCode(barcode: string) {
    JsBarcode("#barcode", barcode, {
      // format: "pharmacode",
      lineColor: "#0aa",
      width: 4,
      height: 100,
      displayValue: false
    })
  }
}
