function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("img", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
      var count=0;
      var data = ev.dataTransfer.getData("img");
      //ev.target.appendChild(document.getElementById(data));
      
       ev.target.appendChild(document.getElementById(data));
       var len = document.getElementById("red").getElementsByTagName("img").length;
       document.getElementById("result").innerHTML = "red count :"+ len;
      
       var len1 = document.getElementById("green").getElementsByTagName("img").length;
       document.getElementById("result1").innerHTML = "green count :"+ len1;
      
       var len2 = document.getElementById("blue").getElementsByTagName("img").length;
       document.getElementById("result2").innerHTML = "blue count :"+ len2;
      }
   


