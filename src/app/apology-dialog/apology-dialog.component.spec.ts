import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApologyDialogComponent } from './apology-dialog.component';

describe('ApologyDialogComponent', () => {
  let component: ApologyDialogComponent;
  let fixture: ComponentFixture<ApologyDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApologyDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApologyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
