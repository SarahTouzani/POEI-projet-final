import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecapcommandeComponent } from './recapcommande.component';

describe('RecapcommandeComponent', () => {
  let component: RecapcommandeComponent;
  let fixture: ComponentFixture<RecapcommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecapcommandeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecapcommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
