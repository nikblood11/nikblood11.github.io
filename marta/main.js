const contactsName = document.querySelector('.main__contacts__name')
const contactsNum = document.querySelector('.main__contacts__num')
const contactsSocial = document.querySelector('.main__contacts__socialmedia')
const heal = document.querySelector('.main_heal')
const main_button = document.querySelector('.main_button')
contactsName.style.opacity=0
contactsName.style.transition='ease-out all 2s'
contactsNum.style.opacity=0
contactsSocial.style.opacity=0
heal.style.opacity=0
main_button.style.opacity=0
document.addEventListener("DOMContentLoaded", function() {
 
 
  });
  window.onload = function() {
    contactsName.style.transition='ease-out all 0.8s'
    contactsName.style.opacity=1
   const num = function () {
    contactsNum.style.opacity=1
    contactsNum.style.transition='ease-out all 0.8s'
}
   const healfunc = function () {
    heal.style.opacity=1
    heal.style.transition='ease-out all 0.8s'
}
   const but = function () {
    main_button.style.opacity=1
    main_button.style.transition='ease-out all 0.8s'
}
   const social = function () {
    contactsSocial.style.opacity=1
    contactsSocial.style.transition='ease-out all 0.8s'
}
setTimeout(num,800)
setTimeout(healfunc,1400)
setTimeout(but,1800)
setTimeout(social,2300)

  };

  document.addEventListener('DOMContentLoaded', () => {
    const animate = document.querySelectorAll('.animation')

    const scrollAnim = () => {
        let windowCenter = (window.innerHeight) + window.scrollY
        animate.forEach(el => {
            let scrollOffset = el.offsetTop + (el.offsetHeight / 2);
            if (windowCenter >= scrollOffset) {
                el.style.opacity = 1
                el.style.transition = 'ease-out all 0.3s'

            }
            else if (el.style.opacity == 1) {
                el.style.opacity = 1
            }
            else {
                el.style.opacity = 0
                el.style.transition = 'ease-out all 0.3s'
            }
        })
    }
    scrollAnim()

    window.addEventListener('scroll', () => {
        scrollAnim()
    })
})

const lay = document.querySelectorAll('.layer')
function parallax(event) {
    this.querySelectorAll('.layer').forEach(el => {
        let speed = el.getAttribute('data-speed')
        el.style.transform = `translateX(${event.clientX * speed / 50}px)`
        el.style.transition = 'ease all 0.1s'
    })
}

document.addEventListener('mousemove', parallax)