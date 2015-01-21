
//on clicking submit/enter this adds the note the DOM
$('.theform').submit(function(e){
    e.preventDefault();
    var newnote = $('.notetxt').val();
    $('<a href="#" class="eachnote list-group-item">' + newnote +'</a>').insertAfter('.firstnote');
    $('.notetxt').val('');
    $('.firstnote').hide();//This hides the (.firstnote) field until the user starting typing
});

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
