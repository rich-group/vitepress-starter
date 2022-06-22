import{_ as s,c as a,o as n,a as e}from"./app.3b36183f.js";const u=JSON.parse('{"title":"\u8D77\u6B65","description":"","frontmatter":{},"headers":[{"level":2,"title":"vitepress-starter \u662F\u4EC0\u4E48?","slug":"vitepress-starter-\u662F\u4EC0\u4E48"},{"level":2,"title":"\u4E0B\u8F7D","slug":"\u4E0B\u8F7D"},{"level":2,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5"},{"level":2,"title":"\u4F7F\u7528","slug":"\u4F7F\u7528"},{"level":2,"title":"\u57FA\u7840\u914D\u7F6E","slug":"\u57FA\u7840\u914D\u7F6E"}],"relativePath":"guide.md","lastUpdated":1655878591000}'),l={name:"guide.md"},p=e(`<h1 id="\u8D77\u6B65" tabindex="-1">\u8D77\u6B65 <a class="header-anchor" href="#\u8D77\u6B65" aria-hidden="true">#</a></h1><blockquote><p>\u6587\u6863\uFF1A<a href="https://vitepress.vuejs.org/" target="_blank" rel="noopener noreferrer">https://vitepress.vuejs.org/</a></p></blockquote><h2 id="vitepress-starter-\u662F\u4EC0\u4E48" tabindex="-1">vitepress-starter \u662F\u4EC0\u4E48? <a class="header-anchor" href="#vitepress-starter-\u662F\u4EC0\u4E48" aria-hidden="true">#</a></h2><p>vitepress-starter \u662F\u4E00\u4E2A\u57FA\u4E8E vitepress \u7684\u6587\u6863\u5FEB\u901F\u5F00\u53D1\u6A21\u677F</p><h2 id="\u4E0B\u8F7D" tabindex="-1">\u4E0B\u8F7D <a class="header-anchor" href="#\u4E0B\u8F7D" aria-hidden="true">#</a></h2><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">git clone git@github.com:nanjingcaiyong/vitepress-starter.git</span></span>
<span class="line"></span></code></pre></div><h2 id="\u5B89\u88C5" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a></h2><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm i</span></span>
<span class="line"></span></code></pre></div><h2 id="\u4F7F\u7528" tabindex="-1">\u4F7F\u7528 <a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a></h2><p>\u542F\u52A8</p><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm run docs:dev</span></span>
<span class="line"></span></code></pre></div><p>\u53D1\u5E03\u6587\u6863\uFF08\u901A\u8FC7 husky pre-push\u94A9\u5B50\u8FDB\u884C\u53D1\u5E03\uFF09</p><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">git push</span></span>
<span class="line"></span></code></pre></div><h2 id="\u57FA\u7840\u914D\u7F6E" tabindex="-1">\u57FA\u7840\u914D\u7F6E <a class="header-anchor" href="#\u57FA\u7840\u914D\u7F6E" aria-hidden="true">#</a></h2><ol><li>\u4F7F\u7528\u4E09\u65B9\u7EC4\u4EF6\u5E93</li></ol><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> DefaultTheme </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vitepress/theme</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> ElementPlus </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">element-plus</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">element-plus/dist/index.css</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">DefaultTheme</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">enhanceApp</span><span style="color:#89DDFF;">({</span><span style="color:#A6ACCD;"> app </span><span style="color:#89DDFF;">})</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">use</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">ElementPlus</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><div class="language-md"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;Breadcrumb category=&quot;Other&quot; title=&quot;queryString&quot;/&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import Breadcrumb from &#39;../.vitepress/components/Breadcrumb.vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"></span></code></pre></div><ol start="2"><li>algolia\u641C\u7D22 <ul><li>\u524D\u5F80<a href="https://www.algolia.com/" target="_blank" rel="noopener noreferrer">algolia</a>\u6CE8\u518C\u8D26\u53F7\u3002\u4E3B\u8981\u83B7\u53D6apiKey\u3001appId\u3001indexName</li><li>\u4FEE\u6539\u9879\u76EE\u6A21\u677F docs/.vitepress/config.js \u5185 \u7684 algolia \u5B9E\u9645\u914D\u7F6E</li><li>\u672C\u5730\u722C\u866B\u83B7\u53D6\u4FE1\u606F\u63A8\u9001algolia, \u722C\u866B\u9879\u76EE\u5982\u4E0B\uFF1A</li></ul><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">git clone git@github.com:nanjingcaiyong/algolia-docsearch.git</span></span>
<span class="line"></span></code></pre></div><ul><li>\u6839\u636E\u5B9E\u9645\u914D\u7F6E\u4FEE\u6539\u6839\u76EE\u5F55\u4E0Bconfig.json</li><li>\u6267\u884C</li></ul><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">pipenv install </span></span>
<span class="line"><span style="color:#A6ACCD;">pipenv shell </span></span>
<span class="line"><span style="color:#A6ACCD;">./docsearch run ./config.json</span></span>
<span class="line"></span></code></pre></div></li></ol>`,18),o=[p];function t(r,c,i,d,y,D){return n(),a("div",null,o)}var A=s(l,[["render",t]]);export{u as __pageData,A as default};
