import { atomOneDark, CodeBlock as ReactCodeBlock } from 'react-code-blocks';

import { ICodeBlockProps } from './code-block.declarations';

export function CodeBlock({
  language = 'tsx',
  text,
  showLineNumbers = true,
}: ICodeBlockProps) {
  return (
    <ReactCodeBlock
      startingLineNumber={1}
      language={language}
      text={text}
      showLineNumbers={showLineNumbers}
      theme={{ ...atomOneDark, mode: 'dark' }}
      wrapLongLines={false}
    />
  );
}
