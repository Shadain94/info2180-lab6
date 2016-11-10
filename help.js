
 window.onload=function() {
    
   
   
   
   var btn= document.getElementById('search');
   
   var httpRequest;
   
   btn.addEventListener('click', function(element) {
    element.preventDefault();
    
    var text= document.getElementById('lookup').value;
    
    console.log(text);
    httpRequest = new XMLHttpRequest();
    
       
    httpRequest.onreadystatechange = processDefinition;
    httpRequest.open('GET','request.php?q=' + text , true);
    httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    httpRequest.send();
    
    
    
    
     function processDefinition() {
       
      if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
            var response = httpRequest.responseText;
            var res= document.getElementById('result');
            res.innerHTML="<h1>RESULT</h1><br>"+response;
        
      } else {
        alert('There was a problem with the request.');
      }
    }
       
   }
       
       
       
   });
   
 }; 
   
   
   
    
    
    
    
