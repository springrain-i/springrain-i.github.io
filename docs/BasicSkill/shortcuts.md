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