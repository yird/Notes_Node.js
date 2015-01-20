
//on clicking submit/enter this adds the note the DOM
$('.theform').submit(function(e){
    e.preventDefault();
    var newnote = $('.notetxt').val();
    $('.notes').append('<a href="#" class="eachnote list-group-item">' + newnote +'</a>');
    $('.notetxt').val('');
    $('.firstnote').remove();
});

//This hides the (.firstnote) field until the user starting typing
$('.firstnote').hide();

//Displays whats being typed by listening for key presses
$('.notetxt').keyup(function() {
  var value = $(this).val();
  if(value !== ''){
    $('.firstnote').show();
  }else{
    $('.firstnote').hide(); // when user deletes everything in the field (.firstnote) will disappear again
  }
  $('.firstnote').text(value);
}).keyup();
