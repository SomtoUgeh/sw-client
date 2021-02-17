import Films from 'components/films/Films';
import People from 'components/people/People';
import Planets from 'components/planets/Planets';
import Species from 'components/species/Species';
import Starships from 'components/starships/Starships';
import Vehicles from 'components/vehicles/Vehicles';

export const TabsContent = [
	{
		title: 'people',
		content: People,
	},
	{
		title: 'films',
		content: Films,
	},
	{
		title: 'planets',
		content: Planets,
	},
	{
		title: 'species',
		content: Species,
	},
	{
		title: 'starships',
		content: Starships,
	},
	{
		title: 'vehicles',
		content: Vehicles,
	},
];
