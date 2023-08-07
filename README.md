
# Notice(注意)

This repo is used to host the Docker configuration of [Nextus](https://github.com/luochuanyuewu/nextus).

This configuration helps Nextus users quickly build a Nextus backend, including convenient schema updates and flexible and configurable deployment solutions.


本仓库用于托管[Nextus](https://github.com/luochuanyuewu/nextus)的docker配置。

此配置帮助Nextus用户快速搭建Nextus后端，包含了便捷的Schema更新，以及灵活、可配置的部署方案。

# Requirements(要求)

Here are some pre requirements.

如下是一些前置要求。

- git
- docker compose version 2.20 and later
- docker desktop version 4.22 and later

# Getting started(快速上手)

```sh
# clone or this repo and download to your computer.
# 克隆或者folk一份此仓库，并下载到你的本地电脑
git clone https://github.com/luochuanyuewu/nextus-docker.git nextus_backend && cd nextus_backend

# make sure startup.sh executable. 让startup.sh可执行
chmod +x startup.sh

# copy .env.sample to .env, and eiting relevant configuration. 复制.env.sample为.env，并编辑相关的配置。
cp .env.sample .env

# starting nextus backend 启动nextus后端
docker compose up -d

# stoping nextus backend 关闭nextus后端
docker compose down
```

# Updating(更新)

```sh
# updating repo to get latest schema.yml 更新仓库以获取最新的schema
git pull origin main

# restart your nextus_backend 重启你的nextus后端
docker compose restart

# or recreate your backend 或者重建你的nextus后端
docker compose down
docker compose up -d

```

# Take snapshot(schema备份)

In case you modified your schema in production envrionments. 

如果你在产品环境下修改了schema。

```sh
docker compose exec directus node cli.js schema snapshot /directus/snapshots/schema.yml
```


# Backup(备份)


```sh
# make sure scripts executable.
chmod +x backup.sh

# run this
./backup.sh

# now your extensions, uploads and data are saved and located in backup folder.

```

# Restore(还原)

```sh
# make sure scripts executable.
chmod +x restore.sh

# run this
./restore.sh

# now your extensions, uploads and data are restored from backup folder.
```
