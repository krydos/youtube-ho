const elementsToHide = {
  likes: document.querySelector('ytd-toggle-button-renderer.ytd-menu-renderer:nth-child(1) > a:nth-child(1) > yt-formatted-string:nth-child(2)'),
  dislikes: document.querySelector('ytd-toggle-button-renderer.style-scope:nth-child(2) > a:nth-child(1) > yt-formatted-string:nth-child(2)'),
  bar: document.querySelector('#sentiment'),
};

Object.keys(elementsToHide).forEach(function(el) {
  elementsToHide[el].style.visibility = 'hidden';
});
