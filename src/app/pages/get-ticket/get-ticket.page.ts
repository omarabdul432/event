import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonButton, IonIcon, IonCard } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { downloadOutline } from 'ionicons/icons';

@Component({
  selector: 'app-get-ticket',
  templateUrl: './get-ticket.page.html',
  styleUrls: ['./get-ticket.page.scss'],
  standalone: true,
  imports: [IonCard, IonIcon, IonButton, IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class GetTicketPage implements OnInit {

  constructor() {
    addIcons({ downloadOutline });
  }

  ngOnInit() {
  }

}
