#!/bin/bash

# 如果当前工作区没有更改则无需继续进行

echo "<<辛苦啦~>>"

git status

git add .

git commit -m "push by AutoPush"

git push

echo "<<恭喜您，本次推送完毕！😋>>"
