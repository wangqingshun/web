import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { filter, map } from 'rxjs/operators';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private http:HttpClient) { }
  course;
  headers=new HttpHeaders();
  date=new Date();
  ngOnInit() {
    // this.http.get('/api/courses').pipe(map(data=>{
    //  
    //   return data;      
    //})).pipe(data=>{
    //  return data.id==3;
    //}).subscribe((data)=>{
    //   console.log(data);
    //   this.course=data;
    // }
    // )
    // this.http.post("/api/courses/3",null).subscribe((data)=>{
    //   console.log(data);
    // })
  }

}
