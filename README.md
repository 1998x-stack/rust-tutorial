# 🦀 Rust编程语言 · 从入门到精通

> 📘 28章 实战体系

一套完整的 **Rust编程语言 · 从入门到精通** 全中文实战课程体系，共 **28 章**。本课程以 HTML 可视化的形式呈现，从基础原理到工程实践循序渐进，适合系统性学习与复习。

## 🚀 快速开始

无需安装任何依赖，直接用浏览器打开 `index.html` 即可在线阅读全部章节：

```bash
open index.html   # macOS
# 或在浏览器中直接打开 index.html
```

## 📖 章节目录

| # | 章节 | 核心主题 |
|---|------|----------|
| 01 | Rust简介与安装 | 发展历史、rustup安装、Cargo入门、编辑器配置 |
| 02 | 变量与数据类型 | 不可变性、标量类型、复合类型、Shadowing |
| 03 | 函数与控制流 | 函数定义、if/else表达式、循环、match初探 |
| 04 | 所有权初探 | 所有权规则、Move语义、Clone与Copy、引用与借用 |
| 05 | 切片与字符串 | 字符串切片、String与&str、UTF-8编码、字符串操作 |
| 06 | 结构体 | 结构体定义、元组结构体、方法impl、关联函数 |
| 07 | 枚举与模式匹配 | 枚举定义、Option类型、match穷尽性、if let |
| 08 | 项目管理与模块 | Crate类型、模块系统、可见性pub、Workspace |
| 09 | 集合类型 | Vec动态数组、HashMap、HashSet、迭代模式 |
| 10 | 错误处理 | panic!、Result类型、?运算符、thiserror/anyhow |
| 11 | 泛型 | 泛型函数、泛型结构体、Trait约束、Monomorphization |
| 12 | Trait | 定义Trait、默认实现、Trait对象、derive宏 |
| 13 | 生命周期 | 防止悬垂引用、生命周期标注、省略规则、'static |
| 14 | 闭包与迭代器 | 闭包语法、Fn/FnMut/FnOnce、Iterator trait、适配器链 |
| 15 | 测试体系 | #[test]单元测试、集成测试、文档测试、基准测试 |
| 16 | Cargo生态进阶 | 依赖管理、Features、Profile配置、发布crate |
| 17 | 常见实用Trait | Display与Debug、From/Into、Deref、Drop与RAII |
| 18 | 日志与调试 | log/env_logger、tracing生态、dbg!宏、rust-analyzer |
| 19 | 智能指针 | Box堆分配、Rc/Arc引用计数、RefCell内部可变性、Weak防循环 |
| 20 | 并发编程 | 线程与move闭包、mpsc通道、Mutex共享状态、Send/Sync |
| 21 | 异步编程 | async/await、Tokio运行时、join!/select!、异步陷阱 |
| 22 | Unsafe Rust | 裸指针、FFI绑定、可变静态变量、unsafe trait |
| 23 | 常用库选型 | Serde序列化、Rayon并行、clap命令行、reqwest客户端 |
| 24 | 性能分析 | Release优化、CPU火焰图、内存分析、PGO优化 |
| 25 | 宏编程入门 | macro_rules!、元变量类型、声明式vs过程宏、derive宏 |
| 26 | 实战：CLI工具 | clap参数解析、git2仓库分析、错误处理、cargo publish |
| 27 | 实战：Web API | Axum路由、SQLx数据库、CRUD端点、Docker部署 |
| 28 | 2027 Edition展望 | Edition历史回顾、新特性预览、进阶学习路线、社区参与 |

## 📂 项目结构

```text
rust-tutorial/
├── index.html      # 课程主入口（在线阅读全部章节）
├── 01.html ~ 28.html   # 各章节正文
├── courses.json    # 课程元数据（标题/章节/主题）
└── theme.css       # 统一主题样式
```

## ✨ 课程特色

- **全中文实战体系**：面向中文读者，由浅入深，覆盖原理与工程实践
- **28 章完整内容**：系统化章节编排，形成完整知识闭环
- **可视化呈现**：HTML 图文并茂，适合快速浏览与重点回顾
- **即开即用**：无需构建、无需服务器，纯静态页面随开随看

---
*本课程由 `rust-tutorial/` 项目维护。*