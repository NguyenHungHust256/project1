$(function() {
    $('#new_room_message').on('ajax:success', function(a, b,c ) {
        $(this).find($('#chat_input_send')).val('');
    });
});