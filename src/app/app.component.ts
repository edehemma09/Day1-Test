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
  dishes: string[]=['Beans and plaintain', 'Beans & Plantain','Bread, groundnut & Coke',
  'Nsala & Pounded Yam',
  'Bread and Coconut',
  'Fio-Fio & Yam',
  'Noodles and Egg',
  'Abacha',
  'Okro Soup',
  'Fried Plaintain & Fried Potatoe',
  'Okpa and Coke']
  // dishes:Array<string>


toggleMenu(): void{
  this.showMenu = !this.showMenu;
}

}
