$(document).ready(function() {

    $('#hidden div').hide();
    $(".thumbnails").on("click", function () {
        var div = $('#'+$(this).data('workclass'));
        $(".thumbs").hide();
        $('#'+$(this).data('workclass')).show().siblings('div').hide();
    })

    var divparam = getParameterByName();
    if(divparam !=''){
        $('#hidden div').hide();
        $(".thumbs").hide();
        $('#'+divparam).show().siblings('div').hide();
    }
    function getParameterByName() {
        var match = RegExp('[?&]' + 'div' + '=([^&]*)').exec(window.location.search);
        return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
    }
    


});


menuStart ='<div id=\"mainmenu\" style=\"position: absolute;width: 150px; left:25px; top:80px;\"><ul>';
home ='<li> <a href=\"index.html\">home</a></li>';
bio ='<li> <a href=\"bio.html\">bio</a></li>';
news ='<li> <a href=\"news.html\">news</a></li>';
sculpture ='<li> <a href=\"sculpture.html\">sculpture</a></li>';
drawing ='<li> <a href=\"drawing.html\">drawing</a></li>';
xsculpture ='<li> <a href=\"exdrawing.html\">expanded practise</a></li>';
writing ='<li> <a href=\"statement.html\">writing</a></li>';
cv ='<li> <a href=\"cv.html\">cv</a></li>';
contact ='<li> <a href=\"contact.html\">contact</a></li>';
menuEnd ='</ul></div>';


includedElements = home+bio+news+sculpture+drawing+xsculpture+writing+cv+contact;


menu =menuStart+includedElements+menuEnd;





