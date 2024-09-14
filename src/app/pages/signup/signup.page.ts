import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonButtons, IonButton, IonBackButton, IonItem, IonIcon, IonText, IonInput } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { personOutline, mailOutline, lockClosedOutline } from 'ionicons/icons';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, IonInput, IonText, IonIcon, IonItem, IonBackButton, IonButton, IonButtons, IonLabel, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class SignupPage implements OnInit {

  constructor() {
    addIcons({ personOutline, mailOutline, lockClosedOutline });
  }

  ngOnInit() {
  }

  signup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  submit() {
    const { username, email, password } = this.signup.value
  }
}
