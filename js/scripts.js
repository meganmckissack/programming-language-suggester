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
  
    Quest1Score = tally(survey1Response, score);
    Quest2Score = tally(survey2Response, score);
    Quest3Score = tally(survey3Response, score);
    Quest4Score = tally(survey4Response, score);
    Quest5Score = tally(survey5Response, score);
    
    let finalScore = (Quest1Score + Quest2Score + Quest3Score + Quest4Score + Quest5Score);
     
  
     function result (resScore) {
      if(resScore <= 2) {
       return 'Python'
      } else if(resScore >=3 && resScore <= 5) {
       return 'Ruby'
      } else {
       return 'JavaScript'
      }
    }
    quizResult = result(finalScore);
    $('#surveyResult').text(quizResult);
  });
  $('#reloadQuiz').click(function(){
    window.location.reload();
  })
});