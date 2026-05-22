import{c as i,Q as a,j as n,m as l}from"./chunks/framework.BPKcPtvA.js";const g=JSON.parse('{"title":"技术内容写作系统","description":"","frontmatter":{},"headers":[],"relativePath":"notes/writing-system.md","filePath":"notes/writing-system.md","lastUpdated":1779433384000}'),t={name:"notes/writing-system.md"};function e(h,s,p,k,r,o){return a(),n("div",null,[...s[0]||(s[0]=[l(`<h1 id="技术内容写作系统" tabindex="-1">技术内容写作系统 <a class="header-anchor" href="#技术内容写作系统" aria-label="Permalink to &quot;技术内容写作系统&quot;">​</a></h1><div class="spring-meta"><span>writing</span><span>knowledge-base</span><span>workflow</span></div><h2 id="为什么需要系统" tabindex="-1">为什么需要系统 <a class="header-anchor" href="#为什么需要系统" aria-label="Permalink to &quot;为什么需要系统&quot;">​</a></h2><p>技术内容很容易散落在聊天记录、临时文件、仓库 README 和浏览器收藏夹里。短期看只是不好找，长期看会变成重复学习和重复排错。</p><p>我希望把内容分成三层：</p><ol><li><strong>Notes</strong>：记录可复用的知识点、命令、排错路径。</li><li><strong>Blog</strong>：讲完整问题，包含背景、方案、取舍和结果。</li><li><strong>Projects</strong>：把项目的目标、实现和仓库链接放在一起。</li></ol><h2 id="写作顺序" tabindex="-1">写作顺序 <a class="header-anchor" href="#写作顺序" aria-label="Permalink to &quot;写作顺序&quot;">​</a></h2><p>推荐顺序不是先写长文，而是先保留原始材料：</p><ol><li>记录问题现场：环境、版本、报错、链接。</li><li>写下最终解决步骤。</li><li>补充为什么这样做。</li><li>如果这个问题有复用价值，再整理成博客。</li><li>如果来自项目实践，再回填到 Projects。</li></ol><h2 id="单篇笔记模板" tabindex="-1">单篇笔记模板 <a class="header-anchor" href="#单篇笔记模板" aria-label="Permalink to &quot;单篇笔记模板&quot;">​</a></h2><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;"># 标题</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 场景</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">这篇笔记解决什么问题？</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 环境</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> OS:</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 版本:</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 依赖:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 步骤</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">1.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ...</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">2.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 坑点</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 现象：</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 原因：</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 解决：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 参考</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ...</span></span></code></pre></div><h2 id="维护原则" tabindex="-1">维护原则 <a class="header-anchor" href="#维护原则" aria-label="Permalink to &quot;维护原则&quot;">​</a></h2><ul><li>写具体版本，不写“最新版”。</li><li>命令和配置尽量可复制。</li><li>过时内容不要硬删，先标注状态。</li><li>同一个主题先集中，再拆分。</li></ul>`,13)])])}const c=i(t,[["render",e]]);export{g as __pageData,c as default};
