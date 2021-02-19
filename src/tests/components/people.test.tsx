import * as React from 'react';
import { render } from '../../test-utils';
import People from 'components/people/People';
import { screen } from '@testing-library/react';
import { getRoot } from '../../api';

jest.mock('../../api');
const mockedRoots = getRoot as jest.Mock<Promise<any>>;

const mockGetRoot = () =>
  mockedRoots.mockImplementation(() =>
    Promise.resolve({
      count: 1,
      results: [
        {
          name: 'Luke Skywalker',
          films: ['film 1', 'film 2', 'film 8', 'film 7'],
          gender: 'male',
          created: '2014-12-09',
          starships: ['starship 1', 'starship 2'],
          vehicles: ['vehicles 1', 'vehicles 2', 'vehicles 3'],
          url: 'www.myapi/people/1',
        },
      ],
    }),
  );

describe('<People/>', () => {
  beforeEach(() => mockGetRoot());

  it('should show loader when fetching data', () => {
    render(<People />);
    const loader = screen.getByTestId('loader');
    expect(loader).toBeInTheDocument();
  });

  it('should render the list of people when data is fetched', async () => {
    const { container } = render(<People />);

    const cardItem = await screen.findByText(/Luke Skywalker/);
    const cardContainer = screen.getAllByTestId('card');

    expect(cardContainer.length).toBe(1);
    expect(cardItem.innerHTML).toBe('Luke Skywalker');
  });
});
