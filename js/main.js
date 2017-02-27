var selectedimage = 0;
var games = ["arma3","battlefield1","civilization6","dota2","gta5","rust","spaceengineers"];

var previous = function(e){
    e.preventDefault();
    clearTimeout(timer);
    selectedimage--;
    showimage();
};

var next = function(e){
    e.preventDefault();
    clearTimeout(timer);
    selectedimage++;
    showimage();
};

var nextimagebytimer = function(){
    selectedimage++;
    showimage();
};

var startimer = function () {
    timer = setTimeout(nextimagebytimer, 6000);
};

var showimage = function(){
    if(selectedimage === -1){selectedimage = games.length -1;}
    if(selectedimage === games.length){selectedimage = 0;}
    var game = games[selectedimage];
    var imagestr = '<img src="img/' + game + '.jpg" alt="' + game + '" title="' + game + '"/>';
    //var captionstr = '<figcaption>' + game + '</figcaption>';// for adding a caption
    $('.image').fadeOut('fast',function () {
        $('.image').html(imagestr /*+ captionstr*/).fadeIn('fast');
    });
    startimer();
};

$(document).ready(function(){
    $('.previous').on('click',previous);
    $('.next').on('click',next);
    startimer();
});