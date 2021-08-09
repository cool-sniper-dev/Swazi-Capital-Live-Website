function readmoreOne(){
    var dots = document.getElementById("dots")
    var moreText = document.getElementById("more")
    var btn = document.getElementById("btn")
  
    if(dots.style.display === "none"){
      dots.style.display = "inline";
      btn.innerHTML = "Read More";
      moreText.style.display = 'none';
    }else{
      dots.style.display = 'none';
      btn.innerHTML = "Read Less";
      moreText.style.display = 'inline';
    }
  }
  function readmoreTwo(){
    var dots = document.getElementById("fullstop")
    var moreText = document.getElementById("moretext")
    var btn = document.getElementById("btn2")
  
    if(dots.style.display === "none"){
      dots.style.display = "inline";
      btn.innerHTML = "Read More";
      moreText.style.display = 'none';
    }else{
      dots.style.display = 'none';
      btn.innerHTML = "Read Less";
      moreText.style.display = 'inline';
    }
  }
  function readmoreThree(){
    var dots = document.getElementById("dotdot")
    var moreText = document.getElementById("moreContent")
    var btn = document.getElementById("content")
  
    if(dots.style.display === "none"){
      dots.style.display = "inline";
      btn.innerHTML = "Read More";
      moreText.style.display = 'none';
    }else{
      dots.style.display = 'none';
      btn.innerHTML = "Read Less";
      moreText.style.display = 'inline';
    }
  }