function tab(){
    var q,w,e;
    var qq = document.getElementById('rlt');
    qq.innerHTML = ' ';
    q=parseFloat(document.getElementById('h').value);
    for(w=1;w<=10;w++)
    {
        var el=q*w;
        var qq=document.getElementById('rlt');
        qq.innerHTML+=`${q} X ${w} = ${el} <br>`;
    }
    document.getElementById('h').value = '';
}

