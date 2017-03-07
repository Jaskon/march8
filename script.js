var imgs = [], i, heartsCount = 10, leftPosFactor = 100 / heartsCount;
var rowPos = -7;

function createImg() {
    var img = document.createElement('img');
    img.className = 'heart';
    img.src = 'heart1.png';
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
    for (i = 0; i < heartsCount; i++) {
        randomStyle([imgs[i], imgs[i + heartsCount*2]], rowPos, 'top1');
        randomStyle([imgs[i + heartsCount], imgs[i + heartsCount*3]], rowPos, 'top2');

        //randomStyle(imgs[i + heartsCount*2], rowPos, 'bottom1');
        //randomStyle(imgs[i + heartsCount*3], rowPos, 'bottom2');
    }
}

document.getElementById('btnClickMe').addEventListener('click', clickMe);