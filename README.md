# 🚀 Web/App Reverse Engineering Learning & Practice

[![Build Status](https://img.shields.io/badge/Status-Learning-orange.svg)]() 
[![Language](https://img.shields.io/badge/Language-JavaScript%20%7C%20Python-blue.svg)]()

本项目用于记录和整理个人在 Web 端及移动端爬虫逆向工程中的学习入门与实战练习，涵盖主流电商、社交、生活服务及文旅平台的加密参数逆向分析、环境补环境（Mock）以及数据反序列化实践。

---

## 🛠️ 技术栈与工具箱

在各个子项目的逆向分析与复现中，主要涉及以下技术选型：
* **动态调试与分析**：Chrome DevTools、Fiddler / Charles、Frida (Hooking)、Scrcpy (无线控制与调试)
* **算法还原与混淆技术**：AST (抽象语法树) 反混淆、JSFuck 逆向解密
* **环境检测对抗**：基于 Proxy 的浏览器沙箱环境补环境、浏览器指纹（Browser Fingerprinting）伪造
* **数据解析与自动化**：Python (Pandas / Requests)、Node.js (Express / Crypto)

---

## 📌 逆向实战练习项目索引

以下为当前正在迭代演进的逆向分析大主题及核心攻坚方向：

| 平台名称 | 核心加密参数 / 课题 | 核心攻坚方向与技术点 
| :--- | :--- | :--- | :--- |
| **抖音 (Douyin)** | `a_bogus` 算法还原 | JS 混淆还原、环境检测对抗与签名补环境 
| **抖音直播** | 直播间数据 `sign` 值反序列化 | Protobuf (Protocol Buffers) 协议逆向与数据流解密 
| **美团 (Meituan)** | `mtgsig` 请求签名 | H5guard 签名机制、API 请求头特征识别与环境 Mock 
| **京东 (JD)** | `h5st` 签名分析 | 浏览器指纹检测、滑动验证码与魔改加密算法解析 
| **拼多多 (PDD)** | `anti-content` 参数 | 极高强度混淆分析、风控行为轨迹打点对抗 
| **小红书 (XHS)** | `x-s`  参数 | 请求头动态签名、设备指纹及账号风控策略分析 
| **同程旅行** | `user-dun` 请求头 | 登录态与请求流安全校验、反爬特征链路追踪 

---

## 📂 项目结构规范

为了保持仓库的整洁，建议后续按照以下目录结构进行代码和笔记的管理：

```text
.
├── 抖音/
│   ├── a_bogus_Jscode/     # 算法还原与环境补环境脚本
│   └── 直播/                # Protobuf 结构定义与反序列化解析脚本
├── 美团/
│   └── mtgsig/             # 核心签名 RPC 或本地执行脚本
└── README.md               # 本项目导航说明
