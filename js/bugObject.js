// Bug properties and method encapsulation
var Bug = {
  x : 0,
  y : 0,
  div: null,
  orientation: 'S', // South, North, East or West
  world: null,
  
  refresh : function() {
  	switch(this.orientation) {
  		case 'S':
  			this.div.css('background-position','0px 0px');
  			break;
  		case 'E':
  			this.div.css('background-position','0px -64px');
  			break;
  		case 'N':
  			this.div.css('background-position','0px -96px');
  			break;
  		case 'W':
  			this.div.css('background-position','0px -32px');
  			break;
  	}  	
  },
  
  forward : function(){
  	switch(this.orientation) {
  		case 'S':
			this.div.animate({ "top": "+=40px" }, "slow" );
			++this.y;
  			break;
  		case 'E':
			this.div.animate({ "left": "+=40px" }, "slow" );
			++this.x;
  			break;
  		case 'N':
			this.div.animate({ "top": "-=40px" }, "slow" );
			--this.y;
  			break;
  		case 'W':
			this.div.animate({ "left": "-=40px" }, "slow" );
			--this.x;
  			break;
  	}  		

    console.log('forward');
  },
  turn : function(dir){
  	if (dir == 'L') {
  		this.turnLeft(dir);
  	} else if (dir == 'R') {
  		this.turnRight(dir);
  	}
  	this.refresh();
  },
  turnLeft : function(dir) {
  	switch(this.orientation) {
  		case 'S':
  			this.orientation = 'E';
  			break;
  		case 'E':
  			this.orientation = 'N';
  			break;
  		case 'N':
  			this.orientation = 'W';
  			break;
  		case 'W':
  			this.orientation = 'S';
  			break;
  	}  		  	
  },
  turnRight : function(dir) {
  	switch(this.orientation) {
  		case 'S':
  			this.orientation = 'W';
  			break;
  		case 'W':
  			this.orientation = 'N';
  			break;
  		case 'N':
  			this.orientation = 'E';
  			break;
  		case 'E':
  			this.orientation = 'S';
  			break;
  	}  		  	
  },
  moveTo : function(x, y) {
		this.div.css('left', 40 * x + 4);
		this.div.css('top', 40 * y + 4 );	
  }
}
