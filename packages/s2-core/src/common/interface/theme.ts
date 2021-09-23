import { ShapeAttrs } from '@antv/g-canvas';
import { InteractionStateName } from '../constant';
import { CellTypes } from '@/common/constant/interaction';

// 文本内容的水平对齐方式, 默认 left
export type TextAlign = 'left' | 'center' | 'right';

// 绘制文本时的基线, 对应垂直方向对齐方式 默认 bottom
export type TextBaseline = 'top' | 'middle' | 'bottom';

export interface Palette {
  /* brand colors */
  brandColors: string[];
  /* neutral colors */
  grayColors: string[];
  /* semantic colors */
  semanticColors: {
    red?: string;
    green?: string;
    blue?: string;
    /* 额外颜色字段 */
    [key: string]: string;
  };
}

export interface Padding {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
}

export interface Background {
  opacity?: number;
  color?: string;
}
export interface InteractionStateTheme {
  backgroundOpacity?: number;
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: number;
  opacity?: string | number;
}

export type InteractionState = {
  [K in InteractionStateName]?: InteractionStateTheme;
};

export type Margin = Padding;

export interface TextAlignCfg {
  textAlign?: TextAlign;
  textBaseline?: TextBaseline;
}

export interface TextTheme extends TextAlignCfg {
  fontFamily?: string;
  fontSize?: number;
  fontWeight?: number | 'normal' | 'bold' | 'bolder' | 'lighter';
  fill?: string;
  linkTextFill?: string;
  opacity?: number;
  textAlign?: TextAlign;
  textBaseline?: TextBaseline;
}

export interface CellTheme {
  /* 奇数行单元格背景色 */
  crossBackgroundColor?: string;
  /* 单元格背景色 */
  backgroundColor?: string;
  /* 单元格背景色透明度 */
  backgroundColorOpacity?: number;
  /* 单元格水平边线颜色 */
  horizontalBorderColor?: string;
  /* 单元格水平边线颜色透明度 */
  horizontalBorderColorOpacity?: number;
  /* 单元格垂直边线颜色 */
  verticalBorderColor?: string;
  /* 单元格垂直边线颜色透明度 */
  verticalBorderColorOpacity?: number;
  /* 单元格水平边线宽度 */
  horizontalBorderWidth?: number;
  /* 单元格垂直边线宽度 */
  verticalBorderWidth?: number;
  /* 单元格内边距 */
  padding: Padding;
  /* 交互态 */
  interactionState?: InteractionState;
  /* 单元格内条件格式-迷你条形图高度 */
  miniBarChartHeight?: number;
  /* 单元格内条件格式-迷你条形图默认填充颜色 */
  miniBarChartFillColor?: string;
  expandIcon?: {
    splitLine?: {
      borderColor?: string;
      borderWidth?: number;
      borderOpacity?: number;
    };
    size?: number;
  };
  /* 额外属性字段 */
  [key: string]: any;
}

export interface IconTheme {
  /* icon 填充色 */
  fill?: string;
  /* 下跌 icon 填充色 */
  downIconColor?: string;
  /* 上涨 icon 填充色 */
  upIconColor?: string;
  /* icon 圆角 */
  radius?: number;
  /* icon  大小 */
  size?: number;
  /* icon 外边距 */
  margin?: Margin;
}

export interface ResizeArea {
  /* 热区尺寸 */
  size?: number;
  /* 热区背景色 */
  background?: string;
  /* 参考线颜色 */
  guidLineColor?: string;
  /* 热区背景色透明度 */
  backgroundOpacity?: number;
  /* 交互态 */
  interactionState?: InteractionState;
}

export interface ScrollBarTheme {
  /* 滚动条轨道颜色 */
  trackColor?: string;
  /* 滚动条 hover 态颜色 */
  thumbHoverColor?: string;
  /* 滚动条颜色 */
  thumbColor?: string;
  mobileThumbColor?: string;
  size?: number;
  /* 滚动条 hover 态尺寸 */
  hoverSize?: number;
  lineCap?: ShapeAttrs['lineCap'];
}

export interface SplitLine {
  /* 水平分割线颜色 */
  horizontalBorderColor?: string;
  /* 水平分割线颜色透明度 */
  horizontalBorderColorOpacity?: number;
  /* 水平分割线宽度 */
  horizontalBorderWidth?: number;
  /* 垂直分割线颜色 */
  verticalBorderColor?: string;
  /* 垂直分割线颜色透明度 */
  verticalBorderColorOpacity?: number;
  /* 垂直分割线宽度 */
  verticalBorderWidth?: number;
  /* 分割线是否显示右侧外阴影 */
  showRightShadow?: boolean;
  /* 阴影宽度 */
  shadowWidth?: number;
  /* 阴影线性渐变色 */
  shadowColors?: {
    /* 线性变化左侧颜色 */
    left: string;
    /* 线性变化右侧颜色 */
    right: string;
  };
}
export interface DefaultCellTheme {
  /* 粗体文本样式 */
  bolderText?: TextTheme;
  /* 文本样式 */
  text?: TextTheme;
  /* 单元格样式 */
  cell?: CellTheme;
  /* 图标样式 */
  icon?: IconTheme;
  /* 序号列宽 */
  seriesNumberWidth?: number;
}

type CellThemes = {
  [K in CellTypes]?: DefaultCellTheme;
};

export interface SpreadSheetTheme extends CellThemes {
  /* 列宽行高调整热区 */
  resizeArea?: ResizeArea;
  /* 滚动条样式 */
  scrollBar?: ScrollBarTheme;
  /* 分割线样式 */
  splitLine?: SplitLine;
  /* 刷选遮罩 */
  prepareSelectMask?: InteractionStateTheme;
  /* 画布背景底色 */
  background?: Background;
  /* 额外属性字段 */
  [key: string]: any;
}

export type ThemeName = 'default' | 'simple' | 'colorful';

export interface ThemeCfg {
  /* 主题 */
  theme?: SpreadSheetTheme;
  /* 色板 */
  palette?: Palette;
  /* 主题名 */
  name?: ThemeName;
  /* 是否色板转置 */
  hueInvert?: boolean;
}