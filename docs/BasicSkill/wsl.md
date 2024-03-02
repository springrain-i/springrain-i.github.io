## WSL内装python
> 2024/02/04

* WSL内置python，再装一个pip即可`python apt install python3-pip`
* 如果报错，则先`sudo apt-get upgrade`，然后再重复上边操作即可
## 在WSL里使用VPN
> 2024/02/05

1. 在Clash for Windows里打开`Allow Wlan`开关，允许局域网设备访问代理
2. 在WSL内的.bashrc文件里将下边内容复制进去
```bash linenums="1"
proxy () {
    export hostip=$(cat /etc/resolv.conf |grep -oP '(?<=nameserver\ ).*')
    export https_proxy="http://${hostip}:7890"
    export http_proxy="http://${hostip}:7890"
    export all_proxy="sock5://${hostip}:7891"
    echo "HTTP Proxy on: ${hostip}"
}
noproxy () {
    unset http_proxy
    unset https_proxy
    unset all_proxy
    echo "HTTP Proxy off"
}
```
3. `source .bashrc` 重载该文件
4. 每次在需要开启代理的终端输入proxy即可开启代理,输入noproxy可以关闭代理
5. `wegt www.google.com`检测是否成功
[参考网站](https://www.maxwellwang.net/posts/wsl-and-clash/)

  

