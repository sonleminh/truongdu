var mobileModal = document.getElementById('mobileModal');
var mobileBtn = document.getElementById('mobileBtn');
mobileBtn.onclick = function () {
  mobileModal.style.display = 'block';
};
window.onclick = function (event) {
  if (event.target == mobileModal) {
    mobileModal.style.display = 'none';
  }
};
