import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Partner } from 'src/app/models/partner';
import { findEl } from 'src/test.helpers';

import { AniversariesComponent } from './aniversaries.component';

describe('AniversariesComponent', () => {
  let component: AniversariesComponent;
  let fixture: ComponentFixture<AniversariesComponent>;
  const partner = new Partner();
  partner.id = '123';
  partner.name = 'Alguien';
  partner.whenWasHired = new Date();
  const aniversaries = [partner];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AniversariesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AniversariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show aniversary icon', () => {
    expect(component).toBeTruthy();
    component.aniversaries = aniversaries;
    
    fixture.detectChanges();

    const aniversaryIcon = findEl(fixture, '.aniversary-icon');
    expect(aniversaryIcon).toBeTruthy();
  });
  
  it('should show aniversary title', () => {
    expect(component).toBeTruthy();
    component.aniversaries = aniversaries;
    
    fixture.detectChanges();

    const aniversaryIcon = findEl(fixture, '.aniversary-title');
    expect(aniversaryIcon).toBeTruthy();
  });
});
