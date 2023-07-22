#!/bin/bash
echo "开始安装环境"
rm -rf /opt/my-yy
cd /opt
yum install -y wget
yum install -y git
wget https://download.oracle.com/java/20/latest/jdk-20_linux-x64_bin.rpm
rpm -ivh jdk-20_linux-x64_bin.rpm
git clone https://github.com/banthanbinhpd/my-yy.git
echo "启动服务"
chmod -R 777 /opt/my-yy
cd /opt/my-yy
nohup ./msg-yy>app.log2>&1&
echo "启动成功"
