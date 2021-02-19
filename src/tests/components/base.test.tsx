import * as React from 'react';
import { getRoots } from '../../api';
import { render } from '../../test-utils';
import AppComponent from 'layout/AppComponent';
import { screen } from '@testing-library/react';

jest.mock('../../api');
const mockedRoots = getRoots as jest.Mock<Promise<any>>;

const mockGetRoots = () =>
  mockedRoots.mockImplementation(() =>
    Promise.resolve({
      films: 'films',
      people: 'people',
      planets: 'planets',
      species: 'species',
      starships: 'starships',
      vehicles: 'vehicles',
    }),
  );

describe('<AppComponent/>', () => {
  beforeEach(() => mockGetRoots());

  it('should render loading spinner on initial render', () => {
    render(
      <AppComponent>
        <p>Welcome to Star wars planet</p>
      </AppComponent>,
    );

    const loader = screen.getByTestId('loader');
    expect(loader).toBeInTheDocument();
  });

  it('should render the root resources', async () => {
    const { container } = render(
      <AppComponent>
        <p>Welcome to Star wars planet</p>
      </AppComponent>,
    );

    const navNode = await screen.findByText(/PEOPLE/);
    const navItems = container.querySelectorAll('.nav-item');

    expect(navNode).toBeTruthy();
    expect(navItems.length).toBe(6);
  });

  it('should show error message when there is an error', async () => {
    mockedRoots.mockImplementation(() => Promise.reject('error'));

    render(
      <AppComponent>
        <p>Welcome to Star wars planet</p>
      </AppComponent>,
    );

    const errorMessage = await screen.findByText(/No resource here/);
    expect(errorMessage).toBeInTheDocument();
  });
});
