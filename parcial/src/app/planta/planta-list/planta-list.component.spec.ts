/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { PlantaListComponent } from './planta-list.component';
import { HttpClientModule } from '@angular/common/http';
import { Planta } from '../planta';
import { PlantaService } from '../planta.service';


describe('PlantaListComponent', () => {
  let component: PlantaListComponent;
  let fixture: ComponentFixture<PlantaListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ PlantaListComponent ],
      providers: [ PlantaService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantaListComponent);
    component = fixture.componentInstance;

    for(let i = 0; i < 3; i++) {
      const planta = new Planta(
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
      );
      component.plantas.push(planta);
    }
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 1 table', () => {
    const tables = debug.queryAll(By.css('table'));
    expect(tables.length).toBe(1);
  });

  it('should have a header with 4 rows', () => {
    const headers = debug.queryAll(By.css('thead th'));
    expect(headers.length).toBe(4);
  });

  it('should have 3 rows table', () => {
    const trs = debug.queryAll(By.css('tbody tr'));
    expect(trs.length).toBe(3);
  });

});
