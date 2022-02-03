var tableLength = 12 ;
var tourDestinations = ['coxbazar', 'nepal', 'vutan', 'paris'];

tourDestinations.indexOf('vutan');

var fourthDestination = tourDestinations[3];
tourDestinations[1] = 'srilanka' ;

tourDestinations.push('London');
tourDestinations.pop();

if (tourDestinations[1]== 'nepal') {
     console.log('pahare jabo')
}
else if(tourDestinations[1] == 'chaina') {
     console.log('chaina jamu na');
}
else if (tourDestinations.length == 4 ) {
     console.log('aro taka ache ghurmu ami');
}
else{
     console.log('kothaw jamu na khali kanmu');
}

var eggPrice = 32;
var myBudget = 32;
if (eggPrice <= myBudget) {
     console.log('ami dim khamu')
}
