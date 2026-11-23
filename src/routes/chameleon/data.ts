export type Category = {
	name: string;
	emoji: string;
	words: string[]; // 16 words, row-major: A1-A4, B1-B4, C1-C4, D1-D4
};

export const CATEGORIES: Category[] = [
	{
		name: 'Animals',
		emoji: '🐾',
		words: [
			'Elephant', 'Giraffe', 'Penguin', 'Dolphin',
			'Eagle', 'Kangaroo', 'Octopus', 'Lion',
			'Panda', 'Crocodile', 'Owl', 'Shark',
			'Butterfly', 'Wolf', 'Turtle', 'Chameleon'
		]
	},
	{
		name: 'Food',
		emoji: '🍕',
		words: [
			'Pizza', 'Sushi', 'Burger', 'Tacos',
			'Pasta', 'Pancakes', 'Ice Cream', 'Curry',
			'Salad', 'Steak', 'Ramen', 'Croissant',
			'Dumplings', 'Waffles', 'Soup', 'Burrito'
		]
	},
	{
		name: 'Countries',
		emoji: '🌍',
		words: [
			'Japan', 'Brazil', 'France', 'Egypt',
			'Canada', 'Australia', 'India', 'Mexico',
			'Italy', 'Kenya', 'Norway', 'Thailand',
			'Spain', 'Argentina', 'Greece', 'Iceland'
		]
	},
	{
		name: 'Movies',
		emoji: '🎬',
		words: [
			'Titanic', 'Jaws', 'Shrek', 'Frozen',
			'Avatar', 'Gladiator', 'Inception', 'Toy Story',
			'The Matrix', 'Jurassic Park', 'Up', 'Rocky',
			'Star Wars', 'Finding Nemo', 'Alien', 'The Godfather'
		]
	},
	{
		name: 'Sports',
		emoji: '⚽',
		words: [
			'Soccer', 'Basketball', 'Tennis', 'Swimming',
			'Baseball', 'Golf', 'Boxing', 'Skiing',
			'Volleyball', 'Surfing', 'Cricket', 'Hockey',
			'Archery', 'Cycling', 'Rugby', 'Skateboarding'
		]
	},
	{
		name: 'Jobs',
		emoji: '💼',
		words: [
			'Doctor', 'Chef', 'Pilot', 'Teacher',
			'Firefighter', 'Astronaut', 'Farmer', 'Lawyer',
			'Musician', 'Detective', 'Architect', 'Nurse',
			'Photographer', 'Scientist', 'Mechanic', 'Actor'
		]
	},
	{
		name: 'Musical Instruments',
		emoji: '🎸',
		words: [
			'Guitar', 'Piano', 'Drums', 'Violin',
			'Trumpet', 'Flute', 'Saxophone', 'Harp',
			'Ukulele', 'Cello', 'Clarinet', 'Banjo',
			'Accordion', 'Trombone', 'Bass', 'Xylophone'
		]
	},
	{
		name: 'Fruits & Vegetables',
		emoji: '🥦',
		words: [
			'Banana', 'Carrot', 'Strawberry', 'Broccoli',
			'Pineapple', 'Tomato', 'Watermelon', 'Potato',
			'Mango', 'Cucumber', 'Grape', 'Onion',
			'Avocado', 'Pepper', 'Peach', 'Mushroom'
		]
	},
	{
		name: 'Transportation',
		emoji: '🚗',
		words: [
			'Car', 'Airplane', 'Bicycle', 'Train',
			'Helicopter', 'Boat', 'Motorcycle', 'Subway',
			'Scooter', 'Bus', 'Rocket', 'Kayak',
			'Truck', 'Skateboard', 'Hot Air Balloon', 'Ferry'
		]
	},
	{
		name: 'Superheroes',
		emoji: '🦸',
		words: [
			'Spider-Man', 'Batman', 'Wonder Woman', 'Iron Man',
			'Superman', 'Black Panther', 'Thor', 'Hulk',
			'Captain America', 'Wolverine', 'Storm', 'Flash',
			'Aquaman', 'Deadpool', 'Black Widow', 'Ant-Man'
		]
	},
	{
		name: 'Household Items',
		emoji: '🏠',
		words: [
			'Sofa', 'Lamp', 'Microwave', 'Pillow',
			'Mirror', 'Toaster', 'Clock', 'Blanket',
			'Vacuum', 'Candle', 'Scissors', 'Umbrella',
			'Kettle', 'Hammer', 'Bookshelf', 'Sponge'
		]
	},
	{
		name: 'Landmarks',
		emoji: '🗽',
		words: [
			'Eiffel Tower', 'Great Wall', 'Pyramids', 'Statue of Liberty',
			'Colosseum', 'Taj Mahal', 'Big Ben', 'Machu Picchu',
			'Sydney Opera House', 'Mount Rushmore', 'Stonehenge', 'Petra',
			'Christ the Redeemer', 'Golden Gate Bridge', 'Angkor Wat', 'Niagara Falls'
		]
	},
	{
		name: 'Mythical Creatures',
		emoji: '🐉',
		words: [
			'Dragon', 'Unicorn', 'Mermaid', 'Phoenix',
			'Vampire', 'Werewolf', 'Griffin', 'Kraken',
			'Centaur', 'Medusa', 'Yeti', 'Fairy',
			'Pegasus', 'Minotaur', 'Sphinx', 'Goblin'
		]
	},
	{
		name: 'School Subjects',
		emoji: '📚',
		words: [
			'Math', 'History', 'Biology', 'Art',
			'Chemistry', 'Music', 'Physics', 'Geography',
			'Drama', 'English', 'PE', 'Computer Science',
			'Economics', 'Psychology', 'Philosophy', 'Astronomy'
		]
	},
	{
		name: 'Desserts',
		emoji: '🍰',
		words: [
			'Cheesecake', 'Brownie', 'Donut', 'Tiramisu',
			'Macaron', 'Cupcake', 'Apple Pie', 'Pudding',
			'Gelato', 'Churros', 'Mousse', 'Eclair',
			'Baklava', 'Cookie', 'Sorbet', 'Fudge'
		]
	},
	{
		name: 'Ocean Life',
		emoji: '🌊',
		words: [
			'Whale', 'Jellyfish', 'Seahorse', 'Coral',
			'Starfish', 'Lobster', 'Stingray', 'Seal',
			'Squid', 'Crab', 'Sea Turtle', 'Clownfish',
			'Walrus', 'Anemone', 'Barracuda', 'Manatee'
		]
	}
];

export const ROWS = ['A', 'B', 'C', 'D'] as const;
export const COLS = ['1', '2', '3', '4'] as const;
