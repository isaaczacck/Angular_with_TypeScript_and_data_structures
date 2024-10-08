import { Component } from '@angular/core';

@Component({
  selector: 'app-laptop-specification-list',
  templateUrl: './laptop-specification-list.component.html',
  styleUrls: ['./laptop-specification-list.component.css']
})
export class LaptopSpecificationListComponent {
  // Sample data for laptops with specifications
  laptops: { brand: string; specs: string }[] = [
    { brand: 'Dell XPS 13', specs: 'Intel Core i7, 16GB RAM, 512GB SSD, Intel Iris Xe, 13.4-inch FHD+' },
    { brand: 'MacBook Pro', specs: 'Apple M2, 16GB RAM, 512GB SSD, 13.3-inch Retina Display, 20-hour battery life' },
    { brand: 'CHUWI CoreBook XPro', specs: 'Intel Core i5-8259U, 8GB RAM, 512GB SSD, Intel Iris Plus, 15.6-inch IPS' },
    { brand: 'MSI GS66 Stealth', specs: 'Intel Core i7-11800H, 16GB RAM, 1TB SSD, NVIDIA RTX 3070, 15.6-inch FHD 240Hz' },
  ];

  newLaptopBrand: string = '';
  newLaptopSpecs: string = '';

  // Add new laptop to the list
  addLaptop() {
    if (this.newLaptopBrand.trim() && this.newLaptopSpecs.trim()) {
      this.laptops.push({
        brand: this.newLaptopBrand,
        specs: this.newLaptopSpecs,
      });
      this.resetInputs();
    }
  }

  // Remove or delete a laptop from the list
  deleteLaptop(laptop: { brand: string; specs: string }) {
    this.laptops = this.laptops.filter(l => l.brand !== laptop.brand);
  }

  // Reset input fields
  resetInputs() {
    this.newLaptopBrand = '';
    this.newLaptopSpecs = '';
  }
}
