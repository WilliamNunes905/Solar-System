type MissionsProps = {
  name: string,
  year: string,
  country: string,
  destination: string,
};

function MissionCard({
  name,
  year,
  country,
  destination,
}: MissionsProps) {
  return (
    <div data-testid="mission-card" className="classMission classCard">
      <p data-testid="mission-name" className="name">{ name }</p>
      <p className="classMargin" data-testid="mission-year">{ year }</p>
      <p className="classMargin" data-testid="mission-country">{ country }</p>
      <p className="classMargin" data-testid="mission-destination">{ destination }</p>
    </div>
  );
}

export default MissionCard;
