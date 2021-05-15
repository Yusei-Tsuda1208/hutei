document.getElementById("hutei").addEventListener("click",function (){
    const a=[],b=[];

    if(document.getElementById("b").value<0){
        b.push(document.getElementById("b").value*-1);
    }else{
        b.push(document.getElementById("b").value);
    }
    a.push(document.getElementById("a").value);

    const r=[],q2=[];
    let q,r2,i=0;

    while(r2!==0){
        q = (a[i]/b[i]);
        q2.push(parseInt(q,10));
        r.push(a[i]%b[i]);
        document.getElementById("ans").value += (a[i]+"="+b[i]+"*"+q2[i]+"+"+r[i]) + "\n";
        a.push(b[i]);
        b.push(r[i]);
        r2=r[i];
        i += 1;
    }

    let i2 = i-1;

    while(i2 !== -1){
        q2[i2] *= -1;
        i2--;
    }

    i -= 1;
    q2[i] = 1;
    
    let z = q2[i-1];//一段目左
    let w = q2[i]+q2[i-1]*q2[i-2];//一段目右
    //q2のマイナス化クリア//
    let y;
    
    while (i !== 2){
        y = z;//y=-3
        z = w;//z=4
        w = y;//w=-3
        w = w+z*q2[i-3];
        i--;
    }

    if(document.getElementById("b").value<0){
        w *=-1;
    }
    document.getElementById("ans").value　+=　("x="+z+","+"y="+w);
});