import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  userForm: FormGroup;
  selectedState: any;
  countryDetails = [
    {
      name: "Jharkhand",
      country: "India"
    },
    {
      name: "New Delhi",
      country: "India"
    },
    {
      name: "Uttrakhand",
      country: "India"
    },
    {
      name: "Himachal Pradesh",
      country: "India"
    },
    {
      name: "New York",
      country: "America"
    },
    {
      name: "Seatle",
      country: "America"
    }
  ]

  constructor(private _http: HttpClient) {
    this.userForm = new FormGroup({
      name: new FormControl("", [Validators.required, Validators.minLength(3)]),
      email: new FormControl("", [Validators.required, Validators.email]),
      state: new FormControl("", [Validators.required]),
      country: new FormControl("", [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  PostData() {
    console.log(this.userForm.value)
    if (this.userForm.valid) {
      this._http.post("https://6265c28edbee37aff9a88b5a.mockapi.io/UserDetails",this.userForm.value).subscribe((data) => {
        alert("Data Saved!")
      })
    } else {
      alert("invalid form")
    }
  }

  SwitchState(e: any) {
    let states = this.countryDetails.filter(x => x.country == e.target.value);
    this.selectedState = states;
  }

}
