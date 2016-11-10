'use strict';


function StorageHandler() {}

StorageHandler.prototype = {};

StorageHandler.LIMIT_SUPPORT = (1024 * 1024) * 5;

StorageHandler.IS_SUPPORTED = function () {
    var supportTest = 'supportTest';
    try {
        localStorage.setItem(supportTest, supportTest);
        localStorage.removeItem(supportTest);
        return true;
    } catch (e) {
        return false;
    }
}();



StorageHandler.spaceUsed = function () {
    if ( !StorageHandler.IS_SUPPORTED )
        return;

    var used = 0;
    if (localStorage.length) {
        for (var x in localStorage) {
            if (!localStorage.hasOwnProperty(x))
                continue;
            used += parseInt(localStorage.getItem(x).length, 10);
        }
    }
    return used;
};


StorageHandler.spaceAvail = function () {
    return Math.max(parseInt((StorageHandler.limit - StorageHandler.spaceUsed()), 10), 0);
};

StorageHandler.isSpaceAvail = function (str, replace) {
    var str = str || "", replaceStr = "";

    if (replace && localStorage.getItem(replace))
        replaceStr = localStorage.getItem(replace);

    return ( (StorageHandler.spaceAvail() + replaceStr.length - str.length) > 0 ? true : false );
};

StorageHandler.spaceAvailString = function () {
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    var bytes = StorageHandler.spaceAvail();
    if (bytes === 0)
        return 0 + ' ' + sizes[0];
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
    if (i === 0)
        return bytes + ' ' + sizes[i];
    return (bytes / Math.pow(1024, i)).toFixed(1) + ' ' + sizes[i];
};


StorageHandler.limit = function () {
    if ( !StorageHandler.IS_SUPPORTED )
        return;

    var packet = new Array((1024 * 512)).join('a').toString(),
            maxPackets = StorageHandler.LIMIT_SUPPORT - StorageHandler.spaceUsed(), // 15 MB
            supportTest = 'supportTest',
            val = packet;

    try {

        while (val.length < maxPackets) {
            localStorage.setItem(supportTest, val);
            val += packet;
        }

        val = localStorage.getItem(supportTest) || "";
        localStorage.removeItem(supportTest);
    } catch (e) {
    }


    return val.length + StorageHandler.spaceUsed();
}();

