let obj = JSON.parse($response.body);
if (obj) 
{
    obj.advertisement_num=0;
    obj.advertisement_info=[];
    delete obj.appid;
}
$done({ body: JSON.stringify(obj) });