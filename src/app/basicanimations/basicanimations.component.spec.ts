import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicanimationsComponent } from './basicanimations.component';

describe('BasicanimationsComponent', () => {
  let component: BasicanimationsComponent;
  let fixture: ComponentFixture<BasicanimationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicanimationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicanimationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
