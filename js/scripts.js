$(document).ready(function(){

  $('#submit').submit(function(event){
    event.preventDefault();
    let score = 0;

    const survey1Response = $("input:radio[name=survey1]:checked").val();
    const survey2Response = $("input:radio[name=survey2]:checked").val();
    const survey3Response = $("input:radio[name=survey3]:checked").val();
    const survey4Response = $("input:radio[name=survey4]:checked").val();
    const survey5Response = $("input:radio[name=survey5]:checked").val();

    function tally (language, score) {
      if (language === 'Ruby') {
        return score + 1;
      } else if (language === 'JavaScript') {
        return score + 2;
      } else {
        return score;
      }
    }
  
    let quest1Score = tally(survey1Response, score);
    let quest2Score = tally(survey2Response, score);
    let quest3Score = tally(survey3Response, score);
    let quest4Score = tally(survey4Response, score);
    let quest5Score = tally(survey5Response, score);
    
    let finalScore = (quest1Score + quest2Score + quest3Score + quest4Score + quest5Score);
  
    function result (resScore) {
      if(resScore <= 2) {
        return 'Python'
      } else if(resScore >=3 && resScore <= 5) {
        return 'Ruby'
      } else {
        return 'JavaScript'
      }
    }
    let quizResult = result(finalScore);
    $('#surveyResult').text(quizResult);
  });
  $('#reloadQuiz').click(function(){
    window.location.reload();
  })
});