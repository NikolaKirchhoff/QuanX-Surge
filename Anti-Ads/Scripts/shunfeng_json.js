/*
Author:ddgksf2013
*/
if ($request.url.indexOf("app/ad/queryInfoFlow") != -1) {
    var bodyObj = JSON.parse($response.body);
    bodyObj.obj = Object.values(bodyObj.obj).filter((item) => item.adverId==2833);
    $done({
        body: JSON.stringify(bodyObj),
    });
}