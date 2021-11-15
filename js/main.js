//Follow button >>>>>>>>>>>>>>>>>>>>
let followBtn = document.getElementById("follow-btn");
let followIcons = document.getElementById("follow-icons");
let pullFollow = document.getElementById("pull-follow");

followBtn.addEventListener("click", folllowAreaShow);
pullFollow.addEventListener("click", folllowAreaShow);

function folllowAreaShow(){
    followIcons.style.transform = "translateX(0px)";
    pullFollow.style.opacity = "0.7"
};


//Typing Text >>>>>>>>>>>>>>>>>>>>
var typed = new Typed('.animate', {
    strings: [
        "Web Designer",
        "Freelancer",
        "Web Developer"
    ],
    typeSpeed: 70,
    backSpeed: 60,
    loop: true
});


//Skills Bar >>>>>>>>>>>>>>>>>>>>
let skillsSection = document.getElementById("the-skills");

window.addEventListener("scroll", () => {
    let sectionPos = skillsSection.getBoundingClientRect().top;
    let sereenPos = window.innerHeight / 1.5;

    if(sectionPos < sereenPos){
        $('.skill-per').each(function(){
            var $this = $(this);
            var per = $this.attr('per');
            $this.css("width",per+'%');
        });
    }else{
        $('.skill-per').each(function(){
            var $this = $(this);
            $this.css("width",0+'%');
        });
    }
});

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
