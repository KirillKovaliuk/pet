"use strict";(self.webpackChunk_pet_source=self.webpackChunk_pet_source||[]).push([[8755],{"./node_modules/refractor/lang/bbcode.js":module=>{function bbcode(Prism){Prism.languages.bbcode={tag:{pattern:/\[\/?[^\s=\]]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'"\]=]+))?(?:\s+[^\s=\]]+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'"\]=]+))*\s*\]/,inside:{tag:{pattern:/^\[\/?[^\s=\]]+/,inside:{punctuation:/^\[\/?/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'"\]=]+)/,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\]/,"attr-name":/[^\s=\]]+/}}},Prism.languages.shortcode=Prism.languages.bbcode}module.exports=bbcode,bbcode.displayName="bbcode",bbcode.aliases=["shortcode"]}}]);