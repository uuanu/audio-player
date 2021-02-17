function on_imgclick()
{
  document.getElementById("content").click();
}

function on_submit()
{
  let list = [];

  let to_play = document.getElementById("content").files[0];
  console.log(to_play);

  
  console.log(list);

  list.push(to_play);
  console.log(list);



}
function loadFile(event) {
  var output = document.getElementById('blah');
  output.src = URL.createObjectURL(event.target.files[0]);

  console.log(event.target.file[0]);

  output.onload = function() {
    URL.revokeObjectURL(output.src) // free memory
  }
};

