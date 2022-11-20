# QuanX-Surge：一些个人自用的Quantumult X及Surge相关配置及脚本
## 彩云天气
说明:由于iOS16禁用天气app的MitM，在原作者@Peng-YM的基础上修改了获取定位的方式，改由彩云天气app获取@IEEEOfficial  
GitHub地址：https://github.com/NikolaKirchhoff/QuanX-Surge/Colorful  
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
## 致谢
[@Peng-YM](https://github.com/Peng-YM/Peng-YM)
