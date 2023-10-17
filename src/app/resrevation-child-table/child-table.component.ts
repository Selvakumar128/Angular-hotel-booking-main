import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-child-table',
  templateUrl: './child-table.component.html',
  styleUrls: ['./child-table.component.css']
})
export class ChildTableComponent {
  @Input() formData:any;
  selectedGender: string = 'all';
  ngOnInit(){
    this.selectedGender = 'all';
  }
checkSelectedGender(): boolean {
  return this.selectedGender === 'all' || this.formData.some((formValue: { gender: string; }) => formValue.gender === this.selectedGender);
}

onGenderFilterChange(selectedValue: string) {
  this.selectedGender = selectedValue; 
}
}
