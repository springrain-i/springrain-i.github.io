# John安装记录

>
!!! note
    因为踩一堆坑而红温,所以记录.

## 安装

在其[GitHub仓库](https://github.com/openwall/john)安装(不要在https://www.openwall.com/john/安装,这个地方的版本是旧的,会导致无法正常使用)

通过git clone即可
你可以自行阅读doc/INSTALL,里面有详细的安装说明.
或者按下方直接傻瓜式安装

1. `sudo apt install openssl`
2. `sudo apt install libssl-dev`
3. `cd src`
4. `./configure && make`
5. `cd ../run`
6. `./john --test`

## 使用
终端下运行rar2john,获得hash值:

```shell
./run/rar2john [path/to/rarfile] > [path/to/hashfile]
./run/john [hashfile]
```
此处是使用的默认字典
那么在你知道密码长度和格式时,也可以使用自定义的方式,例如密码是8字符的16进制字符串
```shell
zip2john yourfile.zip > yourfile.hash
john --format=pkzip --mask='?h?h?h?h?h?h?h?h' yourfile.hash
```
参考网站:
1. https://bbs.deepin.org/en/post/248454
2. https://www.cnblogs.com/Hekeats-L/p/16745318.html

