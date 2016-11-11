
 window.onload=function() {
    
   
   
   
   var btn= document.getElementById('search');
   
   var httpRequest;
   
   btn.addEventListener('click', function(element) {
    element.preventDefault();
    
    var text= document.getElementById('lookup').value;
    
    
    httpRequest = new XMLHttpRequest();
    
       
    httpRequest.onreadystatechange = processDefinition;
    httpRequest.open('GET','request.php?q=&all=true', true);
    httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    httpRequest.send();
    
    
    
    
     function processDefinition() {
       
      if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
            var response = httpRequest.responseXML;
            var res= document.getElementById('result');
            var the_collection= response.getElementsByTagName("definition");
           
            
            var here = document.createElement('div');
            res.appendChild(here);
            
           
            
            for (var i=0; i<the_collection.length; i++ ) {
              var names=the_collection[i].getAttribute("name");
               var h1=document.createElement("H1");
               var help=document.createTextNode(names);
                var p= document.createElement("P");
                var meaning = document.createTextNode(the_collection[i].childNodes[0].nodeValue);
                h1.appendChild(help);
                p.appendChild(meaning);
                 if (the_collection[i].getAttribute("name")==text) {
                  
                    here.appendChild(h1);
                    here.appendChild(p);
                 
                 }
            }
            
        
      } else {
        alert('There was a problem with the request.');
      }
    }
       
   }
       
       
       
   });
   
   
   var total=document.getElementById('alldef');
   
   
   
   total.addEventListener('click', function (element) {
    
    
    element.preventDefault();
    var httpRequest_2;
    
    httpRequest_2 = new XMLHttpRequest();
    
    
    
    httpRequest_2.onreadystatechange = getXML;
    httpRequest_2.open('GET','request.php?q=&all=true');
    httpRequest_2.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    httpRequest_2.send();
    
    
    function getXML() {
      
      if (httpRequest_2.readyState === XMLHttpRequest.DONE) {
              if (httpRequest_2.status === 200) {
                // Note that we use responseXML instead of responseText
                // when we are expecting XML data.
                var response = httpRequest_2.responseXML;
                var results = document.getElementById('result');
                var definitions = response.getElementsByTagName('definition');
                

                var list = document.createElement('ol');
                results.appendChild(list);
                for (var x = 0; x < definitions.length; x++) {
                    var each_def = document.createElement('li');
                    var names=definitions[x].getAttribute("name");
                    var authors=definitions[x].getAttribute("author");
                    
                    var h1=document.createElement("H1");
                    var help=document.createTextNode(names);
                    var p= document.createElement("P");
                    var meaning = document.createTextNode(definitions[x].childNodes[0].nodeValue);
                    var bottom=document.createElement("SUB");
                    var help_2=document.createTextNode(authors);
                    
                    
                    p.appendChild(meaning);
                    
                    h1.appendChild(help);
                    
                    bottom.appendChild(help_2);
                    
                    each_def.appendChild(h1);
                    each_def.appendChild(p);
                    each_def.appendChild(bottom);
                    
                    //each_def.appendChild(meaning);
                    list.appendChild(each_def);
                }
              } else {
                alert('There was a problem with the request.');
              }
            }
     
     
    }
    
    
   });
   
   
   
   
 }; 
   
   
   
    
    
    
    
