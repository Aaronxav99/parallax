let listBg = document.querySelectorAll('.banner .bg'); // Fix the selector
let titleBanner = document.querySelector('.banner h1'); // Fix the typo
let listTab = document.querySelectorAll('.tab'); // Select all .tab elements

// scrollY is the web scrollbar position (pixel)
window.addEventListener('scroll', () => {
    let top = this.scrollY;

    // index is the order of classes bg (0,1,2,3,4,5,6,7,8)
    /*so it takes*/ 
    listBg.forEach((bg, index) => {
        if (index !== 0 && index !== 8) {
            bg.style.transform = `translateY(${(top * index / 2)}px)`;
        } else if (index === 0) {
            bg.style.transform = `translateY(${(top / 3)}px)`;
        }
    });

    // Parallax effect on the title
    titleBanner.style.transform = `translateY(${(top * 4 / 2)}px)`;

    // Parallax scroll in tab
    listTab.forEach(tab => {
        if (tab.offsetTop - top < 550) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
});
