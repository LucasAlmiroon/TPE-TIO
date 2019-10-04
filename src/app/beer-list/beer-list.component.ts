import { Component, OnInit } from '@angular/core';
import {Beer} from './beer';
import {BEERS} from './mocks';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {

	public titulos: any = {
	name: 'Nombre',
	description: 'Descripcion',
	price: 'Precio',
	imagen: 'Imagen',
	stock: 'Stock',
  carrito: 'Al carrito',
  alcohol: 'Alcohol',
  ibu: 'Ibu',
  color: 'Color',
  og: 'Og',
  amargor: 'Amargor',
  };

  public beers: Beer [];

  constructor() { 
  }

  masCerveza (beer){
    beer.stock++;
  }
  menosCerveza (beer){
    beer.stock--;
  }
  
  ngOnInit() {
  this.beers = BEERS;
  }

}
