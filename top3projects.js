var page = 0;
var cursor = ""

var id ='azzuli'

function getJSON(a, b) {
    getJSON.callbacks || (getJSON.callbacks = {});
    var c = "abcdefghijklmnopqrstuvwxyz";
    c += c.toUpperCase();
    for (var d = ""; d.length < 9 || getJSON.callbacks[d]; d += c[Math.floor(Math.random() * c.length)]) { }
    getJSON.callbacks[d] = b, a += a.indexOf("?") > -1 ? "&" : "?", a += "callback=getJSON.callbacks." + d;
    var e = document.createElement("script");
    e.src = a, document.head.appendChild(e)
}

getJSON("https://www.khanacademy.org/api/internal/user/scratchpads?username="+id+"&format=pretty&limit=3&page=0", function(data){
    cursor = data.cursor
    for(var i = 0; i < data.scratchpads.length; i++){
        var info = data.scratchpads[i]
        var url = info.url
        var thumb = url+"/latest.png"
        var votes = info.sumVotesIncremented
        var spins = info.spinoffCount
        var title = info.title
        var author_link = "https://khanacademy.org/profile/"+info.authorKaid
        programs.innerHTML += '<a href='+url+' target="_blank"><button class="btn btn-outline-light">'+title+'<br>By: '+info.authorNickname+'<br><br><img src='+thumb+' width=150 height=150><br>Votes:'+votes+' Spin-Offs: '+spins+'</button></a> '
    }
})
