document.getElementById("button1").addEventListener("click",myWordsForwards);
document.getElementById("button2").addEventListener("click",myWordsBackwards);
var words = ['Rat', 'Cat', 'Pat', 'Hat', 'Rack', 'Fat', 'Bat', 'Sat', 'At', 'Lack']
var myWord = []
function myWordsForwards () {
    console.log(words)
}

function myWordsBackwards () {
    for (var i = 0; i < words.length + 1; ++i) {
            myWord += words[i]
            myWord[i] = myWord
    }
    console.log(myWord)
}

