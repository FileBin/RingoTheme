document.addEventListener("DOMContentLoaded", ready);

window.addEventListener('resize', ready);



function ready() {
    const popular_posts_container = document.querySelector("#popular_images");
    popular_posts_container.innerHTML = '';
    load_posts(popular_posts_container);
}

function load_posts(container) {
    let popular_posts = [];
    if(testing) {
        testingImages.forEach( img => {
            popular_posts.push(img);
        });
    }
    for(let i in popular_posts) {
        let img = popular_posts[i];
        let elem = htmlToElement(`
        <article class="post-entry">
            <div class="entry-cover fill-entry">
                <img class="entry-img" src="${img}" alt="image">
            </div>
            <a class="fill-entry" aria-label="post link to Image" href="${img}"></a>
        </article>`);


        elem = container.appendChild(elem);
        let rect = elem.getBoundingClientRect();
        let parentRect = container.getBoundingClientRect();
        if(Math.abs(parentRect.right - rect.right) < rect.width && Math.abs(parentRect.bottom - rect.bottom) < rect.width * 0.5) {
            elem.style['mask-image'] = 'linear-gradient(90deg, rgba(0, 0, 0, 1), transparent)';
            //TODO make popular images page 
            let  href = '#';
            elem.insertAdjacentHTML('beforeend', `
            <a class="more fill-entry" href="${href}">
            More...
            </a>
            `);
            break;
        }
    }
}

function htmlToElement(html) {
    var template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
}