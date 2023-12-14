$(document).ready(function(){
    // XỬ LÝ SEARCH RESULT
    $('.popup-modal #search form input').on('keyup',function(e){
        $('.popup-modal #search .result').toggleClass('show',$(this).val().length > 0)
    })
})