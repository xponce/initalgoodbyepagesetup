// JavaScript
// window.addEventListener('load', function () {
//     document.querySelector('.element').classList.add('fade-in');
// });


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
    let text = "Check out this goodbye letter to alcohol: [Your Page URL]";
    window.open('https://twitter.com/intent/tweet?text=' + encodeURI(text), '_blank');
}