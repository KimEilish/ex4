function metal(){
    navigator.notification.confirm('a)Black Sabbath // b)Iron Maiden', opt1, 'Responda:', ['a)', 'b)']);

function opt1(buttonIndex){
  if(buttonIndex == 1){
    navigator.notification.alert('resposta certa',null,'a)Black Sabbath','okay');
    navigator.notification.beep(1);
  }
  else{
    navigator.notification.alert('resposta incorreta meu bom', null, 'b)Iron Maiden', 'okay');
      navigator.vibrate(1000);

    }
  }
}

function rock(){
    navigator.notification.confirm('a)Rolling Stones // b)Beatles', opt1, 'Responda:', ['a)', 'b)']);

function opt1(buttonIndex){
  if(buttonIndex == 1){
    navigator.notification.alert('resposta certa',null,'a)Rolling Stones','okay');
    navigator.notification.beep(1);
  }
  else{
    navigator.notification.alert('resposta incorreta meu bom', null, 'b)Stones', 'okay');
      navigator.vibrate(1000);

    }
  }
}

function hard(){
    navigator.notification.confirm('a)Appetite For Destruction // B)Use Your Illusion I', opt1, 'Responda:', ['a)', 'b)']);

function opt1(buttonIndex){
  if(buttonIndex == 1){
    navigator.notification.alert('resposta certa',null,'a)Appetite For Destruction','okay');
    navigator.notification.beep(1);
  }
  else{
    navigator.notification.alert('resposta incorreta meu bom', null, 'b)Use Your Illusion I', 'okay');
    navigator.vibrate(1000);

    }
  }
}