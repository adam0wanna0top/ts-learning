# TypeScript 学习仓库

TypeScript 语法与代码练习，从基础到高级，循序渐进。

## 目录结构

```
src/
├── 01-basics/          # 基础语法
│   ├── variables.ts    # 变量声明、基本类型、枚举、void/never
│   └── functions.ts    # 函数定义、可选参数、重载、箭头函数
├── 02-types/           # 类型系统
│   ├── type-annotations.ts  # 联合类型、交叉类型、字面量类型、typeof/keyof
│   └── type-guards.ts       # typeof、instanceof、in、自定义类型守卫
├── 03-interfaces/      # 接口
│   └── interfaces.ts   # 接口定义、继承、函数接口、索引签名
├── 04-generics/        # 泛型
│   └── generics.ts     # 泛型函数/类、约束、内置工具类型
├── 05-classes/         # 类
│   └── classes.ts      # 继承、抽象类、接口实现、存取器、静态成员
├── 06-modules/         # 模块
│   └── modules.ts      # ES 模块导出/导入、命名空间、动态导入
├── 07-advanced/        # 高级类型
│   └── advanced.ts     # 条件类型、映射类型、infer、模板字面量类型
└── 08-exercises/       # 练习题
    └── exercises.ts    # 待完成的练习，取消注释并修复
```

## 快速开始

```bash
# 安装依赖
npm install

# 运行单个文件
npx ts-node src/01-basics/variables.ts

# 编译全部
npm run build

# 监听模式（自动编译）
npm run watch
```

## 学习路线

1. **基础语法** — 变量、类型注解、函数
2. **类型系统** — 联合/交叉类型、类型守卫与收窄
3. **接口** — 定义对象形状、函数签名、索引签名
4. **泛型** — 泛型函数与类、约束、工具类型（Partial/Pick/Omit/Record）
5. **类** — OOP、继承、抽象类、存取器
6. **模块** — 导入导出、动态导入
7. **高级类型** — 条件类型、映射类型、infer、递归类型

## 环境要求

- Node.js >= 18
- TypeScript >= 5.4
