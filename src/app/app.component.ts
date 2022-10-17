import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Pets';

  constructor(private http: HttpClient){}

  foxes: any

  ngOnInit(): void {
    this.http.get('https://randomfox.ca/floof/')
    .subscribe(
      data=>{
        this.foxes = data;
}
    )
    }
  }
