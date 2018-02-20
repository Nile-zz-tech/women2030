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

    jQuery('.goldbar #bar3').css('height', jQuery('#panel_second').height());

    /* homepage */
    if (jQuery('.path-frontpage').length) {
      jQuery('.path-frontpage .goldbar').css('top', jQuery('.article-teaser').offset().top);
      jQuery('.path-frontpage .goldbar #bar1').css('height', jQuery('.article-teaser').first().height() + 50);
      jQuery('.path-frontpage .goldbar #bar2').css('height', jQuery('.view-frontpage').first().height());
    }

    /* article */
    if (jQuery('.page-node-type-article').length) {
      jQuery('.goldbar').css('top', jQuery('.field--name-field-image').offset().top);
      jQuery('.goldbar #bar1').css('height', 1000);
      jQuery('.goldbar #bar2').css('height', jQuery('.block-system-main-block').first().height() - 1000);
      jQuery('.goldbar #bar3').css('height', jQuery('.block-views-blockduplicate-of-related-articles-block-1').height() - 40);

    }

    /* taxonomy */
    if (jQuery('.path-taxonomy').length) {
      jQuery('.path-taxonomy .goldbar').css('top', jQuery('.view-taxonomy-term .view-content').first().offset().top);
      jQuery('.path-taxonomy .goldbar #bar1').css('height', jQuery('.view-taxonomy-term .view-content .node').first().height());
      if (jQuery('.view-taxonomy-term .view-content .node').length > 2) {
        jQuery('.path-taxonomy .goldbar #bar2').css('height', jQuery('.view-taxonomy-term .view-content .node').first().height() + 50);
      }
    }

    /* Women Profiles */
    if (jQuery('.path-women-profiles').length) {
      jQuery('.path-women-profiles .goldbar').css('top', jQuery('.view-women-profiles .view-header').offset().top);
      jQuery('.path-women-profiles .goldbar #bar1').css('height', 800);
      jQuery('.path-women-profiles .goldbar #bar2').css('height', jQuery('.view-women-profiles .view-content').first().height() - 600);
    }



    jQuery('.goldbar #bar3').css('height', jQuery('#panel_second').height());

  }

  function fix_morelink() {
    jQuery('.more-link a').click(function () {
      jQuery('.pager__item.pager__item--next a')[0].click();
      return false;
    });
  }

});