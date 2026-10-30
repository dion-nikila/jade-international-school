import NextImage, {type ImageProps} from "next/image";
import {assetPath} from "@/lib/assets";

export default function SchoolImage(props: ImageProps) {
  const src = typeof props.src === "string" ? assetPath(props.src) : props.src;
  return <NextImage {...props} src={src}/>;
}
