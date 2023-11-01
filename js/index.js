window.addEventListener('load', function() {
    let section = document.getElementById("letter");
    section.style.animation = "fadeIn 2.5s ease forwards";
});


document.getElementById("facebookShareButton").addEventListener("click", function () {
    shareOnFacebook();
});

document.getElementById("twitterShareButton").addEventListener("click", function () {
    shareOnTwitter();
});

function shareOnFacebook() {
    let url = encodeURI(window.location.href);
    window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank');
}

function shareOnTwitter() {
    let text = "Check out this goodbye letter to alcohol: [https://goodbyetoalcoholletter-2023.web.app/]";
    window.open('https://twitter.com/intent/tweet?text=' + encodeURI(text), '_blank');
}