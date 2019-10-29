function theBeatlesPlay (musicians, instruments) {
  let sentence = [];
  for(let i = 0; i < musicians.length; i++) {
    let str = musicians[i] + ' plays ' + instruments[i];
    
    sentence.push(str);
  }
  return sentence;
  
}

function johnLennonFacts(facts) {
  let newArr = [];
  i = 0
  while (i < facts.length) {
    let str = facts[i] + '!!!';
    newArr.push(str);
    i++;
  }
  return newArr;
}


