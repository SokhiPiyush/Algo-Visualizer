// merge sort *********************************************************
async function merge(bar, low, mid, high){
    console.log('Merging the array');
    console.log(`low=${low}, mid=${mid}, high=${high}`);
    const n1 = mid - low + 1;
    const n2 = high - mid;
    console.log(`n1=${n1}, n2=${n2}`);
    let left = new Array(n1);
    let right = new Array(n2);

    for(let i = 0; i < n1; i++){
        await sleep(delay);
        console.log('In merge left loop');
        console.log("ith 1st loop iteration no. "+i);
        console.log(bar[low + i].style.height + ' at ' + (low+i));
        // color
        bar[low + i].style.background = 'orange';
        left[i] = bar[low + i].style.height;
    }
    for(let i = 0; i < n2; i++){
        await sleep(delay);
        console.log('In merge right loop');
        console.log("ith 2nd loop iteration no. "+i);
        console.log(bar[mid + 1 + i].style.height + ' at ' + (mid+1+i));
        // color
        bar[mid + 1 + i].style.background = 'yellow';
        right[i] = bar[mid + 1 + i].style.height;
    }
    await sleep(delay);
    let i = 0, j = 0, k = low;
    while(i < n1 && j < n2){
        await sleep(delay);
        console.log('In merge while loop');
        console.log(parseInt(left[i]), parseInt(right[j]));
        
        // To add color for which two r being compared for merging
        
        if(parseInt(left[i]) <= parseInt(right[j])){
            console.log(`if ${parseInt(left[i])} <= ${parseInt(right[j])}`);
            // color
            if((n1 + n2) === bar.length){
                bar[k].style.background = 'green';
            }
            else{
                bar[k].style.background = 'lightgreen';
            }
            
            bar[k].style.height = left[i];
            i++;
            k++;
        }
        else{
            console.log(`if ${parseInt(left[i])} >= ${parseInt(right[j])}`);
            // color
            if((n1 + n2) === bar.length){
                bar[k].style.background = 'green';
            }
            else{
                bar[k].style.background = 'lightgreen';
            } 
            bar[k].style.height = right[j];
            j++;
            k++;
        }
    }
    while(i < n1){
        await sleep(delay);
        console.log("In while if n1 is left");
        // color
        if((n1 + n2) === bar.length){
            bar[k].style.background = 'green';
        }
        else{
            bar[k].style.background = 'lightgreen';
        }
        bar[k].style.height = left[i];
        i++;
        k++;
    }
    while(j < n2){
        await sleep(delay);
        console.log("In while if n2 is left");
        // color
        if((n1 + n2) === bar.length){
            bar[k].style.background = 'green';
        }
        else{
            bar[k].style.background = 'lightgreen';
        }
        bar[k].style.height = right[j];
        j++;
        k++;
    }
}

async function mergeSort(bar, l, r){
    console.log('In mergeSort');
    if(l >= r){
        console.log(`return cause just 1 elemment l=${l}, r=${r}`);
        return;
    }
    const m = l + Math.floor((r - l) / 2);
    console.log(`left=${l} mid=${m} right=${r}`, typeof(m));
    await mergeSort(bar, l, m);
    await mergeSort(bar, m + 1, r);
    await merge(bar, l, m, r);
console.log("end");
}

const mergeSortbtn = document.querySelector("#mergeSort");
mergeSortbtn.addEventListener('click', async function(){
    let bar = document.querySelectorAll('.bar');
    let l = 0;
    let r = parseInt(bar.length) - 1;
    disableBtn();
    await mergeSort(bar, l, r);
    enableBtn();
});
