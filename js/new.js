let output = document.getElementById('output');
let buttons = document.getElementsByClassName('tool--btn');
for (let btn of buttons) {
	btn.addEventListener('click', () => {
		let cmd = btn.dataset['command'];
		if(cmd === 'createlink') {
			let url = prompt("Enter the link here: ", "http:\/\/");
			document.execCommand(cmd, false, url);
		} else {
			document.execCommand(cmd, false, null);
		}
	})
}
function createTable()
{
rn = window.prompt("Input number of rows", 1);
cn = window.prompt("Input number of columns",1);

 for(var r=0;r<parseInt(rn,10);r++)
  {
    var x=document.getElementById('myTable').insertRow(r);
   for(var c=0;c<parseInt(cn,10);c++)
    {
     var y=  x.insertCell(c);
     y.innerHTML="Write here";
    }
   }
}
$(document).ready(function(){
  var resize = new Array('#output');
  resize = resize.join(',');

  //resets the font size when "reset" is clicked
  var resetFont = $(resize).css('font-size');
    $(".reset").click(function(){
      $(resize).css('font-size', resetFont);
    });

  //increases font size when "+" is clicked
  $(".increase").click(function(){
    var originalFontSize = $(resize).css('font-size');
    var originalFontNumber = parseFloat(originalFontSize, 10);
    var newFontSize = originalFontNumber*1.2;
    $(resize).css('font-size', newFontSize);
    return false;
  });

  //decrease font size when "-" is clicked

  $(".decrease").click(function(){
    var originalFontSize = $(resize).css('font-size');
    var originalFontNumber = parseFloat(originalFontSize, 10);
    var newFontSize = originalFontNumber*0.8;
    $(resize).css('font-size', newFontSize);
    return false;
  });

});

function save(){
  var note = document.getElementById('output').innerHTML;
  note = note.replace(/(<div><br>)*<\/div>/g, '\n');
  note = note.replace(/<div>/g, '');
  /* replaces some html entities */
  note = note.replace(/&nbsp;/g, ' ');
  note = note.replace(/&amp;/g, '&');
  note = note.replace(/&lt;/g, '<');
  note = note.replace(/&gt;/g, '>');
  document.getElementById('saveButton').setAttribute(
    'href',
    'data:Content-type: text/plain, ' + escape(note)
  );
}
