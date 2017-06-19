# Color-Changer
Change the colors of your headers, paragraphs and more!

# Install

Clone the repo

git clone https://github.com/Stangelissen/Color-Changer.git

or download and link to the script in your head tag

<script src="changecolor.js"></script>

# Default settings

before using the script it is important to understand the parameters set as deafault. These deafault settings can be changed.

    var defaults = {

  	color: ["red","blue","gray", "orange", "pink"],
	  colorEvent: "click"
  
    };

Color is a array for the colors who are randomly selected. 

ColorEvent is the function you use to activate the function

# Activate 

To activate and use the script, you need to put the folowing code in your html. 

    <script type="text/javascript">

    $(".ChangeColor").ChangeColor({


    });


    </script>

If you want, you can change the deafault settings as follow 

    <script type="text/javascript">

    $(".ChangeColor").ChangeColor({

	color: ["red", "green", "brown"],
	colorEvent: "mouseover"

    });

    </script>



# HTML Structure

The html structure isn't hard. The only thing you need to do is to add the class ChangeCollor of the object as in the example.


    <h1 class="ChangeColor">Click to change color</h1>


# Demo

Click on the following link for the example.

http://framework.stangelissen.nl/










