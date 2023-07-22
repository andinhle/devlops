window.addEventListener('scroll', function() {
    var header = document.querySelector('#header');
    var headerOffsetTop = header.offsetTop; // Lấy vị trí offset của header
    
    if (window.scrollY > headerOffsetTop) { // So sánh vị trí cuộn với vị trí offset của header
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
});

var bars = document.querySelector('.bars-menu');
var showMenu = document.querySelector('.menu-list');
var showOverlay = document.querySelector('.overlay');
bars.addEventListener('click', function () {
    showMenu.classList.toggle('show-menu');
    showOverlay.classList.toggle('show-overlay');
    iconOut.classList.toggle('show-out-icon');
});
showOverlay.addEventListener('click',()=>{
    showMenu.classList.remove('show-menu');
    showOverlay.classList.remove('show-overlay');
})
