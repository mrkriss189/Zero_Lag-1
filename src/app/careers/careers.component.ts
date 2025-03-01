import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-careers',
  standalone: false,
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.scss'
})
export class CareersComponent {

  constructor(private router: Router) {}

  signup(){
    this.router.navigate(['/signuppage']);
  }
}
