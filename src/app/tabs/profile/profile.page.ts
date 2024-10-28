import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonButtons, IonBackButton, IonIcon, IonCard, IonCardContent, IonCardHeader, IonThumbnail, IonCardTitle, IonText, IonAvatar, IonLabel } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logOutOutline, personCircleOutline, chevronForwardOutline, cashOutline } from 'ionicons/icons';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [IonLabel, IonAvatar, IonText, IonCardTitle, IonCardHeader, IonCardContent, IonThumbnail, IonCard, IonIcon, IonBackButton, IonButtons, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ProfilePage implements OnInit {

  constructor() {
    addIcons({ logOutOutline, personCircleOutline, chevronForwardOutline, cashOutline });
  }

  ngOnInit() {
  }

  logout() {
    alert('Are you sure')
  }
}
