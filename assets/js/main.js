$(document).ready(function(){
    // XỬ LÝ SEARCH RESULT
    $('.popup-modal #search form input').on('keyup',function(e){
        $('.popup-modal #search .result').toggleClass('show',$(this).val().length > 0)
    })

   
})

// XỬ LÝ POPUP SEARCH    
// ĐÓNG
function closePopup(e){
   
      $(document).ready(function(){

          $('.popup-fixed .popup-close').click(function(){
            console.log($(this).parent().attr('id'))
            $('#'+$(this).parent().attr('id')).removeClass('show')
          })
      })
   
}
// MỞ
function openPopup(e){
      $(document).ready(function(){
           let popup =  $(e).attr('data-popup')
           $('#'+popup).addClass('show')
      })
   
}