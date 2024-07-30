import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptpageComponent } from './deptpage.component';

describe('DeptpageComponent', () => {
  let component: DeptpageComponent;
  let fixture: ComponentFixture<DeptpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeptpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeptpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
