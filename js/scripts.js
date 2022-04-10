$(document).ready(function(){

  $('#submit').submit(function(event){
    event.preventDefault();

    const survey1Response = $("input:radio[name=survey1]:checked").val();
    const survey2Response = $("input:radio[name=survey2]:checked").val();
    const survey3Response = $("input:radio[name=survey3]:checked").val();
    const survey4Response = $("input:radio[name=survey4]:checked").val();
    const survey5Response = $("input:radio[name=survey5]:checked").val();
  });
});