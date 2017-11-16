## webpack-test

本地仓库和远程仓库关联
git remote add origin git@github.com:zhangmin173/webpack-test.git
或者克隆远程仓库
git clone git@github.com:zhangmin173/webpack-test.git

推送本地内容到远程
git add .
git commit -m 'some desc'
git push -u origin master

## origin是远程仓库名，git默认叫法
# 第一次推送-u参数 一则本地master和远程master关联，二则简化以后的命令

本地提交
git push origin master

合并制定分支dev到当前分支
git merge dev

存储工作区
git stash

恢复工作区并删除存储
git stash pop

查看存储的工作区
git stash list

创建远程分支并推送本地分支
git push origin dev:dev

推送到相应远程分支
git push origin dev