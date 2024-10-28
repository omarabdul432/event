import { inject, Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from '@angular/fire/auth';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private auth = inject(Auth)
  constructor() { }

  signin(email: string, password: string) {
    return from(signInWithEmailAndPassword(this.auth, email, password))
  }

  signup(username: string, email: string, password: string) {
    const promise = createUserWithEmailAndPassword(this.auth, email, password).then((res) => {
      updateProfile(res.user, { displayName: username })
    })
    return from(promise)
  }
}
