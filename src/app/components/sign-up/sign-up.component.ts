import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements  OnInit, OnDestroy {
  focus  :unknown;
  focus1 :unknown;
  focus2 :unknown;
  focus3 :unknown;
  focus4 :unknown;

  constructor() {}

  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("register-page");

    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    signUpButton!.addEventListener('click', () => {
      container!.classList.remove('right-panel-active');
    });

    signInButton!.addEventListener('click', () => {
      container!.classList.add('right-panel-active');
    });
  }
  ngOnDestroy(){
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("register-page");
  }
}