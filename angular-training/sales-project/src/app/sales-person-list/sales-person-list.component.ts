import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person'

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrl: './sales-person-list.component.css'
})
export class SalesPersonListComponent implements OnInit{
  salesPersonList: SalesPerson[] = [];

  ngOnInit(): void {

    let min:number= Math.ceil(1000);
    let max:number=Math.floor(8000);
    let salesVolume:number;

    for (let index = 0; index <= 15; index++){

      salesVolume = Math.floor(Math.random() * (max - min +1) + min);

      this.salesPersonList.push (new SalesPerson("nombre"+index, "apellido"+index,`correo${index}`,salesVolume))
    }
  }

}
