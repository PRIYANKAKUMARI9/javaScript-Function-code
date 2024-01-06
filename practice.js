function countvowels(str){
    let count=0;
    for(let x of str){
        if(x ==='a' || x ==='e' || x ==='i' || x ==='o' || x ==='i'){
            count++;
        }
    }
    console.log(count);
}

//arrow function used

let  plusvwl=(str)=>{
    let plus=0;
    for(let num in str){
        if(num === a || num === e || num === i || num === o || num === u){
            plus++;
        
        }
    }

    return plus;
};