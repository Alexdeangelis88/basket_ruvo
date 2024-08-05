import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { messageDTO } from 'src/app/model/message/messageDTO';
import { userDTO } from 'src/app/model/user/userDTO';
import { AuthService } from 'src/app/services/auth.service';
import { MessageComponent } from 'src/app/shared/utilities/message/message.component';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent implements OnInit {
  user = new userDTO();
  messaggio = new messageDTO();
  test = "";

  constructor(private fb : FormBuilder , 
    private authService : AuthService , 
    public dialogRef: MatDialogRef<LogInComponent>,
    private dialog: MatDialog){}

  loginForm = this.fb.group({
    username : new FormControl('',[Validators.required]),
    password : new FormControl('',[Validators.required])
  });

  ngOnInit() {  }

  onlogin(){
    this.user.username = this.loginForm.value.username ?? '';
    this.user.password = this.loginForm.value.password ?? '';

     if(this.loginForm.valid){
      debugger
       this.authService.login(this.user).subscribe({
        next: (result)=> {
          localStorage.setItem('authToken' , result.token);
          alert("Login effettuato");
          /*this.messaggio.messaggio = "Login effettuato";
          this.messaggio.tipo = 1;      
          this.dialog.open(MessageComponent, {
            maxHeight: 600,
            maxWidth: 600,
            data: this.messaggio
          });*/    
        },
        error :(err) => {  
          /*
          this.messaggio.messaggio = err.error;
          this.messaggio.tipo = 2;    
          this.dialog.open(MessageComponent, {
            maxHeight: 600,
            maxWidth: 600,
            data: this.messaggio
          }); 
          */        
          alert(err.error);
        },
       });
     }


     this.dialogRef.close("test");
  }
}
