import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  

  constructor() { }
  

  ngOnInit(): void {}
    works= [
      {'id':1,'name':'Social Work','description':'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, quaerat?','image':'../../assets/android-chrome-192x192.png'},
      {'id':2,'name':'Educational Work','description':'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, quaerat?','image':'../../assets/android-chrome-192x192.png'},
      {'id':3,'name':'Fort Trek','description':'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, quaerat?','image':'../../assets/android-chrome-192x192.png'},
      {'id':4,'name':'Motivational Short Film','description':'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, quaerat?','image':'../../assets/android-chrome-192x192.png'},
    ]
    
  
  
}


