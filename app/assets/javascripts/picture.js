// Add your JavaScript here
$(function(){
  addLikeEventListener();
});

function addLikeEventListener(){
  $('.like_button').on('ajax:complete', function(e, request, status){
     $(this).find('span').toggleClass('red-heart grey-heart')
     this.nextElementSibling.innerHTML = request.responseJSON.message;
  });
}
