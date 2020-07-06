# VPN-Checker-Custom-Module
Drupal 8 custom module that checks your ip to see if you're connected to the allowed ip ranges

The goal was to create a block that would tell you if you're connected to a VPN that falls under a specific IP range. To make it user friendly I created a content type that has the theme stripped away and placed the custom block in the body of a page. Then I added a button on another page that would open the page with the custom block in an iframe inside a modal pop up using Bootstrap. This was not my first intention but because I needed the page to reload on click of the button for the modal pop up this worked out the best. I also needed js to refresh the iframe every time the button for the modal was clicked on.
