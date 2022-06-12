const photos = [
	{
		id: 1,
		name: 'APPLE IPAD',
		price: '39.99',
		like: true,
		img: require('../assets/ipad.jpg'),
		cateogory: 'FASHION',
		about:
			'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only '
	},

	{
		id: 2,
		name: 'NIKE SHOE ',
		price: '29.99',
		like: false,
		img: require('../assets/nike.jpg'),
		cateogory: 'FASHION',
		about:
		'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only '
	},
	{
		id: 3,
		name: 'REVVENA OIL',
		price: '25.99',
		like: false,
		img: require('../assets/peach.jpg'),
		cateogory: 'FASHION',
		about:
		'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only '
	},

	{
		id: 4,
		name: 'BOAT WIRELESS',
		price: '25.99',
		like: true,
		img: require('../assets/HEAPHONE.jpg'),
		cateogory: 'FASHION',
		about:
		'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only '
	},
	{
		id: 5,
		name: 'PUMA',
		price: '50.99',
		like: true,
		img: require('../assets/nike2.jpg'),
		cateogory: 'ELECTRONIC',
		about:
		'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only '
	},
	{
		id: 6,
		name: 'NIKE',
		price: '50.99',
		like: false,
		img: require('../assets/nikegold.jpg'),
		cateogory: 'ELECTRONIC',
		about:
		'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only '
	},
	{
		id: 7,
		name: 'FACE SERUM',
		price: '50.99',
		like: false,
		img: require('../assets/serum.jpg'),
		cateogory: 'FASHION',
		about:
		'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only '
	},
	{
		id: 8,
		name: 'SKULL PRINT',
		price: '50.99',
		like: false,
		cateogory: 'FASHION',
		img: require('../assets/shirt.jpg'),
		about:
		'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only '
	},
	{
		id: 9,
		name: 'Abstract Tshirt',
		price: '50.99',
		like: false,
		img: require('../assets/shirt1.jpg'),
		cateogory: 'ELECTRONIC',
		about:
		'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only '
	},
	{
		id: 10,
		name: 'BAN CREAM',
		price: '50.99',
		like: false,
		cateogory: 'FASHION',
		img: require('../assets/wax.jpg'),
		about:
		'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only '
	},
	{
		id: 11,
		name: 'LEAF SERUM',
		price: '50.99',
		like: false,
		img: require('../assets/greenlotion.jpg'),
		cateogory: 'FASHION',
		about:
		'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only '
	},
	{
		id: 12,
		name: 'AIR PODS',
		price: '50.99',
		like: false,
		cateogory: 'FASHION',
		img: require('../assets/airpods.jpg'),
		about:
		'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only '
	},
	{
		id: 13,
		name: 'LEMON UV',
		price: '50.99',
		cateogory: 'FASHION',
		like: false,
		img: require('../assets/cream2.jpg'),
		about:
		'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only '
	},
	{
		id: 14,
		name: 'REEBOCK',
		price: '50.99',
		cateogory: 'FASHION',
		like: false,
		img: require('../assets/puma.jpg'),
		about:
		'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only '
	},
	{
		id: 15,
		name: 'ROCK RACKET',
		price: '50.99',
		like: false,
		cateogory: 'FASHION',
		img: require('../assets/badminton.jpg'),
		about:
		'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only '
	},
	{
		id: 16,
		name: 'BLUMAAAN',
		price: '50.99',
		cateogory: 'FASHION',
		like: false,
		img: require('../assets/cream.jpg'),
		about:
		'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only '
	}
];

export default photos;
