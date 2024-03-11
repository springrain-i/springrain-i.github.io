# 收藏的快捷键
* Vscode:
  * vscode创建新窗口 ctrl + shift + n
  * F11 全屏，确保专注
  * Ctrl + K Z 圣禅模式
  * Ctrl + W 关闭该标签页
  * Alt + 1~8 切换标签页,Alt + 9 切换到最后一个标签页
  * 快速回到顶部 ： ctrl + home,快速回到底部 : ctrl + end
  * Ctrl + 右箭头,将光标移动到下一个单词的开头 
  * Ctrl + M ,数学公式
  * Ctrl + PgUp，左移 Ctrl + PgDn 右移
* Window:
  * window+H 笔记本的语音输入
  * window+V 剪贴板
  * window + 1,2,3 切换到对应的应用界面
* Edge:
  * Ctrl + 1~8 切换标签页,Alt+9 切换到最后一个标签页
  * Ctrl + Tab 切换到下一标签页
  * Ctrl + T 创建新标签页，Ctrl + W 关闭该标签页

# 自定义vscode快捷键
1. Ctrl+K ,Ctrl+S 打开快捷键设置
2. 点击右上角Open Keyboard Shortcuts
3. 开始自定义,例子如下
```js
    {
        "key": "ctrl+m",
        "command": "editor.action.insertSnippet",
        "when": "editorTextFocus",
        "args": {
            "snippet": "$ ${TM_SELECTED_TEXT}$1 $ $2" 
        }
    },
    {
        "key": "ctrl+1",
        "command": "editor.action.insertSnippet",
        "when": "editorTextFocus",
        "args": {
            "snippet": "\\begin{center}\n    \\includegraphics{$1}\n\\end{center}$2" 
        }
    },
``` 