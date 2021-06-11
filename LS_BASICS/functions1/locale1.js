function extractLanguage(lang){

  let code = lang.split("_");

  console.log(code[0]);
  return code[0];

}




extractLanguage('en_US.UTF-8');  // 'en'
extractLanguage('en_GB.UTF-8');  // 'en'
extractLanguage('ko_KR.UTF-16'); // 'ko'