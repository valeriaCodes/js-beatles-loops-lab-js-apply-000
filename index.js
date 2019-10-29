function theBeatlesPlay (musicians, instruments) {
  let sentence = [];
  for(let i = 0; i < musicians.length; i+=2) {
    let str = musicians[i] + ' plays ' + instruments[i];
    
    sentence.push(str);
  }
  return sentence;
  
}


