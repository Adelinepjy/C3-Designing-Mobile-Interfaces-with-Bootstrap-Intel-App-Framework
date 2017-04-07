/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  #btnGo */
    
    
        /* button  #btnGo */
    $(document).on("click", "#btnGo", function(evt)
    {
        /* your code goes here */ 
         return false;
    });
    
        /* button  #btnGo */
    $(document).on("click", "#btnGo", function(evt)
    {
         /*global activate_page */
         activate_page("#uib_contents"); 
         return false;
    });
    
        /* button  #btnSideBar */
    $(document).on("click", "#btnSideBar", function(evt)
    {
        /* your code goes here */ 
        uib_sb.toggle_sidebar($("#smuNav"));  
        return false;
    });
    
    /* button  #btnGoHome */
    $(document).on("click", "#btnGoHome", function(evt)
    {
        /* your code goes here */ 
        uib_sb.toggle_sidebar($("#smuNav"));  
        activate_page("#mainpage");
        return false;
    });
    

    /* button  #btnGoA1 */
    $(document).on("click", "#btnGoA1", function(evt)
    {
        /* your code goes here */ 
        uib_sb.toggle_sidebar($("#smuNav"));  
        activate_subpage("#uib_contents_a1");
        return false;
    });
    
    /* button  #btnGoA2 */
    $(document).on("click", "#btnGoA2", function(evt)
    {
        /* your code goes here */ 
        uib_sb.toggle_sidebar($("#smuNav"));  
        activate_subpage("#uib_contents_a2");
        return false;
    });
    
     /* button  #btnSayHello */
    $(document).on("click", "#btnSayHello", function(evt)
    {
        /* your code goes here */ 
        $('#popHello').modal('show');
        return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
