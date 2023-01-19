function show(){
    if (window.innerWidth <= 700){
        gsap.to('.one', {x: 10,duration: 20, delay: 0.4, rotation: 360, stagger: 1 });
        gsap.to('.two', {x: 30,duration: 20, delay: 0.4, rotation: 360, stagger: 1});
        gsap.to('.three', {x: 60,duration: 20, delay: 0.4, rotation: 360, stagger: 1});
        gsap.to('.foir', {x: 90,duration: 20, delay: 0.4, rotation: 360, stagger: 1});
        gsap.to('.five', {x: 120,duration: 20, delay: 0.4, rotation: 360, stagger: 1});
        gsap.to('.six', {x: 150,duration: 20, delay: 0.4, rotation: 360, stagger: 1});
    }
    else{
        gsap.to('.one', {x: 350,duration: 20, delay: 0.4, rotation: 360, stagger: 1 });
        gsap.to('.two', {x: 450,duration: 20, delay: 0.4, rotation: 360, stagger: 1});
        gsap.to('.three', {x: 550,duration: 20, delay: 0.4, rotation: 360, stagger: 1});
        gsap.to('.foir', {x: 650,duration: 20, delay: 0.4, rotation: 360, stagger: 1});
        gsap.to('.five', {x: 750,duration: 20, delay: 0.4, rotation: 360, stagger: 1});
        gsap.to('.six', {x: 850,duration: 20, delay: 0.4, rotation: 360, stagger: 1});
    }
}
show()


const back = document.querySelector('#back');
const next = document.querySelector('#next');

const photo = ['Krauchanka Katsiaryna.png', 'Katsiaryna Krauchanka.png', 'bs.jpg'];
let i = 0;

next.addEventListener('click', () => {
    i++;
    if (i > photo.length - 1){
        i = 0; 
     }
     document.querySelector('#pictures').src = photo[i]
})

back.addEventListener('click', () => {
    i--;
    if (i < 0){
i = photo.length - 1;
    } 
    document.querySelector('#pictures').src = photo[i]
})

