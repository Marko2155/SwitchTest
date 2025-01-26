document.getElementById("clickme").addEventListener(function() {
    let arr = new Uint8Array(4);  // An array with 4 bytes (0-3 index)
    arr[0] = 10;
    arr[4] = 20;  // Out of bounds (array length is 4, valid indices are 0-3)
    console.log(arr[4]);  // Returns undefined, safe handling in JavaScript
})