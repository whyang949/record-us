module.exports = {
  // // 行宽 default:80
  printWidth: 200,
  // tab 宽度 default:2
  tabWidth: 2,
  // 使用 tab 键 default:false
  useTabs: false,
  // 语句行末是否添加分号 default:true
  semi: false,
  // 是否使用单引号 default:false
  singleQuote: true,
  // 对象需要引号在加 default:"as-needed"
  quoteProps: 'as-needed',
  // jsx单引号 default:false
  jsxSingleQuote: true,
  // 最后一个对象元素加逗号 default:"es5"
  trailingComma: 'es5',
  // 在对象字面量声明所使用的的花括号后（{）和前（}）输出空格 default:true
  bracketSpacing: true,
  // 将 > 多行 JSX 元素放在最后一行的末尾，而不是单独放在下一行（不适用于自闭元素）。default:false
  jsxBracketSameLine: false,
  // (x) => {} 是否要有小括号 default:"always"W
  arrowParens: 'always',
  // default:0
  rangeStart: 0,
  // default:Infinity
  rangeEnd: Infinity,
  // default:false
  insertPragma: false,
  // default:false
  requirePragma: false,
  // 不包装 markdown text default:"preserve"
  proseWrap: 'never',
  // HTML空白敏感性 default:"css" 标签里面不能留空
  htmlWhitespaceSensitivity: 'ignore',
  // default:"auto"
  embeddedLanguageFormatting: 'auto',
  endOfLine: 'auto',
  overrides: [
    {
      files: '*.md',
      options: {
        tabWidth: 2,
      },
    },
  ],
}
