import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {
  currentUserId = 1;  
  userdetail: any;

  constructor(private _activatedRoute: ActivatedRoute, private _http: HttpClient) {
    this.currentUserId = this._activatedRoute.snapshot.params["id"];    
   }

  ngOnInit(): void {
    this.GetDataById();
  }  

  GetDataById() {
    this._http.get(`https://6265c28edbee37aff9a88b5a.mockapi.io/UserDetails/${this.currentUserId}`).subscribe((data) => {
      this.userdetail = data;
      })
  }

}
