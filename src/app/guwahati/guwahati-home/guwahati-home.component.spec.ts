import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuwahatiHomeComponent } from './guwahati-home.component';

describe('GuwahatiHomeComponent', () => {
  let component: GuwahatiHomeComponent;
  let fixture: ComponentFixture<GuwahatiHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuwahatiHomeComponent]
    });
    fixture = TestBed.createComponent(GuwahatiHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
