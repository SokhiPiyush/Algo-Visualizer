
// QUICK SORT ***********************************************
async function partition(bar, l, r){
    console.log('In partition()');
    let i = l - 1;
    // color pivot element
    bar[r].style.background = 'red';
    for(let j = l; j <= r - 1; j++){
        console.log('In partition for j');
        // color current element
        bar[j].style.background = 'yellow';
        // pauseChamp
        await sleep(delay);

        if(parseInt(bar[j].style.height) < parseInt(bar[r].style.height)){
            console.log('In partition for j if');
            i++;
            swap(bar[i], bar[j]);
            // color 
            bar[i].style.background = 'orange';
            if(i != j) bar[j].style.background = 'orange';
            // pauseChamp
            await sleep(delay);
        }
        else{
            // color if not less than pivot
            bar[j].style.background = 'pink';
        }
    }
    i++; 
    // pauseChamp
    await sleep(delay);
    swap(bar[i], bar[r]); // pivot height one
    console.log(`i = ${i}`, typeof(i));
    // color
    bar[r].style.background = 'pink';
    bar[i].style.background = 'green';

    // pauseChamp
    await sleep(delay);
    
    // color
    for(let k = 0; k < bar.length; k++){
        if(bar[k].style.background != 'green')
            bar[k].style.background = 'cyan';
    }

    return i;
}

async function quickSort(bar, l, r){
    console.log('In quickSort()', `l=${l} r=${r}`, typeof(l), typeof(r));
    if(l < r){
        let pivot_index = await partition(bar, l, r);
        await quickSort(bar, l, pivot_index - 1);
        await quickSort(bar, pivot_index + 1, r);
    }
    else{
        if(l >= 0 && r >= 0 && l <bar.length && r <bar.length){
            bar[r].style.background = 'green';
            bar[l].style.background = 'green';
        }
    }
}


const quickSortbtn = document.querySelector("#quickSort");
quickSortbtn.addEventListener('click', async function(){
    let bar = document.querySelectorAll('.bar');
    let l = 0;
    let r = bar.length - 1;
    disableBtn();
    await quickSort(bar, l, r);
    enableBtn();
});
