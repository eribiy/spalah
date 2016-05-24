$(document).ready(function(){
    $('.center').slick({
        centerMode: true,
        centerPadding: '30px',
        slidesToShow: 7,
        responsive: [
            {

                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '10px',
                    slidesToShow: 4
                }
            },
            {

                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '10px',
                    slidesToShow: 1
                }
            }
        ]
    });
});
var img1=document.getElementById("img1");
var img2=document.getElementById("img2");

img1.onclick=img2.onclick=function() {
    if(!this.state) {
        this.state=true;
        var div=document.createElement("DIV");
        div.innerHTML=this.innerHTML;
        div.className="popDiv";
        this.div=div;
        document.body.appendChild(div);
    }
    else {
        this.state=false;
        document.body.removeChild(this.div);
    }
}