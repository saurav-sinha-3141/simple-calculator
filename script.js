function evaluateExpression() {
    var inputExpression = document.getElementById('input').value;
    var resultContainer = document.querySelector('.result');

    try {
        var result = eval(inputExpression);
        resultContainer.textContent = 'Maybe ' + result;
    } catch (error) {
        resultContainer.textContent = 'Error: ' + error.message;
    }
}

function rickRollThem() {
  var scriptControlDiv = document.querySelector(".scriptControl");
  scriptControlDiv.style.display = "block";

  var audio = new Audio("RickRollAudio.MP3");
  audio.play();

  document.getElementById("stopAudio").style.display = "inline-block";
  document.getElementById("calculate").disabled = true;

  document.getElementById("stopAudio").addEventListener("click", function () {
    audio.pause();
    audio.currentTime = 0;
    document.getElementById("stopAudio").style.display = "none";
    document.getElementById("calculate").disabled = false;
  });
}

document.getElementById('calculate').addEventListener('click', function() {
    evaluateExpression();
    rickRollThem();
});