import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full',
  },
  {
    path: 'welcome',
    loadComponent: () => import('./pages/welcome/welcome.page').then(m => m.WelcomePage)
  },
  {
    path: 'events/:id',
    loadComponent: () => import('./pages/events/events.page').then(m => m.EventsPage)
  },
  {
    path: 'bookticket',
    loadComponent: () => import('./pages/bookticket/bookticket.page').then(m => m.BookticketPage)
  },
  {
    path: 'signin',
    loadComponent: () => import('./pages/signin/signin.page').then( m => m.SigninPage)
  },
  {
    path: 'signup',
    loadComponent: () => import('./pages/signup/signup.page').then( m => m.SignupPage)
  },
  {
    path: 'get-ticket',
    loadComponent: () => import('./pages/get-ticket/get-ticket.page').then( m => m.GetTicketPage)
  },
];
