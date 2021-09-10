import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelloWorldComponent } from './wello-world.component';

describe('WelloWorldComponent', () => {
  let component: WelloWorldComponent;
  let fixture: ComponentFixture<WelloWorldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelloWorldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelloWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
