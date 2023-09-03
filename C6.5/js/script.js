const btn = document.querySelector('.j-btn-test');

const screenWidth = window.screen.width;
const screenHeight = window.screen.height;

const windowInnerWidthScroll = window.innerWidth;
const windowInnerHeightScroll = window.innerHeight;

const windowInnerWidth = document.documentElement.clientWidth;
const windowInnerHeight = document.documentElement.clientHeight;

btn.addEventListener('click', () => {

alert(`Screen size: ${screenWidth}px x ${screenHeight}px. 
Size of browser window with scroll: ${windowInnerWidthScroll}px x ${windowInnerHeightScroll}px.
Size of browser window without scroll: ${windowInnerWidth}px x ${windowInnerHeight}px.
`);

});
