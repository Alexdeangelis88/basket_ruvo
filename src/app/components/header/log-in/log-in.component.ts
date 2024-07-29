import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { userDTO } from 'src/app/model/user/userDTO';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent implements OnInit {
  user = new userDTO();

  constructor(private fb : FormBuilder , private authService : AuthService){}

  loginForm = this.fb.group({
    username : new FormControl('',[Validators.required]),
    password : new FormControl('',[Validators.required])
  });

  ngOnInit() {  }

  onlogin(){
    this.user.username = this.loginForm.value.username ?? '';
    this.user.password = this.loginForm.value.password ?? '';

     if(this.loginForm.valid){
       this.authService.login(this.user).subscribe({
        next: (result)=> {
          localStorage.setItem('authToken' , result.token)
        },
        error(err) {
          
          alert(err.error)
          return;
        },
       });
     }
  }
}
