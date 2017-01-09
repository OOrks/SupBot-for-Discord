module.exports = {
  convertTextToEmoji: function(txt)
  {
    var emojitxt = "";
    for (var x = 0; x < txt.length; x++)
    {
      if (txt.charCodeAt(x) >= 65 && txt.charCodeAt(x) <= 90) {
        emojitxt += ":regional_indicator_"+ txt.charAt(x).toLowerCase() +": ";
      }

      else if (txt.charCodeAt(x) >= 97 && txt.charCodeAt(x) <= 122) {
        emojitxt += ":regional_indicator_"+ txt.charAt(x) +": ";
      }

      else if (txt.charCodeAt(x) >= 48 && txt.charCodeAt(x) <= 57) {
        var value;

        switch (txt.charAt(x)) {
          case "1":
            value = ":one: "
            break;
          case "2":
            value = ":two: "
            break;
          case "3":
            value = ":three: "
            break;
          case "4":
            value = ":four: "
            break;
          case "5":
            value = ":five: "
            break;
          case "6":
            value = ":six: "
            break;
          case "7":
            value = ":seven: "
            break;
          case "8":
            value = ":eight: "
            break;
          case "9":
            value = ":nine: "
            break;
          case "0":
            value = ":zero: "
            break;
        }

        emojitxt += value;
      }

      else if (txt.charCodeAt(x) = 32) {
        emojitxt +=  "                   ";
      }
    }

    return emojitxt;
  }

};


// Fonction pour convertir du texte en emoji pour discord. On convertis en texte qui est ensuite lu par discord, et pas directement les characteres unicodes
function convertTextToEmoji(txt)
{
  var emojitxt = "";
  for (var x = 0; x < txt.length; x++)
  {
    if (txt.charCodeAt(x) > 65 && txt.charCodeAt(x) < 90) {
      emojitxt += ":regional_indicator_"+ txt.charAt(x) +": ";
    }

    else if (txt.charCodeAt(x) > 97 && txt.charCodeAt(x) < 122) {
      emojitxt += ":regional_indicator_"+ txt.charAt(x) +": ";
    }

    else if (txt.charCodeAt(x) > 48 && txt.charCodeAt(x) < 57) {
      var value;

      switch (txt.charAt(x)) {
        case "1":
          value = ":one: "
          break;
        case "2":
          value = ":two: "
          break;
        case "3":
          value = ":three: "
          break;
        case "4":
          value = ":four: "
          break;
        case "5":
          value = ":five: "
          break;
        case "6":
          value = ":six: "
          break;
        case "7":
          value = ":seven: "
          break;
        case "8":
          value = ":eight: "
          break;
        case "9":
          value = ":nine: "
          break;
        case "0":
          value = ":zero: "
          break;
      }

      emojitxt += value;
    }

    else if (txt.charCodeAt(x) = 32) {
      emojitxt +=  "   ";
    }
  }

  return emojitxt;
}


console.log(convertTextToEmoji("tEst6"));
