import { Component, OnInit } from "@angular/core";
import Address from "./user-interfaces";
import Posts from "./user-interfaces";
import { DataService } from "../../services/data.service";


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
  posts: Posts[];
  isEdit: boolean = false;

  constructor(private dataService: DataService) {}

  ngOnInit() {
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
    this.dataService.getPosts().subscribe(posts => {
      // console.log(posts);
      this.posts = posts;
      console.log(this.posts);
    });
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

  addHobby(hobby: string) {
    // console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby: string, i: number) {
    // console.log(hobby);
    for (let i = 0; i < this.hobbies.length; i++) {
      if (this.hobbies[i] === hobby) {
        this.hobbies.splice(i, 1);
        break;
      }
    }
  }

  toggleEdit() {
    this.isEdit = !this.isEdit;
  }
}
