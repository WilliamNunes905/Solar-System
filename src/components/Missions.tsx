import Title from './ Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

function Missions() {
  return (
    <div>
      <div className="header mission" data-testid="missions" />
      <Title headline="Missões" />
      <div className="card">
        {
        missions.map(({ name, year, country, destination }) => (
          <MissionCard
            key={ name }
            name={ name }
            year={ year }
            country={ country }
            destination={ destination }
          />
        ))
      }
      </div>
    </div>
  );
}

export default Missions;
