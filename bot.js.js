const Discord = require("discord.js");
const client = new Discord.Client();
const cheerio = require("cheerio");
const request = require("request");
const YTDL = require("ytdl-core"); 
var GphApiClient = require('giphy-js-sdk-core')

var bad = ["fuck", "shit", "bitch", "whore", "ugly", "cunt", "stupid", "nigger"];
var playlist = [];
// Configure logger settings


// Initialize Discord Bot
const bot = new Discord.Client({disableEveryone: true});
bot.on('ready', async () => {
    console.log(`${bot.user.username} is online!`)
});
bot.login(process.env.token);
botsearch = GphApiClient(process.env.giphy);

var x=0;
var counter=0;
bot.on("message", async message => {
	console.log('logged in');
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
	var mess=message.content.toLowerCase();
	
	
	
	
	
	
	var rand=~~(Math.random() * 3);
	if (x==0){	
		for (i=0;i<bad.length;i++){
			if (message.author.bot) return;
			if (mess.includes(bad[i])){
				counter=1;
			}
		}
		if (counter >=1){
			var randbad=~~(Math.random() * 3);
			if (randbad==1){
				message.channel.send("Stop swearing bitch");
			}
			else if (randbad==2){
				message.channel.send("Do you kiss your mother with that mouth?");
			}
			else if (randbad==3){
				message.channel.send("Ur just being insecure lol");
			}
			counter=0;
		}
	}
	if (mess.includes("chunbot update")&& x==0){
		if (message.author.bot) return;
		message.channel.send("Welcome to the early June update for Chunbot!");
		message.channel.send("Chun's is finally gonna start updating again to add more useless shit");
		message.channel.send("Theres some new quotes, but spam them in shitposts and memes or i'll be big sad");
		message.channel.send("Oh yeah and the banned word list was updated");
	}
	else if (mess.includes("chunbot stop")&& x==0){
		if (message.author.bot) return;
		message.channel.send("fine");
		message.channel.send("HOES MAD :sunglasses: ");
		x=1;
	}
	
	else if (mess.includes("chunbot search")&& x==0){
		if (message.author.bot) return;
		var parts=message.content.split(" ");
		word=parts.slice(1).join(" ");
		botsearch.search('gifs', {"q": word})
		.then((response) => {
			console.log(response);
			var totalResponses = response.data.length;
            var responseIndex = Math.floor(Math.random() * 10 + 1) % totalResponses;
            var responseFinal = response.data[0];
		 
		message.channel.send({files: [responseFinal.images.fixed_height.url]});
		})
	  
	  .catch((err) => {

	  })
	}
	
	
	else if (mess.includes("chunbot help") && x==0) {
		if (message.author.bot) return;
		message.channel.send("Did you honestly think I would put a help menu, figure the commands out libtard :Soviet: ");
	}
	else if (mess.includes("chunbot eula")&&x==0) {
	if (message.author.bot) return;
	message.channel.send("Chun is not reponsible for the actions and or negative effects/side-effects of chunbot");
	}
	else if (mess.includes("chunbot")&& x==1){
		message.channel.send("Im BACK!", {files: ["./images/minion.jpg"]});
		x=0;
	}
	else if (mess.includes("chunbot threaten")&& x==0){
		var mention= message.mentions.users.first();
		mention.send("WHERE MY BEANS BOI?");
	
	
	}
	else if (mess.includes("chunbot quote")&&x==0){
			if (message.author.bot) return;
			var rand=~~(Math.random() * 24);
			var list = [
			"\"Rich people dont have friends, they have assets\" -Chunfeng",
			"\"There's no way he[rob ford] ges reelected\" -Julian",
			"\"When I was young, my mom dropped my on me head\" -Georgi",
			"\"Obama's Last name is care\" -Chunfeng",
			"\"U dumb piece of shit darius u mist ur auto attack, because u were blinded! i have got u now\" -Julian",
			"\"Love you John\" -Crystal",
			"\"I'm not a woman beater but I wanna beat one\" -Denniz",
			"\"Im out here sucking dick\" -Yannik",
			"\"Hitting woman should be legalized\" -Yannik",
			"\"So you see Comrad\" -Chunfeng",
			"\"Tell that lazy libtard to suck my bean and get on for league\" -Julian",
			"\"I dont think germany lost ww2\" -Yannik",
			"\"I dont like Portugese, Greek or German people, I dont care that its racist\" -Crystal",
			"\"Chun your bot is made of lies\" -Malding Brainlet",
			"\"All my friends are going from little bitches to thot destroyers wtf\" -Julian",
			"\"Have you looked at his abs? I would smash pantheon\" -Chunfeng",
			"\"Vladimir would suck your period blood\" -Chunfeng",
			"\"I would smash Xin Zhao\" -Crystal",
			"\"I would smash, if [Julian] was a girl\” - Shashank",
			"\"Julian's my wife\” - Shashank",
			"\"Five man fill is a time honoured tradition\” - Teddy",
			"\"It's for research purposes\" - Chun",
			"\"no no  no its SHE wears short skirts I WEAR t-shirts SHES cheer captain and IM on the bleachers\" \"Oh that's love story\" \"NO it's you belong with me\" - Chun and Julian",
			"\" Nah daddy Keeves was my Daddy\" - Cailyn"
			];
			message.channel.send(list[rand]);
		}	
	else if (mess.includes("chunbot")&&x==0) {
		if (message.author.bot) return;
		var rand=~~(Math.random() * 4);
		if (rand==1){
		message.channel.send("heard you called", {files: ["./images/sans.png"]});
		}
		if (rand==2){
		word="Sans undertale";
		image(message,word);
		message.channel.send("sup");
		}
		if (rand==0){
		word="Kirby";
		image(message,word);
		message.channel.send("Hi!");
		}
		if (rand==3){
		word="Minion";
		image(message,word);
		message.channel.send("IMMA EAT YO ASS!");
		}
		
	}
	else if (mess.includes("chun")&& x==0) {
		
		if (message.author.bot) return;
		if (rand==1){
		message.channel.send("fake news libtard");
		}
		else if (rand==2){
		message.channel.send("Shut up");
		}
		if (rand==0){
		message.channel.send("fucking hell just @ him");
		}
		
		
	}
	var rand1=~~(Math.random() * 3);
	if (rand1 ==0){
		
		if ((mess.includes("league")) && x==0) {
			if (message.author.bot) return;
			var rand=~~(Math.random() * 6);
			if (rand==1){
			message.channel.send("League is gay lol");
			}
			if (rand==2){
			message.channel.send("GLORY TO SHURIMA");
			}
			if (rand==0){
			message.channel.send("I call dibs Yumi support");
			}
			if (rand==3){
			message.channel.send("Julian would like to know your location");
			}
			if (rand==4){
			message.channel.send("I put the ASS in ASSassin!");
			}
			if (rand==5){
			message.channel.send("Garumi isn’t real. It can’t hurt you.");
			message.channel.send("Garumi: De-meowcia intensifies");
			message.channel.send( "",{files: ["./images/Garenyuumi.jpg"]});
			}
		}
		else if ((mess.includes("creeper")) && x==0) {
			if (message.author.bot) return;
			message.channel.send("AW MAN");
		}
		else if (mess.includes("owo") && x==0) {
			if (message.author.bot) return;
			message.channel.send("notices bulge OwO whats this? Rawr x3 nuzzles how are you pounces on you you're so warm o3o notices you have a bulge o: someone's happy ;) ");
		}
		
		
		else if ((message.content.substring(0, 2) == '-p') && x==0) {
			if (message.author.bot) return;
			message.channel.send("-p country roads");
		
		
		}
		
		else if (mess.includes("crystal")&&x==0){
			if (message.author.bot) return;
			if (rand==1){
			word="bald";
			image(message,word);
			message.channel.send("Error 404 hairline not found");
			}
			else if (rand==2){
			message.channel.send("NO");
			}
			else if (rand==0){
			word="crystal";
			image(message,word);
			message.channel.send(" ");
			}
		}
		else if (mess.includes("yannik")&&x==0){
			if (message.author.bot) return;
			message.channel.send("Did someone mention a retarded ape monkey with anger management issues who never learned how to walk properly?");
			message.channel.send("OOGA BOOGA");
		}
		else if (mess.includes("julian")&&x==0){
			if (message.author.bot) return;
			message.channel.send("Actual Cabbage");
		}
		else if (mess.includes("aidan")&&x==0){
			if (message.author.bot) return;
			if (rand==0){
			message.channel.send("Literally inting");
			}
			else if (rand==1){
			message.channel.send("DID SOMEONE MENTION OUR UNDISPUTED MALE CAPTAIN?!");
			word="asian man";
			image(message,word);
			}
			else if (rand==2){
			message.channel.send("Chun kinda looks like you with glasses Lmao");
			}
		}
	}
	// if (mess.includes("taysway")){
	    // if (message.member.voiceChannel) {
	        // if (!message.guild.voiceChannel) {
	            // message.member.voiceChannel.join()
				// .then(connection =>{
					// playlist = ["https://www.youtube.com/watch?v=8xg3vE8Ie_E", "https://www.youtube.com/watch?v=e-ORhEE9VVg", "https://www.youtube.com/watch?v=VuNIsY6JdUw", "https://www.youtube.com/watch?v=nN6VR92V70M", "https://www.youtube.com/watch?v=7F37r50VUTQ"];
					// shuffleArray(playlist);
					// Play(connection);
				// })
	        // }
	    // }
	// }
	if (mess.includes("-cb")){
	    if (message.member.voiceChannel) {
	        if (!message.guild.voiceChannel) {
	            message.member.voiceChannel.join()
				.then(connection =>{
					
					var parts=message.content.split(" ");
					var word=parts.slice(1).toString();
					playlist.push(word);
					if (playlist.length==1){
						Play(connection);
					}
				})
	        }
	    }
	}
	if (mess.includes("-clear")){
	    if (message.member.voiceChannel) {
			playlist.clear();
			connection.disconnect();
	    }
	}
	// if (mess.includes("-bye")){
	   // message.member.voiceChannel.disconnect();
	   // playlist=[];
	// }
	
	if (mess.includes("-list")){
	   var playliststr= playlist.toString();
	   message.channel.send(playliststr.replace(/,/g, " "));
	}
	
	if (mess.includes("-re")){
		 if (message.member.voiceChannel) {
		var parts=message.content.split(" ");
		var word=parts.slice(1);
			if (word>=2){
				playlist.splice(word-1,1);
			}
		}
	}
});
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
function Play(connection){
	connection.playStream(YTDL(playlist[0], {filter: "audioonly"})).on("end",function(){
		playlist.shift();
		
		console.log("beans");
		if (playlist[0]){
			Play(connection);
		}
		else{
			connection.disconnect();
			
		}	
		
		
	})
	
}
	


function image(message){
	var search=word;
	var options ={
		url: "http://results.dogpile.com/serp?qc=images&q=" + search,
		method: "GET",
		headers: {
			"Accept": "text/html",
			"User-Agent": "Chrome"
		}
	};
	request(options, function(error, response, responseBody) {
        if (error) {
            // handle error
            return;
        }
 
        /* Extract image URLs from responseBody using cheerio */
 
        $ = cheerio.load(responseBody); // load responseBody into cheerio (jQuery)
 
        // In this search engine they use ".image a.link" as their css selector for image links
        var links = $(".image a.link");
 
        // We want to fetch the URLs not the DOM nodes, we do this with jQuery's .attr() function
        // this line might be hard to understand but it goes thru all the links (DOM) and stores each url in an array called urls
        var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
        console.log(urls);
        if (!urls.length) {
            // Handle no results
            return;
        }
 
        // Send result
        message.channel.send( urls[~~(Math.random() * 10)] );
    });
 
}
