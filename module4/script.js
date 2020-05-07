(function (){
  var namelist = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  for (var name in namelist) {
    var letter = namelist[name].charAt(0);    
    if (letter.toLowerCase() == 'j')
    {
      byeSpeaker.speak(namelist[name]);
    } 
    else
    { 
      helloSpeaker.speak(namelist[name]);  
    }
  }
})();



