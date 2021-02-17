/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/ban-types */
import * as React from 'react';
import { DetailedView } from 'components/DetailedView';

interface DetailsContextInterface {
	isOpen: boolean;
	toggle: () => void;
	onClose: () => void;
	type: string | undefined;
	selectedResource: Record<string, unknown> | undefined;
	setSelectedResource: React.Dispatch<
		React.SetStateAction<Record<string, unknown> | undefined>
	>;
	setType: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const DetailsContext = React.createContext({} as DetailsContextInterface);
DetailsContext.displayName = 'DetailsModalContext';

function DetailsContextProvider(
	props: React.PropsWithChildren<{}>,
): JSX.Element {
	const { Provider } = DetailsContext;

	const [type, setType] = React.useState<string>();
	const [selectedResource, setSelectedResource] = React.useState<
		Record<string, unknown>
	>();

	// controls for modal
	const [modal, setModal] = React.useState(false);
	const toggle = () => setModal(!modal);
	const onClose = () => setModal(false);

	return (
		<Provider
			value={{
				type,
				setType,
				isOpen: modal,
				toggle,
				selectedResource,
				setSelectedResource,
				onClose: () => {
					setSelectedResource(void 0);
					onClose();
				},
			}}
		>
			{props.children}

			{modal ? <DetailedView /> : null}
		</Provider>
	);
}

/**
 * Handles control for the details modal.
 * @return  getter and setter for resources type, isModalOpen boolean, getter and setter for selected resource and post closeModal functionality
 */
function useDetailsView(): DetailsContextInterface {
	const context = React.useContext(DetailsContext);

	if (context === undefined) {
		throw new Error('useDetailsView must be used within a DetailsContext');
	}

	return context;
}

export { DetailsContextProvider, useDetailsView };
