function onScroll() {
  if (window.pageYOffset) {
    $$header.classList.add("is-active");
  } else {
    $$header.classList.remove("is-active");
  }
}

const $$header = document.querySelector(".js-header");

window.addEventListener("scroll", throttle(onScroll, 300));
// Materialize
 <!-- Compiled and minified JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="script.js"></script>

// add a pop that promises a free PDF or 