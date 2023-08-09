//---------------------------------------------------菜单部分界面------------------------------------------------------------


var creat_chessboard = function () {
    var trElements = document.querySelectorAll('table tr')
    for (var i = 0; i < trElements.length; i++) {
        var tdElements = trElements[i].getElementsByTagName('td');
        for (var j = 0; j < tdElements.length; j++) {
            tdElements[j].id = 0;
            var tdElement = tdElements[j];
            tdElement.dataset.row = i;
            tdElement.dataset.col = j;
            tdElement.style.background = '';
            tdElement.style.borderRadius = '';
            tdElement.style.opacity = '';
            tdElement.style.backgroundImage = 'url("")'; // 替换为你的背景图片路径
            if ((i === 5 && j === 5) || (i === 6 && j === 6)) {
                tdElement.id = 'A';
                tdElement.style.backgroundImage = 'url("../images/black2.png")'; // 替换为你的背景图片路径
            }
            if ((i === 5 && j === 6) || (i === 6 && j === 5)) {
                tdElement.id = 'B';
                tdElement.style.backgroundImage = 'url("../images/white2.png")'; // 替换为你的背景图片路径
            }
        }
    }
    board_imit = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 'A', 'B', 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 'B', 'A', 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];
}


function init_gamestate() {
    gamestate.board = {
        0: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        2: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        3: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        4: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        5: [0, 0, 0, 0, 0, 'A', 'B', 0, 0, 0, 0, 0],
        6: [0, 0, 0, 0, 0, 'B', 'A', 0, 0, 0, 0, 0],
        7: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        8: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        9: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        10: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        11: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    };
    gamestate.ai_score = 0;
    gamestate.player_score = 0;
    data_pannel_A[0].innerHTML = '玩家分数:';
    data_pannel_A[1].innerHTML = '状态:';
    data_pannel_A[2].innerHTML = '时间:';
    data_pannel_B[0].innerHTML = '电脑分数:';
    data_pannel_B[1].innerHTML = '状态:';
    data_pannel_B[2].innerHTML = '时间:';
    clearInterval(timer_A);
    clearInterval(timer_B);
    remainingTime = 60000;
}



var menu = function () {
    var menuElement = document.getElementById('second_layer');
    var firstmenu = document.getElementById('menu');
    menuElement.style.display = 'block';
    firstmenu.style.display = 'block';
}

function startgame() {
    alert('游戏已经开始');
    menu();
    var choose_option = document.getElementById('menu2_close_button');
    var options = document.querySelectorAll('input[name="chess"]');
    choose_option.addEventListener('click', function () {
        creat_chessboard();
        init_gamestate();
        var selectedoption = Array.from(options).find(Option => Option.checked);
        if (selectedoption) {
            var selectedvalue = selectedoption.value;
            switch (selectedvalue) {
                case 'black':
                    black_fuction();
                    break;
                case 'white':
                    white_function();
                    break;
                default:
                    alert('未选择任何选项');
                    break;
            }
        }
        else {
            alert('未选择任何选项');
        }
    });
}

function menu_close() {
    var firstmenu = document.getElementById('menu');
    firstmenu.style.display = 'none';
    var sceondmenu = document.getElementById('menu2');
    sceondmenu.style.display = 'block';
}

function menu2_close() {
    var sceondmenu = document.getElementById('menu2');
    var second_layer = document.getElementById('second_layer');
    sceondmenu.style.display = 'none';
    second_layer.style.display = 'none';
    var menu2_close_button = document.getElementById('button');
    button.innerHTML = '重新开始';
}

var player_chess = '#';
var ai_chess = '#';

var current_role = 'O';

var player = 'A';
var ai = 'B';

var step = [
    [0, 1], [0, -1], [1, 0], [-1, 0], [1, 1], [-1, -1], [1, -1], [-1, 1]
]

function black_fuction() {
    player_chess = '../images/black2.png';
    ai_chess = '../images/white2.png';
    current_role = 'A';
    game(current_role)
}

function white_function() {
    player_chess = '../images/white2.png';
    ai_chess = '../images/black2.png';
    current_role = 'B';
    game(current_role);
}

//-------------------------------------------------------以下是游戏部分代码---------------------------------------------------------------------------

//-----------------------------------------------------------全局变量定义------------------------------------

var value_mp = [
    [100, 1, 15, 6, 6, 6, 6, 6, 6, 15, 1, 100],
    [1, 1, 10, 5, 5, 5, 5, 5, 5, 10, 1, 1],
    [15, 10, 15, 4, 4, 4, 4, 4, 4, 15, 10, 15],
    [6, 5, 5, 4, 6, 6, 6, 6, 5, 5, 5, 6],
    [6, 5, 5, 6, 6, 6, 6, 6, 6, 5, 5, 6],
    [6, 5, 5, 6, 6, 0, 0, 6, 6, 5, 5, 6],
    [6, 5, 5, 6, 6, 0, 0, 6, 6, 5, 5, 6],
    [6, 5, 5, 6, 6, 6, 6, 6, 6, 5, 5, 6],
    [6, 5, 5, 5, 6, 6, 6, 6, 5, 5, 5, 6],
    [15, 10, 15, 5, 5, 5, 5, 5, 5, 15, 10, 15],
    [1, 1, 10, 5, 5, 5, 5, 5, 5, 10, 1, 1],
    [100, 1, 15, 6, 6, 6, 6, 6, 6, 15, 1, 100]
]


var gamestate = {
    board: {
        0: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        2: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        3: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        4: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        5: [0, 0, 0, 0, 0, 'A', 'B', 0, 0, 0, 0, 0],
        6: [0, 0, 0, 0, 0, 'B', 'A', 0, 0, 0, 0, 0],
        7: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        8: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        9: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        10: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        11: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    },
    ai_score: 0,
    player_score: 0,
}


var board_imit = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 'A', 'B', 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 'B', 'A', 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]

//-----------------------------------------------------------------------------------------------------


//-------------------------------------------------ai部分逻辑代码-----------------------------------------
function min(a, b) {
    return a < b ? a : b;
}

function max(a, b) {
    return a > b ? a : b;
}
//define A is player;B is ai



function copy(arr, arr_imit) {
    for (var i = 0; i < 12; i++) {
        for (var j = 0; j < 12; j++) {
            arr_imit[i][j] = arr[i][j];
        }
    }
}

function is_valid(x, y, current_role) {
    if (x < 0 || x > 12 || x < 0 || y > 12) {
        return false;
    }
    if (board_imit[x][y] == 'A' || board_imit[x][y] == 'B') {
        return false;
    }
    for (var dir = 0; dir < 8; dir++) {
        var nx = x + step[dir][0];
        var ny = y + step[dir][1];
        if (nx < 0 || nx >= 12 || ny < 0 || ny >= 12) {
            continue;
        }
        if (board_imit[nx][ny] != String.fromCharCode(player.charCodeAt(0) + ai.charCodeAt(0) - current_role.charCodeAt(0))) {
            continue;
        }
        while (true) {
            nx += step[dir][0];
            ny += step[dir][1];
            if (nx < 0 || nx >= 12 || ny < 0 || ny >= 12 || board_imit[nx][ny] == 0) {
                break;
            }
            if (board_imit[nx][ny] == current_role) {
                return true;
            }
        }
    }
    return false;
}

function get_step(current_role) {
    var ok_points = [];
    for (var i = 0; i < 12; i++) {
        for (var j = 0; j < 12; j++) {
            if (is_valid(i, j, current_role)) {
                var point = {
                    x: i,
                    y: j
                }
                ok_points.push(point);
            }
        }
    }
    return ok_points;
}

function move(x, y, current_role, org_mp) {
    for (var i = 0; i < 12; i++) {
        for (var j = 0; j < 12; j++) {
            org_mp[i][j] = board_imit[i][j];
        }
    }
    for (var dir = 0; dir < 8; dir++) {
        var nx = x + step[dir][0];
        var ny = y + step[dir][1];
        if ((0 <= nx && nx < 12 && 0 <= ny && ny < 12) && board_imit[nx][ny] == String.fromCharCode(player.charCodeAt(0) + ai.charCodeAt(0) - current_role.charCodeAt(0))) {
            while ((0 <= nx && nx < 12 && 0 <= ny && ny < 12) && board_imit[nx][ny] == String.fromCharCode(player.charCodeAt(0) + ai.charCodeAt(0) - current_role.charCodeAt(0))) {
                nx += step[dir][0];
                ny += step[dir][1];
            }
            if ((0 <= nx && nx < 12 && 0 <= ny && ny < 12) && board_imit[nx][ny] == current_role) {
                while (nx != x || ny != y) {
                    nx -= step[dir][0];
                    ny -= step[dir][1];
                    board_imit[nx][ny] = current_role;
                }
            }
        }
    }
}

function change_chess(x, y, current_role) {
    for (var dir = 0; dir < 8; dir++) {
        var nx = x + step[dir][0];
        var ny = y + step[dir][1];
        if ((0 <= nx && nx < 12 && 0 <= ny && ny < 12) && gamestate.board[nx][ny] == String.fromCharCode(player.charCodeAt(0) + ai.charCodeAt(0) - current_role.charCodeAt(0))) {
            while ((0 <= nx && nx < 12 && 0 <= ny && ny < 12) && gamestate.board[nx][ny] == String.fromCharCode(player.charCodeAt(0) + ai.charCodeAt(0) - current_role.charCodeAt(0))) {
                nx += step[dir][0];
                ny += step[dir][1];
            }
            if ((0 <= nx && nx < 12 && 0 <= ny && ny < 12) && gamestate.board[nx][ny] == current_role) {
                while (nx != x || ny != y) {
                    nx -= step[dir][0];
                    ny -= step[dir][1];
                    gamestate.board[nx][ny] = current_role;
                    if (current_role == 'A') {
                        var tdElement = document.querySelector('td[data-row="' + nx + '"][data-col="' + ny + '"]');
                        tdElement.style.backgroundImage = 'url("' + player_chess + '")';
                    }
                    if (current_role == 'B') {
                        var tdElement = document.querySelector('td[data-row="' + nx + '"][data-col="' + ny + '"]');
                        tdElement.style.backgroundImage = 'url("' + ai_chess + '")';
                    }
                }
            }
        }
    }
}


function back(org_mp) {
    for (var i = 0; i < 12; i++) {
        for (var j = 0; j < 12; j++) {
            board_imit[i][j] = org_mp[i][j];
        }
    }
}

function valuation() {
    var player_score = 0;
    var ai_score = 0;
    for (var i = 0; i < 12; i++) {
        for (var j = 0; j < 12; j++) {
            if (1 <= value_mp[i][j] && value_mp[i][j] <= 9) {
                if (board_imit[i][j] == 'A') {
                    player_score += value_mp[i][j];
                }
                else if (board_imit[i][j] == 'B') {
                    ai_score += value_mp[i][j];
                }
            }
        }
    }
    return player_score - ai_score;
}

function alpha_beta(d, alpha, beta) {
    if (d == 3) {
        return valuation();
    }
    if (d % 2 == 0) {
        var ok_points = get_step('B');
        if (ok_points.length == 0) {
            return valuation();
        }
        for (var i = 0; i < ok_points.length; i++) {
            var org_mp = [[], [], [], [], [], [], [], [], [], [], [], []];
            move(ok_points[i].x, ok_points[i].y, 'B', org_mp);
            beta = min(beta, alpha_beta(d + 1, alpha, beta));
            back(org_mp);
            if (alpha >= beta) {
                break;
            }
        }
        return beta;
    }
    if (d % 2 == 1) {
        var ok_points = get_step('A');
        if (ok_points.length == 0) {
            return valuation();
        }
        for (var i = 0; i < ok_points.length; i++) {
            var org_mp = [[], [], [], [], [], [], [], [], [], [], [], []];
            move(ok_points[i].x, ok_points[i].y, 'A', org_mp);
            alpha = max(alpha, alpha_beta(d + 1, alpha, beta));
            back(org_mp);
            if (alpha >= beta) {
                break;
            }
        }
        return alpha;
    }
}
//---------------------------------------------------------------------------------------

//----------------------------------------玩家交换-----------------------------------------------------
function switchplayer() {
    current_role = (current_role == 'A') ? 'B' : 'A';
    remainingTime = 60000;//时间更新
}
//-----------------------------------------------------------------------------------------------------


//----------------------------------------ai落子------------------------------------------------------
function ai_make_move() {
    timer_B = setInterval(() => {
        remainingTime -= timerInterval;
        data_pannel_B[2].innerHTML = '时间:' + remainingTime / 1000 + 's';
        if (remainingTime <= 0) {
            alert('时间已到!电脑未在规定时间内落子,将重新开始游戏');
            startgame();
        }
    }, 1000);
    var point = {
        x: 0,
        y: 0
    }
    var ok_points = get_step('B');
    var val = 0, maxv = -9999;
    for (var i = 0; i < ok_points.length; i++) {
        var org_mp = [[], [], [], [], [], [], [], [], [], [], [], []];
        move(ok_points[i].x, ok_points[i].y, 'B', org_mp);
        val = alpha_beta(0, -9999, 9999);
        back(org_mp);
        if (val > maxv) {
            maxv = val;
            point.x = ok_points[i].x;
            point.y = ok_points[i].y;
        }
    }
    clearInterval(timer_B);
    var table = document.getElementById('tab');
    var tdElement = table.rows[point.x].cells[point.y];
    tdElement.style.background = 'url("' + ai_chess + '")';
    gamestate.board[point.x][point.y] = 'B';
    change_chess(point.x, point.y, 'B');
    copy(gamestate.board, board_imit);
    var score = get_score();
    gamestate.ai_score = score.ai;
    data_pannel_B[0].innerHTML = '电脑分数:' + gamestate.ai_score;
    switchplayer();
    game(current_role);
}

//--------------------------------------玩家落子-----------------------------------------------------

function click_event() {
    if (current_role == 'A') {
        if (gamestate.board[parseInt(this.dataset.row)][parseInt(this.dataset.col)] == 0 && is_valid(parseInt(this.dataset.row), parseInt(this.dataset.col), 'A')) {
            clearInterval(timer_A);
            var table = document.getElementById('tab');
            var ok_tds = get_step('A');
            for (var i = 0; i < ok_tds.length; i++) {
                if (gamestate.board[ok_tds[i].x][ok_tds[i].y] == 0) {
                    var ok_td = table.rows[ok_tds[i].x].cells[ok_tds[i].y];
                    ok_td.style.background = '';
                    ok_td.style.borderRadius = '';
                    ok_td.style.opacity = '';
                }
            }
            this.style.backgroundImage = 'url("' + player_chess + '")';
            gamestate.board[parseInt(this.dataset.row)][parseInt(this.dataset.col)] = 'A';
            change_chess(parseInt(this.dataset.row), parseInt(this.dataset.col), 'A');
            copy(gamestate.board, board_imit);
            var score = get_score();
            gamestate.player_score = score.player;
            data_pannel_A[0].innerHTML = '玩家分数:' + gamestate.player_score;
            switchplayer();
            game(current_role);
        }
        else {
            alert("wrong positiin,try again!");
        }
    }
    else {
        alert("not your turn!!!");
    }
}

var timer_A;
var timer_B;

function player_make_move() {
    var trElements = document.querySelectorAll('table tr');
    for (var i = 0; i < 12; i++) {
        var tdElements = trElements[i].getElementsByTagName('td');
        for (var j = 0; j < 12; j++) {
            var tdElement = tdElements[j];
            tdElement.addEventListener('click', click_event)
        }
    }
    timer_A = setInterval(() => {
        remainingTime -= timerInterval;
        data_pannel_A[2].innerHTML = '时间:' + remainingTime / 1000 + 's';
        if (remainingTime <= 0) {
            alert('时间已到!玩家未在规定时间内落子,将重新开始游戏');
            startgame();
            clearInterval(timer_A);
        }
    }, 1000);
}

//---------------------------------------------------------------------------------------------------

//---------------------------------------------------计算得分-----------------------------------------------

function get_score() {
    var player_score = 0;
    var ai_score = 0;
    for (var i = 0; i < 12; i++) {
        for (var j = 0; j < 12; j++) {
            if (gamestate.board[i][j] == 'A') {
                player_score++;
            }
            else if (gamestate.board[i][j] == 'B') {
                ai_score++;
            }
        }
    }
    var score = {
        player: player_score,
        ai: ai_score
    }
    return score;
}

//--------------------------------------------------游戏结束-----------------------------------------------------

function gameover(current_role) {
    var ok_points = get_step(current_role);
    if (ok_points == 0) {
        return false;
    }
    else {
        return true;
    }
}
//----------------------------------------------------------------------------------------------------

//---------------------------------------------游戏主体部分-----------------------------------------------
var data_pannel_A = document.querySelectorAll('.score_left div');
var data_pannel_B = document.querySelectorAll('.score_right div');

creat_chessboard();

var remainingTime = 60000;
var timerInterval = 1000;


function game(current_role) {
    if (gameover(current_role)) {
        if (current_role == 'A') {
            var table = document.getElementById('tab');
            var ok_tds = get_step('A');
            for (var i = 0; i < ok_tds.length; i++) {
                var ok_td = table.rows[ok_tds[i].x].cells[ok_tds[i].y];
                ok_td.style.background = '#e85d44';
                ok_td.style.borderRadius = '50%';
                ok_td.style.opacity = '0.8';
            }
            data_pannel_A[1].innerHTML = '状态:轮到玩家下棋...';
            data_pannel_B[1].innerHTML = '状态:等待玩家落子';
            player_make_move();
        }
        if (current_role == 'B') {
            data_pannel_B[1].innerHTML = '状态:轮到电脑下棋...';
            data_pannel_A[1].innerHTML = '状态:等待电脑落子';
            ai_make_move();
        }
    }
    else {
        if (gamestate.ai_score > gamestate.player_score) {
            alert('ai is win!');
            startgame();
        }
        else if (gamestate.ai_score < gamestate.player_score) {
            alert('player is win!');
            startgame();
        }
        else if (gamestate.ai_score == gamestate.player_score) {
            alert('you are equal!');
            startgame();
        }
    }
}

//-----------------------------------------------------------------------------------------------