

const CFonts = require('cfonts');
var readlineSync = require('readline-sync');
const chalk =require("chalk");
var colors = require('ansi-256-colors');
var score=0;
console.log(chalk.green.underline.bold("WELCOME TO THE QUIZ !ðððð"));


var userName=readlineSync.question(chalk.yellow('hey hiið'+'\n what is your name? \n'));

CFonts.say('WELCOME \n'+ userName +'!', {
	font: 'tiny',              // define the font face
	align: 'left',              // define text alignment
	colors: ['#f80'],         // define all colors
	background: 'transparent',  // define the background color, you can also use `backgroundColor` here as key
	letterSpacing: 1,           // define letter spacing
	lineHeight: 1,              // define the line height
	space: true,                // define if the output text should have empty lines on top and on the bottom
	maxLength: '0',             // define how many character can be on one line
	gradient:false,            // define your two gradient colors
	independentGradient: false, // define if you want to recalculate the gradient for each new line
	transitionGradient: false,  // define if this is a transition between colors directly
	env: 'node'                 // define the environment CFonts is being executed in
  });

  console.log(chalk.white.underline("IF YOU ARE A BOOKWORM ðð,then this game is for you\n"));
  console.log(chalk.white.bold("if not,ð  let's gain some knowledge\n"));
  
var click=readlineSync.question("press enter to continue â¶\n")
  
  instructions();


  function instructions(){
	console.log(colors.fg.getRgb(2,3,4)+'1ï¸â£ : For every ' + chalk.green('RIGHT') + (' answer you will be awarded with ')+  chalk.green('1') + (' Point.\n'));

console.log(colors.fg.getRgb(2,3,4)+'2ï¸â£ : After the game Score Board will be display, if you cross the threshold (score > 7) score please send me screenshot i will update the leaderboard.\n');

 console.log(colors.fg.getRgb(2,3,4)+ '3ï¸â£ : After every question ,there is quote from the one of my favorite book think and grow rich\n\n');
  };
var click=readlineSync.question("press enter to continue â¶\n")



function play(question, answer,quote) {
  var userAns = readlineSync.question(chalk.yellow.bold(question)+'\n');
 


  if (userAns.toUpperCase() == answer.toUpperCase()) {
    console.log(colors.fg.getRgb(3,5,0)+("yeah!congrats!ââ"));
    score = score + 1;
  } else {
    console.log(chalk.bold.red("ooops, incorrect!:("));

  }
  console.log(chalk.blue.underline("your current score : " + score));
  console.log('ã°ã°ã°ã°ã°ã°ã°ã°ã°ã°ã°ã°ã°ã°ã°ã°ã°ã°ã°ã°ã°ã°ã°ã°ã°ã°ã°ã°ã°ã°ã°ã°ã°ã°ã°ã°ã°ã°ã°ã°ã°ã°ã°ã°ã°ã°ã°ã°ã°ã°ã°ã°ã°ã°ã°ã°ã°ã°ã°ã°ã°ã°ã°ã°ã°ã°ã°ã°ã°ã°ã°ã°ã°ã°ã°ã°ã°ã°ã°ã°')
  console.log(chalk.bold.underline("GOOD QUOTE")+colors.fg.getRgb(5,3,5)+(quote));
  
 
}

function rankers(){
  console.log('samiksha = 10\n'+"aman=8\n"+"sakshi=9\n"+"hetal=8\n")

}

var quiz=[
  {
  question:'who is the author of the book think and grow rich?\na.Dale Carnegie\nb.Napoleon Hill\nc.Earl Nightingale\nd.Andrew Carnegie',
  answer:"b",
	quote:'ð You are the master of your destiny. You can influence, direct and control your own environment. You can make your life what you want it to beð\n'
},
{
  question:"Which of the following is not written by Munshi Premchand?\na.Gaban\nb.Godan\nc.Manasorovar\nd.Guide",
  answer:'d',
	quote: 'ð Mind control is the result of self-discipline and habit. You either control your mind or it controls you. There is no hall-way compromiseð\n'
},
{question:"The book 'India of our Dreams' was written by ___ ?\na.Dr. Rajendra Prasad\nb.M.V. Kamath\nc.Dr. C. Subramanian\nd.Dr. S. Radhakrishnan",
answer:"b",
quote:"ð More gold had been mined from the mind of men than the earth itselfð\n"
},{
  question:"The famous book ' The Daughter of the East ' is written by?\na.Ms.Benazir Bhutto\nb.Ms. Taslima Nasreen\nc.Ms. Arungsan Suu Kyi\nd.Ms Bandarnaike Sirimavo",
 answer:"a",
 quote:" ð If you are ready for the secret, you already possess one half of it,therefore, you will readily recognize the other half the moment it reaches your mindð\n"
},{
  question:"The celebrated Novel 'The Godfather' was authored by? \na.John Milton\nb.Victor Hugo\nc.Mario Puzo\nd.Harold Robbins",
  answer:"c",
  quote:"ð Your subconscious mind recognizes and acts only upon thoughts which have been well-mixed with emotion or feelingð\n"
},{
  question:"Who is the author of 'Anandmath'?\na.Rabindranath Tagor\nb.Bankim Chandra Chattopadyaya\nc.Sarojini Nayadu\nd.Jyotiba Phule",
  answer:"b",
  quote:"ð Remember that your real wealth can be measured not by what you have, but by what you areð\n"

},
{question:"Who said,  I therefore, want freedom immediately, this very night, before dawn, if it can be had?\na.Mahatma Gandhi\nb.Edwina Mounbatten\nc.Jawaharlal Nehru\nc.Ms. Taslima Nasreen",
answer:"a",
quote:"ð Every person who wins in any undertaking must be willing to burn his ships and cut all sources of retreatð\n"},
{question:"who amongst the following is the author of the book ' Colours of the Rainbow\na.A.V.Kamath\nb.Anita Nayyar\nc.Pritish Nandy\nd.Ranjit Biswa",
answer:"d",
quote:"ð Great achievement is usually born of great sacrifice, and is never the result of selfishnessð\n"},
{question:'Amrita Pritam s work A Revenue Stamp is ?\na.A book of stories\nb.A novel\nc.A biography\nd.An autobiography',
answer:"d",
quote:"ð Every person who wins in any undertaking must be willing to burn his ships and cut all sources of retreatð\n"},
{question:'Who is the author of the controversial book Forbidden verses?\na.Abu nuwaz\nb.Salman Rushdid\nc.D.H.Lawrence\nd.Ms. Taslima Nasreen',
answer:"a",
quote:"ð If you can see it in your mind, you will hold it in your handð\n"}];





for(var i=0;i<quiz.length;i++){
  play(quiz[i].question,quiz[i].answer,quiz[i].quote)
  var
  
   click=readlineSync.question(chalk.red("press enter for NEXT â¶\n\n"));
}

console.log(chalk.green.bold.underline("you scored  â¡ "+score+"ð"));
if(score>7){
  console.log(colors.fg.getRgb(2,3,4)+"HURRAYð,\n you played awesomeð\n\n\n");

}else{
  console.log(colors.fg.getRgb(3,0,0)+"well played,try again â­â­\n\n\n\n");
}

console.log(chalk.bold.blue("LEADERBOARD ð© "));
rankers();