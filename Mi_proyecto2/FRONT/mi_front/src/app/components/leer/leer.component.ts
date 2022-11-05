import { Component, OnInit } from '@angular/core';
import { AnalizadoresService } from 'src/app/services/analizadores.service';

@Component({
  selector: 'app-leer',
  templateUrl: './leer.component.html',
  styleUrls: ['./leer.component.css']
})
export class LeerComponent implements OnInit {

  constructor(private analis:AnalizadoresService) { }

  ngOnInit(): void {
  }

}
