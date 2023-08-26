function setCookie(cname,cvalue,exdays){
    let d=new Date();
    d.setTime(d.getTime()+(exdays*24*60*60*100))
    let expires="expires="+d.toUTCString();
    document.cookie=(cname+"="+cvalue+";"+expires)
}

let myBrowserCookie=document.cookie;

console.log(document.cookie);

function getCookie(cname){
    let name=cname+"=";
    let ca=myBrowserCookie.split(";");
    for(let i=0; i<ca.length; i++){
        let c=ca[i];
        
        
        while(c.charAt(0)==" "){
            c=c.substring(1);
        }
        if(c.indexOf(name)=="0"){
        return c.substring(name.length,c.length);
        }
        
    }
    return ""
    
}

function checkCookie(cdata){
    let user=getCookie(cdata)
    console.log(user);
    if(user!=""){
        alert("Welcome again "+user);
    }
    else{
        user=prompt("write your name","");
        if(user!=null && user!=""){
            setCookie(cdata,user,1);
        }
    }
}

