import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TambahProdukPage } from './tambah-produk.page';

describe('TambahProdukPage', () => {
  let component: TambahProdukPage;
  let fixture: ComponentFixture<TambahProdukPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TambahProdukPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TambahProdukPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
