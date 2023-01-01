# QuanX-Surge：一些个人自用的Quantumult X及Surge相关配置及脚本
## 彩云天气
说明:由于iOS16禁用天气app的MitM，在原作者@Peng-YM的基础上修改了获取定位的方式，改由彩云天气app获取@IEEEOfficial  
GitHub地址：[Colorful](https://github.com/NikolaKirchhoff/QuanX-Surge/tree/master/Colorful)  
功能：  
√ 自动定位  
√ 异常天气预警  
√ 实时天气预报  
TODO:
- 降雨提醒
- 每日睡前预报

配置：  
1️⃣ 配置自动定位  
根据平台添加如下配置  
(1).Quantumult X  
添加重写：https://raw.githubusercontent.com/NikolaKirchhoff/QuanX-Surge/main/Colorful/Caiyun.qxrewrite  
(2).Surge  
添加模块：https://raw.githubusercontent.com/NikolaKirchhoff/QuanX-Surge/main/Colorful/Caiyun.sgmodule  
or https://raw.githubusercontent.com/NikolaKirchhoff/QuanX-Surge/main/Colorful/Caiyun-NoCron.sgmodule  
2️⃣ 打开手机设置 > 隐私 > 定位服务  
(1) 打开定位服务  
(2) 选择彩云天气，设置永远允许访问位置信息，并允许使用精确位置。  
此时，打开彩云天气应用，会提示获取位置成功，如果没有提示，请确认1️⃣是否配置正确  
3️⃣ 配置cron任务如：10 8-22/2 * * *  
4️⃣ 打开box.js设置彩云令牌(不是链接！！！)即可。  
box.js使用Peng-YM的订阅：https://raw.githubusercontent.com/Peng-YM/QuanX/master/Tasks/box.js.json

## 开屏去广告（Surge）
GitHub地址：[Anti-Ads](https://github.com/NikolaKirchhoff/QuanX-Surge/tree/master/Anti-Ads)  
配置整体来源于墨鱼QX去开屏广告计划 V2.0(2022-12-28) 与去广告无关的内容已删除，避免与其他模块冲突；去广告方面主要保留个人常用的条目，其他条目随缘  
使用方式：  
(1).Quantumult X  
请直接添加墨鱼的重写：https://github.com/ddgksf2013/Rewrite/raw/master/AdBlock/StartUp.conf  
(2).Surge  
添加模块：https://raw.githubusercontent.com/NikolaKirchhoff/QuanX-Surge/main/Anti-Ads/Anti-Ads.sgmodule  

## 致谢
[@Peng-YM](https://github.com/Peng-YM) [@ddgksf2013](https://github.com/ddgksf2013)

## 免责声明  
1. 此项目中的脚本仅用于学习研究，不保证其合法性、准确性、有效性，请根据情况自行判断，本人对此不承担任何保证责任。
2. 由于此脚本仅用于学习研究，您必须在下载后 24 小时内将所有内容从您的计算机或手机或任何存储设备中完全删除，若违反规定引起任何事件本人对此均不负责。
3. 请勿将此脚本用于任何商业或非法目的，若违反规定请自行对此负责。
4. 此脚本涉及应用与本人无关，本人对因此引起的任何隐私泄漏或其他后果不承担任何责任。
5. 本人对任何脚本引发的问题概不负责，包括但不限于由脚本错误引起的任何损失和损害。
6. 如果任何单位或个人认为此脚本可能涉嫌侵犯其权利，应及时通知并提供身份证明，所有权证明，我将在收到认证文件确认后删除此脚本。
7. 所有直接或间接使用、查看此脚本的人均应该仔细阅读此声明。本人保留随时更改或补充此声明的权利。一旦您使用或复制了此脚本，即视为您已接受此免责声明。
