var xspeed = 16;
var x = 80;
var y =80;
var link;

function setup() {
    createCanvas(displayWidth,displayHeight);
    frameRate(8);
    
    //create link function
   link = createA("https://akanksha-02.github.io/pacman.github.io/", 
                       "click", "_blank");

   // Posotion the anchor objects 
   link.position((displayWidth/2)+90, (displayHeight/2)+50); 
   
   // style link
   link.style('font-size','30px');
   link.style('color','orange');
   }

   function draw() {
      background(0);
       
       stroke("yellow");
       strokeWeight(5);
       fill("orange");
      // To open and close mouth
       if(close==0)
       {
        ellipse(x,y,80,80);
        ellipse(displayWidth-x,displayHeight-y,80,80);
        close=1;
       }
      else if(close!=0)
       {
        arc(x,y,80,80,radians(45),radians(360-45));
        arc(displayWidth-x,displayHeight-y,80,80,radians(225),radians(135)); 
       
       //To move the ball
        x = x + xspeed;
        if(x>displayWidth-40)
        {
            x=-xspeed;
        }
        close=0;
        }
        //button 
        textSize(36);
        text('... PACMAN ...',displayWidth/2,displayHeight/2);
        // button = createButton('CLICK');
        // // button.position((displayWidth/2)+55, (displayHeight/2)+50);
        // button.mousePressed(onclick);

    } 
        
        // function onclick(){
            // link = createA("https://www.geeksforgeeks.org/", 
                    //    "Go to GeeksforGeeks", "_blank");
        // }

        

       /*
         
       if(open==0)
       {
           ellipse(width-x,height-y,80,80);
           open=1;
       }
       else if(open!=0)
       {
           arc(width-x,height-y,80,80,radians(225),radians(135)); 
           x=x+xspeed;
           if(x>width-40)
          {
            xspeed = -xspeed;
          }
          open=0;
       } 
        */ 
       
    /* var xspeed = 16;
       var x = 80;
       var y =80;
       var link;
       function setup() {
           createCanvas(1500, 600);
           //createCanvas= fullscreen(); 
           //let fs = fullscreen();
          frameRate(8);
          }
       
          function draw() {
             background(0);
              
              stroke("yellow");
              strokeWeight(5);
              fill("orange");
             // To open and close mouth
              if(close==0)
              {
               ellipse(x,y,80,80);
               ellipse(width-x,height-y,80,80);
               close=1;
              }
             else if(close!=0)
              {
               arc(x,y,80,80,radians(45),radians(360-45));
               arc(width-x,height-y,80,80,radians(225),radians(135)); 
              
              //To move the ball
               x = x + xspeed;
               if(x>width-40)
               {
                   x=-xspeed;
               }
               close=0;
               }
               textSize(36);
               text('... PACMAN ...',600,280);
               button = createButton('CLICK');
               button.position(655, 320);
               button.mousePressed(onclick);
               
               // function onclick(){
                   // link = createA("https://www.geeksforgeeks.org/", 
                           //    "Go to GeeksforGeeks", "_blank");
               // }
       
               
       
               if(open==0)
              {
                  ellipse(width-x,height-y,80,80);
                  open=1;
              }
              else if(open!=0)
              {
                  arc(width-x,height-y,80,80,radians(225),radians(135)); 
                  x=x+xspeed;
                  if(x>width-40)
                 {
                   xspeed = -xspeed;
                 }
                 open=0;
              }  */ 
             
          
   