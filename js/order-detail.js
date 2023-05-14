var applyModal = document.getElementById('applyModal');
var applyBtn = document.getElementById('applyBtn');
var span = document.getElementsByClassName('closeBtn')[0];
applyBtn.onclick = function () {
  applyModal.style.display = 'block';
};
span.onclick = function () {
  applyModal.style.display = 'none';
};
window.onclick = function (event) {
  if (event.target == applyModal) {
    applyModal.style.display = 'none';
  }
};
