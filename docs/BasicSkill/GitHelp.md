> https://www.bilibili.com/video/BV19e4y1q7JJ/?spm_id_from=333.788.recommend_more_video.0&vd_source=c012000e7aa400d4f2f158bc7f351a7e
## 如何进行更好地PR
1. git clone + 地址 复制到本地
2. git init :让当前文件夹变成git仓库 git init folder 创建一个新的文件夹并初始化为git仓库
3. git checkout -b xxx 切换至新分支xxx（）,复制当前的branch到新branch上
4. git diff 来看自己对代码做出的改变
5. git add 告知git我修改的文件
6. git commit 将修改真正放到git里面
7. git push origin xxx 将本地branch上传至remote
8. git checkout main 切换到主分支
9. git pull origin master 将远端修改过的代码同步到本地
10. git rebase main 在xxx分支上，将main移过来，根据我的commit来修改成新的内容，如果出现了conflict，手动选择要保留的代码
11. git push -f origin xxx (-f表示强制)
12. git branch -D xxx 将本地branch删掉
---
## 回到本地
1. git reflog 查看本地历史版本
2. git reset --hard HEAD ^ ** 即可(--hard 会把原修改删掉)
3. git reset hash **  