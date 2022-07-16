

document.addEventListener('DOMContentLoaded', () => {

    const oberver = new IntersectionObserver((entries)=>{
        if(entries[0].isIntersecting){
            console.log('Intersectung')
        }
    });

    oberver.observe(document.querySelector('.premium'));
})