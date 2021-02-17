import * as React from 'react';
import Card from 'components/cards/Card';
import { SubHeading, SubInformation } from 'components/cards/style';
import { numberWithCommas } from 'utils/thousandFormat';

interface VehiclesCardInterface {
	info: Record<string, unknown>;
	onClick: () => void;
	handleToggleFav: () => void;
}

const VehiclesCard: React.FC<VehiclesCardInterface> = ({
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
					<SubHeading>model</SubHeading>
					<SubInformation>{(info.model as string) ?? ''}</SubInformation>
				</div>

				<div>
					<SubHeading>cost</SubHeading>
					<SubInformation>
						{numberWithCommas((info.cost_in_credits as string) ?? 0)}
					</SubInformation>
				</div>
			</div>
		</Card>
	);
};

export default VehiclesCard;
