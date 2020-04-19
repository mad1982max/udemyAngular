import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  date: string;

  refreshTitle(data: string) {
    this.date = data;    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
