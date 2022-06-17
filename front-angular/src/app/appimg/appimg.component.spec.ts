import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppimgComponent } from './appimg.component';

describe('AppimgComponent', () => {
  let component: AppimgComponent;
  let fixture: ComponentFixture<AppimgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppimgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
