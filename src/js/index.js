/**
 * Created by yir on 2017/08/12.
 */

//onLoadEvent
window.onload = function () {
    var link = document.querySelectorAll(".link");
    for (var i=0;  i<link.length; i++) {
        onMouseSoundPlay(link[i]);
    }
};
//elemにホバー時効果音のイベントを追加
function onMouseSoundPlay(elem) {
    var audio = document.querySelector("#hovSound");
    elem.onmouseover = function () {
        audio.currentTime = 0;
        audio.play();
    }
}