import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)), provideFirebaseApp(() => initializeApp({ "projectId": "imageupload-dbc81", "appId": "1:311033150495:web:5bfd803e065f97428ce92a", "storageBucket": "imageupload-dbc81.appspot.com", "apiKey": "AIzaSyDmG3fPXCHvOLYErHLnV7PS2A31eqeuxxY", "authDomain": "imageupload-dbc81.firebaseapp.com", "messagingSenderId": "311033150495" })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()),
  ],
});
