import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonIcon, IonText, IonFab, IonFabButton, IonRow, IonCol, IonInput, IonSearchbar, IonicSlides, IonList, IonListHeader } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { locateOutline, notificationsOutline, optionsOutline, locationOutline, arrowForwardOutline } from 'ionicons/icons'
import { EventsService } from '../services/events.service';
import { Events } from '../model/events';
import { Category } from '../model/category';
import { CategoryService } from '../services/category.service';
import { DatePipe } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Geolocation } from '@capacitor/geolocation'
import { Capacitor, PermissionState } from '@capacitor/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [RouterLink, DatePipe, IonListHeader, IonList, IonSearchbar, IonInput, IonCol, IonRow, IonFabButton, IonFab, IonText, IonIcon, IonLabel, IonItem, IonHeader, IonToolbar, IonTitle, IonContent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePage implements OnInit {

  swiperModules = [IonicSlides]
  currentevents: Events[] = []
  upcomingevents: Events[] = []
  categories: Category[] = []

  constructor(private event: EventsService, private category: CategoryService, private router: Router) {
    addIcons({ locateOutline, notificationsOutline, optionsOutline, locationOutline, arrowForwardOutline });
  }

  ngOnInit(): void {
    this.currentevents = this.event.getEvents()
    console.log(this.currentevents)

    this.upcomingevents = this.event.getEvents()

    this.categories = this.category.getCategory()
    console.log(this.categories);

  }

  categorylist(id: any) {
    this.currentevents = this.event.category(id)
  }



  async getLocation() {
    //   const getPlatform = Capacitor.getPlatform()
    //   console.log("platform", getPlatform)
    //   if (getPlatform === 'web') {
    //     const permissionStatus = await Geolocation.checkPermissions()
    //     console.log(permissionStatus)
    //     if (permissionStatus.location != 'granted') {
    //       const requestStatus = await Geolocation.requestPermissions()
    //       console.log(requestStatus);

    //     }
    //   }
    // }

    const request_perm = async () => {
      try {
        const stuff = await Geolocation.requestPermissions();
        console.log(stuff, "stuff");
      } catch (err) {
        console.log(err, "err");
      }
    };


    // if (Capacitor.getPlatform() === 'web') {
    //   // if (PermissionStatus.)
    //   const permissionStatus = await Geolocation.checkPermissions()
    //   console.log('status', permissionStatus.location)


    // if (permissionStatus.location != 'granted') {
    //   const requestStatus = await Geolocation.requestPermissions()
    //   console.log('request', requestStatus);

    // }
    // if (navigator.geolocation) {
    //   const getCurrentlocation = await Geolocation.getCurrentPosition()
    //   console.log('current location', getCurrentlocation)
    // }
    //   }
    //   async () => {
    //     try {
    //       const stuff = await Geolocation.requestPermissions();
    //       console.log(stuff, "stuff");
    //     } catch (err) {
    //       console.log(err, "err");
    //     }
    //   };
    // }
  }
}
