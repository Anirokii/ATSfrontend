import { Component, OnInit,OnDestroy } from '@angular/core';
import { Person } from 'src/app/modals/actors/person';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements  OnInit, OnDestroy {
  focus  :unknown;
  focus1 :unknown;
  focus2 :unknown;
  focus3 :unknown;
  focus4 :unknown;

  user: Person;

  constructor(private personService: PersonService) {}

  onSubmit() {
    this.personService.signup(this.user).subscribe();
  }

  linkedinSignup() {
    this.personService.linkedinSignup();
  }

  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("register-page");

    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    signUpButton!.addEventListener('click', () => {
      container!.classList.add('right-panel-active');
    });

    signInButton!.addEventListener('click', () => {
      container!.classList.remove('right-panel-active');
    });
  }
  ngOnDestroy(){
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("register-page");
  }
}
