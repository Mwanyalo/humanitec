import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProgramComponent } from './program.component';
import { MaterialModule } from '../material.module';

import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { TestStore } from '../programs/state/testStore';

import {MAT_DIALOG_DATA, MatDialogRef, DateAdapter, MatNativeDateModule, MatDatepickerModule, MAT_DATE_FORMATS} from '@angular/material';


fdescribe('ProgramComponent', () => {
  let component: ProgramComponent;
  let fixture: ComponentFixture<ProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramComponent ],
      imports: [
        MaterialModule
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {}
        },
        {
          provide: Store,
           useClass: TestStore
        }
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
