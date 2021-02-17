import App from '../../components/App';
import React from 'react';
import { render, screen } from '../../test-utils';

it('Renders the app base', () => {
	render(<App />);
	expect(screen.getByText(/Star Wars Client/i)).toBeInTheDocument();
});
