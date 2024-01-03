
// SELECTION SORT ************************************************************************
async function selectionSort() {
    console.log(unsorted_array);
    let n = unsorted_array.length;
    console.log("In Selection sort ");
    let bar = document.getElementsByClassName("bar");

    for (let i = 0; i < n; i++) {
        console.log("Inside ith loop, iteration no : " + i);
        // Finding the smallest number in the subarray
        bar[i].style.background = "blue";
        let min = i;
        let mini = i;
        console.log("minimum value = "+unsorted_array[min]);
        console.log("minimum index = "+min);

        for (let j = i + 1; j < n; j++) {
            console.log("Inside jth loop, iteration no : " + j);
            console.log("if (" + unsorted_array[j] + " < " + unsorted_array[min] + ")");

            if (parseInt(bar[j].style.height) < parseInt(bar[min].style.height)) {
                min = j;
            }
            bar[j].style.background = 'pink';

            // FOR CONSOLE *******************************
            if (unsorted_array[j] < unsorted_array[min]) {
                mini = j;
                console.log("minimum value = ", unsorted_array[mini]);
            }
            // FOR CONSOLE *******************************

        }
        console.log("jth loop ends here...");

        if (min != i) {
            console.log("if min != i");
            bar[min].style.background = "purple";
            await sleep(delay);

            // FOR CONSOLE *******************************
            // Swapping the elements
            console.log("swap " + unsorted_array[i] + " and " + unsorted_array[min]);
            let tmp = unsorted_array[i];
            unsorted_array[i] = unsorted_array[min];
            unsorted_array[min] = tmp;
            // FOR CONSOLE *******************************

            swap(bar[i], bar[min]);
        }
        bar[i].style.background = 'purple';
        bar[i].style.background = 'green';
    }
    console.log("ith loop ends here...");
    console.log("sorted array is : " +unsorted_array);
}

const selectionSortBtn = document.querySelector("#selectionSort");
selectionSortBtn.addEventListener('click', async function () {
    disableBtn();
    await selectionSort();
    enableBtn();
})