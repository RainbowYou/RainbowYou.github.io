---
layout: post
title:  "Introduction"
date:   2016-04-14
author: GodJade
category: liquid
tags: [github,jekyll]
---

<p class="intro">为了方便别人学习，将Liquid官网上的原文翻译过来。措辞不当或不足之处还望指正。</p>
<hr><br>

Liquid代码可以分为对象(objects)、标签(tags)、过滤器(filters)。
### 对象(Objects)
对象告诉Liquid在页面的何处显示内容。对象和变量名用两个大括号围起来表示：{% raw %}{{ page.title }}{% endraw %}。
<br><br>
<strong>Input</strong><br><hr>

```liquid
  {% raw %}
    {{ page.title }}
  {% endraw %}
```
<hr>
<strong>Output</strong><br><hr>
Introduction
<hr>
这样，Liquid就能用名为page.title的对象渲染文本，并且该对象包含文本内容为“Introduction”。
### 标签(Tags)
标签为模板创建逻辑和控制流。它们用大括号和百分号表示。
这个在标签里使用的标记并不产生任何可见文本。这意味着你可以给变量赋值并且在没有在页面上展示任何逻辑的情况下创建条件和循环。
<br><br>
<strong>Input</strong><br><hr>

```liquid
  {% raw %}
    {% if user %}
      Hello {{user.name}}
    {% endif %}
  {% endraw %}
```
<hr>
<strong>Output</strong><br><hr>
Hello Adam!
<hr>
标签可以分为三种类型：
<ul>
  <li>控制流(Control flow)</li>
  <li>迭代(Iteration)</li>
  <li>变量赋值(Variable assignments)</li>
</ul>
你可以在各个相关章节里阅读更多的关于标签的每种类型。
### 过滤器(Filters)
<b>过滤器</b>改变Liquid对象的输出。它们被使用在输出里面并且被一个"|"所分开。
<br><br><strong>Input</strong><hr>
{% highlight liquid %}
  {% raw %}
    {{ "/my/fancy/url" | append: ".html" }}
  {% endraw %}
{% endhighlight %}
<hr>
<strong>Output</strong><br><hr>
/my/fancy/url.html
<hr>
