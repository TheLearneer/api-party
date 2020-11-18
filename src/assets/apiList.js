export const apiList = [
	{
		id: "coc.supercell",
		name: "Clash of Clans API",
		description: "Official Clash of clans API",
		img: "clashofclans.png",
		apiUrl: "https://api.clashofclans.com/v1/",
		docs: "https://developer.clashofclans.com/",
		official: true,
		https: true,
		categories: ["games"],
		auth: 1
	},
	{
		id: "cr.supercell",
		name: "Clash Royale API",
		description: "Official Clash Royale API",
		img: "clashroyale.png",
		apiUrl: "https://api.clashroyale.com/v1/",
		docs: "https://developer.clashroyale.com/",
		official: true,
		https: true,
		categories: ["games"],
		auth: 1
	},
	{
		id: "bs.supercell",
		name: "Brawl Stars API",
		description: "Official Brawl Stars API",
		img: "brawlstars.png",
		apiUrl: "https://api.brawlstars.com/v1/",
		docs: "https://developer.brawlstars.com/",
		official: true,
		https: true,
		categories: ["games"],
		auth: 1
	},
	{
		id: "starlist",
		name: "Starlist Brawl Stars",
		description:
			"Brawl Stars API to provide assets, logs and lots of useful data.",
		img: "starlist.png",
		apiUrl: "https://api.starlist.pro",
		docs: "https://www.starlist.pro/dashboard/",
		https: true,
		categories: ["games"],
		auth: 1
	},
	{
		id: "pokemon",
		name: "Pokémon API",
		description: "Official Pokémon API",
		img: "pokemon.png",
		apiUrl: "https://api.pokemon.com/us/api/pokedex/kalos",
		https: true,
		official: true,
		categories: ["games"]
	},
	{
		id: "pokeapi",
		name: "PokéApi",
		description: "All the Pokémon data you'll ever need in one place.",
		img: "pokeapi.png",
		apiUrl: "https://pokeapi.co/api/v2/",
		docs: "https://pokeapi.co/",
		https: true,
		categories: ["games"]
	},
	{
		id: "discord",
		name: "Discord API",
		description: "Create awesome powerful stuffs with the discord API.",
		img: "discord.png",
		apiUrl: "https://discord.com/api",
		docs: "https://discord.com/developers/docs/intro",
		official: true,
		https: true,
		categories: ["social"],
		auth: 2
	},
	{
		id: "opentdb",
		name: "Open Trivia DB",
		description: "Free to use, user-contributed trivia question database.",
		img: "opentdb.png",
		apiUrl: "https://opentdb.com/api.php?amount=1",
		docs: "https://opentdb.com/api_config.php",
		https: true,
		categories: ["entertainment"]
	},
	{
		id: "pubg",
		name: "PUBG API",
		description: "PlayerUnknown's Battlegrounds API for stats.",
		img: "pubg.png",
		docs: "https://developer.pubg.com/",
		official: true,
		https: true,
		categories: ["games"],
		auth: 1
	},
	{
		id: "riot.games",
		name: "Riot Games API",
		description: "League of Legends statistics and much more.",
		img: "riotgames.png",
		docs: "https://developer.riotgames.com/",
		official: true,
		https: true,
		categories: ["games"],
		auth: 1
	},
	{
		id: "catfact.ninja",
		name: "Cat facts",
		description: "Random cat facts",
		apiUrl: "https://catfact.ninja/fact",
		docs: "https://catfact.ninja",
		https: true,
		categories: ["animals"]
	},
	{
		id: "cat-fact",
		name: "Cat facts",
		description: "Daily cat facts",
		img: "catfacts.png",
		apiUrl: "https://cat-fact.herokuapp.com/facts/random",
		docs: "https://alexwohlbruck.github.io/cat-facts/docs/",
		https: true,
		categories: ["animals"]
	},
	{
		id: "dog.ceo",
		name: "Dog API",
		description: "Dog breeds and images",
		img: "dog.ceo.png",
		apiUrl: "https://dog.ceo/api/breeds/image/random",
		docs: "https://dog.ceo/dog-api/documentation/",
		https: true,
		categories: ["animals"]
	},
	{
		id: "pokedex.api",
		name: "Pokédex API",
		description: "Entire pokédex (pokémon) data easily accessible in one place.",
		img: "pokedex-api.png",
		apiUrl: "https://pokeapi.glitch.me/info",
		docs: "https://pokedevs.gitbook.io/pokedex/",
		https: true,
		categories: ["games"]
	},
	{
		id: "bored-api",
		name: "Bored API",
		description: "Let's find you something to do!",
		apiUrl: "https://www.boredapi.com/api/activity",
		docs: "https://www.boredapi.com/documentation",
		https: true,
		categories: ["entertainment"]
	},
	{
		id: "rickandmorty",
		name: "Rick and Morty API",
		description: "Characters, images, episodes and locations of TV show Rick and Morty.",
		apiUrl: "https://rickandmortyapi.com/api/",
		docs: "https://rickandmortyapi.com/documentation",
		https: true,
		categories: ["entertainment", "shows"]
	},
	{
		id: "chucknorris",
		name: "Chucknorris.io",
		description: "Hand curate Chuck Norris facts.",
		img: "chucknorris.png",
		apiUrl: "https://api.chucknorris.io/jokes/random",
		docs: "https://api.chucknorris.io/",
		https: true,
		categories: ["entertainment", "comics"]
	},
	{
		id: "isthisforthat",
		name: "Is This for That",
		description: "Make a decision! This?? or That??",
		apiUrl: "https://itsthisforthat.com/api.php?json",
		docs: "https://itsthisforthat.com/api.php",
		https: true,
		categories: ["entertainment"]
	},
	{
		id: "jservice",
		name: "jService",
		description: "Collection of trivia questions with clues and categories.",
		img: "jservice.png",
		apiUrl: "https://jservice.io/api/random",
		docs: "https://jservice.io/",
		https: true,
		categories: ["entertainment"]
	},
	{
		id: "adviceslip",
		name: "Advice slip",
		description: "Generate advice for yourself or someone else.",
		apiUrl: "https://api.adviceslip.com/advice",
		docs: "https://api.adviceslip.com/",
		https: true,
		categories: ["entertainment"]
	},
	{
		id: "funtranslation",
		name: "Fun translations API",
		description: "Translate your text into various funny styles (yoda, pirate, brailee etc).",
		img: "funtranslations.png",
		docs: "https://funtranslations.com/api/",
		https: true,
		categories: ["entertainment"],
		auth: 1,
		hasPaidPlan: true
	},
	{
		id: "twitter",
		name: "Twitter API",
		description: "Access Twitter data and engage with conversations!",
		img: "twitter.png",
		docs: "https://developer.twitter.com/en/docs/twitter-api",
		official: true,
		https: true,
		categories: ["social"],
		auth: 2,
		hasPaidPlan: true
	},
	{
		id: "reddit",
		name: "Reddit API",
		description: "Perform all your actions on Reddit through the API!",
		img: "reddit.png",
		docs: "https://www.reddit.com/dev/api",
		official: true,
		https: true,
		categories: ["social"],
		auth: 2
	},
	{
		id: "instagram",
		name: "Instagram API",
		description: "Access profile information, photos, publish media and more.",
		img: "instagram.png",
		docs: "https://developers.facebook.com/docs/instagram",
		official: true,
		https: true,
		categories: ["social"],
		auth: 2
	},
	{
		id: "facebook",
		name: "Facebook for developers",
		description: "Live video API, graph API, marketing API, pages API, video API",
		img: "facebook.png",
		docs: "https://developers.facebook.com/docs/",
		official: true,
		https: true,
		categories: ["social"],
		auth: 2
	},
	{
		id: "themoviedb",
		name: "The Movie Database API",
		description: "Millions of movies, TV shows and people to discover.",
		img: "themoviedb.png",
		docs: "https://developers.themoviedb.org/3/getting-started",
		https: true,
		categories: ["entertainment", "movies", "shows"],
		auth: 1
	},
	{
		id: "omdb",
		name: "OMDb API",
		description: "Obtain movie information and images from open movie database.",
		docs: "https://www.omdbapi.com/",
		https: true,
		categories: ["entertainment", "movies"],
		auth: 1
	},
	{
		id: "tvbd",
		name: "The TVDB API",
		description: "Community driven TV and movie database.",
		img: "tvdb.png",
		docs: "https://api.thetvdb.com/swagger",
		https: true,
		categories: ["entertainment", "movies", "shows"],
		auth: 1
	},
	{
		id: "tvmaze",
		name: "TV Maze",
		description: "Find information and track for any show on any device.",
		img: "tvmaze.png",
		apiUrl: "https://api.tvmaze.com/schedule/full",
		docs: "https://tvmaze.com/api",
		https: true,
		categories: ["entertainment", "shows"]
	},
	{
		id: "icanhazdadjoke",
		name: "Icanhazdadjoke",
		description: "Largest selection of dad jokes.",
		img: "icanhazdadjoke.png",
		apiUrl: "https://icanhazdadjoke.com/",
		docs: "https://icanhazdadjoke.com/api",
		https: true,
		categories: ["entertainment", "comics"]
	},
	{
		id: "jokeapi",
		name: "JokeAPI",
		description: "Uniform and well formatted jokes.",
		img: "jokeapi.png",
		apiUrl: "https://sv443.net/jokeapi/v2/joke/any",
		docs: "https://sv443.net/jokeapi/v2/",
		https: true,
		categories: ["entertainment", "comics"]
	},
	{
		id: "tronalddump",
		name: "Tronalddump.io",
		description: "Api & web archive for the dumbest things Donald Trump has ever said.",
		img: "tronalddump.png",
		apiUrl: "https://api.tronalddump.io/random/quote",
		docs: "https://docs.tronalddump.io/",
		https: true,
		categories: ["entertainment", "comics"]
	},
	{
		id: "icndb",
		name: "ICNDb",
		description: "The internet Chuck Norris database.",
		apiUrl: "https://api.icndb.com/jokes/random",
		docs: "http://www.icndb.com/api/",
		https: true,
		categories: ["entertainment", "comics"]
	},
	{
		id: "trump.think",
		name: "What does Trump think",
		description: "Get random or personalized Trump quote.",
		img: "trumpthink.png",
		apiUrl: "https://api.whatdoestrumpthink.com/api/v1/quotes/random",
		docs: "https://whatdoestrumpthink.com/api-docs/index.html",
		https: true,
		categories: ["entertainment", "comics"]
	},
	{
		id: "openweather",
		name: "Open Weather",
		description: "Weather forecasts, nowcasts and history in fast and elegant way.",
		img: "openweather.png",
		docs: "https://openweathermap.org/api",
		https: true,
		categories: ["weather"],
		auth: 1,
		hasPaidPlan: true
	},
	{
		id: "weatherstack",
		name: "Weatherstack",
		description: "Real-Time & Historical World Weather Data API.",
		img: "weatherstack.png",
		docs: "https://weatherstack.com/documentation",
		https: true,
		categories: ["weather"],
		auth: 1,
		hasPaidPlan: true
	},
	{
		id: "weatherbit",
		name: "Weatherbit",
		description: "High performance weather API for all of the weather data needs.",
		docs: "https://www.weatherbit.io/api",
		https: true,
		categories: ["weather"],
		auth: 1,
		hasPaidPlan: true
	},
	{
		id: "accuweather",
		name: "AccuWeather",
		description: "Build the weather experience like never before.",
		img: "accuweather.png",
		docs: "https://developer.accuweather.com/apis",
		https: true,
		categories: ["weather"],
		auth: 1,
		hasPaidPlan: true
	},
	{
		id: "aerisweather",
		name: "Aeris Weather",
		description: "API for usage from the basic to complex weather-influenced solutions.",
		img: "aerisweather.png",
		docs: "https://www.aerisweather.com/support/docs/api/",
		https: true,
		categories: ["weather"],
		auth: 1,
		hasPaidPlan: true
	},
	{
		id: "troposphere",
		name: "Troposphere",
		description: "Easy, fast and free weather API.",
		img: "troposphere.png",
		docs: "https://www.troposphere.io/developer",
		https: true,
		categories: ["weather"],
		auth: 1,
		hasPaidPlan: true
	},
	{
		id: "catapi",
		name: "catAPI",
		description: "Random pictures of cats.",
		apiUrl: "https://thatcopy.pw/catapi/rest/",
		docs: "https://github.com/ThatCopy/catAPI/wiki/Usage",
		https: true,
		categories: ["animals"]
	},
	{
		id: "thecatapi",
		name: "TheCatApi",
		description: "Cats as a service, everyday is Caturday.",
		img: "thecatapi.png",
		apiUrl: "https://api.thecatapi.com/v1/images/search",
		docs: "https://docs.thecatapi.com/",
		https: true,
		categories: ["animals"]
	},
	{
		id: "random.cat",
		name: "Random Cat",
		description: "Random pictures of cats",
		img: "random-cat.png",
		apiUrl: "https://aws.random.cat/meow",
		https: true,
		categories: ["animals"]
	},
	{
		id: "random.dog",
		name: "Random Dog",
		description: "Random pictures of dogs",
		apiUrl: "https://random.dog/woof.json",
		https: true,
		categories: ["animals"]
	},
	{
		id: "random.fox",
		name: "Random Fox",
		description: "Random pictures of fox",
		img: "randomfox.png",
		apiUrl: "https://randomfox.ca/floof/",
		https: true,
		categories: ["animals"]
	}
];
