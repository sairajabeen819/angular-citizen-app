import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-citizen-radios',
  templateUrl: './citizen-radios.component.html',
  styleUrls: ['./citizen-radios.component.scss']
})
export class CitizenRadiosComponent implements OnInit {
  toggleBool = true;
  checkboxes = [
    {label: 'I forgot my password'},
    {label: 'I am locked out of my account'},
    {label: 'I haven\'t received a One-Time Passcode (OTP)'}
  ];

  constructor() {
  }

  // tslint:disable-next-line:typedef
  changeEvent(event: Event) {
    // @ts-ignore
    this.toggleBool = !event.target.checked;
  }

  clearRadios(): void {
    this.toggleBool = true;
  }
  ngOnInit(): void {
  }

}
