import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-doct',
  templateUrl: './doct.component.html',
  styleUrls: ['./doct.component.scss']
})
export class DoctComponent implements OnInit {

  jsonData!: any[];
  a:any={
    id: 4,
    name: "John Doessss",
    age: 90,
    email: "joh.com"
    
  }
  constructor(private http:HttpClient){}

  private dataUrl = 'assets/data.json';

  ngOnInit(): void {
    // this.getData();
    this.postData()
  }

  getData(){
     this.http.get<any[]>(this.dataUrl).subscribe((data) => {
        this.jsonData = data;
        console.log(this.jsonData);
        this.postData()
    });
  }

  postData(){
    // this.http.post<any[]>(this.dataUrl,this.a).subscribe((data)=>{
    //   console.log(data);
      
    // })

    // this.dataUrl.push()
    this.jsonData.push(this.a)
    console.log(this.jsonData);
    
  }

}
