---
layout: post
title:  "Code-Snippets的构想II"
date:   2016-04-11
author: GodJade
category: other
tags: [code-snippets]
---

<p class="intro">粗略地构思了一下Code-Snippets这个东西应该具备什么样的功能，写了一个文档，包括了一些基本的功能设计。并提出了一些问题待解决，或者有更好的解决方案。顺便捋了捋思路，自己大概也有了个了解。</p>


### 1.主要功能
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;对于我们开发时遇到的一些问题，也许也是在其它项目开发时经常遇到的。一般人的做法通常都是百度上找答案。但是百度上网友给出的回答要么太老现在不能用，要么是这个抄袭那个的——也不能用。真正解决问题的较少，而且找到可行方案太费时。
代码片段收集器能够方便开发者进行代码重（复）用，能够收集在开发时经常遇到的一些问题的代码片段。这些代码片段也许一行、也许两行或者一两百行，但是它们能解决某一类或某一种特定的问题。
### 2.技术需求
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;学生嘛，买一个服务器不划算。暂且将Code-Snippets托管在github上（目前是我的个人网站里）。
#### 2.1 前端技术
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Github page可以生成个人网站（也许这么说不专业，能理解就行）。所涉及到的技术有基本网页技术：HTML、CSS、JavaScript等（JQuery、Bootstrap）。然后还有Jekyll和Liquid模板语言来生成博客。关于Jekyll的使用参考官方网站https://jekyllrb.com
，Liquid模板语言的学习参考https://shopify.github.io/liquid/
。这两个网站好像都是托管在github上的（什么好像，太不严谨了吧）。
自己也是刚刚从头搭建好了本地的Jekyll环境。百度上大多是直接使用别人模板的文章，没有几篇干货。自己算是读过好几篇原味儿的官方英文文档，这周准备对静态博客从头搭建写一个系列的博客。
#### 2.2 后台技术
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;作为静态博客或者说静态网站，似乎没什么后台技术可言。数据库完全不用考虑。但是用什么来存储代码片段？（XML？）自己不是很了解。欢迎补充。

### 3.功能模块
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这一部分应该是最重要的吧。没设计好鬼也不会用。刚开始参考了一下淘宝FED前端团队成员之一的小胡子大神的设计（http://snippets.barretlee.com/）。细细思考觉得小胡子的设计比较小众，前端设计有甚多要修改的地方（这样点评大神是不是太过冒昧了）。然后找了几位同学就功能设计问题谈论了一些。
#### 3.1 分类功能模块
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;经研究，这一块儿功能真的非常重要啊。现在技术门类实在太多。分类功能设计不到位的话项目肯定在早期就直接夭折了。想想，要是别人想要查看某个类别的技术有没有自己需要的能够复用的代码段，本来是想找web技术相关的，结果花了大半天的功夫才在某个其他门类找到那肯定就纠结了。这么多时间也许自己再造十个轮子也够了。两个图片参考：
![1]({{ '/img/blog-relative/cato1.png' | prepend: site.baseurl }})
![2]({{ '/img/blog-relative/cato2.png' | prepend: site.baseurl }})
这个值得借鉴，或许有其他更合适的解决方案。此处需慎思。
#### 3.2 代码搜索功能
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果能够通过一个搜索框快速地搜索出相关类别的代码不是会更好？这样就不用通过分类标签一个一个找了。至于功能的实现结果，小胡子的snippets感觉还不错。也许可以模仿着重造一个，或许会有更好的解决方式。
#### 3.3	代码片段管理功能

##### 3.3.1	代码片段的存储功能
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;前面提到了是静态网页，所以就不可能使用数据库来存储代码片段的文本了。所以问题来了：用什么存储代码片段。
##### 3.3.2	代码片段的依赖关系
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;根据什么来取出(查看)相对应类别的代码片段。或许每个代码片段可以有一个类别属性，根据所选的类别，筛选出相应类别的代码。
类别和代码片段应该是多对多的关系。也就是说，一个类别有多个代码片段，一个代码片段当然也可能有多种类别，比如它既属于算法也属于C++。
觉得这里分类的话也可以参考github page托管的个人静态博客。每个代码段可以有一个Catogory的属性，Catogory下有一个tag的属性。（相当于二级目录）。
##### 3.3.3	代码片段评论功能
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果不知道这段代码如何使用，能解决哪一方面的问题。或者这段代码以前适用，但是别人开发者使用之后发现没用或者已经过时了。应该允许使用这段代码的人提供反馈。这个反馈机制完全可以使用”多说“的评论功能。这个功能在我的博客中已经实现。
##### 3.3.4	代码片段编辑功能
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;是否允许其他人编辑这段代码？个人觉得是不允许的。除非是管理员（也就是我们维护这个code-snippets的人，实际上也没有管理员）。
如果代码真的有问题，则由管理员来进行更新（或者是在github上发个issue，或者使用teambition,通知这段代码的提交者对代码进行更新，并填写相应说明）。
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;但这里有一个问题是：当代码段的种类和数量增多时就会变得难以管理也很难及时得到更新。有没有什么更合适的解决方案。
### 4.前端设计
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;暂时没有什么好的设计方案。目前只有这个鬼样子。
![1]({{ '/img/blog-relative/Code-Snippets.png' | prepend: site.baseurl }})
