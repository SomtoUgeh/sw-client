import Home from 'components/Home';
import React from 'react';
import { render, screen } from 'test-utils';

it('Renders the home base', () => {
	render(<Home />);
	expect(screen.getByText(/People/i)).toBeInTheDocument();
});
