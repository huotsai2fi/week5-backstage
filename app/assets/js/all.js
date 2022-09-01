$('.sidebar [href]').each(function () {
  if (this.href == window.location.href.split('#')[0]) {
    $(this).addClass('active');
  }
});
