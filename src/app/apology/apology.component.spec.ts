import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApologyComponent } from './apology.component';

describe('ApologyComponent', () => {
  let component: ApologyComponent;
  let fixture: ComponentFixture<ApologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApologyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
