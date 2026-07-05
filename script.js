// GoLifeKit — minimal interactivity

// FAQ accordion
document.querySelectorAll('.faq-q').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var item = btn.closest('.faq-item');
    var isOpen = item.classList.contains('open');
    // close all, then open the clicked one (unless it was already open)
    document.querySelectorAll('.faq-item.open').forEach(function (el) {
      el.classList.remove('open');
    });
    if (!isOpen) item.classList.add('open');
  });
});

// Open the first FAQ by default
var first = document.querySelector('.faq-item');
if (first) first.classList.add('open');
