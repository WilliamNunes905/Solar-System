type PlanetProps = {
  planetName: string,
  planetImage: string
};

function PlanetCard({ planetName, planetImage }: PlanetProps) {
  return (
    <div data-testid="planet-card" className="box">
      <img src={ planetImage } alt={ planetName } className={ planetName } />
      <p data-testid="planet-name" className="header">{ planetName }</p>
    </div>
  );
}

export default PlanetCard;
