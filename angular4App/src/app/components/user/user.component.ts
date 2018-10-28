import { Component, OnInit } from "@angular/core";
import Address from "./user-interfaces";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  name: string;
  age: number;
  email: string;
  address: Address;
  hobbies: string[];
  isUpperCase: boolean;
  constructor() {
    console.log(`Constructor ran`);
  }

  ngOnInit() {
    console.log(`ngOnInit ran`);
    this.name = "Brian Ruff";
    this.age = 29;
    (this.email = "brff19@gmail.com"),
      (this.address = {
        street: "1116 N. Ransom St.",
        city: "Gastonia",
        state: "North Carolina"
      });
    this.hobbies = ["write code", "watch movies", "listen to music"];
    this.isUpperCase = false;
  }

  onClick() {
    if (this.isUpperCase) {
      this.name = this.name.toLowerCase();
      this.isUpperCase = !this.isUpperCase;
    } else {
      this.name = this.name.toUpperCase();
      this.isUpperCase = !this.isUpperCase;
    }
  }
  
  addHobby(hobby) {
    // console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby, i) {
    // console.log(hobby);
    for(let i = 0; i < this.hobbies.length; i++) {
      if(this.hobbies[i] === hobby) {
        this.hobbies.splice(i, 1);
        break;
      }
    }
  }
}
