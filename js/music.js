
function playAudio() {
  file.play();
}

function pauseAudio() {
  x.pause();
}

function on_imgclick()
{
  document.getElementById("content").click();
}

function on_submit()
{
  let list = [];

  let to_play = document.getElementById("content").value;

  list[0] = document.getElementById("myaudio");

  list.push(to_play);

  //let ss = document.getElementById("child-player").appendChild("audio");
  //ss.audio.src = to_play ;

  document.getElementById("player").src = to_play;

  console.log(to_play);



}