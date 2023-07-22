#!/bin/bash
echo "开始安装环境"
cd /opt
yum install -y wget
yum install -y git
wget https://download.oracle.com/java/20/latest/jdk-20_linux-x64_bin.rpm
rpm -ivh jdk-20_linux-x64_bin.rpm
git clone https://github.com/banthanbinhpd/my-yy.git
echo "启动服务"
cd /opt/my-yy
./msg-yy
