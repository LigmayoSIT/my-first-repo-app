import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonInputOutput } from './pokemon-input-output';

describe('PokemonInputOutput', () => {
  let component: PokemonInputOutput;
  let fixture: ComponentFixture<PokemonInputOutput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonInputOutput],
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonInputOutput);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
