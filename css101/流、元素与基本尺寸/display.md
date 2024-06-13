# 3.1 *块级元素* 

*块级元素* 不等于 `display: block`;
```css
display: block;
display: list-item;
display: table;
```
同样对应*块级元素* 。

作用：*块级元素* 具有换行特性，所以可以配合`clear`属性来清除浮动带来的影响。

---

每个元素都有两个盒子，外在盒子&内在盒子。

css中的`display`属性，分别控制外在盒子&内在盒子的行为。
```
display: <display-outside> <display-inside>
<display-outside>: block | inline
<display-inside>: flow | flex | grid ｜ table | flow-root | ruby
```

# 3.2 width/height作用的具体细节

1. width: auto

表现为“外部尺寸”的块级元素，一旦被设置`width`属性，就失去了流的特性。

鑫三无准则：无宽度，无浮动，无图片

2. width在外部尺寸｜内部尺寸的表现行为

3. 盒子模型 content-box | border-box

content-box缺点：a.书写直觉不一致，需要计算；b.限制了宽度，失去了流的灵活性。

解决：

a.宽度分离原则。width独占一层父级标签，padding,border,margin占一层子标签。缺点：导致<html>结构复杂。

b.设置为border-box。谨慎全局使用：* { box-sizing: border-box }

替换元素&不可替换元素

border-box着重对替换元素产生作用，如`<textarea><input>`
应该这么用
```css
input, textarea, image, video, object {
  box-sizing: border-box;
}
```

4. height

# 3.3 (max- | min- )width | height

初始值：min-\*: auto; max-\*: none

覆盖规则：min-\* > max-\* > !important > (width | height)

# 3.4 *内联元素* 

*块级元素*负责结构，*内联元素*负责内容。

常见：图、文

同样：*内联元素* 不等于 `display: block`;* 不等于 `display: block`;