function tab(){
    var q,w,e;
    var qq = document.getElementById('rlt');
    qq.innerHTML = ' ';
    q=parseFloat(document.getElementById('h').value);
    if(q>0 && q<999999){
        for(w=1;w<=10;w++){
        var el=q*w;
        var qq=document.getElementById('rlt');
        qq.innerHTML+=`${q} X ${w} = ${el} <br>`;
    }
    }
    else{
        var qq=document.getElementById('rlt');
        qq.innerHTML+=`0-999999`;
    }
    

    document.getElementById('h').value = '';
}

