import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private route: Router) { }

  city = '';

  citySelect(option: string) {
    this.city = option;
  }

  onButtonClick() {
    console.log('Button Clicked!');
    console.log('City is ' + this.city);
    this.route.navigate([this.city]);
  }
}
