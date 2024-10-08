import { Component } from '@angular/core';

@Component({
  selector: 'app-phone-contact-list',
  templateUrl: './phone-contact-list.component.html',
  styleUrl: './phone-contact-list.component.css'
})
export class PhoneContactListComponent {

  phonecontact: string [] = ["09123456789", "09234567891"];
  newPhonecontact: string = "";

  addPhonecontact(){
    if(this.newPhonecontact.trim()){
      this.phonecontact.push(this.newPhonecontact);
      this.newPhonecontact = "";
    }
  }
  deletePhonecontact(phonecontact:string){
    this.phonecontact = this.phonecontact.filter( p => p !== phonecontact); //delete
  }
}
