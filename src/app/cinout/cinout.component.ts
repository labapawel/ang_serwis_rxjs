import { ClickService } from './../click.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cinout',
  templateUrl: './cinout.component.html',
  styleUrls: ['./cinout.component.css']
})
export class CinoutComponent implements OnInit {

  _licznik: number;

  constructor(private click: ClickService) {


    this.click.obs().subscribe( (e) => {
      this._licznik = e;
    } );

   }

   dodaj()
   {
     this.click.dodaj();
   }

  ngOnInit() {
  }

}
