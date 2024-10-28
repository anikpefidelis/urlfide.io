const selectElement = (selector) => {
    const element = document.querySelector(selector);
    if(element) return element;
    throw new Error('Cannot find the element ${selector}');
}

const form = selectElement('.form');
const input = selectElement('.input');
const resultn= selectElement('.result');
const  hamburger = selectElement('.hamburger');
const navmenu = ('nav-menu');

hamburger. addEventListener('click',() =>{
    hamburger.ClassList. toggle('active');
    navmenu.ClassList.toggle('active');
})


form.addEventListener('submit',() =>{
    e.preventDefault();
    const url = input.value;

    shortenUrl(url);
}


async function shortenUrl(url){
    try{
        const res = awaitfetch('https://api.shortco.de/v2/shorten?url=${url}')
        const data = res.json();

        const newUrl = document.createElement('div');
        newUrl.classList.add('item');
        newUrl.innerHTML =
        <p>${data.result.short_link}</p>
        <button class='newUrl-btn'>copy</button>;

        result.prepend(newUrl);
        const copyBtn = document.querySelector('newUrl-btn');
        copyBtn.addEventListener('click',()=>{
            navigator.clipboard.writeText(copyBtn.previousElementSibling.textContent);
        })
        input.value=""
    }catch (error) {
        console.log(error);
    }
}































































