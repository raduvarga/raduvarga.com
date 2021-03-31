var Detect = {
    init: function () {
        this.os = this.searchString(this.dataOS);
    },
    searchString: function (data) {
        for (var i=0;i<data.length;i++) {
            var dataString = data[i].string;
            var dataProp = data[i].prop;
            this.versionSearchString = data[i].versionSearch || data[i].identity;
            if (dataString) {
                if (dataString.indexOf(data[i].subString) != -1)
                    return data[i].identity;
            }
            else if (dataProp)
                return data[i].identity;
        }
    },
    dataOS: [
        {
            string: navigator.platform,
            subString: 'Win',
            identity: 'Windows'
        },
        {
            string: navigator.platform,
            subString: 'Mac',
            identity: 'Mac OS'
        },
        {
            string: navigator.userAgent,
            subString: 'iPhone',
            identity: 'iOS'
        },
        {
            string: navigator.userAgent,
            subString: 'iPad',
            identity: 'iOS'
        },
        {
            string: navigator.userAgent,
            subString: 'iPod',
            identity: 'iOS'
        },
        {
            string: navigator.userAgent,
            subString: 'Android',
            identity: 'Android'
        },
        {
            string: navigator.platform,
            subString: 'Linux',
            identity: 'Linux'
        }
    ]
};

Detect.init();

function isLocalhost() {
    return (location.hostname === "localhost" || location.hostname === "127.0.0.1");
}

function getOS() {
    return Detect.os;
}

function isWindows() {
    return Detect.os == "Windows";
}

function getCacheBustedUrl(urlString) {
    var url = new URL(urlString);
    var params = new URLSearchParams(url.search);
    params.set('_', Date.now());
    url.search = params.toString();

    return url;
}

function download(urlString) {
    var link = document.createElement("a");
    link.target = "_blank";
    link.href = getCacheBustedUrl(urlString);
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    delete link;
}

function setIframHeight() {
    var position = $('.iframe-dynamic').position();
    
    if(position) {
        var height = window.innerHeight - 108 - position.top;
        if(height < 300) {
            height = 300;
        }

        $('.iframe-dynamic').attr("height", height);
    }
}