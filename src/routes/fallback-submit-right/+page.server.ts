const full_ambassadors = [
	'Kev',
	'Brady ⋱ Fractal',
	'Enrico (Etrain)',
	'Fabian',
	'huntabyte',
	'karimfromjordan',
	'khromov',
	'Scott Tolinski',
	'Stalky',
	'Thomas G. Lopes',
	'{🧪} pablopang',
	'arxpoetica',
	'benmccann',
	'Grygr~',
	'halfnelson',
	'Jacob Wright',
	'kaisermann',
	'Nyx (tcc-sejohnson)',
	'orta',
	'pngwn',
	'TehShrike',
	'trueadm'
];

export function load({ url: { searchParams } }) {
	const search = searchParams.get('search')?.toString() ?? '';
	const ambassadors = full_ambassadors.filter((ambassador) =>
		ambassador.toLowerCase().includes(search.toLowerCase())
	);
	return { ambassadors };
}
