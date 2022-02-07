var tableLength = 12;
var tourDestination = ['coxs bazar', 'nepal', 'vutan', 'paris'];

tourDestination.indexOf('vutan');

var fourthDestination = tourDestination[3];

tourDestination[1] = 'srilanka';

tourDestination.push('London');
tourDestination.pop();

if (tourDestination[1] == 'nepal') {
    console.log('Pahare ahare ahare')
}
else if (tourDestination[1] == 'china') {
    console.log('china tor kache jamu na');
}
else if (tourDestination.length == 4) {
    console.log('aro taka ache aro beshi ghurmu');
}
else {
    console.log('kothao jamu na bashai thakmu ar mosha marmu');
}

var eggPrce = 32;
var myBudget = 32;
if (eggPrce <= myBudget) {
    console.log('ami dim khamu');
}
if (eggPrce > myBudget) {
    console.log('lebu diye vat khabo');
}