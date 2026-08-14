# 回归测试 (test.js)

自动化测试，拦住反复出现的三类线上问题。**无需联网、无需装依赖**，纯 Node 即可运行。

## 运行

```sh
node test.js          # 跑全部（几何 + 代数）
node test.js --geo    # 只测几何
node test.js --alg    # 只测代数
```

退出码：`0` = 全过，`1` = 有失败（供 git 钩子 / CI 使用）。

## 覆盖的回归类型

| 编号 | 检测什么 | 对应踩过的坑 |
|------|---------|-------------|
| 1 | **双语字段契约** — 所有 `source/name/statement/title/answer` 等要么是字符串，要么是含 `en`/`zh` 的对象 | 习题区显示 `[object Object]` |
| 2 | **图完整性** — 每个 `.fig` 字段都是有效 `<svg>`，`fig` 键存在但值为 `undefined`（FIG.key 拼错）会判失败 | 几何课程一张图都没有 / 图凭空消失 |
| 3 | **LaTeX 分隔符配对** — `\(`↔`\)`、`\[`↔`\]`、`$` 成对 | 公式渲染崩坏 |
| — | **数据加载** — 每个数据文件能解析、`courseData.days` 非空 | 数据文件语法错导致整页白屏 |

## 自动运行（pre-push 钩子）

已配置 `.git/hooks/pre-push`：每次 `git push` 前自动跑测试，不过就阻止推送。

- 临时跳过：`git push --no-verify`
- 钩子不随仓库同步（`.git/` 不入版本库）。换机器后重新建立即可，内容见本仓库 `test.js` 顶部注释或让助手重新生成。

## 加新一天 / 新图后

正常写完数据直接 `git push` 即可，钩子会自动校验。若想手动先确认：`node test.js`。
如果新增了图，记得在 `geometry-figs.js` 里定义对应的 `FIG.xxx`，否则测试 2 会报"图丢失"。

## 考试复盘模板

新增或修改考试复盘模板后运行：

```sh
bun tools/test-exam-review-template.mjs
```

该测试会在临时目录生成一张虚拟新卷，检查文件名、稳定ID、默认成绩、页面数据引用，以及未替换占位内容必须被校验器拒绝。完整数据文件另用：

```sh
bun tools/validate-exam-review.mjs exam-YYYY-FORM-data.js
```
