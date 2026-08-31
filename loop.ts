let time = 0;

// // console.log('====================================');
// // console.log('start');
// // console.log('====================================');

// const loop = setInterval(() => {
//     time ++;
//     console.log('hello world ', time);

//     if (time === 20) clearInterval(loop);
// }, 200);

// setTimeout(() => {
//     console.log('====================================');
//     console.log('end');
//     console.log('====================================');
// }, 4000);

const loop = setInterval(() => {
    console.log('app is runing');
    time++;

    try {
        if (time === 20) throw Error('some thing is error');
    } catch (error) {
        console.log(error);
    }
}, 200);
