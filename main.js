$(document).ready(function() {
    const url =
      "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?&key=";
  
    let randomNum = Math.floor(Math.random() * 500);
    let randomQ = url + randomNum;
  
    $("#new-quote").on("click", function() {
      $.getJSON(randomQ, function(json) {
        $("#text").html(JSON.stringify(json.quoteText));
  
        let newQuote = json.quoteText;
        let author = json.quoteAuthor;
        if (author) {
          author.replace(/""/gi, "");
        } else return "Unknown";
  
        $("#author").html("-" + " " + author);
      });
    });
  
    let colours = ["#eee8aa", "#a7c3c1", "#b8a7b2", "#ca8ba2", "#db7093"];
    
    $("button").click(function() {
      let colourGen = Math.floor(Math.random() * colours.length);
      $("#main").css("background-color", colours[colourGen]);
    });
    
    
    const tweetUrl = "https://twitter.com/intent/tweet?text=";
    let replaceSpaces = newQuote.replace(/\s/gi, "%20");
    let newUrl = tweetUrl + replaceSpaces;
    
      $("#tweet-quote").attr("href", newUrl);
  });
  
  
  