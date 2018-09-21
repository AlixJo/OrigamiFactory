/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EtapeComponent } from './etape.component';

describe('EtapeComponent', () => {
  let component: EtapeComponent;
  let fixture: ComponentFixture<EtapeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtapeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
