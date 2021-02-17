/* eslint-disable camelcase */
export interface GetResponseMockInterface {
	name: string;
	height: string;
	mass: string;
	hair_color: string;
	skin_color: string;
	eye_color: string;
	birth_year: string;
	gender: string;
	homeworld: string;
	films: string[];
	species: string[];
	vehicles: string[];
	starships: string[];
	created: string;
	edited: string;
	url: string;
}

const response: GetResponseMockInterface = {
	name: 'Luke Skywalker',
	height: '172',
	mass: '77',
	hair_color: 'blond',
	skin_color: 'fair',
	eye_color: 'blue',
	birth_year: '19BBY',
	gender: 'male',
	homeworld: 'https://swapi.co/api/planets/1/',
	films: ['https://swapi.co/api/films/2/'],
	species: ['https://swapi.co/api/species/1/'],
	vehicles: ['https://swapi.co/api/vehicles/14/'],
	starships: ['https://swapi.co/api/starships/12/'],
	created: '2014-12-09T13:50:51.644000Z',
	edited: '2014-12-20T21:17:56.891000Z',
	url: 'https://swapi.co/api/people/1/',
};

export const getResponseMock = {
	count: 10,
	results: [
		{ ...response },
		{ ...response },
		{ ...response },
		{ ...response },
		{ ...response },
	],
};