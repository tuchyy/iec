$(document).ready(function(){
    var allAds = $('.ads');
    var currentAd = 0;

    function changeAd() {

        $(allAds[currentAd]).fadeOut(400, function() {
            
            if(currentAd == allAds.length -1) {
                currentAd = 0;

            } else {
                currentAd++;
                
            }

            $(allAds[currentAd]).fadeIn(400);

        });

    }

    setInterval(changeAd, 3000);

});