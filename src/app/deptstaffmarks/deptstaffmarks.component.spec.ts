import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptstaffmarksComponent } from './deptstaffmarks.component';

describe('DeptstaffmarksComponent', () => {
  let component: DeptstaffmarksComponent;
  let fixture: ComponentFixture<DeptstaffmarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeptstaffmarksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeptstaffmarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
