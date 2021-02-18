import * as React from 'react';
import Card from 'components/cards/Card';
import { truncate } from 'utils/truncate';
import { SubHeading, SubInformation } from 'components/cards/style';

interface FilmsCardInterface {
  info: Record<string, unknown>;
  onClick: () => void;
  handleToggleFav: () => void;
}

const FilmsCard: React.FC<FilmsCardInterface> = ({
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
        <h4>{info?.title as string}</h4>
      </div>

      <div className="other-info">
        <div>
          <SubHeading>Episode {(info?.episode_id as string) ?? ''}</SubHeading>
          <SubInformation>
            {truncate((info.opening_crawl as string) ?? '', 50)}
          </SubInformation>
        </div>
      </div>
    </Card>
  );
};

export default FilmsCard;
