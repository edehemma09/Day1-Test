import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './app.component.scss']
})
export class AppComponent {
  title = 'Angular Day1-Test';
  description : string = 'Angular class takung place @pmt';
  isClassEnded: boolean = false;
  numberOfStudent:number= 7;
  choiceOfJob:String='Best job is to destroy';
  temprament:string='Aggressive & Clown';
  // This begins the two way binding
  userName: any='';
  // Structural directive
  showMenu: boolean = false;


toggleMenu(): void{
  this.showMenu = !this.showMenu;
}

}
