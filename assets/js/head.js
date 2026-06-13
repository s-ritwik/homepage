var __CLIENT_UID__ = "0v3yPNBD";
        var __PRODUCT_URL__ = "https://b12.io/";

var targetToScrollTo = null;
  var textToScrollTo = null;
  var hasTextToSelectInUrl = performance.getEntriesByType("navigation")[0].name.includes('#:~:');

  if (hasTextToSelectInUrl) {
    textToScrollTo = decodeURIComponent(performance.getEntriesByType("navigation")[0].name.split('#:~:text=')[1]);
  } else {
    if (window.location.hash.search('UL_FORM') == -1 && window.location.hash.search('#!') == -1) {
      targetToScrollTo = window.location.hash.replace('#', '');

      // Stop browser from jumping to a selected section.
      // We perform scrolling manually in the navigation component.
      //
      // IE/Edge treats history.replaceState differently.
      var isIE = /(MSIE|Trident\/|Edge\/)/i.test(navigator.userAgent);
      if (isIE) {
        window.location.hash = '';
        history.replaceState(null, null, window.location.href.split('#')[0])
      } else {
        history.replaceState(null, null, window.location.pathname + window.location.search);
      } 
    }
  }

