import{o as n,c as a,a as s}from"./app.6092a699.js";const t='{"title":"Modal 弹窗","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"useModal","slug":"usemodal"},{"level":2,"title":"useModalInner","slug":"usemodalinner"},{"level":3,"title":"Usage","slug":"usage-1"},{"level":2,"title":"Props","slug":"props"},{"level":2,"title":"Events","slug":"events"},{"level":2,"title":"Slots","slug":"slots"}],"relativePath":"components/modal.md","lastUpdated":1713422358317}',p={},o=s('<h1 id="modal-弹窗"><a class="header-anchor" href="#modal-弹窗" aria-hidden="true">#</a> Modal 弹窗</h1><p>对 antv 的 modal 组件进行封装，扩展拖拽，全屏，自适应高度等功能</p><p>代码路径 <a href="https://github.com/vbenjs/vue-vben-admin/tree/main/src/components/Modal" target="_blank" rel="noopener noreferrer">src/components/Modal</a></p><h2 id="usage"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><p><strong>由于弹窗内代码一般作为单文件组件存在，也推荐这样做，所以示例都为单文件组件形式</strong></p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>注意 <code>v-bind=&quot;$attrs&quot;</code>记得写，用于将弹窗组件的 <code>attribute</code> 传入 <code>BasicModal</code> 组件</p></div><div class="language-vue"><pre><code>// Modal.vue\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BasicModal</span> <span class="token attr-name">v-bind</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$attrs<span class="token punctuation">&quot;</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Modal Title<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:helpMessage</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[<span class="token punctuation">&#39;</span>提示1<span class="token punctuation">&#39;</span>, <span class="token punctuation">&#39;</span>提示2<span class="token punctuation">&#39;</span>]<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    Modal Info.\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>BasicModal</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> BasicModal <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/components/Modal&#39;</span><span class="token punctuation">;</span>\n  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    components<span class="token operator">:</span> <span class="token punctuation">{</span> BasicModal <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><p><strong>页面引用弹窗</strong></p><div class="language-vue"><pre><code>// Page.vue\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>px-10<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Modal</span> <span class="token attr-name">@register</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>register<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> useModal <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/components/Modal&#39;</span><span class="token punctuation">;</span>\n  <span class="token keyword">import</span> Modal <span class="token keyword">from</span> <span class="token string">&#39;./Modal.vue&#39;</span><span class="token punctuation">;</span>\n  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    components<span class="token operator">:</span> <span class="token punctuation">{</span> Modal <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">const</span> <span class="token punctuation">[</span>register<span class="token punctuation">,</span> <span class="token punctuation">{</span> openModal <span class="token punctuation">}</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useModal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token keyword">return</span> <span class="token punctuation">{</span>\n        register<span class="token punctuation">,</span>\n        openModal<span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="usemodal"><a class="header-anchor" href="#usemodal" aria-hidden="true">#</a> useModal</h2><p>用于外部组件调用</p><p><strong>useModal</strong> 用于操作组件</p><div class="language-ts"><pre><code><span class="token keyword">const</span> <span class="token punctuation">[</span>register<span class="token punctuation">,</span> <span class="token punctuation">{</span> openModal<span class="token punctuation">,</span> setModalProps <span class="token punctuation">}</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useModal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><p><strong>register</strong></p><p>register 用于注册 <code>useModal</code>，如果需要使用 <code>useModal</code> 提供的 api，必须将 <code>register</code> 传入组件的 <code>onRegister</code>。</p><p>原理其实很简单，就是 vue 的组件子传父通信，内部通过 <code>emit(&quot;register&quot;，instance)</code> 实现。</p><p>同时独立出去的组件需要将 <code>attrs</code> 绑定到 <code>BasicModal</code> 上面。</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BasicModal</span> <span class="token attr-name">v-bind</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$attrs<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>BasicModal</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><p><strong>openModal</strong></p><p>用于打开/关闭弹窗</p><div class="language-tsx"><pre><code><span class="token comment">// true/false: 打开关闭弹窗</span>\n<span class="token comment">// data: 传递到子组件的数据</span>\n<span class="token function">openModal</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><p><strong>closeModal</strong></p><p>用于关闭弹窗</p><div class="language-ts"><pre><code><span class="token function">closeModal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><p><strong>setModalProps</strong></p><p>用于更改 modal 的 props 参数因为 modal 内容独立成组件，如果在外部页面需要更改 props 可能比较麻烦，所以提供 <strong>setModalProps</strong> 方便更改内部 modal 的 props</p><p><a href="#Props">Props</a> 内容可以见下方</p><div class="language-ts"><pre><code><span class="token function">setModalProps</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><h2 id="usemodalinner"><a class="header-anchor" href="#usemodalinner" aria-hidden="true">#</a> useModalInner</h2><p>用于独立的 Modal 内部调用</p><h3 id="usage-1"><a class="header-anchor" href="#usage-1" aria-hidden="true">#</a> Usage</h3><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BasicModal</span>\n    <span class="token attr-name">v-bind</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$attrs<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">@register</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>register<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Modal Title<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">:helpMessage</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[<span class="token punctuation">&#39;</span>提示1<span class="token punctuation">&#39;</span>, <span class="token punctuation">&#39;</span>提示2<span class="token punctuation">&#39;</span>]<span class="token punctuation">&quot;</span></span>\n  <span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>closeModal<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mr-2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>从内部关闭弹窗<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-button</span><span class="token punctuation">&gt;</span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>setModalProps<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>从内部修改title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-button</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>BasicModal</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> BasicModal<span class="token punctuation">,</span> useModalInner <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/components/Modal&#39;</span><span class="token punctuation">;</span>\n  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    components<span class="token operator">:</span> <span class="token punctuation">{</span> BasicModal <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">const</span> <span class="token punctuation">[</span>register<span class="token punctuation">,</span> <span class="token punctuation">{</span> closeModal<span class="token punctuation">,</span> setModalProps <span class="token punctuation">}</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useModalInner</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token keyword">return</span> <span class="token punctuation">{</span>\n        register<span class="token punctuation">,</span>\n        closeModal<span class="token punctuation">,</span>\n        <span class="token function-variable function">setModalProps</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n          <span class="token function">setModalProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">&#39;Modal New Title&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><p><strong>useModalInner</strong>用于操作独立组件</p><div class="language-ts"><pre><code><span class="token keyword">const</span> <span class="token punctuation">[</span>register<span class="token punctuation">,</span> <span class="token punctuation">{</span> closeModal<span class="token punctuation">,</span> setModalProps <span class="token punctuation">}</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useModalInner</span><span class="token punctuation">(</span>callback<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><p><strong>callback</strong></p><p>type: <code>(data:any)=&gt;void</code></p><p>回调函数用于接收 openModal 第二个参数传递的值</p><div class="language-ts"><pre><code><span class="token function">useModal</span><span class="token punctuation">(</span><span class="token punctuation">(</span>data<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><p><strong>closeModal</strong></p><p>用于关闭弹窗</p><div class="language-ts"><pre><code><span class="token function">closeModal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><p><strong>changeOkLoading</strong></p><p>用于修改确认按钮的 loading 状态</p><div class="language-ts"><pre><code><span class="token function">changeOkLoading</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><p><strong>changeLoading</strong></p><p>用于修改 modal 的 loading 状态</p><div class="language-tsx"><pre><code><span class="token comment">// true or false</span>\n<span class="token function">changeLoading</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><p><strong>setModalProps</strong></p><p>用于更改 modal 的 props 参数因为 modal 内容独立成组件，如果在外部页面需要更改 props 可能比较麻烦，所以提供 <strong>setModalProps</strong> 方便更改内部 modal 的 props</p><p><a href="#Props">Props</a> 内容可以见下方</p><h2 id="props"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>除以下参数外，组件库文档内的 props 也都支持，具体可以参考 <a href="https://2x.antdv.com/components/modal-cn/#API" target="_blank" rel="noopener noreferrer">antv modal</a></p></div><table><thead><tr><th>属性</th><th>类型</th><th>默认值</th><th>可选值</th><th>说明</th></tr></thead><tbody><tr><td>title</td><td><code>string</code></td><td>-</td><td>-</td><td>modal 标题</td></tr><tr><td>height</td><td><code>number</code></td><td>-</td><td>-</td><td>固定 modal 的高度</td></tr><tr><td>minHeight</td><td><code>number</code></td><td>-</td><td>-</td><td>设置 modal 的最小高度</td></tr><tr><td>draggable</td><td><code>boolean</code></td><td>true</td><td>true/false</td><td>是否开启拖拽</td></tr><tr><td>useWrapper</td><td><code>boolean</code></td><td>true</td><td>true/false</td><td>是否开启自适应高度，开启后会跟随屏幕变化自适应内容，并出现滚动条</td></tr><tr><td>wrapperFooterOffset</td><td><code>number</code></td><td>0</td><td>-</td><td>开启是适应高度后，如果超过屏幕高度，底部和顶部会保持一样的间距，该参数可以用来缩小底部的间距</td></tr><tr><td>canFullscreen</td><td><code>boolean</code></td><td>true</td><td>true/false</td><td>是否可以进行全屏</td></tr><tr><td>defaultFullscreen</td><td><code>boolean</code></td><td>false</td><td>true/false</td><td>默认全屏</td></tr><tr><td>loading</td><td><code>boolean</code></td><td>false</td><td>true/false</td><td>loading 状态</td></tr><tr><td>loadingTip</td><td><code>string</code></td><td>-</td><td>-</td><td>loading 文本</td></tr><tr><td>showCancelBtn</td><td><code>boolean</code></td><td>true</td><td>true/false</td><td>显示关闭按钮</td></tr><tr><td>showOkBtn</td><td><code>boolean</code></td><td>true</td><td>true/false</td><td>显示确认按钮</td></tr><tr><td>helpMessage</td><td><code>string , string[]</code></td><td>-</td><td>-</td><td>标题右侧提示文本</td></tr><tr><td>centered</td><td><code>boolean</code></td><td>false</td><td>true/false</td><td>是否居中弹窗</td></tr><tr><td>cancelText</td><td><code>string</code></td><td>&#39;关闭&#39;</td><td>-</td><td>关闭按钮文本</td></tr><tr><td>okText</td><td><code>string</code></td><td>&#39;保存&#39;</td><td>-</td><td>确认按钮文本</td></tr><tr><td>closeFunc</td><td><code>() =&gt; Promise&lt;boolean&gt;</code></td><td>关闭函数</td><td>-</td><td>关闭前执行，返回 true 则关闭，否则不关闭</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events</h2><table><thead><tr><th>事件</th><th>回调参数</th><th>说明</th></tr></thead><tbody><tr><td>ok</td><td><code>function(e)</code></td><td>点击确定回调</td></tr><tr><td>cancel</td><td><code>function(e)</code></td><td>点击取消回调</td></tr><tr><td>visible-change</td><td><code>(visible:boolean)=&gt;{}</code></td><td>打开或者关闭触发</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots" aria-hidden="true">#</a> Slots</h2><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>默认区域</td></tr><tr><td>footer</td><td>底部区域(会替换掉默认的按钮)</td></tr><tr><td>insertFooter</td><td>关闭按钮的左边(不使用 footer 插槽时有效)</td></tr><tr><td>centerFooter</td><td>关闭按钮和确认按钮的中间(不使用 footer 插槽时有效)</td></tr><tr><td>appendFooter</td><td>确认按钮的右边(不使用 footer 插槽时有效)</td></tr></tbody></table>',57);p.render=function(s,t,p,e,c,l){return n(),a("div",null,[o])};export default p;export{t as __pageData};
