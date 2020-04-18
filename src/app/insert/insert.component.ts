import { 
  Component, 
  OnInit, 
  Input, 
  Output, 
  EventEmitter,
  OnChanges,
  SimpleChanges,

 } from '@angular/core';
import { FormBuilder, FormGroup, Validators }   from '@angular/forms';

enum Genders {Male, Female};

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.scss']
})
export class InsertComponent implements OnInit, OnChanges {
  @Input() title: string;
  @Output("userAdded") onRefreshData = new EventEmitter<string>();
  userCities: string[] = ["Kyiv", "Kharkiv"];
  genders: string[] = [Genders[0], Genders[1]];
  gender: Genders;
  name: string;
  scores: number;
  city: string;
  checkoutForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
   
    this.checkoutForm = this.formBuilder.group({
      name: [null, [Validators.required]],
      gender: "unknown",
      scores: [null, [Validators.required]],
      city: "unknown",
    });    
  }

  onSubmit(customerData) {
    const newUser = customerData.value;
    let time = new Date().toDateString();
    this.onRefreshData.emit(time);    
  }

  ngOnInit(): void {
    //console.log('onInit');    
  }

  ngOnChanges(changes: SimpleChanges) {
    //console.log('onChanges');
    //console.log(changes);    
  }

}
