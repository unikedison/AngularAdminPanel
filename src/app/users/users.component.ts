import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userDetails : any;

  constructor(private _http: HttpClient) { 
    
  }

  ngOnInit(): void {
    this.GetData();
  }

  GetData() {
    this._http.get("https://6265c28edbee37aff9a88b5a.mockapi.io/UserDetails").subscribe((data) => {
        this.userDetails = data;
      })
  }
}
