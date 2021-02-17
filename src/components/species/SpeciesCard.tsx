import * as React from 'react';
import Card from 'components/cards/Card';
import { SubHeading, SubInformation } from 'components/cards/style';

interface SpeciesCardInterface {
	info: Record<string, unknown>;
	onClick: () => void;
	handleToggleFav: () => void;
}

const SpeciesCard: React.FC<SpeciesCardInterface> = ({
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
				<h4>{(info?.name as string) ?? ''}</h4>
			</div>

			<div className="other-info">
				<div>
					<SubHeading>classification</SubHeading>
					<SubInformation>
						{(info.classification as string) ?? ''}
					</SubInformation>
				</div>

				<div>
					<SubHeading>language</SubHeading>
					<SubInformation>{(info.language as string) ?? ''}</SubInformation>
				</div>
			</div>
		</Card>
	);
};

export default SpeciesCard;
