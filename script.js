function setHome()
{
    gsap.set(".slidess",
    {
        scale:7
    }
);

let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".home",
            start:"top top",
            end:"bottom top",
            pin:true,
            scrub:2,

        },
});

tl.to(".vdio",
    {
        '--clip':'0%',
        ease:Power2,
    },
    
'a'
);
tl.to(".slidess",
    {

        scale:1,
        ease:Power2,
    },
    'a'
);
tl.to(".left",
    {
        xPercent:-4,
        stagger:.03,
        ease:Power2,
    },
    'b'
);
tl.to(".right",
    {
        xPercent:4,
        stagger:.03,
        ease:Power4,
    },
    'b'
);
}
function realSetanimation()
{
    gsap.to(".slide",
    {
        scrollTrigger: {
            trigger:".cont",
            start:'top top',
            end:'bottom top',
            scrub:1,
            pin:true,
        },
        xPercent:-300,
        ease:Power2
    }
)
}
function teamAnimation()
{
    document.querySelectorAll(".listele")
.forEach((el) => {
  el.addEventListener("mousemove", (dets) => {
    gsap.to(el.querySelector(".picture"), {
      opacity: 1,
      x: gsap.utils.mapRange(0,window.innerWidth, -200, 200,dets.clientX),
      y:gsap.utils.mapRange(0,window.innerHeight, -150, 150,dets.clientY),
      
      ease: Power2.easeOut,
    });
  });
  el.addEventListener("mouseleave",(dets)=>{
    gsap.to(el.querySelector(".picture"),{
        opacity:0,
        ease:Power4,
    })
  })
});
}
function paraAnimation()
{
    var clutter = "";
document.querySelector(".para")
.textContent.split("")
.forEach((e)=>
{   if(e == " ")
    clutter+= `<span>&nbsp;</span`
    clutter+= `<span class="opacity-10" >${e}</span>`
})
document.querySelector(".para").innerHTML = clutter;

gsap.set(".para span",
    {
        opacity:.1
    }
);
gsap.to(".para span",
    {
        scrollTrigger:
        {
            trigger:".paragraph",
            start:"top 60%",
            end:"bottom 90%",
            scrub:1,
        },
        opacity:1,
        ease:Power2,
        stagger:.3
    }
)
}
function loco()

{
   (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
}
function capsuleAnimate()
{
    gsap.to(".capsule2",
        {
            scrollTrigger:
            {
                trigger:".rightcapsules",
                start:"top 70%",
                end:"bottom 10%",
                scrub:1,
            },
            y:0,
            ease:Power2,
        }
    )
}
function animateColor()
{
      gsap.registerPlugin(ScrollTrigger);
     document.querySelectorAll(".section").forEach((e) => {
      ScrollTrigger.create({
        trigger: e,
        start: "top 50%",
        end: "bottom 50%",
        onEnter: function () {
          document.body.setAttribute("theme", e.dataset.color);
        },
        onEnterBack: function () {
          document.body.setAttribute("theme", e.dataset.color);
        }
      });
    });
}
function card()
{
    document.querySelectorAll(".card1").forEach((e) => {
  gsap.to(e, {
    scale: 1.2,
    ease: "none", 
    transformOrigin: "center center",
    scrollTrigger: {
      trigger: e,
      start: "botttom -40%",  
      end: "bottom bottom",    
      scrub: 0.5,          
    }
  });
});

}

card();
setHome();
realSetanimation();
teamAnimation();
paraAnimation();
 capsuleAnimate();
 loco();
 animateColor()



