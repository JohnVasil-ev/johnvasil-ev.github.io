import type { CSSProperties } from "vue";

export interface Props {
  direction: 'vertical' | 'horizontal';
  size?: CSSProperties['width'];
}
