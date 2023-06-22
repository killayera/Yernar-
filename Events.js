window.addEventListener('scroll', function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var parallaxImage = document.querySelector('.parallax-image');
    parallaxImage.style.transform = 'translateY(' + (scrollTop * 0.4) + 'px)';
  });