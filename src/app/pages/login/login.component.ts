import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading: boolean =false
  loginForm : FormGroup;
  constructor(private formBuilder: FormBuilder) {
      this.loginForm = this.formBuilder.group({

        email:['', [Validators.required]],
        password: ['', Validators.required]
      })

   }

  ngOnInit(): void {
  }

}