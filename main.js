function setCookie(cname,cvalue,cdays){
    let d=new Date();
    d.setTime(d.getTime()+(cdays*24*60*60*100));
    let expires=d.toUTCString();
    document.cookie=cname+"="+cvalue+";expires="+expires+";path=/"
}

// document.cookie='name=;username=;expires=path=/'
let myBrowserCookie=document.cookie;
// console.log(myBrowserCookie);
function getCookie(cname){
    let name=cname+"=";
    if(myBrowserCookie!=""){
    let ca=myBrowserCookie.split(";");
    
    for(let i=0;i<ca.length;i++){
        let sc=ca[i];
        while(sc.charAt(0)==" "){
            sc=sc.substring(1);
        }
        if(sc.indexOf(name)==0){
          return  sc=sc.substring(name.length,sc.length);
        }
    }
}
    return '';
}

function checkCookie(cvalue){
    let getMyCookie=getCookie(cvalue);
    if(getMyCookie!=""){
        alert("Hey "+getMyCookie)
    }else if(getMyCookie=="" || getMyCookie==null){
       let ccname= prompt("Write your cookie name")
       
       if(ccname!="" && ccname!=null){
        let ccvalue=prompt("Write your cookie value")
        if(ccvalue!="" && ccvalue!=null){
           
            setCookie(ccname,ccvalue,1)
        }
       }else{
        alert("Cookie name must be needed");
       }
        
    }   
}
