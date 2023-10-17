import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-parent',
  templateUrl: './contact-parent.component.html',
  styleUrls: ['./contact-parent.component.css']
})
export class ContactParentComponent {
  formDataArray: any[] = [];

  onFormSubmitted(formData: any) {
    this.formDataArray.push({
      username: formData.username,
      email: formData.email,
      gender: formData.gender,
      country: formData.country,
      description: formData.description,
      currentDate: new Date()
    });
  }
}
