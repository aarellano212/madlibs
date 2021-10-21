var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/story', function (req, res) {
  let body= req.body;
  let newStory = getStory(body);
  res.render('story', {
    newStory: newStory
  });
})

module.exports = router;

function getStory(formData) {
  if(formData.storyChoice === "1") {
    return generateStory1(formData);
  } else if (formData.storyChoice === "2") {
    return generateStory2(formData);
  } else if (formData.storyChoice === "3") {
    return generateStory3(formData);
  } else {
    return "invalid";
  }
}

function  generateStory1(formData) {
  return `Day And Night Everything is The Same Time. ${formData.noun1} I take every moment special till the day i die. ${formData.adjective1} I dont fear things if it wasnt for my mom. ${formData.verb1} The dog ate a mice: i seen it with my own eyes. ${formData.adjective1} It disgusted me because i did not expect that.${formData.verb1}!`
}

function  generateStory2(formData) {
  return `Here i go to my favorite place. ${formData.noun1}  Where everything is so calm and fun to do my dance. ${formData.adjective1} The food is so good where i cant starve myself. ${formData.verb1} I take hanna on a date.${formData.noun1} She enjoys dinner showing her fullness of joy. ${formData.adjective1} !`
}

function  generateStory3(formData) {
  return `I was delighted at the news of her success. ${formData.noun1}. Lisa is wearing a sleeveless shirt today. This soup is not edible. ${formData.adjective1} She accepted the job offer. ${formData.verb1} People lost faith in banks. ${formData.noun1} This shop is much nicer.${formData.adjective1} !`
}


