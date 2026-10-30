# Jade International School: verified source branding

Source: the original crest PNG displayed on [Jade's official Home page](https://www.jadeeducation.org/home), recovered from the rendered page on 30 October 2026. The client authorised finding the official files rather than waiting for an upload. The full PNG is stored unchanged at `/public/brand/jade-international-school-logo.png` (800 × 800). Its source URL and SHA-256 are in `/public/brand/SOURCE.json`.

## Pixel extraction

Read opaque pixels (alpha > 250), excluding white and black. Count exact RGB triplets in the green and purple colour clusters; use the most frequent exact pixel, not an approximation of the school name. No logo pixels were changed.

| Token | Hex | Evidence |
| --- | --- | --- |
| Leaf green | `#29B14D` | Most frequent green pixel: RGB(41, 177, 77), 2,252 pixels in the source PNG; laurel leaves. Broadly consistent with green lettering on the school's black shirts. |
| Crest purple | `#431448` | Most frequent purple pixel: RGB(67, 20, 72), 2,393 pixels; crest outline, symbols and wordmark. |
| Shield grey | `#E8E8EA` | Most frequent non-white neutral: RGB(232, 232, 234), 13,486 pixels; shield fill. |
| White | `#FFFFFF` | Original logo background; also explicitly allowed by the brief. |
| Black | `#000000` | Explicitly allowed by the brief; body text and photo-caption contrast. |
| Purple mist | `#F6F3F6` | Neutral tint: 5% crest purple + 95% white, channels rounded to nearest integer. |

Logo green is too light for normal white text. Buttons using leaf green use black text; purple buttons use white. No invented dark-jade, cream, sand or gold is part of the revised design. Photography keeps its original colours.

The six tokens are exposed in `app/brand.css`. The official logo is displayed as a complete image, without recolouring, a CSS filter, redrawing or an invented companion mark.
