const time = 2000;
const step = 1;

function outNum(num, element, progressElement, elTextId, text) {
    let el = document.querySelector('#' + element);
    let progressBar = document.querySelector('#' + progressElement);
    let elText = document.querySelector('#' + elTextId);

    let n = 0;
    let t = Math.round(time / (num / step));

    let interval = setInterval(() => {
        n += step;
        if (n >= num) {
            clearInterval(interval);
            n = num;
        }

        elText.innerHTML = text;
        elText.style.color = '#030303';

        el.innerHTML = n + '%';
        progressBar.style.width = n + '%';
    }, t);
}

console.log(step); 
document.addEventListener('scroll', function () {
    if (window.scrollY > 200) {
        outNum(27, 'out1', 'progress1', 'item1', 'SUNGLASES');
        outNum(44, 'out2', 'progress2', 'item2', 'STREETWEAR');
        outNum(67, 'out3', 'progress3', 'item3', 'BUSINESS');
        outNum(27, 'out4', 'progress4', 'item4', 'FASHION');

        document.removeEventListener('scroll', arguments.callee);
    }
});

outNum(27, 'out1', 'progress1', 'item1', 'SUNGLASES');
outNum(44, 'out2', 'progress2', 'item2', 'STREETWEAR');
outNum(67, 'out3', 'progress3', 'item3', 'BUSINESS');
outNum(27, 'out4', 'progress4', 'item4', 'FASHION');

document.addEventListener('DOMContentLoaded', () => {
    function animateProgress(id, value) {
        let circularProgress = document.querySelector(`#${id}`);
        let progressValue = document.querySelector(`#${id} .progress-value`);
        let progressStartValue = 0;
        let progressEndValue = value;
        let speed = 30;

        let progress = setInterval(() => {
            progressStartValue++;
            progressValue.textContent = `${progressStartValue}%`;
            circularProgress.style.background = `conic-gradient(white ${progressStartValue * 3.6}deg, rgba(255, 255, 255, 0.5) 0deg)`;

            if (progressStartValue === progressEndValue) {
                clearInterval(progress);
            }
        }, speed);
    }

    // Запуск анимации для каждого прогресс-бара
    animateProgress('progressC1', 24);
    animateProgress('progressC2', 56);
    animateProgress('progressC3', 77);
    animateProgress('progressC4', 35);
});

