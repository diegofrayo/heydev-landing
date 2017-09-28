(function () {
  document.querySelectorAll('#tech-stack img').forEach(function (item) {
    item.setAttribute('title', item.getAttribute('alt'));
  });
})();