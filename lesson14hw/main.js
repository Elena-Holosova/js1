

function wakeUp(alarmClock){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            if(alarmClock){
                console.log('good morning');
                resolve();
            }
            else{
                reject('oops');
            }
        }, 3000);
    })

}

function breakfast(food){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            if(food){
                console.log('eat breakfast');
                resolve();
            }
            else{
                reject('stay hungry');
            }
        }, 2000);
    })

}

function goWork(bag){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            if(bag){
                console.log('work hard');
                resolve();
            }
            else{
                reject('fired');
            }
        }, 500);
    })

}

function sleep(bed){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            if(bed){
                console.log('good night');
                resolve();
            }
            else{
                reject('fired');
            }
        }, 3000);
    })

}

wakeUp(true)
    .then(()=>{
        return breakfast(true);
    })
    .then(() =>{
        return goWork(true);
    })
    .then(() =>{
        return sleep(true);
    })
    .then(() =>{
        console.log('day is over!');
    });

