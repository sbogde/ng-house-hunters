import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      details works! {{ housingLocationId }}
    </p>
  `,
  styleUrls: ['./details.component.css']
})

export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingLocationId: string | null = '';

  constructor() {
    this.housingLocationId = this.route.snapshot.paramMap.get('id');
    console.log('Details for housing location with id:', this.housingLocationId);
  }
}
