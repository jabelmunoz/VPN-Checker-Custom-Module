(function($, D) {
  $(document).ready(function() {
  
  $(".block-vpn-checker .vpn-test-button").click(function () {
    $(".block-vpn-checker .vpn-result").fadeToggle("slow");
  });
  
  // Add in theme js to reload iframe in pop up 
  /*
  
  $("#reload-iframe").click(function() {
    $('.modal-body iframe').hide();
    $('#vpnModal').modal('show'); 
    $('.modal-body iframe').fadeIn(3000);
    jQuery.each($("iframe"), function() {
        $(this).attr({
            src: $(this).attr("src")
        });
    });
    return false;
  });  
    
  */
    
 }); // document.ready 
})(jQuery, Drupal);
