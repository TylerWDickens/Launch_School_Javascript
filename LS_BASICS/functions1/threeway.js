function compareThree(str1, str2) {

  if(str1.length === str2.length) {
    return 0;
  }else if(str1.length < str2.length) {
    return -1;
  }else {
    return 1;
  }

}



compareByLength('patience', 'perseverance'); // -1
compareByLength('strength', 'dignity');      //  1
compareByLength('humor', 'grace');           //  0