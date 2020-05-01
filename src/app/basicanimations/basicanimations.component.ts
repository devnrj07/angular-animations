import { Component, OnInit } from '@angular/core';
import { TransformVisitor } from '@angular/compiler/src/render3/r3_ast';
import { transition, trigger, state, style, animate } from '@angular/animations';

@Component({
  selector: 'app-basicanimations',
  templateUrl: './basicanimations.component.html',
  styleUrls: ['./basicanimations.component.css'],
  animations:[
    trigger('changeDivSize',[
      state('initial', style({
        backgroundColor : 'blue',
        width: `100px`,
        height : '100px',
      })),
      state('final',style({
        backgroundColor:'cyan',
        width: '200px',
        height : '200px'
      })),
      transition('initial=>final', animate('1200ms')),
      transition('final=>initial', animate('1000ms'))
    ]),
    trigger('balloonEffect',[
      state('initial',style({
        backgroundColor:'black',
        transform:'scale(1)'
      })),
      state('final', style({
        backgroundColor: 'grey',
        transform: 'scale(1.5)'
      })),
      transition('final=>initial', animate('1s')),
      transition('initial=>final',animate('1.5s'))
    ]),
    trigger('fadeInOut',[
      state('void', style({
        opacity : 0
      })),
      transition('void <=> *',animate(1000))
    ]),
    trigger('EnterLeave', [
      state('flyIn', style({ transform: 'translateX(0)' })),
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('1s 300ms ease-in')
      ]),
      transition(':leave', [
        animate('0.3s ease-out', style({ transform: 'translateX(100%)' }))
      ])
    ]),
  ]

}) 
export class BasicanimationsComponent implements OnInit {
  currentState = 'initial';
  listItems = [];
  list_order = 1;
  
  constructor() { }

  ngOnInit() {
  }

  changeState(){
    this.currentState = this.currentState === 'initial'? 'final':'initial'
  }

  addItem(){
    let item = "ListItem" + this.list_order;
    this.list_order++;
    this.listItems.push(item);
  } 

  removeItem(){
    this.listItems.length -= 1 ;
  }

}
