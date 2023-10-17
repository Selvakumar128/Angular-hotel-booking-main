import { Component,OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators, FormBuilder, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';


interface req {
  name: string,
}

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {

  formSubmitted: boolean = false;
  splReq!: req[];
  formValue: any;
  duplicateError: boolean | undefined;
 

  ngOnInit() {
    this.splReq = [
        { name: 'Extra Bed'},
        { name: 'Food'},
        { name: 'Hot Water'},
        { name: 'With AC'},
    ];
  }

   reservationForm=new FormGroup({
    user:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
    email:new FormControl('',[Validators.required,Validators.email,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
    password:new FormControl('',[Validators.required,Validators.minLength(5)]),
    mobno: new FormControl('', [Validators.pattern(/^\d{10}$/)]),
    fromDate:new FormControl('',Validators.required),
    toDate:new FormControl('',Validators.required),
    gender:new FormControl('',Validators.required),
    city:new FormControl(''),
    requirements: new FormControl('',Validators.required),
    
    
})

reservations: any[]=[
  {
  user: 'selva',
  email: 'selva@tbs.com',
  password: 'myPassword',
  mobno: '9670845124',
  fromDate: '2023-10-12',
  toDate: '2023-10-17',
  gender: 'Male',
  city: ['New York'],
  requirements: [{name: 'Extra Bed'},{name: 'Food'}]
},
// {
//   user: 'anu',
//   email: 'anu@example.com',
//   password: 'anu@123#4',
//   mobno: '7373249090',
//   fromDate: '2023-10-01',
//   toDate: '2023-10-10',
//   gender: 'Female',
//   city: ['New York'],
//   requirements: [{name: 'Extra Bed'},{name: 'Food'}]
// },
{
  user: 'naveen',
  email: 'naveen@gmail.com',
  password: 'naVeE@13#',
  mobno: '6569246160',
  fromDate: '2023-10-11',
  toDate: '2023-10-13',
  gender: 'Male',
  city: ['New York'],
  requirements: [{name: 'Extra Bed'},{name: 'Food'}]
}
];



  submitReservation() {
    this.formSubmitted = true;
  if (this.reservationForm.valid) {
    const formData = this.reservationForm.value;
    if(!this.isDuplicate(formData)){
    this.reservations.push(formData);
    console.log(this.reservations)
    this.reservationForm.reset();
    }else{
      // this.duplicateError=true;
      console.log("******fd")
      window.alert('This reservation already exists.');
    }
  }
}

isDuplicate(formData:any):boolean{
  return this.reservations.some(reservation=>reservation.user===formData.user&&reservation.email===formData.email)
}


}
