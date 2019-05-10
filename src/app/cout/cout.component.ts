import { Component, OnInit } from '@angular/core';
import { ClickService } from '../click.service';

@Component({
  selector: 'app-cout',
  templateUrl: './cout.component.html',
  styleUrls: ['./cout.component.css']
})
export class CoutComponent implements OnInit {

  constructor(private click: ClickService) { }

  ngOnInit() {
  }

  dodaj()
   {
     this.click.dodaj();
   }

}
