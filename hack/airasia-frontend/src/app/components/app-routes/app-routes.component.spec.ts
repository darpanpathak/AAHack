import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRoutesComponent } from './app-routes.component';

describe('AppRoutesComponent', () => {
  let component: AppRoutesComponent;
  let fixture: ComponentFixture<AppRoutesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppRoutesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
