/**
 * Created by kate on 11.05.17.
 */



$(document).ready(function(){
    $("#add-comment").click(function(){
            var comment = $("#create-comments-txt").val();
            var currentDate = new Date();
            var options = {
                day: 'numeric',
                month: 'long',
            };
            var year = currentDate.getFullYear();
            var fullDate = currentDate.toLocaleDateString('ru', options) + ' ' + year;
            if (comment) {
                $("#comments").append(
                    "<div class=\"comment comment_layout\">" +
                        "<span class=\"comment__name comment__name_layout\">Username</span>" +
                        "<span class=\"comment__date\">" + fullDate + "</span>" +
                        "<div class=\"comment__text comment__text_layout\">" +
                        "   <p>" + comment + "</p>" +
                        "</div>" +
                    "</div>"
                );
                $("#create-comments-txt").val("");
            }
    }
    )
});
/*
 $("#create-comments-txt").val()*/
