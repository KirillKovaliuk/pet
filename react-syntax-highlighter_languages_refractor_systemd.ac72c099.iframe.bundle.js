"use strict";(self.webpackChunk_pet_source=self.webpackChunk_pet_source||[]).push([[6309],{"./node_modules/refractor/lang/systemd.js":module=>{function systemd(Prism){!function(Prism){var comment={pattern:/^[;#].*/m,greedy:!0},quotesSource=/"(?:[^\r\n"\\]|\\(?:[^\r]|\r\n?))*"(?!\S)/.source;Prism.languages.systemd={comment,section:{pattern:/^\[[^\n\r\[\]]*\](?=[ \t]*$)/m,greedy:!0,inside:{punctuation:/^\[|\]$/,"section-name":{pattern:/[\s\S]+/,alias:"selector"}}},key:{pattern:/^[^\s=]+(?=[ \t]*=)/m,greedy:!0,alias:"attr-name"},value:{pattern:RegExp(/(=[ \t]*(?!\s))/.source+"(?:"+quotesSource+'|(?=[^"\r\n]))(?:'+/[^\s\\]/.source+'|[ \t]+(?:(?![ \t"])|'+quotesSource+")|"+/\\[\r\n]+(?:[#;].*[\r\n]+)*(?![#;])/.source+")*"),lookbehind:!0,greedy:!0,alias:"attr-value",inside:{comment,quoted:{pattern:RegExp(/(^|\s)/.source+quotesSource),lookbehind:!0,greedy:!0},punctuation:/\\$/m,boolean:{pattern:/^(?:false|no|off|on|true|yes)$/,greedy:!0}}},punctuation:/=/}}(Prism)}module.exports=systemd,systemd.displayName="systemd",systemd.aliases=[]}}]);