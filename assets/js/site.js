$(function () {
  var $parent = $('#sb-top-nav-d546a999-f33c-4a0f-b196-2a6e38ce226f'),
      $navComponent = $parent.closest('.sb-component-simple-top-nav'),
      $nav = $parent.find('.sb-nav__list'),
      $navOpenBtn = $parent.find('.sb-mobile-nav-btn'),
      $navCloseBtn = $parent.find('.sb-nav__close'),
      $subNavToggleBtn = $parent.find('.sb-nav__sub-toggle'),
      $navigationWrapper = $("#sb-navigation"),
      $bannerWrapper = $("#sb-banner"),
      $navigationSection = $("#sb-navigation > .sb-section")

  $navigationWrapper.find('.sb-section').css('transform', 'none'); // fix for when animations are applied

  $navOpenBtn.on('click', function () {
    $('body').toggleClass('is-nav-menu-expanded');
    $navComponent.toggleClass('sb-nav--expanded');
  });

  $navCloseBtn.on('click', function () {
    $('body').toggleClass('is-nav-menu-expanded');
    $navComponent.toggleClass('sb-nav--expanded');
  });

  $subNavToggleBtn.on('click', function (e) {
    e.stopImmediatePropagation();

    $(this).closest('li').toggleClass('is-sub-visible');
  });

  $nav.on('click', '.sb-link', function () {
    $navComponent.removeClass('sb-nav--expanded');
  });

  function toggleFixedNavigation () {
    $navigationSection = $("#sb-navigation > .sb-section")

    // TODO: Simplify this in the future
    if ($("#sb-id-d546a999-f33c-4a0f-b196-2a6e38ce226f").hasClass("option-nav-fixed") || $navigationSection.hasClass("option-nav-fixed")) {
      var $bannerSection = $("#sb-banner > .sb-section")

      if ($(window).scrollTop() > 0) {
        $navigationWrapper.addClass("sb-nav--fixed");

        var bannerOuterHeight = 0
        if ($bannerSection.length > 0 && $("body").hasClass("is-banner-in")) {
          bannerOuterHeight = $bannerSection.outerHeight();
          $navigationSection.css('top', bannerOuterHeight + 'px');
        }

        if(!$navigationSection.hasClass('option-nav-overlay')) {
          $('body').css('padding-top', $navigationWrapper.outerHeight() + bannerOuterHeight + 'px')
        }
      } else {
        $navigationWrapper.removeClass("sb-nav--fixed");

        if ($bannerSection.length > 0) {
          $navigationSection.css('top', '0px');
        }

        if ($bannerSection.length > 0 && $("body").hasClass("is-banner-in")) {
          $('body').css('padding-top', $bannerSection.outerHeight() + 'px');
        } else {
          $('body').css('padding-top', '0px');
        }
      }
    }
  }

  // Adjust Hero top padding when nav is overlayed above it
function adjustHeroPadding() {
  if (!$navigationSection.hasClass('option-nav-overlay')) return

  const $firstHero = $('#sb-page-structure > section:first')

  if (!$firstHero.hasClass('option-section-hero')) {
    $navigationSection.removeClass('option-nav-overlay')
    $('body').removeClass('has-overlay-nav')
  } else {
    const navHeight = $navigationSection.outerHeight()
    const topPadding = navHeight + 20 // Plus default section padding

    $firstHero.css('paddingTop', `${topPadding}px`);
  }
}

adjustHeroPadding()


  $(window).scroll(function() {
    toggleFixedNavigation()
  });

  $(window).resize(function() {
    setTimeout(function() {
      adjustHeroPadding()
      toggleFixedNavigation()

      // Properly hide banner on window resize as resizing can adjust banner's height
      if (!$navigationSection.hasClass("option-nav-fixed") && $('body').hasClass('is-banner-out')) {
        var $bannerSection = $("#sb-banner")
        $bannerSection.css('margin-top', '-' + $bannerSection.outerHeight() + 'px')
      }
    }, 200)
  })

  var lastId,
    topMenu = $('#sb-nav-d546a999-f33c-4a0f-b196-2a6e38ce226f'),
    topMenuHeight = $('#sb-navigation > section').outerHeight(),
    menuItems,
    scrollItems,
    defaultActive = topMenu.find('li.active'),
    pagePath = window.location.pathname.split("index.html").pop(),
    menuSelector = pagePath === '' ? 'index' : pagePath,
    scrollSpyInitialized = false;

  $(window).scroll(function () {
    if (!scrollSpyInitialized) {
      menuItems = topMenu.find('a[href^="' + menuSelector + '#"]');
      scrollItems = menuItems.map(function () {
        var item = $($(this).attr("href").replace(menuSelector, ''));
        if (item.length > 0) { return item; }
      });

      scrollSpyInitialized = true;
    }

    // Get container scroll position
    var fromTop = $(this).scrollTop() + topMenuHeight;

    // Get id of current scroll item
    var cur = scrollItems.map(function () {
      if ($(this).offset().top <= fromTop) {
        return this;
      }
    });

    // Get the id of the current element
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
      lastId = id;

      if ('' == lastId && '' == id) {
        defaultActive.addClass('active');
      } else {
        topMenu.find('li').removeClass('active');
      }

      menuItems
        .parent().removeClass("active")
        .end().filter("[href='" + menuSelector + "#" + id + "']").parent().addClass("active");
    }
  });

  function scrollSmoothlyTo(elem) {
    if (elem.length === 0) {
      return
    }

    $('html, body').animate({
      scrollTop: (elem.offset().top - topMenuHeight + 10) + 'px'
    }, 1500);
  }

  // smooth scroll on page load
$(function () {
  if (targetToScrollTo) {
    setTimeout(function () {
      const hash = `#${targetToScrollTo}`
      scrollSmoothlyTo($(hash))
      const url = new URL(window.html)
      url.hash = hash
      history.pushState(null, null, url)
    }, 300)
  }
})

  function restoreHiddenNavItems($hiddenItems, $moreBtn) {
  $hiddenItems.children().each(function () {
    var $this = $(this);
    $this.removeClass('sb-nav__sub-item');
    $('> a', $this).removeClass('sb-nav__sub-link');
    if ($('> a', $this).hasClass('is-btn')) {
      $('> a', $this).addClass('sb-button sb-button--nav').removeClass('is-btn sb-nav__link');
    }
    $this.insertBefore($moreBtn);
  });
}


  // smooth scroll to section when clicking on nav items
  var $navLinks = $('.sb-link', $nav),
      pagePath = window.location.pathname.split("index.html").pop();

  $navLinks.on('click', function (e) {
    var $this = $(this),
        url = $this.attr('href'),
        hash = url.split('#')[1],
        targetPath = e.target.pathname.split("index.html").pop(),
        isExternal = $this.hasClass('is-external');

    if (!isExternal) {
      if ('index' != targetPath && targetPath != pagePath) {
        return
      }

      if (hash) {
        if ((pagePath == targetPath) || ('index' == targetPath && '' == pagePath)) {
          e.preventDefault();
          scrollSmoothlyTo($('#' + hash));
          history.pushState(null, null, targetPath + '#' + hash);
        }
      } else {
        if (('index' == targetPath && 'index' == pagePath) || ('index' == targetPath && '' == pagePath)) {
          e.preventDefault();
          scrollSmoothlyTo($('body'));
          history.pushState(null, null, targetPath);
        }
      }
    }
  });

  $('.sb-top-header__brand').on('click', function (e) {
    if ('' == pagePath || 'index' == pagePath || 'index.html' == pagePath) {
      e.preventDefault();

      history.pushState(null, null, window.location.pathname);

      $('html, body').animate({
        scrollTop: 0
      }, 1500);
    }
  });

  // hide menu items if there is no space for it
  var $vlinks = $nav,
      $hlinks = $parent.find('.sb-nav__list-hidden-links'),
      $moreBtn = $parent.find('.sb-nav__list-hidden'),
      btnWidth = $moreBtn.outerWidth(true),
      isMoreButtonHidden = true,
      numOfItems = 0,
      totalSpace = 0,
      breakWidths = [],
      extraSpaceForNav = 30,
      hasContactCTA = false,
      navItemsSelector = '> li:not(.sb-nav__list-hidden)';

  // Exclude the Contact CTA from nav links
  var $navItems = $(navItemsSelector, $vlinks);
  if ($navItems.last().hasClass('sb-nav__btn')) {
    hasContactCTA = true;
    navItemsSelector += ':not(:last-child)';
  }

  // If the last nav item is a button, swap it with the More button
  if (hasContactCTA) {
    $moreBtn.insertBefore($navItems.last());
  }

  function calculateNavItemsWidth () {
    var totalSpace = 0,
      numOfItems = 0,
      breakWidths = [];
    $(navItemsSelector, $vlinks).outerWidth(function(i, w) {
      totalSpace += $(this).outerWidth(true);
      numOfItems += 1;
      breakWidths.push(totalSpace);
    });
    return [totalSpace, numOfItems, breakWidths];
  }

  [totalSpace, numOfItems, breakWidths] = calculateNavItemsWidth();

  var availableSpace, numOfVisibleItems, requiredSpace;
  var prevAvailableSpace, prevNumOfVisibleItems, prevRequiredSpace;

  function checkAvailableSpaceForNav() {
    if (availableSpace < 0) {
      availableSpace = undefined;
      restoreHiddenNavItems($hlinks, $moreBtn);
      return;
    }
    /**
     * Re-calculate nav items' size if the actual width of the first item is
     * not equal to the calculated width
    */
    var $firstLink = $(navItemsSelector, $vlinks).first();
    if ($firstLink.length && $firstLink.outerWidth(true) !== breakWidths[0]) {
      // Delete all dropdown nav items to re-calculate it properly
      restoreHiddenNavItems($hlinks, $moreBtn);
      var sizes = calculateNavItemsWidth();
      totalSpace = sizes[0];
      numOfItems = sizes[1];
      breakWidths = sizes[2];
      numOfVisibleItems  = sizes[1];
      checkAvailableSpaceForNav();
    }
    var $lastLink = $(navItemsSelector, $vlinks).last();
    /**
     * If the Contact link is a button, we should subtract its width from
     * availableSpace value.
    */
    var contactButtonWidth = hasContactCTA ? $('> li.sb-nav__btn:last-of-type', $vlinks).last().outerWidth(true) : 0;
    /**
     * We should not consider the More button width if it's hidden.
    */
    var moreBtnWidth = isMoreButtonHidden ? 0 : btnWidth;
    availableSpace = $vlinks.width() - moreBtnWidth - extraSpaceForNav - contactButtonWidth;
    numOfVisibleItems = $(navItemsSelector, $vlinks).length;
    requiredSpace = breakWidths[numOfVisibleItems - 1];

    var $hiddenNavItems = numOfItems - numOfVisibleItems;

    // If there is the only item in the More dropdown, add one more link there
    if (requiredSpace > availableSpace || $hiddenNavItems === 1) {
      $lastLink.addClass('sb-nav__sub-item');
      $('> a', $lastLink).addClass('sb-nav__sub-link');

      if ($('> a', $lastLink).hasClass('sb-button')) {
        $('> a', $lastLink).removeClass('sb-button sb-button--nav').addClass('is-btn sb-nav__link');
      }

      $lastLink.prependTo($hlinks);
      numOfVisibleItems -= 1;
      checkAvailableSpaceForNav();
    // There is more than enough space
    } else if (availableSpace > breakWidths[numOfVisibleItems] && $hiddenNavItems !== 2) {
      var $firstLink = $hlinks.children().first();

      $firstLink.removeClass('sb-nav__sub-item');
      $('> a', $firstLink).removeClass('sb-nav__sub-link');

      if ($('> a', $firstLink).hasClass('is-btn')) {
        $('> a', $firstLink).addClass('sb-button sb-button--nav').removeClass('is-btn sb-nav__link');
      }

      $firstLink.insertBefore($moreBtn);
      numOfVisibleItems += 1;
    }
    // Update the button accordingly
    if (numOfVisibleItems === numOfItems) {
      $moreBtn.addClass('is-hidden');
      isMoreButtonHidden = true;
    } else {
      $moreBtn.removeClass('is-hidden');
      if (isMoreButtonHidden) {
        isMoreButtonHidden = false;
        checkAvailableSpaceForNav();
      }
    }

    if (prevAvailableSpace != availableSpace &&
        prevNumOfVisibleItems != numOfVisibleItems &&
        prevRequiredSpace != requiredSpace) {
      prevAvailableSpace = availableSpace
      prevNumOfVisibleItems = numOfVisibleItems
      prevRequiredSpace = requiredSpace
      setTimeout(checkAvailableSpaceForNav, 500)
    }
  }

  // if we are on mobile and option-nav-mobile-static is present
  var mq = function (query, callback, usePolyfill) {
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

  mq('(min-width: 1033px)', function (match) {
    if (match) {
      $(window).on('resize.hideNavItems', function() {
        checkAvailableSpaceForNav();
      });
      checkAvailableSpaceForNav();
    } else {
      $(window).off('resize.hideNavItems');
      $hlinks.children().appendTo($vlinks);
      $('> li:not(.sb-nav__list-hidden) > a.is-btn', $vlinks).addClass('sb-button sb-button--nav').removeClass('is-btn sb-nav__link');
      // Reset ex-hidden items styles
      $('> li.sb-nav__item.sb-nav__sub-item', $nav).each((index, item) => {
        $(item).removeClass('sb-nav__sub-item');
        $('.sb-link.sb-nav__sub-link', $(item)).removeClass('sb-nav__sub-link');
      })
      // Add all CTAs to the bottom of the nav
      var $ctaLinks = $('> li.sb-nav__btn', $vlinks);
      $ctaLinks.remove();
      $vlinks.append($ctaLinks);
    }
  });

  mq('(max-width: 767px)', function (match) {
    if ($("#sb-id-d546a999-f33c-4a0f-b196-2a6e38ce226f").hasClass('option-nav-mobile-static') || $("#sb-navigation > .sb-section").hasClass('option-nav-mobile-static')) {
      $("#sb-navigation").addClass("sb-nav--static");
    } else {
      $("#sb-navigation").removeClass("sb-nav--static");
    }
  });
});

var AOS;
    if (AOS) {
      AOS.init();
      document.querySelector('body').setAttribute('data-aos-enabled', true);
    }

    $(function() {
      // refresh animations positions after page was rendered.
      if (AOS) {
        AOS.refresh();
      }
    });

var lazyLoadImages = new LazyLoad({
      elements_selector: ".lazy",
      threshold: 500
    });

