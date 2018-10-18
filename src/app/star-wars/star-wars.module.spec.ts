import { StarWarsModule } from './star-wars.module';

describe('StarWarsModule', () => {
  let starWarsModule: StarWarsModule;

  beforeEach(() => {
    starWarsModule = new StarWarsModule();
  });

  it('should create an instance', () => {
    expect(starWarsModule).toBeTruthy();
  });
});
