const button1=$("#workLink");
var goToUrl=function(url){
    window.location.href=url;
    console.log ("clicked");
}



// $(document).ready(function(){
//     $("#workLink").click(goToUrl("https://uxfol.io/projects/5fa5716cefcfdb0004dc5300"))
//   });
button1.on("click", function(event){event.preventDefault();
    goToUrl("https://uxfol.io/projects/5fa5716cefcfdb0004dc5300")
})
