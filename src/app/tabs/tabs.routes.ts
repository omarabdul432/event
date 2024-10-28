import { Routes } from "@angular/router";
import { TabsPage } from "./tabs.page";
import { WelcomePage } from "./welcome/welcome.page";

export const routes: Routes = [
    {
        path: '',
        component: TabsPage,
        children: [
            {
                path: 'welcome',
                loadComponent: () => import('./welcome/welcome.page').then(m => m.WelcomePage)
            },
            {
                path: 'home',
                loadComponent: () => import('../home/home.page').then((m) => m.HomePage),
            },
            {
                path: 'events/:id',
                loadComponent: () => import('./events/events.page').then(m => m.EventsPage)
            },
            {
                path: 'bookticket',
                loadComponent: () => import('./bookticket/bookticket.page').then(m => m.BookticketPage)
            },
            {
                path: 'signin',
                loadComponent: () => import('./signin/signin.page').then(m => m.SigninPage)
            },
            {
                path: 'signup',
                loadComponent: () => import('./signup/signup.page').then(m => m.SignupPage)
            },
            {
                path: 'get-ticket',
                loadComponent: () => import('./get-ticket/get-ticket.page').then(m => m.GetTicketPage)
            },
            {
                path: 'get-ticket/:id',
                loadComponent: () => import('./get-ticket/get-ticket.page').then(m => m.GetTicketPage)
            },
            {
                path: 'profile',
                loadComponent: () => import('./profile/profile.page').then(m => m.ProfilePage)
            }
        ]
    },
]