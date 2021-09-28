---
title: S2Options
order: 1
---

## 交叉表所有配置项相关

| 参数 | 类型 | 必选 | 取值 | 默认值 | 功能描述 |
| :-- | :-- | :-: | :-- | :-- | :-- | --- |
| hierarchyType | string |  | 'grid' | 'tree'; | grid | 行头的展示方式，grid：平铺网格结构， tree： 树状结构。 |
| hierarchyCollapse | string |  | boolean | false | 在树状结构模式下行头是否默认展开。 |
| conditions | [Conditions](#conditions) | ✓ |  |  | 条件模式配置 |
| totals | [Totals](#) | ✓ |  |  | 小计总结配置 |
| tooltip | [Tooltip](#) | ✓ |  |  |  tooltip 总配置 |
| linkFields | string[] |  |  | [] | 外链跳转 |
| pagination | [Pagination](#) | ✓ |  |  | 分页配置 |
| freezeRowHeader | boolean | ✓ |  | false | 冻结行头 |
| pivot | pivot/table |  |  |  | pivot = 交叉表，table = 普通 table |
| width | number | ✓ |  |  | canvas 的宽度 |
| height | number | ✓ |  |  | canvas 的高度 |
| style | [Style](#) | ✓ |  |  | 附加样式 |
| showSeriesNumber | boolean | ✓ |  | false | 是否显示序号 |
| hideNodesIds | string[] | ✓ |  | [] | 隐藏的节点 ID |
| keepOnlyNodesIds | [KeepOnlyIds](#) | ✓ |  | { rowIds: [], colIds: [] } | 仅显示的节点 |
| registerDefaultInteractions | boolean | ✓ |  |  | 注册默认交互 |
| scrollReachNodeField | [NodeField](#) | ✓ |  | {rowField: '', colField: ''} |
| 滚动监听的节点度量 |
| hiddenColumnFields | string[] | ✓ |  | [] | 隐藏列 （明细表有效） |
| valueInCols | boolean |  |  | false | 存在衍生指标时单列和多列的切换 |
| dataCell | [DataCellCallback](#) |  |  |  | 自定义单元格 cell |
| cornerCell | [CellCallback](#) |  |  |  | 自定义 cornerCell |
| rowCell | [CellCallback](#) |  |  |  | 自定义行头 cell |
| colCell | [CellCallback](#) |  |  |  | 自定义列头 cell |
| frame | [FrameCallback](#) |  |  |  | 自定义 frame 边框 |
| cornerHeader | [CornerHeaderCallback](#) |  |  |  | 角头可能需要全部自定义，而不是用交叉表概念的 node 来渲染 |
| layout | [LayoutCallback](#) |  |  |  | 自定义 layout |
| layoutResult | [LayoutResultCallback](#) |  |  |  | 布局结果自定义 |
| hierarchy | [HierarchyCallback](#) |  |  |  | 行列结构的自定义 |
| [key: string] | any |  |  |  | 其他任意的选择配置 |

`markdown:docs/common/conditions.zh.md`

## Totals

object **必选**,_default：null_ 功能描述： 小计总计配置

| 参数 | 类型   | 必选 | 取值 | 默认值 | 功能描述 |
| --- | --- | :-: | --- | --- | --- |
| row | [Total](#) |  |  | {} | 列总计 |
| col | [Total](#) |  |  | {} | 行总计 |

## Total

object **必选**,_default：null_ 功能描述： 小计总计算配置

| 参数 | 类型 | 必选 | 取值 | 默认值 | 功能描述 |
| --- | --- | :-: | --- | --- | --- |
| showGrandTotals | boolean | ✓ |  | false | 是否显示总计 |
| showSubTotals | boolean | ✓ |  | false | 是否显示小计 |
| subTotalsDimensions | string[] | ✓ |  | [] | 小计的汇总维度 |
| reverseLayout | boolean | ✓ |  | false | 总计布局位置，默认下或右 |
|  |
| reverseSubLayout | boolean | ✓ |  | false | 小计布局位置，默认下或右 |
| label | string |  |  |  | 总计别名 |
| subLabel | string |  |  |  | 小计别名 |

## Tooltip

object **必选**,_default：null_ 功能描述： tooltip 配置

| 参数 | 类型   | 必选 | 取值 | 默认值 | 功能描述 |
| --- | --- | :-: | --- | --- | --- |
| showTooltip | boolean |  |  | true | 是否展示 tooltip |
| operation | [TooltipOperation](#TooltipOperation) |  |  | false | tooltip 操作配置项 |
| row | [Tooltip](#) |  |  |  | 行头配置 |
| col | [Tooltip](#) |  |  |  | 列头配置 |
| cell | [Tooltip](#) |  |  |  | 单元格配置 |
| renderTooltip | [RenderTooltip](#) |  |  |  | 自定义整个 tooltip, 可以继承 BaseTooltip 自己重写一些方法 |
| tooltipComponent | React.ReactNode |  |  |  | 自定义 tooltip 弹框组件 |

## TooltipOperation

object **必选**,_default：null_ 功能描述： tooltip 操作配置项

| 参数 | 类型   | 必选 | 取值 | 默认值 | 功能描述 |
| --- | --- | :-: | --- | --- | --- |
| hiddenColumns | boolean |  |  | true | 是否开启隐藏列 （明细表有效） |
| trend | boolean |  |  | false | 是否显示趋势图 icon |

## Pagination

boolean ｜ object **必选**,_default：null_ 功能描述： 分页配置

| 参数      | 类型   | 必选 | 取值 | 默认值 | 功能描述            |
| --------- | ------ | :--: | ---- | ------ | ------------------- |
| pageSize  | number |  ✓   |      |        | 每页数量            |
| current   | number |  ✓   |      | 1      | 当前页（从 1 开始） |
| total     | number |      |      |        | 数据总条数          |
| pageCount | number |      |      |        | 总页数              |

## Style

object **必选**,_default：null_ 功能描述：样式设置

| 参数 | 类型 | 必选 | 取值 | 默认值 | 功能描述 |
| --- | --- | :-: | --- | --- | --- | --- |
| treeRowsWidth | number | ✓ |  |  | 树状模式行单元格宽度 |
| collapsedRows | object: |
| {string, boolean} |  |  |  | 树状模式行的折叠、收起状态 |
| collapsedCols | object:{string, boolean} |  |  |  | 树状模式列的折叠、收起状态 |
| cellCfg | [CellCfg](#) | ✓ |  |  | 单元格配置 |
| viewCfg | [ViewCfg](#) | ✓ |  |  | 单元格 padding 配置 |
| colCfg | [ColCfg](#) | ✓ |  |  | 列样式配置 |
| rowCfg | [RowCfg](#) | ✓ |  |  | 行样式配置 |
| device | string |  | 'pc' | 'mobile' | 'pc' | 设备类型 |
| plotSize | [PlotSize](#) |  |  |  |  |

## CellCfg

object **必选**,_default：null_ 功能描述：单元格配置

| 参数    | 类型   | 必选 | 取值 | 默认值 | 功能描述     |
| ------- | ------ | ---- | ---- | ------ | ------------ |
| width   | number |      |      |        | 单元格宽度   |
| height  | number |      |      |        | 单元格高度   |
| padding | number |      |      |        | 单元格内边距 |

## ColCfg

object **必选**,_default：null_ 功能描述： 列样式配置

| 参数 | 类型 | 必选 | 取值 | 默认值 | 功能描述 |
| --- | --- | :-: | --- | --- | --- |
| height | number |  |  |  | 单元格高度（普通状态） |
| widthByFieldValue | number |  |  |  | 根据度量值设置宽度（拖拽或者预设宽度场景） |
| colWidthType | 'adaptive' &#124; 'compact' |  |  |  | 列类型，紧凑或者自适应 |
| heightByField | number |  |  |  | 根据度量值设置高度（拖拽或者预设宽度场景） |

## RowCfg

object **必选**,_default：null_ 功能描述：行样式配置

| 参数 | 类型 | 必选 | 取值 | 默认值 | 功能描述 |
| --- | --- | :-: | --- | --- | --- |
| treeRowsWidth | number |  |  |  | 树状模式行单元格宽度 |
| collapsedRows | object |  |  | {} | 树状模式行的折叠、收起状态 |
| collapsedCols | object |  |  | {} | 树状模式列的折叠、收起状态 |
| cellCfg | [CellCfg](#) |  |  | {} | 单元格配置 |
| colCfg | [ColCfg](#) |  |  | {} | 列样式配置 |
| rowCfg | [RowCfg](#) |  |  | {} | 行样式配置 |
| device | pc &#124; mobile |  |  | {} | 设备类型 |

## PlotSize

object **必选**,_default：null_ 功能描述：行样式配置

| 参数 | 类型 | 必选 | 取值 | 默认值 | 功能描述 |
| --- | --- | :-: | --- | --- | --- |
| treeRowsWidth | number |  |  |  | 树状模式行单元格宽度 |
| collapsedRows | object |  |  | {} | 树状模式行的折叠、收起状态 |
| collapsedCols | object |  |  | {} | 树状模式列的折叠、收起状态 |
| cellCfg | [CellCfg](#) |  |  | {} | 单元格配置 |
| colCfg | [ColCfg](#) |  |  | {} | 列样式配置 |
| rowCfg | [RowCfg](#) |  |  | {} | 行样式配置 |
| device | pc &#124; mobile |  |  | {} | 设备类型 |

## keepOnlyNodesIds

object 可选，_default：{}_ 功能描述：仅显示的节点

| 参数   | 类型     | 必选 | 取值 | 默认值 | 功能描述 |
| ------ | -------- | :--: | ---- | ------ | -------- |
| rowIds | string[] |      |      |        | 行 Id    |
| colIds | string[] |      |      |        | 列 Id    |

## NodeField

object 可选，_default：{}_ 功能描述：滚动监听的节点度量

| 参数 | 类型 | 必选 | 取值 | 默认值 | 功能描述 |
| --- | --- | :-: | --- | --- | --- |
| rowField | string[] |  |  |  | 行头中需要监听滚动吸顶的度量 id |
| colField | string[] |  |  |  | 列头中需要监听滚动吸「左」的度量 id |

## DataCellCallback

```js
DataCellCallback = (viewMeta: ViewMeta) => Group;
```

功能描述：交叉单元格自定义回调函数返回：Group （返回一个绘制好的布局）参数：[ViewMeta](#)

## ViewMeta

object 必选，_default：{}_ 功能描述：单元个数据和位置等信息

| 参数 | 类型 | 必选 | 取值 | 默认值 | 功能描述 |
| --- | --- | :-: | --- | --- | --- |
| spreadsheet | [BaseSpreadSheet](#) | ✓ |  |  | 表类实例，可以访问任意的配置信息 |
| x | number | ✓ |  |  | 单元格 x 坐标 |
| y | number | ✓ |  |  | 单元格 y 坐标 |
| width | number | ✓ |  |  | 单元格宽度 |
| height | number | ✓ |  |  | 单元格高度 |
| data | Array<Record<string, any>> | ✓ |  |  | 单元格原始数据度量 |
| rowIndex | number | ✓ |  |  | 单元格在行叶子节点中的索引 |
| colIndex | number | ✓ |  |  | 单元格在列叶子节点中的索引 |
| valueField | string | ✓ |  |  | 度量 id |
| fieldValue | string | ✓ |  |  | 度量展示的真实值 |
| isTotals | boolean |  | true： 总计｜ false： 小计   |  | 是否为总计 |
| rowQuery | Array<Record<string, any>> |  |  |  | 行查询条件 |
| colQuery | Array<Record<string, any>> |  |  |  | 列查询条件 |
| rowId | string |  |  |  | 单元格的行 id |
| colId | string |  |  |  | 单元格的列 id |
| [key: string] | any |  |  |  | 其他任意的选择配置 |

keepOnlyNodesIds keepOnlyNodesIds

## CellCallback

```js
CellCallback = (node: Node, spreadsheet: BaseSpreadSheet, ...restOptions) =>
  Group;
```

功能描述：角头单元格 cornerCell 自定义回调函数返回：Group （返回一个绘制好的布局）参数：

| 参数 | 类型 | 必选 | 取值 | 默认值 | 功能描述 |
| --- | --- | :-: | --- | --- | --- |
| node | [Node](#) |
| ✓ |  |  | 当前渲染的 node 节点 |
| spreadsheet | [BaseSpreadSheet](#) | ✓ |  |  | 表类实例，可以访问任意的配置信息 |
| restOptions |  |  |  |  | 不定参数，传递额外的信息 |

## CornerHeaderCallback

```js
CornerHeaderCallback = (parent: Group, spreadsheet: BaseSpreadSheet, ...restOptions) => void;
```

功能描述：角头自定义回调函数

参数：

| 参数 | 类型 | 必选 | 取值 | 默认值 | 功能描述 |
| --- | --- | :-: | --- | --- | --- |
| parent | [Group](#) |
| ✓ |  |  | 父类的 group 元素 |
| spreadsheet | [BaseSpreadSheet](#) | ✓ |  |  | 表类实例，可以访问任意的配置信息 |
| restOptions |  |  |  |  | 不定参数，传递额外的信息 |

## FrameCallback

```js
FrameCallback = (cfg: object) => Frame;
```

功能描述：框架自定义回调函数返回： Frame（返回一个绘制好的布局）参数：group 绘制所需属性

## LayoutCallback

```js
LayoutCallback = (spreadsheet: BaseSpreadSheet, rowNode: Node, colNode: Node) => void;
```

功能描述：布局自定义回调函数，用于控制每一个需要控制的行列节点参数：

| 参数 | 类型 | 必选 | 取值 | 默认值 | 功能描述 |
| --- | --- | :-: | --- | --- | --- |
| spreadsheet | [BaseSpreadSheet]() | ✓ |  |  | 表类实例，可以访问任意的配置信息 |
| rowNode | [Node]() | ✓ |  |  | 行节点，可能为 null |
| colNode | [Node]() | ✓ |  |  | 列节点，可能为 null |

## LayoutResultCallback

```js
LayoutResultCallback = (layoutResult: LayoutResult) => LayoutResult;
```

功能描述：布局结果回调函数参数：[LayoutResult](#) 返回：[LayoutResult](#)

## LayoutResult

| 参数 | 类型 | 必选 | 取值 | 默认值 | 功能描述 |
| --- | --- | :-: | --- | --- | --- |
| colNodes | [Node[]]() | ✓ |  |  | 列的所有节点 |
| colsHierarchy | [Hierarchy]() | ✓ |  |  | 列的结构信息 |
| rowNodes | [Node[]]() | ✓ |  |  | 行的所有节点 |
| rowsHierarchy | [Hierarchy]() | ✓ |  |  | 行的结构信息 |
| rowLeafNodes | [Node[]]() | ✓ |  |  | 行的所有叶子节点，用于笛卡尔交叉 |
| colLeafNodes | [Node[]]() | ✓ |  |  | 列的所有叶子节点，用于笛卡尔交叉 |

| getViewMeta | Function： (rowIndex: number, colIndex: number) => ViewMeta | ✓ | | | 获取交叉出 [x,y] 对应坐标的信息 | | spreadsheet | [BaseSpreadSheet]() | ✓ | | | 表类实例，可以访问任意的配置信息 |

## HierarchyCallback

```js
HierarchyCallback = (spreadsheet: BaseSpreadSheet, node: Node) =>
  HierarchyResult;
```

功能描述：行列布局结构自定义回调函数参数：

| 参数 | 类型 | 必选 | 取值 | 默认值 | 功能描述 |
| --- | --- | :-: | --- | --- | --- |
| spreadsheet | [BaseSpreadSheet]() | ✓ |  |  | 表类实例，可以访问任意的配置信息 |
| node | [Node]() | ✓ |  |  | 当前生成的节点 |

返回：[HierarchyResult](#)

## HierarchyResult

| 参数 | 类型 | 必选 | 取值 | 默认值 | 功能描述 |
| --- | --- | :-: | --- | --- | --- |
| nodes | [Node[]]() |  |  |  | 需要额外增加的节点 |
| push | boolean |  |  |  | push 在 node 前 (false) 或者后 (true) 增加额外的节点 (nodes) |

## RenderTooltip

```js
RenderTooltip = (spreadsheet: BaseSpreadSheet) => BaseTooltip;
```

功能描述：行列布局结构自定义回调函数参数：

| 参数 | 类型 | 必选 | 取值 | 默认值 | 功能描述 |
| --- | --- | :-: | --- | --- | --- |
| spreadsheet | [BaseSpreadSheet]() | ✓ |  |  | 表类实例，可以访问任意的配置信息 |

返回：[BaseTooltip](#)