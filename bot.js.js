const Discord = require("discord.js");
const client = new Discord.Client();
const cheerio = require("cheerio");
const request = require("request");
var bad = ["fuck", "shit", "bitch", "whore", "ugly", "cunt", "stupid"];
// Configure logger settings


// Initialize Discord Bot
const bot = new Discord.Client({disableEveryone: true});
bot.on('ready', async () => {
    console.log(`${bot.user.username} is online!`)
	bot.user.setActivity("Save the Trees");
});

bot.login(process.env.token);
var x=0;
var counter=0;
bot.on("message", async message => {
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
			message.channel.send("Stop swearing bitch");
			counter=0;
		}
	}
	if (mess.includes("chunbot update")&& x==0){
		if (message.author.bot) return;
		message.channel.send("Welcome to the November update for Chunbot!");
		message.channel.send("Get ready for some NUTbusting stuff!");
		message.channel.send("New features include:");
		message.channel.send("more Quotes!");
		message.channel.send("Less Agressive Anticks");
		message.channel.send("Less Features in this update cause Chun is freaking lazy AF");
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
		image(message,word);
		return;
		
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
	else if (mess.includes("chunbot quote")&&x==0){
			if (message.author.bot) return;
			var rand=~~(Math.random() * 14);
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
			"\"Chun your bot is made of lies\" -Malding Brainlet"

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
	const queue = new Map();
	const serverQueue = queue.get(message.guild.id);

	if (mess.includes("chunbotplay")) {
		execute(message, serverQueue);
		return;
	} else if (message.content.startsWith("chunbotskip")) {
		skip(message, serverQueue);
		return;
	} else if (message.content.startsWith("chunbotstop")) {
		stop(message, serverQueue);
		return;
	}
	async function execute(message, serverQueue) {
	const args = message.content.split(' ');

	const voiceChannel = message.member.voiceChannel;
	if (!voiceChannel) return message.channel.send('You need to be in a voice channel to play music!');
	const permissions = voiceChannel.permissionsFor(message.client.user);
	if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
		return message.channel.send('I need the permissions to join and speak in your voice channel!');
	}

	const songInfo = await ytdl.getInfo(args[1]);
	const song = {
		title: songInfo.title,
		url: songInfo.video_url,
	};

	if (!serverQueue) {
		const queueContruct = {
			textChannel: message.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true,
		};

		queue.set(message.guild.id, queueContruct);

		queueContruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueContruct.connection = connection;
			play(message.guild, queueContruct.songs[0]);
		} catch (err) {
			console.log(err);
			queue.delete(message.guild.id);
			return message.channel.send(err);
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		return message.channel.send(`${song.title} has been added to the queue!`);
	}

}

function skip(message, serverQueue) {
	if (!message.member.voiceChannel) return message.channel.send('You have to be in a voice channel to stop the music!');
	if (!serverQueue) return message.channel.send('There is no song that I could skip!');
	serverQueue.connection.dispatcher.end();
}

function stop(message, serverQueue) {
	if (!message.member.voiceChannel) return message.channel.send('You have to be in a voice channel to stop the music!');
	serverQueue.songs = [];
	serverQueue.connection.dispatcher.end();
}

function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}

	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', () => {
			console.log('Music ended!');
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => {
			console.error(error);
		});
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
}
});
async function execute(message, serverQueue) {
 const args = message.content.split(' ');
 const voiceChannel = message.member.voiceChannel;
 if (!voiceChannel) return message.channel.send('You need to be in a voice channel to play music!');
  const permissions =     voiceChannel.permissionsFor(message.client.user);
 if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
  return message.channel.send('I need the permissions to join and   speak in your voice channel!');
 }
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
	