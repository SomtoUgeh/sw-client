export function composeResource(
	resource: Record<string, unknown>,
	type: string,
): {
	one: string;
	two: string;
	three: string;
	four: string;
} {
	switch (type) {
		case 'people':
			return {
				one: (resource?.name as string) ?? '',
				two: (resource?.gender as string) ?? '',
				three: (resource?.birth_year as string) ?? '',
				four: (resource?.height as string) ?? '',
			};

		case 'planet':
			return {
				one: (resource?.name as string) ?? '',
				two: (resource?.population as string) ?? '',
				three: (resource?.climate as string) ?? '',
				four: (resource?.terrain as string) ?? '',
			};

		case 'species':
			return {
				one: (resource?.name as string) ?? '',
				two: (resource?.designation as string) ?? '',
				three: (resource?.classification as string) ?? '',
				four: (resource?.average_lifespan as string) ?? '',
			};

		case 'starship':
			return {
				one: (resource?.name as string) ?? '',
				two: (resource?.model as string) ?? '',
				three: (resource?.manufacturer as string) ?? '',
				four: (resource?.passengers as string) ?? '',
			};

		case 'film':
			return {
				one: (resource?.title as string) ?? '',
				two: (resource?.episode_id as string) ?? '',
				three: (resource?.director as string) ?? '',
				four: (resource?.producer as string) ?? '',
			};

		case 'vehicle':
			return {
				one: (resource?.name as string) ?? '',
				two: (resource?.model as string) ?? '',
				three: (resource?.cargo_capacity as string) ?? '',
				four: (resource?.passengers as string) ?? '',
			};

		default:
			return {
				one: (resource?.name as string) ?? '',
				two: (resource?.gender as string) ?? '',
				three: (resource?.birth_year as string) ?? '',
				four: (resource?.birth_year as string) ?? '',
			};
	}
}
