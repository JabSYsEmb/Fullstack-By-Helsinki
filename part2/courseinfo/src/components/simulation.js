function startTutorial() {
    var _sldr = new OlySlider("sldr"),
        _btn = new OlyButton("btn"),

        _ctx = MEUtil.upscaleCanvas("haCanvas", 2).getContext("2d"),
        _ctx2 = MEUtil.upscaleCanvas("haCanvas3", 2).getContext("2d"),
        _photon = [],
        _gainVal,
        _animate = false,
        _canCreate = true,
        _yellowPath = document.getElementById("haYellowPath"),
        _canvas = $("#haCanvas"),

        _imagePaths = [],
        _splash = OlySplash(initialize, _imagePaths);

    function initialize() {
        _ctx.translate(-62,-94);
        _ctx2.translate(-62,-94);
        drawLines();
        addListeners();
        initControls();

        MEUtil.raf(enterFrameHandler);
        _splash.fadeOut(); //COMMENT OUT THIS LINE TO REMOVE LOADER TEMPORARILY
    }

    function addListeners() {
    _sldr.onchange = function(e) {
        _gainVal = _sldr.getPosition();
    };

    _btn.ontouch = function(e) {
        _animate = !_animate;
        _btn.text.innerHTML = _btn.text.innerHTML === "Play" ? "Stop" : "Play";
        _animate ? [_yellowPath.style.visibility = "hidden", _canvas.fadeIn(150), _sldr.setEnabled(true)] : 
            [_yellowPath.style.visibility = "visible", _canvas.fadeOut(150), _sldr.setEnabled(false)];

        if(_animate && !_photon.length)    _photon.push(new Photon(_ctx, _photon, 0, _gainVal));
    };
    }

    function initControls() {
        _sldr.setPosition(0);
        _sldr.setEnabled(false);
    }

    function drawLines(){
        _ctx2.lineWidth = 2;

        var xPad = 4, yPad = 1, 
        sx = 100, sy = 196, ww = 12, hh = 14;
        _ctx2.beginPath();
        _ctx2.moveTo(sx+xPad,sy+yPad);
        _ctx2.lineTo(sx+ww+xPad,sy+hh+yPad);
        _ctx2.stroke();

        xPad = 4, yPad = 80,
        sx = 119, sy = 216, ww = 82, hh = -77;
        _ctx2.beginPath();
        _ctx2.moveTo(sx+xPad,sy+yPad);
        _ctx2.lineTo(sx+ww+xPad,sy+hh+yPad);
        _ctx2.stroke();

        xPad = 4, yPad = 1,
        sx = 184, sy = 166, ww = 9, hh = -1;
        _ctx2.beginPath();
        _ctx2.moveTo(sx+xPad,sy+yPad);
        _ctx2.lineTo(sx+ww+xPad,sy+hh+yPad);
        _ctx2.stroke();

        xPad = 4, yPad = 1,
        sx = 301, sy = 288, ww = 39, hh = 1;
        _ctx2.beginPath();
        _ctx2.moveTo(sx+xPad,sy+yPad);
        _ctx2.lineTo(sx+ww+xPad,sy+hh+yPad);
        _ctx2.stroke();

        xPad = 4, yPad = 1,
        sx = 323, sy = 228, ww = 22, hh = 53;
        _ctx2.beginPath();
        _ctx2.moveTo(sx+xPad,sy+yPad);
        _ctx2.lineTo(sx+ww+xPad,sy+hh+yPad);
        _ctx2.stroke();
    }


    function enterFrameHandler(timeStamp){
        if(_animate){
            _ctx.clearRect(0, 0, 500, 500);

            for(var i = 0; i < _photon.length; i++){
                _photon[i].animate();
            }

            for(var i = 0; i < _photon.length; i++){
                if(_photon[i].index == 10){
                    _photon.splice(i, 1)
                }
            }

            if(_photon.length && _photon[_photon.length-1].getIndex() == 7 && _canCreate){
                _photon.push(new Photon(_ctx, _photon, 0, _gainVal));
                _canCreate = false;
            }

            if(_photon.length && _photon[0].getIndex() > 7) _canCreate = true;

        }

        if (_sldr.hasChanged) sldrChanged();

        MEUtil.raf(enterFrameHandler);
    }

    function sldrChanged(){
        _gainVal = _sldr.getPosition();

        _sldr.hasChanged = false;
    }
}

$(document).ready(startTutorial);
