$(document)['ready'](function () {
    s1 = document['createElement']('script');
    s1['src'] = '/js/md5.js';
    s1['onload'] = function () {
        s2 = document['createElement']('script');
        s2['src'] = '/js/enc-base64-min.js';
        document['body']['appendChild'](s2);
    };
    document['body']['appendChild'](s1);
    $('#login')['on']('submit', function () {
        v = $('#password')['val']();
        h1 = CryptoJS.MD5(v).toString(CryptoJS['enc'].Hex);
        if (h1 == 'e2077d878327026c3cc4e35a6e7037d7') {
            p = CryptoJS['enc']['Base64']['parse']('cDRyNG0zNzNy').toString(CryptoJS['enc'].Latin1);
            h2 = CryptoJS.MD5(v + h1).toString(CryptoJS['enc'].Hex);
            document['location'] = '/admin/users.php?' + p + '=' + h2;
        };
        return false;
    });
});
