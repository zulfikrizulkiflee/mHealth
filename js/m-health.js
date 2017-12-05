if (localStorage.getItem('m-healthInitialized') == "true") {
    $.mobile.navigate('#main-menu');
}
$('#landing #next-flow').on('click', function () {
    var flowNum = $('#landing').attr('data-flow');
    switch (flowNum) {
    case "2":
        $('#landing').attr('data-flow', '3');
        $('.flow-image').attr('src', 'img/logo.jpeg');
        $('.flow-text').html('Be healthy with m-health');
        $('.flow-dot-container').html('<i class="zmdi zmdi-circle-o"></i><i class="zmdi zmdi-circle-o"></i><i class="zmdi zmdi-circle"></i>');
        $('#next-flow').html('Start');
        $('#next-flow').on('click', function () {
            localStorage.setItem('m-healthInitialized', 'true');
            $.mobile.navigate('#main-menu');
        });
        break;
    case "3":
        $('#landing').attr('data-flow', '1');
        $('.flow-image').attr('src', 'img/landing/track-health.png');
        $('.flow-text').html('Track your health');
        $('.flow-dot-container').html('<i class="zmdi zmdi-circle"></i><i class="zmdi zmdi-circle-o"></i><i class="zmdi zmdi-circle-o"></i>');
        break;
    default:
        $('#landing').attr('data-flow', '2');
        $('.flow-image').attr('src', 'img/landing/diet.png');
        $('.flow-text').html('Dietary info');
        $('.flow-dot-container').html('<i class="zmdi zmdi-circle-o"></i><i class="zmdi zmdi-circle"></i><i class="zmdi zmdi-circle-o"></i>');
    }
});

$('.content-hide').hide();
$('.edit-badge').hide();

$('.my-profile').on('click',function(){
    if ($(':animated').length) {
        return false;
    }
    if($(this).parent('.menu-bar').hasClass('expanded')){
        $(this).parent('.menu-bar').stop(true, false).animate({
            height: "33.33vh"
        }).removeClass('expanded');
        $(this).parent('.menu-bar').siblings().show();
        $(this).find('.content-hide').fadeOut('medium');
        $('.edit-badge').fadeOut('medium');
        $('.user-name').attr('contenteditable',"false");
    }else{
        $(this).parent('.menu-bar').stop(true, false).animate({
            height: "100vh"
        }).addClass('expanded').siblings().fadeOut('slow');
        $(this).find('.content-hide').fadeIn('medium');
        $('.edit-badge').fadeIn('medium');
        $('.user-name').attr('contenteditable',"true").attr('onclick',"document.execCommand('selectAll',false,null)");
    }
}).on('click','.edit-badge',function(e){
    alert("image");
    e.stopPropagation();
}).on('click','.user-name',function(e){
    e.stopPropagation();
});

$('.user-name').on('blur', function(){
   localStorage.setItem('m-health-username',$(this).html()); 
});
if(localStorage.getItem('m-health-username') != null){
    $('.user-name').html(localStorage.getItem('m-health-username'));
}
