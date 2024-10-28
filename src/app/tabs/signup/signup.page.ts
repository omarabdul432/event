import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonButtons, IonButton, IonBackButton, IonItem, IonIcon, IonText, IonInput } from '@ionic/angular/standalone';
import { Router, RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { personOutline, mailOutline, lockClosedOutline } from 'ionicons/icons';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, IonInput, IonText, IonIcon, IonItem, IonBackButton, IonButton, IonButtons, IonLabel, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class SignupPage implements OnInit {

  constructor(private auth: AuthService, private router: Router) {
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
    const username: any = this.signup.value.username
    const email: any = this.signup.value.email
    const password: any = this.signup.value.password


    if (this.signup.valid) {
      this.auth.signup(username, email, password).subscribe(() => {
        this.router.navigateByUrl('/signin')
      })
    }
    this.signup.reset
  }
}
