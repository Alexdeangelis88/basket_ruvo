import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { messageDTO } from 'src/app/model/message/messageDTO';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent implements OnInit {

  constructor( @Inject(MAT_DIALOG_DATA) public data: messageDTO ) { } 

  ngOnInit(): void {
    debugger
    console.log( this.data.messaggio );
  }
  

}
