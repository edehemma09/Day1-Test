import { Component, OnInit } from '@angular/core';
import { Sports } from '../../providers/sports';


@Component({
  selector: 'app-sports-ui',
  templateUrl: './sports-ui.component.html',
  styleUrls: ['./sports-ui.component.css']
})
export class SportsUiComponent implements OnInit {

  loading: boolean = false

  sportsuiRecords:Sports[] = [];
  


  constructor(
    private sports: Sports

  ){}
  ngOnInit(): void {
    this.getsportuiRecords();
  }

  getsportuiRecords(): void{
    this.loading = true;

    this.sports.retrieveSportRecords('Canada').subscribe({
      next:((res:any) => {
        this.loading = false;
        this.sports = res.football;
        console.log('response', res )
      }),
      
      error:((err:any) => {

        this.loading= false;
        console.log('error', err )

      }),

    })

  }

}
