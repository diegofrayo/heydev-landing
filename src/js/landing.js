(function () {
  document.querySelectorAll('#tech-stack img').forEach((item) => {
    item.setAttribute('title', item.getAttribute('alt'));
  });
})();