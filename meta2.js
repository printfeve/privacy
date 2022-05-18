
function tongji(){
    tables=document.getElementsByTagName('table').item(0);
    pp = document.getElementById("result");
    statistics={}
    for (var j=0;j<tables.rows[0].cells.length;j++){
        eval("statistics.cols"+j+"={}");
    }
    //遍历
    for (var i=0;i<tables.rows.length;i++){
       if (i>0){//跳过第一行
         for (var j=0;j<tables.rows[i].cells.length;j++){
            if(j>0){//跳过第一列
                text=tables.rows[i].cells[j].innerText;
                if (text!=null){
                    typeof statistics["cols"+j][text]=="undefined"?statistics["cols"+j][text]=1:statistics["cols"+j][text]++;
                    // eval("typeof statistics.cols"+j+"."+text+"==\"undefined\"?statistics.cols"+j+"."+text+"=1:statistics.cols"+j+"."+text+"++")
                }else{
                    console.log(text);
                }
            }
         }
       }
    }

    // newrow=tables.insertRow(tables.rows.length);
    cnum=0;
    text =""
    for (i in statistics){
        if(i=="cols1"){
            text="";
            //排序整理
            sort=Object.keys(statistics[i]).sort();
            for (j in sort){
              j=sort[j];
              text+=j+"    *    "+statistics[i][j]+"<br>";
            }
            console.log(text);
            // newcol=newrow.insertCell(cnum++);
            // newcol.innerHTML=text;
          }
    }
    pp.innerHTML= text;
}
