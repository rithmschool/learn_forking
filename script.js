// enter an odd number
function createHalfDiamond(n){
    if(!(n%2 == 0)){
        let middle = Math.ceil(n/2);
        let diamond = "";
        for(let i = 1; i <= n; i++){
            let dashes = Math.abs((Math.abs(i-middle)+1)-middle);
            let str = "\n-";
            for(let j = 0; j < dashes; j++){
                str+="-";
            }
            str+"-";
            diamond+=str;
        }
        console.log(diamond);
    } else {
        console.log("Not an odd number");   
    }
}

createHalfDiamond(9);