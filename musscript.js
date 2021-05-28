var context = new AudioContext();
var source = null;
var audioBuffer = null;

var base64ToBuffer = function (buffer) {
    var binary = window.atob(buffer);
    var buffer = new ArrayBuffer(binary.length);
    var bytes = new Uint8Array(buffer);
    for (var i = 0; i < buffer.byteLength; i++) {
        bytes[i] = binary.charCodeAt(i) & 0xFF;
    }
    return buffer;
};
function stopSound() {
    if (source) {
        source.stop(0);
    }
}
function playSound() {
    // source is global so we can call .stop() later.
    source = context.createBufferSource();
    source.buffer = audioBuffer;
    source.loop = false;
    source.connect(context.destination);
    source.start(0); // Play immediately.
    
}
function closeP1(){
    document.getElementById("pop1").style.display="none"; 
}
function initSound(base64String) {
    var audioFromString = base64ToBuffer(base64String);
    context.decodeAudioData(audioFromString, function (buffer) {
        // audioBuffer is global to reuse the decoded audio later.
        audioBuffer = buffer;
    }, function (e) {
        console.log('Error decoding file', e);
    });
}


playSound(); // Repeat as many times as desired