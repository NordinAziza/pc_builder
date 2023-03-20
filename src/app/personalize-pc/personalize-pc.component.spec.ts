import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalizePcComponent } from './personalize-pc.component';

describe('PersonalizePcComponent', () => {
  let component: PersonalizePcComponent;
  let fixture: ComponentFixture<PersonalizePcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalizePcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalizePcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
