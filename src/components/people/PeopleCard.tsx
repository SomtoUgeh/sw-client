import * as React from 'react';
import Card from 'components/cards/Card';
import { SubHeading, SubInformation } from 'components/cards/style';

interface PeopleCardInterface {
	info: Record<string, unknown>;
	onClick: () => void;
	handleToggleFav: () => void;
}

const PeopleCard: React.FC<PeopleCardInterface> = ({
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
					<SubHeading>gender</SubHeading>
					<SubInformation>{(info.gender as string) ?? ''}</SubInformation>
				</div>

				<div>
					<SubHeading>birth_year</SubHeading>
					<SubInformation>{(info.birth_year as string) ?? ''}</SubInformation>
				</div>
			</div>
		</Card>
	);
};

export default PeopleCard;
