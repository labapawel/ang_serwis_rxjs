import { Component, OnInit } from '@angular/core';
import { ClickService } from '../click.service';

@Component({
  selector: 'app-cin',
  templateUrl: './cin.component.html',
  styleUrls: ['./cin.component.css']
})
export class CinComponent implements OnInit {

  _licznik: number;

  constructor(private click: ClickService) {


    this.click.obs().subscribe( (e) => {
      this._licznik = e;
    } );

   }

  ngOnInit() {
  }

}
