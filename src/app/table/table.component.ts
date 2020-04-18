import { 
  Component, 
  OnInit, 
  ViewChild, 
  ElementRef, 
  ContentChild,
  AfterViewInit,
  AfterViewChecked,
  AfterContentInit,
  AfterContentChecked
 } from '@angular/core';

enum Gender {Male, Female}

interface User {
  name: string;
  scores: number;
  city: string;
  gender: Gender
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterContentInit,  AfterContentChecked, AfterViewChecked, AfterViewInit {
  @ViewChild('caption', {static: false}) caption: ElementRef;
  @ContentChild('additData', {static: false}) addData: ElementRef;
  users: User[] = [
    {
      name: "Tom",
      scores: 1250,
      city: "Kharkiv",
      gender: Gender.Male
    },
    {
      name: "Alo",
      scores: 1300,
      city: "Kyiv",
      gender: Gender.Female
    }
  ] 
  constructor() {
  }


  ngAfterContentChecked() {
    //console.log("ContentChild", this.addData);
    
  }

  ngAfterContentInit() {
    //console.log("ContentChild", this.addData);
  }

  ngOnInit(): void {
    //console.log("ViewChild--", this.caption);   
    //console.log("ContentChild--", this.addData); 
  }

  ngAfterViewChecked() {
    //console.log("ViewChild", this.caption);
  }

  ngAfterViewInit() {
    //console.log("ViewChild", this.caption);
  }

}
