/**
 * Created by kate on 11.05.17.
 */

$(document).ready(function() {
    $("#add-comment").click(function() {
        var comment = $("#create-comments-txt").val();
        var currentDate = new Date();
        var options = {
            day: 'numeric',
            month: 'long'
        };
        var year = currentDate.getFullYear();
        var fullDate = currentDate.toLocaleDateString('ru', options) + ' ' + year;
        if (comment) {
            $('#new_comment .comment__name.comment__name_layout').text('Username');
            $('#new_comment .comment__date').text(fullDate);
            $('#new_comment .comment__text.comment__text_layout').text(comment);
            var new_comment = $('#new_comment').html();
            $("#comments").append(new_comment);
            $("#create-comments-txt").val("");
        }
    });
});
