/**
 * Created by kate on 11.05.17.
 */

var addComment = function() {
    var comment = $("#create-comments-txt").val();
    var currentDate = new Date();
    var options = {
        day: 'numeric',
        month: 'long'
    };
    var year = currentDate.getFullYear();
    var fullDate = currentDate.toLocaleDateString('ru', options) + ' ' + year;
    if (comment) {
        $('#new_comment .comment__name').text('Username');
        $('#new_comment .comment__date').text(fullDate);
        $('#new_comment .comment__text').text(comment);
        var new_comment = $('#new_comment').html();
        $("#comments").append(new_comment);
        $("#create-comments-txt").val("");
    }
    return false;
}

$(document).ready(function() {
    $('.create-comments-form').submit(addComment);
    $('#create-comments-txt').keydown(function (e) {
        if (e.ctrlKey && e.keyCode === 13) {
            addComment();
        }
    });
});
