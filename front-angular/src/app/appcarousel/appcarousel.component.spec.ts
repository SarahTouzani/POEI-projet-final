import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppcarouselComponent } from './appcarousel.component';

describe('AppcarouselComponent', () => {
  let component: AppcarouselComponent;
  let fixture: ComponentFixture<AppcarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppcarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppcarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
