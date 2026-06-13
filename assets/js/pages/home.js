$(function() {
  var $elem = $('[data-sb-uuid="e88913fd-fd8c-4449-beae-b5b07bbce4e6"]'),
      $section = $elem.closest('.sb-section'),
      hasProperClass = !!($section.hasClass('option-text-image-float-left') || $section.hasClass('option-text-image-float-right'));

  mq('(min-width: 767px)', function (match) {
    if (match && hasProperClass) {
      $elem.find('.option-image').prependTo($section);
    } else {
      $section.find('.option-image').prependTo($elem.find('.sb-text-image__image'));
    }
  });

  function mq(query, callback, usePolyfill) {
    var host = {};
    var isMatchMediaSupported = !!(window && window.matchMedia) && !usePolyfill;

    if (isMatchMediaSupported) {
      var res = window.matchMedia(query);

      callback.apply(host, [res.matches, res.media]);

      res.addListener(function (changed) {
        callback.apply(host, [changed.matches, changed.media]);
      });
    }
  }
})

