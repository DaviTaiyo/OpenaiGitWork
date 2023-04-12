  const headers= {
    'Authorization': 'Bearer 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',
    'Content-Type': 'application/json'
  };

$(document).ready(function() {
    $('#generate-form').on('submit', function(event) {
      event.preventDefault();
  
      var gameName = $('#game-name').val();
  
      var data = {
        model: 'text-davinci-003',
        prompt: 'Quando lançou o ' + gameName,
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0
      };
  
      $.ajax({
        type: "POST",
        url: "https://api.openai.com/v1/completions",
        headers: headers,
        data: JSON.stringify(data),
        success: function(response) {
          $('#generated-text').html(response.choices[0].text);
        }
      });
    });
  });
  