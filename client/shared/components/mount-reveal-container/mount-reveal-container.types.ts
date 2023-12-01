import type { CSSProperties } from "vue";

export interface Props {
  delay: number;
  initialOpactity?: number;
  offset?: CSSProperties['translate'];
  is?: keyof HTMLElementTagNameMap;
}
