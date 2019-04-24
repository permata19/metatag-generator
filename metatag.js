function metatag_maker()
{
var des=document.getElementById("description").value;
var keywo=document.getElementById("keywords").value;
var auth=document.getElementById("author").value;
var generat=document.getElementById("generator").value;
var copyrigh=document.getElementById("copyright").value;
var robott=document.frm.robott[document.frm.robott.selectedIndex].value;
var charsett=document.frm.charsett[document.frm.charsett.selectedIndex].value;
var cach=document.frm.cach[document.frm.cach.selectedIndex].value;
var lang=document.frm.lang[document.frm.lang.selectedIndex].value;
var url=document.getElementById("urll").value;
var sec=document.getElementById("sec").value;
var expir=document.getElementById("expires").value;
var meta='<meta name="description" content="'+des+'">\n';
meta+='<meta name="keywords" content="'+keywo+'">\n';
if(auth!="")
meta+='<meta name="author" content="'+auth+'">\n';
if(generat!="")
meta+='<meta name="generator" content="'+generat+'">\n';
if(copyrigh!="")
meta+='<meta name="copyright" content="'+copyrigh+'">\n';
if(robott!="")
meta+='<meta name="robots" content="'+robott+'">\n';
if(charsett!="")
meta+='<meta http-equiv="content-type" content="text/html;charset='+charsett+'">\n';
if(expir!="")
meta+='<meta http-equiv="expires" content="'+expir+'">\n';
if(cach!="")
meta+='<meta http-equiv="cache-control" content="'+cach+'">\n';
if(lang!="")
meta+='<meta http-equiv="content-language" content="'+lang+'">\n';
if(url!="" && sec!="")
meta+='<meta http-equiv="refresh" content="'+sec+';'+url+'">\n';
document.getElementById("metatag").value=meta;}
function clear_all()
{
document.getElementById("description").value="";
document.getElementById("keywords").value="";
document.getElementById("author").value="";
document.getElementById("generator").value="";
document.getElementById("copyright").value="";
document.getElementById("urll").value="";
document.getElementById("sec").value="";
document.getElementById("expires").value="";
document.getElementById("metatag").value="";
document.getElementById("description").focus();
}
function ctck()
{
var sds = document.getElementById("dum");
if(sds == null){
alert("You are using a free package.\n You are not allowed to remove the tag.\n");
}
var sdss = document.getElementById("dumdiv");
if(sdss == null){
alert("You are using a free package.\n You are not allowed to remove the tag.\n");
}
}
document.onload ="ctck()";
