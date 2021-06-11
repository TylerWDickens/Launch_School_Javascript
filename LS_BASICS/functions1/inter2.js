function extractRegion(locale) {
  return locale.split('.')[0]
               .split('_')[1];
}

function extractLanguage(lang){
  let code = lang.split("_");
  return code[0];
}

function localGreet(locale) {

  let lang = extractLanguage(locale);
  let region = extractRegion(locale);

  switch(lang) {

    case "en":
      if(region === "US"){
        console.log("Howdy!");
      }else if(region === "GB") {
        console.log("Hello!");
      }else if(region === "AUS"){
        console.log("Hey!");
      }else {
        console.log("Hi!");
      }
      break;
    case "fr":
      console.log("Salut!");
      break;
    case "pt":
      console.log("Ola!");
      break;
    case "de":
      console.log("Hallo!");
      break;
    case "sv":
      console.log("Hej!");
      break;
    case "af":
      console.log("Haai!");
      break;
    default:
      console.log("Unknown language...Hi!")
      break;
  }
}

localGreet('en_US.UTF-8'); // 'Howdy!'
localGreet('en_GB.UTF-8'); // 'Hello!'
localGreet('en_AU.UTF-8'); // 'Hey!'

localGreet('fr_FR.UTF-8'); // 'Salut!'
