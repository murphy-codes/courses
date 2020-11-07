import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  showDetails = false;
  showHide = 'Display';
  toggles = [];

  constructor() { }

  ngOnInit(): void {
  }

  onToggleDetails() {
    let ts = new Date();
    // this.toggles.push({id: this.toggles.length+1, timestamp: ts.toUTCString()});
    this.toggles.push(ts.toUTCString());
    this.showDetails = !this.showDetails;
    this.showHide = this.showDetails ? 'Hide' : 'Display';
  }

}
