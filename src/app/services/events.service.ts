import { Injectable } from '@angular/core';
import { Events } from '../model/events';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor() { }

  events: Events[] = [
    {
      id: '1',
      name: 'Comedy Gala Night',
      date: '2024-07-19',
      location: 'New York, USA',
      categoryid: '3',
      image: 'assets/imgs/gala.jpg',
      description: 'A night filled with laughter featuring top comedians John Mulaney, Ali Wong, and Hassan Minhaj at The Comedy Club in New York City. Perfect for those looking to enjoy some top-notch stand-up comedy.',
      price: '500'
    },
    {
      id: '4',
      name: 'Sunburn Festival',
      date: '2024-12-27',
      location: 'Goa, India',
      categoryid: '1',
      image: 'assets/imgs/sunburn.jpg',
      description: 'India’s premier electronic music festival, Sunburn Festival in Goa, brings top international DJs like Martin Garrix, DJ Snake, and The Chainsmokers for an electrifying three-day event. A must-attend for EDM fans.',
      price: '300'
    },
    {
      id: '2',
      name: 'A.R. Rahman Live',
      date: '2024-11-05',
      location: 'Chennai, India',
      categoryid: '1',
      image: 'assets/imgs/rahman.jpg',
      description: 'Experience the magical music of A.R. Rahman live in Chennai. A.R. Rahman, the Oscar-winning composer, will perform his greatest hits in an unforgettable concert.',
      price: '800'
    },
    {
      id: '3',
      name: 'Shahrukh Khan Show',
      date: '2024-10-10',
      location: 'Mumbai, India',
      categoryid: '2',
      image: 'assets/imgs/srk.jpg',
      description: 'Join the King of Bollywood, Shahrukh Khan, in Mumbai for a spectacular live show. Expect a night of glamour, entertainment, and memorable performances from one of India’s biggest stars.',
      price: '600'
    },
    {
      id: '5',
      name: 'Arijit Singh Concert',
      date: '2024-09-15',
      location: 'Kolkata, India',
      categoryid: '1',
      image: 'assets/imgs/arijit.jpg',
      description: 'Catch the soulful voice of Arijit Singh live in concert in Kolkata. The renowned playback singer will perform his most beloved songs, promising an evening of beautiful melodies and heartfelt lyrics.',
      price: '750'
    },
  ]

  getEvents() {
    return this.events
  }

  category(id: any) {
    return this.events.filter((i) => i.categoryid === id)
  }
}
