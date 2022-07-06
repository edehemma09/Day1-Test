import { Component, OnInit } from '@angular/core';
import { Sports } from '../../providers/sports';
import { sportsuiServices } from '../../services/sport-ui.service';

@Component({
  selector: 'app-sports-ui',
  templateUrl: './sports-ui.component.html',
  styleUrls: ['./sports-ui.component.css']
})
export class SportsUiComponent implements OnInit {

  loading: boolean = false

  sportsuiRecords:Sports[] = [];


  constructor(
    private sportsuiServices: sportsuiServices

  ){}
  ngOnInit(): void {
    this.getsportuiRecords();
  }

  getsportuiRecords(): void{


  }

}
