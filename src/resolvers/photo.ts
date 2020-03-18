import { ImageResult } from "../sources";
import { Resolver } from "./shared";

export { file, original, custom, svg, colors } from "./shared";

export const small: Resolver<string, {}, ImageResult> = (
  id,
  _,
  { dataSources }
) => dataSources.Images.w45({ id });

export const medium: Resolver<string, {}, ImageResult> = (
  id,
  _,
  { dataSources }
) => dataSources.Images.w185({ id });

export const large: Resolver<string, {}, ImageResult> = (
  id,
  _,
  { dataSources }
) => dataSources.Images.h632({ id });
