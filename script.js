var imgs = [], img, i, heartsCount = 30;
var rowPos = -7;

function createImg() {
    var img = document.createElement('img');
    img.className = 'heart';
    img.src = 'heart1.png';
    document.body.appendChild(img);
    return img;
}

function randomStyle(img, rowPos, row) {
    switch(row) {
        case 'top1':
            img.style.left = (i * 3.4 - 3 + (Math.random() * 2 - 1)) + '%';
            img.style.top = (rowPos + 2 + (Math.random() * 8 - 2)) + '%';
            img.style.transform = 'rotate(' + (Math.random() * 60 - 30) + 'deg) scale(' + (Math.random() / 2.5 + 0.7) + ')';
        break;

        case 'top2':
            img.style.left = (i * 3.4 - 3 + (Math.random() * 2 - 1)) + '%';
            img.style.top = (rowPos + 12 + (Math.random() * 8 - 2)) + '%';
            img.style.transform = 'rotate(' + (Math.random() * 60 - 30) + 'deg) scale(' + (Math.random() / 2.5 + 0.6) + ')';
        break;

        case 'bottom1':
            img.style.left = (i * 3.4 - 3 + (Math.random() * 2 - 1)) + '%';
            img.style.top = (90 - (rowPos + 4 + (Math.random() * 8 - 2))) + '%';
            img.style.transform = 'rotate(' + (Math.random() * 60 - 30) + 'deg) scale(' + (Math.random() / 2.5 + 0.7) + ')';
        break;

        case 'bottom2':
            img.style.left = (i * 3.4 - 3 + (Math.random() * 2 - 1)) + '%';
            img.style.top = (90 - (rowPos + 14 + (Math.random() * 8 - 2))) + '%';
            img.style.transform = 'rotate(' + (Math.random() * 60 - 30) + 'deg) scale(' + (Math.random() / 2.5 + 0.6) + ')';
        break;
    }
    
}

for (i = 0; i < heartsCount; i++) {
    // Top row 1
    img = createImg();
    randomStyle(img, rowPos - 50, 'top1');
    imgs[i] = img;
    
    // Top row 2
    img = createImg();
    randomStyle(img, rowPos - 70, 'top2');
    imgs[i + heartsCount] = img;

    // Bottom row 1
    img = createImg();
    randomStyle(img, rowPos - 50, 'bottom1');
    imgs[i + heartsCount*2] = img;
    // Bottom row 2
    img = createImg();
    randomStyle(img, rowPos - 70, 'bottom2');
    imgs[i + heartsCount*3] = img;
}



function clickMe(e) {
    for (i = 0; i < heartsCount; i++) {
        randomStyle(imgs[i], rowPos, 'top1');
        randomStyle(imgs[i + heartsCount], rowPos, 'top2');

        randomStyle(imgs[i + heartsCount*2], rowPos, 'bottom1');
        randomStyle(imgs[i + heartsCount*3], rowPos, 'bottom2');
    }
}

document.getElementById('btnClickMe').addEventListener('click', clickMe);