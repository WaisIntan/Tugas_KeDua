import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KerajangBelanjaPage } from './kerajang-belanja.page';

describe('KerajangBelanjaPage', () => {
  let component: KerajangBelanjaPage;
  let fixture: ComponentFixture<KerajangBelanjaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KerajangBelanjaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KerajangBelanjaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
