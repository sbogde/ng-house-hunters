import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';  

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article *ngIf="housingLocation">
      <img [src]="housingLocation?.photo" alt="Photo of {{ housingLocation.name }}" class="listing-photo" />
      
      <section class="listing-description">
          <h2 class="listing-heading">{{ housingLocation?.name }}</h2>
          <p class="list-location">{{ housingLocation.city }}, {{ housingLocation.state }}</p>
      </section>

      <section class="listing-features">
        <h2 class="section-heading">Features</h2>
        <ul>
          <li>Available Units: {{ housingLocation.availableUnits }}</li>
          <li>Wifi: {{ housingLocation.wifi ? 'Yes' : 'No' }}</li>
          <li>Laundry: {{ housingLocation.laundry ? 'Yes' : 'No' }}</li>
        </ul>
      </section>

      <section class="listing-apply">
        <h2 class="section-heading">Aplly now to live here</h2>
      </section>

    </article>
  `,
  styleUrls: ['./details.component.css']
})

export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingLocationId: string | null = '';
  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;

  constructor() {
    const housingLocationId = this.route.snapshot.paramMap.get('id');
    // console.log('Details for housing location with id:', this.housingLocationId);
    this.housingLocation= this.housingService.getHousingLocationById(Number(housingLocationId));  }
}
