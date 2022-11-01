// https://stackoverflow.com/q/56434924
//fuck safari once again
window.addEventListener('load', function () {
    var xs = document.querySelectorAll('.section');
    [].slice.call(xs).forEach(function (x) {
      // doing this via CSS has no effect
      x.style.setProperty('display', 'block');
    });
  });