import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillEditDialogComponent } from './bill-edit-dialog.component';

describe('BillEditDialogComponent', () => {
  let component: BillEditDialogComponent;
  let fixture: ComponentFixture<BillEditDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BillEditDialogComponent]
    });
    fixture = TestBed.createComponent(BillEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
