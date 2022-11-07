function talk(){
  let text = "@i.nayan02";
  let acc=text.link("https://www.instagram.com/i.nayan_/");
  var know={
    "Who are you" : "It's Ankit Here",
    "How are you" : "I am Fine. What about You?",
    "What can I do for you": "Search about i.nayan02 on Instagram>>Thank me later",
    "Your followers" : "I have a family of 400 in INstagram",
    "Give your Id" : `it is ${text}`,
    "Okay" : "Thank You",
    "Bye" : "Meet you Soon!"
  };
  var user=document.getElementById("userbox").value;
  document.getElementById("answer").innerHTML=user + "<br>";
  if(user in know){
    document.getElementById("answer").innerHTML=know[user]+"<br>";
  }
  else{
    document.getElementById("answer").innerHTML="Sorry i didn't know!!!!<br>";
  }
}