/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let temp = x;
    let num = 0 ;
    while (temp != 0){
        rem = temp % 10;
        num = num * 10 + rem;
        temp = temp / 10;
    }  
    if (x == num){
        return true;
    }else return false; 
  }
  
  const palin = isPalindrome(121);

  console.log(palin);