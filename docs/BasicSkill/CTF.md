
### chmod
执行一个可执行文件出现`permission denied`时,可以使用`chomod 777 文件名`即可

`chmod`：改变文件权限,比如说chmod 777 .barshrc 表示将这个文件改成所有的用户都可读可写可执行

### 校网连接

在wsl中下载zjuconnect(有具体教程)

在一个终端中打开zjuconnect
在另一个终端中例如`nc -X 5 -x localhost:1080 10.214.160.13 13004`便可连上题目
