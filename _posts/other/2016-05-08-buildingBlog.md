---
layout: post
title:  "使用Github Page搭建个人静态博客"
date:   2016-05-08
image:  
author: GodJade
category: FED
tags: [github,jekyll]
---

其实想写这篇博客很久了，但一直都没有勇气写下去。一是因为时间问题，二是觉得如果真要从本地环境配置开始写起，再到博客前端搭建，有很多内容要写。但是为了活跃校内的前端氛围，决定拿出点儿元老级别的干货来。
自己在个人博客的搭建过程中遇到过很多问题。也上网查阅了一部分资料。有百度过来的，不过遇到问题时更多的还是看官网上的文档。

### 1. 本地环境搭建
这一部分是必不可少的。个人配置本地环境最主要的目的是能预览自己写好的博客的样子。
#### 1.1 必要软件下载
这部分内容参考自Jekyll官网（https://jekyllrb.com/docs/installation/）。不想看英文的看这里。
我们需要下载一些东西：

- 下载Rubyhttp://rubyinstaller.org/downloads/。左边的downloads中有一堆链接，推荐下载安装Ruby 2.0.x及以上的版本。
- 下载Ruby Development Kithttp://rubyinstaller.org/downloads/（没错，还是这个链接）。在下载这个之前先看在右边找到<b>WHICH DEVELOPMENT KIT?</b>，根据下载的Ruby版本选择相应的Development kit。下载好之后选择解压到新建的目录中（我是解压到的C盘，目录名为Ruby-toolkit)。
- 下载RubyGems https://rubygems.org/pages/download 。
- 下载Node.js
- 下载pythonhttps://www.python.org/downloads/。

#### 1.2 乱七八糟的软件安装
从这里开始，由于在windows上有一些问题，所以针对windows有一些不同的解决方案。内容参考自https://jekyllrb.com/docs/installation/。
你们看原文去吧。
啊喂！！！什么鬼！怎么能这样！
同情心太重，还是亲自手敲一段文字好了。
##### 1.2.1 安装Ruby
![ruby path]({{ '/img/FED/ruby-path.png' | prepend: site.baseurl }})

对，然后点击install就行。
##### 1.2.2 Ruby Development Kit
Ruby DevKit是一个自解压文档。当你执行该文件的时候，它会询问你要解压到的目录。可以首先建一个名字没有空格的目录，比如C:\RubyDevKit\。
然后，你需要初始化DevKit并将它绑定到你的Ruby上。打开命令行，输入如下命令“cd C:\RubyDevKit\”然后按回车进入Devkit目录。接着输入命令“ruby dk.rb init”，最后“ruby dk.rb install”。如果一切都正常进行的话，就可以接着执行下一步了。
##### 1.2.3 RubyGems
在命令行中输入“gem install jekyll”然后回车。不要尝试安装Jekyll v1.4.3（别问我为什么，我忘了）。
##### 1.2.4 安装语法高亮工具
有两个语法高亮工具，一个是Rouge，一个是Pygments。Pygments支持的语法更多，但是安装配置比较麻烦（我弄这个失败了。。。）。所以，只介绍Rouge的安装。命令行中输入“gem install rouge”。然后创建博客目录后需要在配置文件中加入“highlighter: rouge”。这个稍后会提到，这里了解即可。关于python的安装，这里不介绍，这个和Pygments有关。有兴趣参考http://jekyll-windows.juthilo.com/3-syntax-highlighting/。
##### 1.2.5 安装Jekyll
在命令行中输入“gem install jekyll”。或者“gem install jekyll --pre”安装前一个版本，或者“gem install jekyll -v '2.0.0.alpha.1'”安装你想要的版本。

到这里，本地环境配置应该结束了。

### 博客配置
已经敲不动了（快六点半了，饿！）。说实话，这部分也很烦啊。
为了能用Github Page搭建静态博客，首先你得要有一个Github账号，注册一个（不用我教怎么做吧）。然后登陆Github
