if (localStorage.getItem('m-healthInitialized') == "true") {
    $.mobile.navigate('#main-menu');
}
$('#landing #next-flow').on('click', function () {
    var flowNum = $('#landing').attr('data-flow');
    switch (flowNum) {
    case "2":
        $('#landing').attr('data-flow', '3');
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