import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptstafftoppersComponent } from './deptstafftoppers.component';

describe('DeptstafftoppersComponent', () => {
  let component: DeptstafftoppersComponent;
  let fixture: ComponentFixture<DeptstafftoppersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeptstafftoppersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeptstafftoppersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
