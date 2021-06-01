var sort = 3;
var page = 0;
var cursor = ""
        
function getJSON(a, b) {
    getJSON.callbacks || (getJSON.callbacks = {});
    var c = "abcdefghijklmnopqrstuvwxyz";
    c += c.toUpperCase();
    for (var d = ""; d.length < 9 || getJSON.callbacks[d]; d += c[Math.floor(Math.random() * c.length)]) { }
    getJSON.callbacks[d] = b, a += a.indexOf("?") > -1 ? "&" : "?", a += "callback=getJSON.callbacks." + d;
    var e = document.createElement("script");
    e.src = a, document.head.appendChild(e)
}

function editDiv(){
    console.log(page)
    console.log(cursor)
    document.getElementById("loading").style.display="block";
    getJSON("https://www.khanacademy.org/api/internal/scratchpads/top?casing=camel&sort="+sort+"&page="+page+"&limit=6&format=pretty&topic_id=xffde7c31&cursor="+cursor, function(data){
        cursor = data.cursor
        for(var i = 0; i < data.scratchpads.length; i++){
            var info = data.scratchpads[i]
            var url = info.url
            var thumb = url+"/latest.png"
            var votes = info.sumVotesIncremented
            var spins = info.spinoffCount
            var title = info.title
            programs.innerHTML += '<a href='+url+' target="_blank"><button class="btn btn-outline-light">'+title+'<br>By: '+info.authorNickname+'<br><br><img src='+thumb+' width=150 height=150><br>Votes:'+votes+' Spin-Offs: '+spins+'</button></a> '
            if(i%6 === 5){
                programs.innerHTML += '<br><br>'
            }
        }
        document.getElementById("loading").style.display="none";
    })
}

getJSON("https://www.khanacademy.org/api/internal/scratchpads/top?casing=camel&sort="+sort+"&page="+page+"&limit=24&format=pretty&topic_id=xffde7c31", function(data){
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
        if(i%6 === 5){
            programs.innerHTML += '<br><br>'
        }
    }
})

$(window).scroll(function() {
    console.log('scrolling')
    if($(window).scrollTop() == $(document).height() - $(window).height()) {
        addp()
    }
});

function addp(){ 
    page+=1;
    editDiv() 
}
