let dropEnd = document.createElement('ul');
        dropEnd.style.backgroundColor = "red";
        dropEnd.style.height = "300px";
        dropEnd.style.margin = "0px";
        dropEnd.style.marginRight = "10px";
        dropEnd.style.padding = "5px";
        dropEnd.style.listStyleType= "none";
        // dropEnd.style.display = "flex";

        dropEnd.className ="droptrue";

        // dropEnd.style. = "red";
        dropEnd.id = "sortable1";
        document.body.appendChild(dropEnd);

        let dropStart = document.createElement('ul');
        dropStart.style.backgroundColor = "blue";
        dropStart.style.height = "300px";
        dropStart.style.margin = "0px";
        dropStart.style.marginRight = "10px";
        dropStart.style.padding = "5px";
        dropStart.style.listStyleType= "none";
        // dropStart.style.display = "flex";
        dropStart.className ="droptrue";
        dropStart.id = "sortable3";

        for(let i = 0; i <10; i ++){

            let item = document.createElement('li');
            item.style.width = "120px";
            // item.style.height = "20px";
            item.style.margin = "5px";
            item.style.padding = "5px";
            item.style.fontSize= "1.2em";
            // item.style.backgroundColor = "white";
            item.style.float = "left";
            item.className ="ui-state-default";
            item.innerHTML = "mook" + i;
            dropStart.appendChild(item);

        }

        document.body.appendChild(dropStart);


        $( function() {
            $( "ul.droptrue" ).sortable({
                items:$(".ui-state-default"),
                connectWith: "ul",
                start: function(event,ui){
                },
                stop: function(event,ui){
                }
            });

            $( "#sortable1, #sortable3" ).disableSelection();
        
    
          } );
    