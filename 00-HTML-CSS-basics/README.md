# 00-HTML-CSS-basics

### CSS 2.3 Specificity


:black_large_square: **If the class attribute finishes with r (example header, footer), the background must be magenta.**

```css
*[class$="r"] {
    background-color: magenta;
}
```
> Implemented in `style.css`


:black_large_square: **If the class attribute contains an a (example nav) but do NOT finish with r, the background must be blue.**

```css
*[class*="a"]:not([class$="r"]) {
    background-color: blue;
}
```
> Implemented in `style.css`


:black_large_square: **How could you add weight to the global font definition to win over the classes added by point 3?**

To win over the classes added by point 3, I would add this code in css :

```css
* {
    font-size: ??? px;
}
```
> ??? = Is your defining font size

After what is defined in point number 3.


:black_large_square: **Imagine there is a declaration like `class=”oh-no-inline-styles” style=”background:red”` and you need to change the background to green without changing the inline style. How could you accomplish this?**

I will defined this code CSS in `style.css` :

```css
.oh-no-inline-styles[style] {
    background-color: green !important;
}
```
This code asure change the style in class `oh-no-inline-styles`.

