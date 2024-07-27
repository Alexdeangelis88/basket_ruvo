import { Component, OnInit, signal } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { merge } from 'rxjs';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.css'],
})
export class ContattiComponent implements OnInit {
  form: FormGroup | any;


  errorMessage = signal('');
  title : string = "contatti";
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  send(): void {
    const { name, email, message } = this.form.value;
    alert(`Name: ${name}, Email: ${email}, Message: ${message} `);
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      name: this.formBuilder.control(null),
      email: this.formBuilder.control(null),
      message: this.formBuilder.control(null),
    });
  }


}
