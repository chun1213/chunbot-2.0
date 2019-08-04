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
	bot.user.setActivity("Roblox");
});

bot.login(process.env.token);
var x=0;
var counter=0;
bot.on("message", async message => {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
	for (i=0;i<bad.length;i++){
		if (message.author.bot) return;
		if (message.content.includes(bad[i])){
			counter=1;
		}
	}
	if (counter==1){
		message.channel.send("Stop swearing bitch");
		counter=0;
	}
	if ((message.content.includes("chunbot stop")||message.content.includes("Chunbot stop")) && x==0){
		if (message.author.bot) return;
		message.channel.send("fine");
		message.channel.send("HOES MAD :sunglasses: ");
		x=1;
	}
	
	else if ((message.content.includes("chunbot search")||message.content.includes("Chunbot search")) && x==0){
		if (message.author.bot) return;
		var parts=message.content.split(" ");
		word=parts.slice(1).join(" ");
		image(message,word);
		return;
		
	}
	else if ((message.content.includes("chunbot help")||message.content.includes("Chunbot help")) && x==0) {
		if (message.author.bot) return;
		message.channel.send("Did you honestly think I would put a help menu, figure the commands out libtard :Soviet: ");
	}
	else if ((message.content.includes("League")||message.content.includes("league")) && x==0) {
		if (message.author.bot) return;
		message.channel.send("League is gay lol");
	}
	else if ((message.content.includes("Creeper")||message.content.includes("creeper")) && x==0) {
		if (message.author.bot) return;
		message.channel.send("AW MAN");
	}
    else if ((message.content.includes("chunbot")||message.content.includes("Chunbot")) &&x==0) {
		if (message.author.bot) return;
		message.channel.send("heard you called", {files: ["./images/sans.png"]});
	}
	else if ((message.content.includes("chunbot")||message.content.includes("Chunbot")) && x==1){
		message.channel.send("Im BACK!", {files: ["./images/minion.jpg"]});
		x=0;
	}
	else if ((message.content.includes("OwO")||message.content.includes("owo")) && x==0) {
		if (message.author.bot) return;
		message.channel.send("notices bulge OwO whats this? Rawr x3 nuzzles how are you pounces on you you're so warm o3o notices you have a bulge o: someone's happy ;) ");
	}
	
	else if ((message.content.includes("chun")||message.content.includes("Chun")) && x==0) {
        // var args = message.substring(1).split(' ');
        // var cmd = args[0];
		if (message.author.bot) return;
        message.channel.send("fake news libtard");
	
        // args = args.splice(1);
        // switch(cmd) {
            //!ping
            // case 'ping':
                // bot.sendMessage({
                    // to: channelID,
                    // message: 'Pong!'
                // });
            //break;
            // Just add any case commands if you want to..
         //}
    }
	else if ((message.content.substring(0, 2) == '-p') && x==0) {
		if (message.author.bot) return;
	    message.channel.send("-p country roads");
	
	
	}
	
	else if ((message.content.includes("crystal")||message.content.includes("Crystal"))&&x==0){
		if (message.author.bot) return;
		word="bald";
		image(message,word);
		message.channel.send("Error 404 hairline not found");
	}
});

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
	