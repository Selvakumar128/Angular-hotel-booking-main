import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactParentComponent } from './contact-parent.component';

describe('ContactParentComponent', () => {
  let component: ContactParentComponent;
  let fixture: ComponentFixture<ContactParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactParentComponent]
    });
    fixture = TestBed.createComponent(ContactParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
