import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile-app-list',
  templateUrl: './mobile-app-list.component.html',
  styleUrl: './mobile-app-list.component.css'
})
export class MobileAppListComponent {

  apps:string [] =["Facebook", "Messenger", "Instagram"];
  newApp:string = "";

  addMobileapp(){
    if(this.newApp.trim()){
      this.apps.push(this.newApp);
      this.newApp = "";
    }
  }
  deleteMobileapp(apps:string){
    this.apps = this.apps.filter( a => a !== apps);
  }
}
