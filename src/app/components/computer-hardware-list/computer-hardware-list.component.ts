import { Component } from '@angular/core';

@Component({
  selector: 'app-computer-hardware-list',
  templateUrl: './computer-hardware-list.component.html',
  styleUrls: ['./computer-hardware-list.component.css']
})
export class ComputerHardwareListComponent {
  hardware: string[] = ["CPU", "Motherboard", "RAM"];
  newHardware: string = '';

  addHardware() {
    if (this.newHardware.trim()) {
      this.hardware.push(this.newHardware);
      this.newHardware = '';
    }
  }

  deleteHardware(item: string) {
    this.hardware = this.hardware.filter(h => h !== item);
  }
}
