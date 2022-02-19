/*
console.log($.name);
console.log(G$('joker','J','en'));
var arr = [1,2,3,4,5]
var test = 2;
var result = arr.includes(test);
console.log(result);
*/

var joker = G$('Joker','J','cn');
joker.greet(true).setLang('en').greet();


$('#login').click(function(){
    var bat = G$('Batman','R')

    $('#logindiv').hide();
    bat.setLang($('#lang').val()).HTMLGreeting('#greeting').log();
});

