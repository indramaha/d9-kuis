function fizzbuzz(param){
    let result

    if((param%3==0) && (param%5==0)){
        result = "fizzbuzz"
    } else if(param%5==0){
        result = "buzz"
    } else if(param%3==0){
        result = "fizz"
    } else{
        result = "kamu nenyeee??"
    }

    return result
}

const b = fizzbuzz(2)

console.log(b)


//anagram, palindrome, binary tree, valid, sorting