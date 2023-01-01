/*
Author:ddgksf2013
*/
let obj = JSON.parse($response.body);
if (obj.biz) {
    obj.biz = Object.values(obj.biz).filter(item => !(item["type"]=="promoted"));
}
$done({ body: JSON.stringify(obj) });