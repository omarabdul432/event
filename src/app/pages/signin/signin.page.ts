import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonInput, IonIcon, IonButton, IonText, IonBackButton, IonButtons, IonLabel, IonFab, IonFabButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { lockClosedOutline, mailOutline, personOutline } from 'ionicons/icons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, IonFabButton, IonFab, IonLabel, IonButtons, IonBackButton, IonText, IonButton, IonIcon, IonInput, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class SigninPage implements OnInit {

  constructor() {
    addIcons({ mailOutline, lockClosedOutline });
  }

  ngOnInit() {
  }

  signin = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  submit() {
    const email = this.signin.value.email
    const password = this.signin.value.password
    console.log(this.signin.value)
  }

}
