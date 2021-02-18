import * as React from 'react';
import Card from 'components/cards/Card';
import { SubHeading, SubInformation } from 'components/cards/style';
import { numberWithCommas } from 'utils/thousandFormat';

interface PlanetCardInterface {
  info: Record<string, unknown>;
  onClick: () => void;
  handleToggleFav: () => void;
}

const PlanetCard: React.FC<PlanetCardInterface> = ({
  info,
  onClick,
  handleToggleFav,
}) => {
  return (
    <Card
      onClick={onClick}
      isFav={Boolean(info?.isFav)}
      handleToggleFav={handleToggleFav}
    >
      <div className="name">
        <h4>{info?.name as string}</h4>
      </div>

      <div className="other-info">
        <div>
          <SubHeading>population</SubHeading>
          <SubInformation>
            {numberWithCommas((info.population as string) ?? 0)}
          </SubInformation>
        </div>

        <div>
          <SubHeading>climate</SubHeading>
          <SubInformation>{(info.climate as string) ?? ''}</SubInformation>
        </div>
      </div>
    </Card>
  );
};

export default PlanetCard;
