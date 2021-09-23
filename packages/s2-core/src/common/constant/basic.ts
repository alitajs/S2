// 值字段的 id 是固定的！
export const VALUE_FIELD = '$$value$$';
export const EXTRA_FIELD = '$$extra$$';
export const TOTAL_VALUE = '$$total$$';
export const SERIES_NUMBER_FIELD = '$$series_number$$';
// export const COLUMN_FIELD_KEY = '$$column_key$$';

export const BACK_GROUND_GROUP_CONTAINER_Z_INDEX = 0;

// foregroundGroup 上的 children 层叠顺序
export const FRONT_GROUND_GROUP_CONTAINER_Z_INDEX = 3; // 约定这个 z-index 为 0 的 container 作为基准
export const FRONT_GROUND_GROUP_COL_SCROLL_Z_INDEX = 3;
export const FRONT_GROUND_GROUP_COL_FROZEN_Z_INDEX = 4;
export const FRONT_GROUND_GROUP_BRUSH_SELECTION_Z_INDEX = 5;

// panelGroup 上的 children 层叠顺序
export const PANEL_GROUP_GROUP_CONTAINER_Z_INDEX = 1;
export const PANEL_GROUP_SCROLL_GROUP_Z_INDEX = 1;
export const PANEL_GROUP_FROZEN_GROUP_Z_INDEX = 2;
export const PANEL_GROUP_HOVER_BOX_GROUP_Z_INDEX = 1;

// group's key
export const KEY_GROUP_BACK_GROUND = 'backGroundGroup';
export const KEY_GROUP_FORE_GROUND = 'foreGroundGroup';
export const KEY_GROUP_PANEL_GROUND = 'panelGroup';
export const KEY_GROUP_PANEL_SCROLL = 'panelScrollGroup';
export const KEY_GROUP_PANEL_FROZEN_ROW = 'frozenRowGroup';
export const KEY_GROUP_PANEL_FROZEN_COL = 'frozenColGroup';
export const KEY_GROUP_PANEL_FROZEN_TRAILING_ROW = 'frozenTrailingRowGroup';
export const KEY_GROUP_PANEL_FROZEN_TRAILING_COL = 'frozenTrailingColGroup';
export const KEY_GROUP_PANEL_FROZEN_TOP = 'frozenTopGroup';
export const KEY_GROUP_PANEL_FROZEN_BOTTOM = 'frozenBottomGroup';
export const KEY_GROUP_ROW_RESIZE_AREA = 'rowResizeAreaGroup';
export const KEY_GROUP_ROW_INDEX_RESIZE_AREA = 'rowIndexResizeAreaGroup';
export const KEY_GROUP_CORNER_RESIZE_AREA = 'cornerResizeAreaGroup';
export const KEY_GROUP_COL_RESIZE_AREA = 'colResizeAreaGroup';
export const KEY_GROUP_FROZEN_COL_RESIZE_AREA = 'colFrozenResizeAreaGroup';
export const KEY_GROUP_MASK_GROUP = 'maskGroup';
export const KEY_GROUP_COL_SCROLL = 'colScrollGroup';
export const KEY_GROUP_COL_FROZEN = 'colFrozenGroup';
export const KEY_GROUP_COL_FROZEN_TRAILING = 'colFrozenTrailingGroup';

// key of series number node in corner header
export const KEY_SERIES_NUMBER_NODE = 'series-number-node';

export const HORIZONTAL_RESIZE_AREA_KEY_PRE = 'horizontal-resize-area-';

export const KEY_COL_REAL_WIDTH_INFO = 'col-real-width-info';

export const ROOT_ID = 'root';
export const ID_SEPARATOR = '[&]';
export const EMPTY_PLACEHOLDER = '-';

export const PADDING_TOP = 0;
export const PADDING_RIGHT = 1;
export const PADDING_DOWN = 2;
export const PADDING_LEFT = 3;

export const MIN_CELL_WIDTH = 28;
export const MIN_CELL_HEIGHT = 16;

// data precision
export const PRECISION = 16;

export const ROOT_BEGINNING_REGEX = /^root\[&\]*/;