import Title from './ Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

function SolarSystem() {
  return (
    <div data-testid="solar-system">
      <Title headline="PLANETAS" />
      {
        planets.map(({ name, image }) => (
          <PlanetCard
            key={ name }
            planetImage={ image }
            planetName={ name }
          />
        ))
      }
    </div>
  );
}

export default SolarSystem;
