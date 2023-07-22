#!/bin/bash
echo "停止进程"
pkill msg-yy
cd /opt/my-yy
nohup ./msg-yy>app.log>&1&
echo "启动成功"
