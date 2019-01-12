const likeSelectors = [
  'ytd-toggle-button-renderer.ytd-menu-renderer:nth-child(1) > a:nth-child(1) > yt-formatted-string:nth-child(2)',
  '.like-button-renderer-like-button-unclicked > span:nth-child(1)',
  '.like-button-renderer-like-button-clicked > span:nth-child(1)',
];
const dislikeSelectors = [
  'ytd-toggle-button-renderer.style-scope:nth-child(2) > a:nth-child(1) > yt-formatted-string:nth-child(2)',
  '.like-button-renderer-dislike-button-unclicked > span:nth-child(1)',
  '.like-button-renderer-dislike-button-clicked > span:nth-child(1)',
];
const barSelectors = [
  '#sentiment',
  '.video-extras-sparkbars',
];

let styleString =  '';

// build a css string
const elementsToHide = [].concat(likeSelectors, dislikeSelectors, barSelectors).map(function(selector) {
  styleString += selector + '{visibility:hidden;}';
});

// insert new css
const head = document.head;
const style = document.createElement('style');
style.type = 'text/css';
style.appendChild(document.createTextNode(styleString));
head.appendChild(style);
