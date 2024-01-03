
// INSERTION SORT *******************************************
async function insertionSort(){
    console.log('In insertion Sort');
    const bar = document.querySelectorAll(".bar");
    
    bar[0].style.background = 'orange';
    for(let i = 1; i < bar.length; i++){
        console.log('in ith loop iteration no. '+i);
        let j = i - 1;
        let key = bar[i].style.height;
        console.log(key);
        // color
        bar[i].style.background = 'blue';

        await sleep(delay);

        while(j >= 0 && (parseInt(bar[j].style.height) > parseInt(key))){
            console.log('In while loop');
            console.log(`while(${j} >= 0 && ${parseInt(bar[j].style.height)} > ${parseInt(key)})`)
            // color
            bar[j].style.background = 'blue';
            bar[j + 1].style.height = bar[j].style.height;
            // console.log(`${bar[j+1].style.height} = ${bar[j].style.height}`);
            j--;
            console.log("decreement j by 1 : j = " +j);

            await sleep(delay);

            // color
            for(let k = i; k >= 0; k--){
                bar[k].style.background = 'green';
            }
        }
        bar[j + 1].style.height = key;
        // color
        bar[i].style.background = 'green';
    }
}

const inSortbtn = document.querySelector("#insertionSort");
inSortbtn.addEventListener('click', async function(){
    disableBtn();
    await insertionSort();
    enableBtn();
});