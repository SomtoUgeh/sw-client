import * as React from 'react';
import Card from 'components/cards/Card';
import { numberWithCommas } from 'utils/thousandFormat';
import { SubHeading, SubInformation } from 'components/cards/style';

interface StarshipsCardInterface {
	info: Record<string, unknown>;
	onClick: () => void;
	handleToggleFav: () => void;
}

const StarshipsCard: React.FC<StarshipsCardInterface> = ({
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
					<SubHeading>starship class</SubHeading>
					<SubInformation>
						{(info.starship_class as string) ?? ''}
					</SubInformation>
				</div>

				<div>
					<SubHeading>cost</SubHeading>
					<SubInformation>
						{numberWithCommas((info.cost_in_credits as string) ?? '')}
					</SubInformation>
				</div>
			</div>
		</Card>
	);
};

export default StarshipsCard;
