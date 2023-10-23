const contacts = {
    address: {
        icon: 'map-marker-1',
        title: 'Address',
        street: '13/25 New Avenue',
        city: 'New Heaven, ',
        zip: '45Y 73J',
        country: 'Ukraine'
    },
  
    call_center: {
        icon: 'helpline-24h-1',
        title: 'Call center',
        note: 'This number is toll free if calling from Ukraine.otherwise we advise you to use the',
        phone: '+38 555 444 333',
    },
    support: {
        icon: 'envelope-1',
        title: 'Electronic support',
        note: 'Please feel free to write an email to us or to use our electronic ticketing system.',
        email: 'info@fakeemail.com',
        warning: 'Ticketio - our ticketing support platform',
    },
 };
  

 let products = [
	{
		id: 1,
		badge: {
			title: "Sold",
			bg: "sold"	
		},
		image: "https://couchjanus.github.io/images/product-1.jpg",
		name: "Kui Ye Chen’s AirPods",
		price: 250,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
		stars: 2,
		category: 1,

	},
	{
		id: 2,
		badge: {
			title: "",
			bg: ""	
		},
		image: "https://couchjanus.github.io/images/product-2.jpg",
		name: "Air Jordan 12 gym red",
		price: 303,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
		stars: 5,
		category: 2,
	},
	{
		id: 3,
		badge: {
			title: "New",
			bg: "new"	
		},
		image: "https://couchjanus.github.io/images/product-3.jpg",
		name: "Cyan cotton t-shirt",
		price: 25,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
		stars: 4,
		category:3,
	},
	{
		id: 4,
		badge: {
			title: "",
			bg: ""	
		},
		image: "https://couchjanus.github.io/images/product-4.jpg",
		name: "Timex Unisex Originals",
		price: 151,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
		stars: 1,
		category: 1,
	},
	{
		id: 5,
		badge: {
			title: "Sale",
			bg: "sale"	
		},
		image: "https://couchjanus.github.io/images/product-5.jpg",
		name: "Red digital smartwatch",
		price: 150,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
		stars: 0,
		category: 4,
	},

	{
		id: 6,
		badge: {
			title: "",
			bg: ""	
		},
		image: "https://couchjanus.github.io/images/product-6.jpg",
		name: "Nike air max 95",
		price: 311,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
		stars: 5,
		category:  5,
	},
	{
		id: 7,
		badge: {
			title: "Sale",
			bg: "sale"
		},
		image: "https://couchjanus.github.io/images/product-7.jpg",
		name: "Joemalone Women prefume",
		price: 35,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
		stars: 4,
		category: 6,
	},

	{
		id: 8,
		badge: {
			title: "",
			bg: ""	
		},
		image: "https://couchjanus.github.io/images/product-8.jpg",
		name: "Apple Watch",
		price: 425,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
		stars: 3,
		category: 4,
	},
                      
	{
		id: 9,
		badge: {
			title: "Sold",
			bg: "sold"	
		},
		image: "https://couchjanus.github.io/images/product-9.jpg",
		name: "Men silver Byron Watch",
		price: 551,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
		stars: 5,
		category: 4,
	},
                   
	{
		id: 10,
		badge: {
			title: "New",
			bg: "new"	
		},
		image: "https://couchjanus.github.io/images/product-10.jpg",
		name: "Ploaroid one step camera",
		price: 166,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
		stars: 0,
		category: 1,
	},
	{
		id: 11,
		badge: {
			title: "Sale",
			bg: "sale"	
		},
		image: "https://couchjanus.github.io/images/product-11.jpg",
		name: "Gray Nike running shoes",
		price: 123,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
		stars: 5,
		category: 5,
	},

	{
		id: 12,
		badge: {
			title: "New",
			bg: "new"	
		},
		image: "https://couchjanus.github.io/images/product-12.jpg",
		name: "Black DSLR lense",
		price: 100,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
		stars: 2,
		category: 1,
	},

];