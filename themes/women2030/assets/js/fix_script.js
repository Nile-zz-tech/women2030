/**
 * Created by Quy on 12/15/2015.
 */

jQuery(function () {


  fix_gallery();
  fix_goldbar();
  fix_morelink();

  function fix_gallery() {
    // preprocess for gallery
    jQuery('#gallery-slider li img').each(function (i, e) {
      var self = jQuery(this);
      var src = self.attr('src');
      //http://localhost:8080/personal_blog/sites/default/files/styles/gallery_105_75_/public/field/gallery/demo-16.jpg?itok=TgjclIDq
      src = src.split('/styles')[0] + src.split('/public')[1];
      self.attr('src', src);
      self.attr('width', '');
      self.attr('height', '');
    });

    // The slider being synced must be initialized first
    jQuery('#gallery-carousel').flexslider({
      animation: "slide",
      controlNav: false,
      animationLoop: false,
      slideshow: false,
      itemWidth: 210,
      itemMargin: 5,
      asNavFor: '#gallery-slider'
    });

    jQuery('#gallery-slider').flexslider({
      animation: "slide",
      controlNav: false,
      animationLoop: false,
      slideshow: false,
      sync: "#gallery-carousel"
    });
  }

  function fix_goldbar() {
    if ("" == jQuery('.region-panel-second-1').text().trim()) {
      jQuery('#panel_second').hide();
    }

//    $page_gold_border_ele = jQuery('.block-views-blockrelated-articles-block-1, .block-views-blockduplicate-of-related-articles-block-1');
//    if ($page_gold_border_ele.length) {
//      jQuery('.block-views-blockrelated-articles-block-1:before').css('height', $page_gold_border_ele.height());
//      jQuery('.block-views-blockduplicate-of-related-articles-block-1').css('height', $page_gold_border_ele.height());
//    }
  }

  function fix_morelink() {
    jQuery('.more-link a').click(function () {
      jQuery('.pager__item.pager__item--next a')[0].click();
      return false;
    });
  }

});