var imgs = [], i, heartsCount = 25, leftPosFactor = 100 / heartsCount;
var rowPos = -9;

function createImg() {
    var img = document.createElement('img');
    img.className = 'heart';
    img.src = 'heart1.png';
    img.style.zIndex = 50;
    document.body.appendChild(img);
    return img;
}

function randomStyle(imgs, rowPos, row) {
    var randomed = [Math.random(), Math.random(), Math.random(), Math.random()];

    switch(row) {
        case 'top1':
            imgs[0].style.left = (i * leftPosFactor - 3 + (randomed[0] * 2 - 1)) + '%';
            imgs[0].style.top = (rowPos + 2 + (randomed[1] * 8 - 2)) + '%';
            imgs[0].style.transform = ['rotate(', (randomed[2] * 60 - 30), 'deg) scale(', (randomed[3] / 2.3 + 0.75), ')'].join('');

            imgs[1].style.left = (i * leftPosFactor - 3 + (randomed[0] * 2 - 1)) + '%';
            imgs[1].style.top = (90 - (rowPos + 4 + (randomed[1] * 8 - 2))) + '%';
            imgs[1].style.transform = ['rotate(', -(randomed[2] * 60 - 30), 'deg) scale(', ((1 - randomed[3]) / 2.3 + 0.75), ')'].join('');
        break;

        case 'top2':
            imgs[0].style.left = (i * leftPosFactor - 3 + (randomed[0] * 2 - 1)) + '%';
            imgs[0].style.top = (rowPos + 12 + (randomed[1] * 8 - 2)) + '%';
            imgs[0].style.transform = ['rotate(', (randomed[2] * 60 - 30), 'deg) scale(', (randomed[3] / 2.3 + 0.65), ')'].join('');

            imgs[1].style.left = (i * leftPosFactor - 3 + (randomed[0] * 2 - 1)) + '%';
            imgs[1].style.top = (90 - (rowPos + 14 + (randomed[1] * 8 - 2))) + '%';
            imgs[1].style.transform = ['rotate(', -(randomed[2] * 60 - 30), 'deg) scale(', ((1 - randomed[3]) / 2.3 + 0.65), ')'].join('');
        break;

        /*case 'bottom1':
            imgs[1].style.left = (i * leftPosFactor - 3 + (Math.random() * 2 - 1)) + '%';
            imgs[1].style.top = (90 - (rowPos + 4 + (Math.random() * 8 - 2))) + '%';
            imgs[1].style.transform = ['rotate(', (Math.random() * 60 - 30), 'deg) scale(', (Math.random() / 2.3 + 0.75), ')'].join('');
        break;

        case 'bottom2':
            imgs[1].style.left = (i * leftPosFactor - 3 + (Math.random() * 2 - 1)) + '%';
            imgs[1].style.top = (90 - (rowPos + 14 + (Math.random() * 8 - 2))) + '%';
            imgs[1].style.transform = ['rotate(', (Math.random() * 60 - 30), 'deg) scale(', (Math.random() / 2.3 + 0.65), ')'].join('');
        break;*/
    }
    
}

var img1, img2;
for (i = 0; i < heartsCount; i++) {
    // Top row 1
    img1 = createImg();
    img2 = createImg();
    randomStyle([img1, img2], rowPos - 40, 'top1');
    imgs[i] = img1;
    imgs[i + heartsCount*2] = img2;
    
    // Top row 2
    img1 = createImg();
    img2 = createImg();
    randomStyle([img1, img2], rowPos - 60, 'top2');
    imgs[i + heartsCount] = img1;
    imgs[i + heartsCount*3] = img2;

    // Bottom row 1
    /*img = createImg();
    randomStyle(img, rowPos - 50, 'bottom1');
    imgs[i + heartsCount*2] = img;
    // Bottom row 2
    img = createImg();
    randomStyle(img, rowPos - 70, 'bottom2');
    imgs[i + heartsCount*3] = img;*/
}



function clickMe(e) {
    document.getElementById('btnClickMe').style.display = 'none';

    for (i = 0; i < heartsCount; i++) {
        randomStyle([imgs[i], imgs[i + heartsCount*2]], rowPos, 'top1');
        randomStyle([imgs[i + heartsCount], imgs[i + heartsCount*3]], rowPos, 'top2');

        //randomStyle(imgs[i + heartsCount*2], rowPos, 'bottom1');
        //randomStyle(imgs[i + heartsCount*3], rowPos, 'bottom2');
    }

    if (/button/i.test(e.target.tagName)) {
        var text = document.createElement('div');
        text.innerHTML = 'С 8 марта! ^_^';
        text.style.position = 'absolute';
        text.style.top = '42%';
        text.style.fontSize = '80pt';
        text.style.color = '#dd0033';
        text.style.opacity = '0';
        text.style.transition = '.3s ease-in';
        text.style.zIndex = '44';
        text.style.cursor = 'default';
        text.style.userSelect = 'none';
        text.addEventListener('click', clickMe);
        document.body.appendChild(text);
        text.style.left = 'calc(50% - ' + text.clientWidth/2 + 'px)';
        setTimeout(function() {
            text.style.opacity = '1';
        }, 400);

        var div = document.createElement('div');
        div.style.position = 'absolute';
        div.style.left = '0';
        div.style.top = '20%';
        div.style.zIndex = '45';
        div.style.width = '100%';
        div.style.height = '50%';
        div.style.transition = '.6s ease-in';
        div.style.backgroundColor = 'white';
        document.body.appendChild(div);
        (function(div) {
            setTimeout(function() {
                div.style.left = '-100%';
            }, 0);
        })(div);
    }
}

document.getElementById('btnClickMe').addEventListener('click', clickMe);
