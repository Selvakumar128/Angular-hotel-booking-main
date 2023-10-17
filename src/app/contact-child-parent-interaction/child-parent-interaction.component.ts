import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-parent-interaction',
  templateUrl: './child-parent-interaction.component.html',
  styleUrls: ['./child-parent-interaction.component.css']
})
export class ChildParentInteractionComponent {
  description: string = '';
  country='India'
  @Output() formDataSubmitted = new EventEmitter<any>();

  formData: any = {
    username: '',
    email: '',
    gender: '',
    country: 'India',
    description: ''
  };

  onSubmit() {
    this.formDataSubmitted.emit(this.formData);
    this.resetForm();
  }

  resetForm() {
    this.formData = {
      username: '',
      email: '',
      gender: '',
      country: 'India',
      description: ''
    };
  }
}
