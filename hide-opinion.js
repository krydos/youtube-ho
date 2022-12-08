// set visibility:hidden so the area of an element is still in place
const toHide = [
  // likes
  'ytd-toggle-button-renderer.ytd-menu-renderer:nth-child(1) > a:nth-child(1) > yt-formatted-string:nth-child(2)',
  '.like-button-renderer-like-button-unclicked > span:nth-child(1)',
  '.like-button-renderer-like-button-clicked > span:nth-child(1)',
  // dislikes
  'ytd-toggle-button-renderer.style-scope:nth-child(2) > a:nth-child(1) > yt-formatted-string:nth-child(2)',
  '.like-button-renderer-dislike-button-unclicked > span:nth-child(1)',
  '.like-button-renderer-dislike-button-clicked > span:nth-child(1)',
  // ratio bar
  '#sentiment',
  '.video-extras-sparkbars',
];

// set display:none
const toRemove = [
    '#segmented-like-button > ytd-toggle-button-renderer > yt-button-shape > button > div.cbox.yt-spec-button-shape-next--button-text-content'
];

let styleString =  '';

// build a css string
const elementsToHide = [
  ...toHide.map(function(selector) {
      styleString += selector + '{visibility:hidden;}';
  }),
  ...toRemove.map(function(selector) {
      styleString += selector + '{display:none;}';
  })];


// insert new css
const head = document.head;
const style = document.createElement('style');
style.type = 'text/css';
style.appendChild(document.createTextNode(styleString));
head.appendChild(style);
