import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildParentInteractionComponent } from './child-parent-interaction.component';

describe('ChildParentInteractionComponent', () => {
  let component: ChildParentInteractionComponent;
  let fixture: ComponentFixture<ChildParentInteractionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildParentInteractionComponent]
    });
    fixture = TestBed.createComponent(ChildParentInteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
