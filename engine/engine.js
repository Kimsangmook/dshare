function setObj(obj, objX, objY, objW, objH, objFont, clientWidth, clientHeight,state) {
    var w = getObjSize(objW, clientWidth);
    var h = getObjSize(objH, clientHeight);
    obj.style.left = getObjPositionX(objX, w, clientWidth) + 'px';
    // obj.style.top = getObjPositionY(objY, h, clientHeight) + 'px';
    obj.style.width = w - 48 + 'px';
    if (obj.id == 'lectureindexs') {
        if (state) {
            obj.style.bottom = '0px';
        }
        else {
            obj.style.bottom = getObjPositionY(objY, h, clientHeight) + 'px';
            obj.style.height = h + 'px';
        }
    }
    if (obj.id == 'instructions') {
        if (state) {
            obj.style.top = '16px'
        }
        else {
            obj.style.top = '20%';
        }
    }
    // obj.style.height = h + 'px';
    // obj.style.fontSize = getObjFont(objFont, clientWidth, clientHeight) + 'px';
}

function getObjFont(objRatio, clientWidth, clientHeight) {
    var screenSize = (clientHeight < clientWidth) ? clientHeight : clientWidth;
    if (screenSize <= w1) {
        return objRatio * w1 / 100;
    }
    else {
        return objRatio * screenSize / 100;
    }
}

function getObjSize(objRatio, clientSize) {
    if (clientSize <= w1) {
        return objRatio / 100 * w1;
    }
    else if (clientSize >= w2) {
        return objRatio / 100 * 828;
    }
    else {
        return objRatio / 100 * clientSize
    }
}

function getObjPositionX(objRatio, objWidth, clientSize) {
    if (clientSize <= w1) {
        return (50 + objRatio) * w1 / 100 - (objWidth / 2);
    }
    else{
        return (50 + objRatio) * clientSize / 100 - (objWidth / 2);
    }
}


function getObjPositionY(objRatio, objHeight, clientSize) {
    if (clientSize <= h1) {
        return (50 + objRatio) * h1 / 100 - (objHeight / 2);
    }
    else{
        return (50 + objRatio) * clientSize / 100 - (objHeight / 2);
    }
}