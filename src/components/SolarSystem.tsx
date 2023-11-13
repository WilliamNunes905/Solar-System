import Title from './ Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

function SolarSystem() {
  return (
    <div data-testid="solar-system" className="mission">
      <Title headline="Planetas" />
      <div className="system">
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
    </div>
  );
}

export default SolarSystem;
