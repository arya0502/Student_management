import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptstaffattandanceComponent } from './deptstaffattandance.component';

describe('DeptstaffattandanceComponent', () => {
  let component: DeptstaffattandanceComponent;
  let fixture: ComponentFixture<DeptstaffattandanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeptstaffattandanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeptstaffattandanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
