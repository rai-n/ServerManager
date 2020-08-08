var Discord = require("discord.io");
var logger = require("winston");
 
const fs = require('fs');
var group = "e184b286-b369-46c9-ab55-054c3368af33";

var Habitica = require("habitica");




var bots = [
{
  "id" : 0,
  "user" : "1736f2bf-3e64-4950-bcb0-b20c9b3808bb",
  "api" : "eb4ed708-536f-4ded-ae98-08a3ba6a7328"
},
{
  "id" : 1,
  "user" : "e7dafcfe-ac16-4e2a-a2d0-a22445fb58cf",
  "api" : "eb4ed708-536f-4ded-ae98-08a3ba6a7328"
},
{
  "id" : 2,
  "user" : "afad2507-7899-4774-a724-960ae7206c6e",
  "api" : "0d36e773-5230-4212-a075-970a8071e760"
},
{
  "id" : 3,
  "user" : "d4045b4b-c100-418b-9984-b3afce0c7a8b",
  "api" : "3d79dc73-c129-4171-85d8-68e5ae18c904"
},
{
  "id" : 4,
  "user" : "6d383ce6-6ae3-492d-8b18-fe41ff6990ad",
  "api" : "d214c774-71d8-4572-acbb-e70da3c2d619"
},
{
  "id" : 5,
  "user" : "eef1a809-8628-471f-a2e5-8edbd3f0acdc",
  "api" : "85dc5320-8320-48a3-9bb6-fb9a42a0c586"
},
{
  "id" : 6,
  "user" : "b81154d0-5c50-469f-ad0a-6f49e318147c",
  "api" : "679c5733-76fc-42eb-837b-a7fb674edc83"
},
{
  "id" : 7,
  "user" : "4a93c5cf-2670-4b86-a2ac-6181b3d3b94d",
  "api" : "78c67021-42fd-4f53-952c-c9ba1c0d356c"
},
{
  "id" : 8,
  "user" : "87849b8f-8caf-4b72-a18a-be55a41cde9f",
  "api" : "a74499a9-e7ab-4894-96a2-599c67fa6873"
},
{
  "id" : 9,
  "user" : "503cf7a9-0945-46bc-ab06-35fe2bd87e0c",
  "api" : "d6473698-c99d-4c54-b122-582e24f85ad9"
},
{
  "id" : 10,
  "user" : "a65bbcfd-a9b6-4a34-92f0-d26cad1de8e2",
  "api" : "43d72285-14fe-4d14-b79f-8fc3a800a0fb"
}, 
{
  "id" : 11,
  "user" : "21fa07ba-fb92-4b08-a310-f684d9436565",
  "api" : "e61d18a1-c63c-465d-bdef-7fcafd7bfe6c"
}, 
{
  "id" : 12,
  "user" : "35861154-a77c-4c7c-937f-05743b72b022",
  "api" : "d8e3a4cf-fa92-4471-8124-c109a8671fc5"
}, 
{
  "id" : 13,
  "user" : "cdcc010a-04ac-4c94-acc2-adae5a97fbb5",
  "api" : "fd3daa55-cfdc-44e4-aaa0-044ec4c9812c"
}, 
{
  "id" : 14,
  "user" : "71dfe9f0-04dc-4662-9a03-27ee4be6b099",
  "api" : "a3e6d964-eddc-4743-84dc-87a4c815eb3e"
}
];

// Fisher-Yates-Durstenfeld shuffle
function shuffle() {
  for (var i = 0; i < sourceArray.length - 1; i++) {
    var j = i + Math.floor(Math.random() * (sourceArray.length - i));

    var temp = sourceArray[j];
    sourceArray[j] = sourceArray[i];
    sourceArray[i] = temp;
  }
  return sourceArray;
}



console.log(bots);



var api = new Habitica({
  id: "",
  apiToken: "",
  endpoint: "", // defaults to https://habitica.com/
  platform: "" // defaults to Habitica-Node
});

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
  colorize: true
});
logger.level = "debug";
// Initialize Discord Bot
var bot = new Discord.Client({
 token: process.env.BOT_TOKEN,
 autorun: true
});

bot.on("ready", function (evt) {
  logger.info("Connected");
  logger.info("Logged in as: ");
  logger.info(bot.username + " - (" + bot.id + ")");
});


bot.on("message", function (user, userID, channelID, message, evt) {

  if (message.substring(0, 1) == "!") {
    var args = message.substring(1).split(" ");
    var cmd = args[0];
    var max = args[2];
    var usernameVote;
    if (args[3] !== ""){
      usernameVote = "AlTheGreat";
    } else {
      usernameVote = args[3];
    }
    switch(cmd) {
            // If habitica 
            case "H":
                //If Habitica but not check 
                if (args[1] === "vote"){
                //Check
                bot.sendMessage({
                  to: channelID,
                  message: "Voting initiated..."
                });

                //Process loop start
                if (max < 15 && max > 0){

                  //generating 15 unique numbers out of 25 possible numbers
                  var arr = []
                  while(arr.length < max){
                      var r = Math.floor(Math.random()*25) + 1;
                      if(arr.indexOf(r) === -1) arr.push(r);
                  }
       
                  //new loop end


                  for (var y = 0 ; y < arr.length; y++){
                    bots.forEach(o => {
                      if (o.id === arr[y]) {
                        var api = new Habitica({
                          id: o.user,
                          apiToken: o.api,
                              endpoint: "", // defaults to https://habitica.com/
                              platform: "" // defaults to Habitica-Node
                            });

                            //Process loop end
                            

                            api.get('/groups/e184b286-b369-46c9-ab55-054c3368af33/chat').then((res) => {
                              var data = res.data

                              for(let i = 0; i < 10 ; i++){

                                if (data[i].username === usernameVote){


                                setTimeout(function() {
                              //Post start
                        chatID = data[i]._id; 

                        var postID = "/groups/e184b286-b369-46c9-ab55-054c3368af33/chat/" + chatID + "/like";
                        api.post(postID).then((res) => {
                          var chatMessage = res.data

                          console.log(chatMessage);

                          //Writing to file
                          fs.appendFile("Bot/voted.txt", ("Voted id: " + chatID + "\n"), function(err) {
                            if(err) {
                              return console.log(err);
                            }

                            console.log("The file was saved!");

                            bot.sendMessage({to:channelID, message: "Voted id: " + chatID + "\n" });
                          }); 
                        });
                        // Post end
                                }, 3000);
                       



                      }
                    }
                  });
                          } else {
                            console.log("o: " + o);
                            console.log("o user: " + o.user);
                            console.log("o apis: " + o.api);
                          } 
                        });
                  }
                } else {
                  bot.sendMessage({
                    to: channelID,
                    message: "!H vote 15 (or less)"
                  });
                }
              } else if (args[1] === "help"){
                bot.sendMessage({to: channelID, embed: {
                  "title": "Voter Bot v2",
                  "description": "Works for all usernames",
                  "color": 9427571,
                  "footer": {
                    "text": "Report any bugs to @Neer"
                  },
                  "thumbnail": {
                    "url": "https://images.emojiterra.com/google/android-pie/512px/1f575.png"
                  },
                  "fields": [
                  {
                    "name": "How to vote?",
                    "value": "!H vote (n) (username)"
                  }
                  ]
                }});
              }

              else {
               bot.sendMessage({
                to: channelID,
                message: "Invalid command. Try !H help"
              });
             }

             break;
           }

          //cmd end 
        }
         //bot message event
       });







