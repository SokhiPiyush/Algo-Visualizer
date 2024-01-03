let randomArray = document.getElementById("new_array");
let sorting = document.getElementById("sort_btn");
let bar_container = document.getElementById("bar_container");
let size = document.getElementById("arraySize");
let array_size = size.value;    // size ki initial value
let unsorted_array = new Array(array_size);
let speed = document.getElementById("arraySpeed");
let delay = speed.value;


// FUNCTION FOR GENERATING RANDOM ARRAY
function randomNum(max, min) {
    return Math.floor(Math.random() * (max - min) + min);
}

// FUNCTION FOR CREATING NEW ARRAY
function createNewArray() {
    let array = new Array(array_size);
    for (let i = 0; i < array_size; i++) {
        array[i] = randomNum(200, 5);
    }
    return array;
}
// console.log(array);


// this will generrate the bars
function generateBars(array) {
    for (let i = 0; i < array_size; i++) {
        let bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = array[i] * 2 + "px";
        document.getElementById("bar_container").appendChild(bar);
    }
}

// GENERATE ARRAY WHEN NEW ARRAY BUTTON IS CLICKED.
function generateArray() {
    unsorted_array = createNewArray();
    bar_container.innerHTML = '';
    generateBars(unsorted_array);
    console.log(unsorted_array)
    generateColor();
};


// FOR EVERY LOAD OF THE DOM, RENDER THE RANDOM ARRAY
document.addEventListener("DOMContentLoaded", function () {
    unsorted_array = createNewArray();
    generateBars(unsorted_array);
    console.log(unsorted_array);
    generateColor();
})

// for audio :
// let audioCtx = null;
// function playNote(freq) {
//     if(audioCtx==null) {
//         audioCtx = new(
//             AudioContext ||
//             webkitAudioContext ||
//             window.webkitAudioContext
//         ) ();
//     }
//     const dur = 0.1;
//     const osc = audioCtx.createOscillator();
//     osc.frequency.value = freq;
//     osc.start();
//     osc.stop(audioCtx.currentTime+dur);
//     osc.connect(audioCtx.destination);
// }


// for size slider :
function arraySize() {
array_size = size.value;
    console.log(size.value, typeof(size.value));
    bar_container.innerHTML = "";
    unsorted_array = createNewArray();
    generateBars(unsorted_array);
}

// for speed slider :
function arraySpeed() {
    $("#arraySpeed").on('change input', function() {
        delay = Math.abs($(this).val());
        //   $("#rangeValue").text(output);
        // delay = speed.value;
        console.log(delay);
      });
}

// for disabling sorting button
function disableBtn() {
    document.querySelector("#selectionSort").disabled = true;
    document.querySelector("#bubbleSort").disabled = true;
    document.querySelector("#quickSort").disabled = true;
    document.querySelector("#mergeSort").disabled = true;
    document.querySelector("#insertionSort").disabled = true;
    document.querySelector("#arraySize").disabled = true;
    document.querySelector("#new_array").disabled = true;

}

// for enabling sorting buttons after completion of sorting
function enableBtn() {
    document.querySelector("#selectionSort").disabled = false;
    document.querySelector("#bubbleSort").disabled = false;
    document.querySelector("#quickSort").disabled = false;
    document.querySelector("#mergeSort").disabled = false;
    document.querySelector("#insertionSort").disabled = false;
    document.querySelector("#arraySize").disabled = false;
    document.querySelector("#new_array").disabled = false;
}


//  SLEEP FUNCTION ***********************************************************
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

//  SWAP FUNCTION ************************************************************
async function swap(a1, a2) {
    console.log("In Swap()");

    let temp = a1.style.height;
    a1.style.height = a2.style.height;
    a2.style.height = temp;
    await(delay);
}

const curzor = document.querySelector(".curzor");
document.addEventListener("mousemove", (e) => {
    curzor.style.cssText = `top: ${e.y - 2}px; left: ${e.x - 2}px`
})


    
let clr = document.getElementById("clr");
// generating random color
function generateColor() {
var randomColor = (Math.floor(Math.random()*16777216)).toString(16);
clr.style.color = "#" + randomColor;
console.log(randomColor);

}
