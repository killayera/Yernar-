window.addEventListener('scroll', function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var parallaxImage = document.querySelector('.parallax-image');
    parallaxImage.style.transform = 'translateY(' + (scrollTop * 0.4) + 'px)';
  });

  <script>
  var button = document.getElementById("myButton");

  button.addEventListener("click", function() {
    // Display an alert when the button is clicked
    alert("Button clicked!")
  });
</script>
