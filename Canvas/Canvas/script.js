var myFigure;   //игрок, иконка
var obstacles;  //преграды

function game(){
    myFigure = new figure();
    myFigure.update();
}
function figure(){                                      //иконка
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#0000FF";
    ctx.fillRect(20,20,20,20);

    this.x = 20;        //параметры иконки
    this.y = 20;
    this.width = 20;
    this.height = 20;

    this.update = function(){
        ctx.clearRect(0, 0, 470, 270);  
        make_obstacle();    //создание преград
        ctx.fillRect(this.x, this.y, 20, 20);

        ctx.fillStyle="#d3d3d3";        //конечная позиция
        ctx.fillRect(440, 20, 20, 20);

    for(i = 0; i<obstacles.length; i++){    //конец игры, поражение
        if(myFigure.crashEx(obstacles[i])){
            lose();
            return;
        }
    }
    if((this.x>=440 && this.x<=460) && (this.y>=20 && this.y<=40)){     //конец игры, вин
        alert("ggwp");
        myFigure = new figure();        //рестарт
        myFigure.update();
    }
};

    this.crashEx = function(some_object){       //передвижение
        var left = this.x
        var right = this.x +(this.width);
        var top = this.y;
        var bottom = this.y +(this.height);

        var o_left = some_object.x;
        var o_right = some_object.x +(some_object.width);
        var o_top = some_object.y;
        var o_bottom = some_object.y +(some_object.height);

        var crash = true;
        if((bottom < o_top)||(top > o_bottom)||(right < o_left)||(left > o_right)){     //скрипт поражения
            crash = false;
        }
        return crash;
    }
}

function lose(){            //рестарт игры
    alert("gg");
    myFigure = new figure();
    myFigure.update();
}
function right(){           //движение вправо
    myFigure.x += 10;
    myFigure.update();
}
function left(){            //движение влево
    myFigure.x -= 10;
    myFigure.update();
}
function up(){              //движение вверх
    myFigure.y -= 20;
    myFigure.update();
}
function down(){            //движение вниз
    myFigure.y += 20;
    myFigure.update();
}
function obstacle(x, y, width, height, color){      //преграды
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;

    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);      //для преград
    ctx.fillStyle = "#0000FF";
}
function make_obstacle(){       //преграды
    obstacles = [];
    obstacles.push(new obstacle(60,0,10,220, "#FF00FF"));
    obstacles.push(new obstacle(120,60,10,220, "#00FFFF"));
    obstacles.push(new obstacle(180,0,10,220, "#00FF0F"));
    obstacles.push(new obstacle(300,60,10,220, "#F0000F"));
    obstacles.push(new obstacle(360,0,10,220, "#808000"));
    obstacles.push(new obstacle(420,60,10,220, "#9F3410"));
}
