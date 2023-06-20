function calculateFinal(){
    var mathScore = parseFloat(document.getElementById("math").value);
    var literatureScore = parseFloat(document.getElementById("literature").value);
    var englishScore = parseFloat(document.getElementById("english").value);

    mathScore *= 2;
    literatureScore *= 2;

    var FinalScore = mathScore + literatureScore + englishScore;

    var result ="";

    if (FinalScore >= 43.5) {
        result = "Bạn thuộc top 500 Hà Nội";
    }
    else if (FinalScore >=40) {
        result = "Bạn thuộc top 1000 Hà Nội";
    }

    else {
        result ="Bạn chẳng là gì cả";
    }

    document.getElementById("result").innerHTML = "Kết quả: " + result;
}