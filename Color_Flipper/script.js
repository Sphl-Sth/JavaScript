var colors = ["red","orange", "yellow", "green", "blue", "purple", "pink"];
var currentIndex = 0;


document.getElementById("changeButtons").addEventListener('click', function(){
    document.body.style.backgroundColor = getNewColor();
})


function getNewColor(){
    var displayColor = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length;
    return displayColor;
}