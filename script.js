//* Settings

let imgs = [], heartsCount = 25, leftPosFactor = 100 / heartsCount;
const rowPos = -9;


//* Move logic

const isScreenTouchable = 'ontouchstart' in document.documentElement;
let imgsInMove = [];

function clearImgsInMove() {
    imgsInMove = [];
}

function startMoveImg({img, clickDiffX, clickDiffY}) {
    img.style.transition = 'none';
    imgsInMove.push({img, clickDiffX, clickDiffY});

    return imgsInMove.length - 1;
}

function endMoveImg(id, clearMovingImgs) {
    imgsInMove[id].img.style.transition = '';
    imgsInMove[id] = null;
    if (clearMovingImgs) {
        clearImgsInMove();
    }
}

function endMoveAllImgs() {
    imgsInMove.forEach(({img}) =>
        img && (img.style.transition = '')
    );
    clearImgsInMove();
}

if (!isScreenTouchable) {
    document.addEventListener('mouseup', () => endMoveAllImgs());

    document.addEventListener('mousemove', event =>
        imgsInMove.forEach(({ img, clickDiffX, clickDiffY }) => {
            img && (img.style.left = `${event.clientX - clickDiffX}px`);
            img && (img.style.top = `${event.clientY - clickDiffY}px`);
        })
    );
}

const onImgMouseDown = !isScreenTouchable && function(event, img) {
    event.preventDefault();

    const clickDiffX = event.clientX - img.offsetLeft;
    const clickDiffY = event.clientY - img.offsetTop;

    img.style.left = `${img.left}px`;
    img.style.top = `${img.top}px`;

    startMoveImg({img, clickDiffX, clickDiffY});
};

function onImgTouchStart(event, img) {
    event.preventDefault();

    const clickDiffX = event.targetTouches[0].clientX - img.offsetLeft;
    const clickDiffY = event.targetTouches[0].clientY - img.offsetTop;

    img.style.left = `${img.left}px`;
    img.style.top = `${img.top}px`;

    const imgMovingId = startMoveImg({img, clickDiffX, clickDiffY});

    img.ontouchmove = event => {
        img.style.left = `${event.targetTouches[0].clientX - clickDiffX}px`;
        img.style.top = `${event.targetTouches[0].clientY - clickDiffY}px`;
    };

    img.ontouchend = () => {
        endMoveImg(imgMovingId, event.touches.length === 1);
    };
}


//* Img generation/positioning logic

function createImg() {
    const img = document.createElement('img');
    img.className = 'heart';
    img.src = 'heart1.png';
    img.style.zIndex = 50;

    // Touch event (mobile)
    img.ontouchstart = event => onImgTouchStart(event, img);

    // Mouse event (PC)
    img.onmousedown = event => onImgMouseDown(event, img);

    document.body.appendChild(img);
    return img;
}

function randomStyle(imgs, rowPos, row, i) {
    const randomed = [Math.random(), Math.random(), Math.random(), Math.random()];

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

let img1, img2;
for (let i = 0; i < heartsCount; i++) {
    // Top row 1
    img1 = createImg();
    img2 = createImg();
    randomStyle([img1, img2], rowPos - 40, 'top1', i);
    imgs[i] = img1;
    imgs[i + heartsCount*2] = img2;

    // Top row 2
    img1 = createImg();
    img2 = createImg();
    randomStyle([img1, img2], rowPos - 60, 'top2', i);
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

    for (let i = 0; i < heartsCount; i++) {
        randomStyle([imgs[i], imgs[i + heartsCount*2]], rowPos, 'top1', i);
        randomStyle([imgs[i + heartsCount], imgs[i + heartsCount*3]], rowPos, 'top2', i);

        //randomStyle(imgs[i + heartsCount*2], rowPos, 'bottom1');
        //randomStyle(imgs[i + heartsCount*3], rowPos, 'bottom2');
    }

    if (/button/i.test(e.target.tagName)) {
        const text = document.createElement('div');
        text.innerHTML = 'С 8 марта! ^-^';
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

        const div = document.createElement('div');
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
