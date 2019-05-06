window.onload = function(){
  document.getElementById('closeButton').addEventListener('click', function(e) {
    e.preventDefault();
    window.location.href = 'index.html';
  }, false);
}
