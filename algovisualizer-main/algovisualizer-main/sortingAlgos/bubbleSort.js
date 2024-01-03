// Bubble Sort : *************************************************************************
async function bubbleSort() {
    console.log(unsorted_array);
    console.log("In bubble sort ");
    let bar = document.getElementsByClassName("bar");
    for (let i = 0; i < bar.length - 1; i++) {
        console.log("Inside ith loop, iteration no : " + i);
        for (let j = 0; j < bar.length - i - 1; j++) {
            console.log("Inside jth loop, iteration no : " + j);
            console.log("if (" + unsorted_array[j] + " > " + unsorted_array[j + 1] + ")");
            
            if (parseInt(bar[j].style.height) > parseInt(bar[j + 1].style.height)) {
                // playNote(200+unsorted_array[i]*300);
                console.log("swap " + unsorted_array[j] + " and " + unsorted_array[j + 1]);
                bar[j].style.background = 'blue';
                bar[j + 1].style.background = 'blue';
                await sleep(delay);
                swap(bar[j], bar[j + 1]);

                //  THIS IS FOR CONSOLE **************************************
                if (unsorted_array[j] > unsorted_array[j + 1]) {
                    console.log("swap " + unsorted_array[j] + " and " + unsorted_array[j + 1]);
                    let temp = unsorted_array[j];
                    unsorted_array[j] = unsorted_array[j + 1];
                    unsorted_array[j + 1] = temp;
                }
                // ***********************************************************

            }
            // playNote(200);

            bar[j + 1].style.background = 'green';
            bar[j].style.background = 'pink';

        }
        console.log("jth loop ends...");
        bar[bar.length - i - 1].style.background = 'green';
    }
    bar[0].style.background = 'green';
    console.log("ith loop ends...");
    console.log("sorted array is : " + unsorted_array);
}

const bubbleSortBtn = document.querySelector("#bubbleSort");
bubbleSortBtn.addEventListener('click', async function () {
    disableBtn();
    await bubbleSort();
    enableBtn();
})
