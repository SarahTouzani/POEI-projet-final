import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppcontactComponent } from './appcontact.component';

describe('AppcontactComponent', () => {
  let component: AppcontactComponent;
  let fixture: ComponentFixture<AppcontactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppcontactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
