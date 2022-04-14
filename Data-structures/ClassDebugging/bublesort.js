// //function bubbleSort(arr) {
//     for (var i = arr.length; i > 0; i--){
//         for (var j = 0; j < i - 1; j++) {
//             console.log(arr, arr[j], arr[j + 1]);
//             if (arr[j] > arr[j + 1])
//             {
//                 var temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
//     return arr;
// }
// bubbleSort([37, 45, 29, 8]);

// //Swap Function//
// function swap(arr, index1, index2) {
//     var temp = arr[index1];
//     arr[index1] = arr[index2];
//     arr[index2] = temp;
//     document.write("We have swapped " + index1 + "and " + index2 + "around.")
// }

// //To Help Us See whats happening//
// function bubbleSort(arr) {
//     for (var i = arr.length; i > 0; i--){
//         for (var j = 0; j < i - 1; j++) {
//             console.log(arr, arr[j], arr[j + 1]);
//             if (arr[j] > arr[j + 1])
//             {
//                 var temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//         console.log("One Pass")
//     }
//     return arr;
// }
// bubbleSort([37, 45, 29, 8]);

// //To Make a Bigger Array Faster That is Also Nearly Sorted//
// function bubbleSort(arr){
//     var noSwaps;
//     for (var i = arr.length; i > 0; i--){
//         noSwaps = true;
//         for (var j = 0; j < i - 1; j++) {
//             console.log(arr, arr[j], arr[j + 1]);
//             if (arr[j] > arr[j + 1])
//             {
//                 var temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//                 noSwaps = false;
//             }
//         }
//         console.log("One Pass")
//         if(noSwaps) break;
//     }
//     return arr;
// }
// bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]);

//With document.write//
// function bubbleSort(arr) {
//     for (var i = arr.length; i > 0; i--){
//         for (var j = 0; j < i - 1; j++) {
//             console.log(arr, arr[j], arr[j + 1]);
//             if (arr[j] > arr[j + 1])
//             {
//                 var temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//         document.write("One Pass " + arr + "<br>");
//     }
//     return arr;
// }
// bubbleSort([37, 45, 29, 8]);

function bubbleSort(arr){
    document.write("Starting Array " + arr + "<br>");
    for (var i = arr.length; i > 0; i--){
        for (var j = 0; j < i - 1; j++) {
            document.write("<br>" + arr + "<br>");
            if (arr[j] > arr[j + 1]) // if left is bigger right element//
                document.write( arr[j] + " Is Bigger Than " + arr[j+1] + " Swop Them " + "<br>");
            { //Swop Them (Bubble To The Right Side)// 
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
        document.write("Sorted" + arr + "<br>");
    }

    return arr;
}
document.write(bubbleSort([37, 45, 29, 8]));