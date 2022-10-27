import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor( private service:UserService) { }

  ngOnInit(): void {
  }

  getdata(){
      //retorne la informacion
      this.service.getdata().subscribe(
        (res)=>{
          console.log(res)
        },
        (err)=>{
          console.log(err)
        }
      )
  }
  setdata(){
    //traer
    var json = {
      incremental:30
    }
    this.service.setdata(json).subscribe(
      (res:any)=>{
        alert("listo!")
        //insertar lo que devuelva el servidor 
        alert(res.incre)
      },
      (err)=>{
        console.log(err)
      }
    )
  }

}
