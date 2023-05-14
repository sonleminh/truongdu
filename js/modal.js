document.getElementById('mobileBtn').addEventListener('click', function () {
  document.getElementById('overlay').classList.add('is-visible');
  document.getElementById('mobileModal').classList.add('is-visible');
});

document.getElementById('overlay').addEventListener('click', function () {
  document.getElementById('overlay').classList.remove('is-visible');
  document.getElementById('mobileModal').classList.remove('is-visible');
});
