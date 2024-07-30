import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudenhomepageComponent } from './studenhomepage.component';

describe('StudenhomepageComponent', () => {
  let component: StudenhomepageComponent;
  let fixture: ComponentFixture<StudenhomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudenhomepageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudenhomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
