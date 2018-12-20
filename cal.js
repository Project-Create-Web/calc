function show(x){
    if(x == 's'){
        document.getElementById('display').value='';
    }else{
        document.getElementById('display').value +=x;
    }
}

function answer(){
    let soln = document.getElementById('display').value;
    tolal = eval(soln);
    document.getElementById('display').value = total;
}
