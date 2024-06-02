"use strict";(self.webpackChunk_pet_source=self.webpackChunk_pet_source||[]).push([[4530],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>DocsRenderer});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.XA,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.zE,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Sw},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,children)}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.kQ;return new Promise(((resolve,reject)=>{__webpack_require__.e(1294).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then((({MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.d)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(TDocs,{context,docsParameter}))),element))).then((()=>resolve()))}))},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.H)(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W8:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.W8});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./libs/ui/src/stories/docs/forms.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,__page:()=>__page,default:()=>forms_stories});var _path,_path2,_path3,_path4,_path5,_path6,_path7,_path8,_path9,_path10,_path11,_path12,react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),storybook=__webpack_require__("./libs/ui/src/utils/storybook/index.ts");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const docs_forms=function SvgForms(props){return react.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1053.169 1090.045"},props),_path||(_path=react.createElement("path",{fill:"none",d:"M0 0h1053.169v1090.045H0z"})),_path2||(_path2=react.createElement("path",{fill:"none",stroke:"currentColor",strokeDasharray:"8 12",strokeLinecap:"round",strokeWidth:4.5,d:"M89.75 85.658c180.42.33 360.96.51 870.75 0m0 0c19.34-1.22 32.52 9.17 32 32m0 0c2.2 315.13 1.55 630.68 0 790.37m0 0c.97 19.9-10.7 31.45-32 32m0 0c-189.55-2.7-378-2.48-870.75 0m0 0c-23.01-1.31-31.78-10.33-32-32m0 0c-2.12-246.58-3.64-491.97 0-790.37m0 0c1.42-20.98 11.81-32.54 32-32"})),_path3||(_path3=react.createElement("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeWidth:4,d:"M126.708 214.667c262.74-2.56 527.23-3.14 800.18 0m-800.18 0c191.36.35 382.94.39 800.18 0m0 0c13.21-1.6 23.52 8.39 21.56 21.56m-21.56-21.56c14-1.01 21.19 7 21.56 21.56m0 0c-1.06 7.86-1.93 16.98 0 43.13m0-43.13c.9 13.5.02 26.2 0 43.13m0 0c-.4 15.43-7.66 21.69-21.56 21.57m21.56-21.57c-1.35 12.69-9.1 22.46-21.56 21.57m0 0c-206.02-1.24-410.99-1.38-800.18 0m800.18 0c-183 .41-365.19.33-800.18 0m0 0c-14.35 1.73-21.7-8.93-21.56-21.57m21.56 21.57c-16.3.61-23.2-7.56-21.56-21.57m0 0c-.08-17.6 1.35-30.72 0-43.13m0 43.13c-.64-10.49.63-21.43 0-43.13m0 0c1.75-13.26 6.21-23.47 21.56-21.56m-21.56 21.56c-.36-15.14 7.69-23.33 21.56-21.56"})),react.createElement("text",{x:73.828,y:27.038,fill:"currenColor",dominantBaseline:"alphabetic",fontFamily:"Inter",fontSize:28,style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(452.97 240.996)"},"TextField"),_path4||(_path4=react.createElement("path",{fill:"none",stroke:"currentColor",strokeDasharray:"8 12",strokeLinecap:"round",strokeWidth:4.5,d:"M113.653 153.81c251.86-1.59 504.1-2.64 825.87 0m0 0c20.81 1.77 32.5 11.9 32 32m0 0c-1.68 39.02-1.28 78.58 0 105.13m0 0c-.28 23.04-9.07 30.74-32 32m0 0c-185.34 1.73-371.02 1.09-825.87 0m0 0c-20.64 1.68-31.38-10.22-32-32m0 0c1.8-32.34-.38-63.13 0-105.13m0 0c-1.75-22.67 12.23-30.21 32-32"})),react.createElement("text",{y:27.038,fill:"currentColor",dominantBaseline:"alphabetic",fontFamily:"Inter",fontSize:28,style:{whiteSpace:"pre"},transform:"translate(36.802 33.336)"},"Form"),react.createElement("text",{y:27.038,fill:"currentColor",dominantBaseline:"alphabetic",fontFamily:"Inter",fontSize:28,style:{whiteSpace:"pre"},transform:"translate(77.762 104.582)"},"FormContext"),_path5||(_path5=react.createElement("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeWidth:4,d:"M42 10c335.04.32 672.18.73 969.17 0M42 10c266.27.02 532.39.14 969.17 0m0 0c19.56 1.42 31.97 11.6 32 32m-32-32c19.39.63 31.32 11.83 32 32m0 0c-3.76 247.38-3.76 495.22 0 1006.05m0-1006.05c.03 276.57-.43 552.61 0 1006.05m0 0c-.19 20.67-10.35 32.21-32 32m32-32c-1.4 23.16-9.55 29.88-32 32m0 0c-268.06.46-538.22.36-969.17 0m969.17 0c-297.15.75-593.46.98-969.17 0m0 0c-20.84-.77-31.02-11.79-32-32m32 32c-19.89.92-31.47-9.69-32-32m0 0C12.03 740.93 12.5 435.38 10 42m0 1006.05C6.93 772.16 7.27 496.29 10 42m0 0c1.25-21.9 12.19-32.04 32-32M10 42c2.05-22.46 8.8-33.4 32-32"})),react.createElement("text",{y:27.038,fill:"currentColor",dominantBaseline:"alphabetic",fontFamily:"Inter",fontSize:28,style:{whiteSpace:"pre"},transform:"translate(105.24 166.174)"},"FormField"),_path6||(_path6=react.createElement("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeWidth:4,d:"M128.442 409.113c265.07-3.56 530.82-2.64 800.18 0m-800.18 0c249.65-.71 498.43-.72 800.18 0m0 0c12.64-.06 23.44 8.15 21.56 21.56m-21.56-21.56c12.37-1.47 23.63 9.23 21.56 21.56m0 0c1.02 14.96-.68 31.16 0 43.13m0-43.13c-.92 8.98.24 19.77 0 43.13m0 0c1.03 15.94-8.74 20.12-21.56 21.57m21.56-21.57c-1.55 15.94-8.97 20.03-21.56 21.57m0 0c-240.94-1.46-480.15-.6-800.18 0m800.18 0c-160.28-1.63-321.24-1.67-800.18 0m0 0c-13.59.25-20.37-6.76-21.56-21.57m21.56 21.57c-14.59-1.2-21.96-5.07-21.56-21.57m0 0c.96-11.31.33-19.56 0-43.13m0 43.13c.48-14.94.1-31.29 0-43.13m0 0c-.24-12.64 6.43-19.86 21.56-21.56m-21.56 21.56c1.92-15.43 4.98-21.11 21.56-21.56"})),react.createElement("text",{x:90.234,y:27.038,fill:"currentColor",dominantBaseline:"alphabetic",fontFamily:"Inter",fontSize:28,style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(438.298 435.442)"},"MaskedField"),_path7||(_path7=react.createElement("path",{fill:"none",stroke:"currentColor",strokeDasharray:"8 12",strokeLinecap:"round",strokeWidth:4.5,d:"M115.387 348.256c204.62-1.96 409.24-1.49 825.87 0m0 0c21.51-1.38 32.11 8.93 32 32m0 0c-.75 29.96 2.79 64.25 0 105.13m0 0c.83 21.66-10.73 32.95-32 32m0 0c-257.56 2.62-514.51 2.15-825.87 0m0 0c-23.03.68-31.76-9.63-32-32m0 0c-.53-38.37-.73-80.78 0-105.13m0 0c.01-20.95 9.82-33.66 32-32"})),react.createElement("text",{y:27.038,fill:"currentColor",dominantBaseline:"alphabetic",fontFamily:"Inter",fontSize:28,style:{whiteSpace:"pre"},transform:"translate(106.973 360.62)"},"FormField"),_path8||(_path8=react.createElement("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeWidth:4,d:"M128.14 603.416c185.04 1.85 368.82 2.02 800.18 0m-800.18 0c263.42.4 527.15.64 800.18 0m0 0c15.66 1.41 23.39 6.27 21.56 21.56m-21.56-21.56c14.25-.59 20.24 6.42 21.56 21.56m0 0c-.71 12.78 1.06 28.82 0 43.13m0-43.13c-.37 13.28-.41 25.51 0 43.13m0 0c-.57 12.55-7.19 22.93-21.56 21.57m21.56-21.57c-1.32 12.57-5.82 22.97-21.56 21.57m0 0c-260.4 2.07-521.99 1.5-800.18 0m800.18 0c-311.01-2.34-622.02-2.79-800.18 0m0 0c-13.43 1.28-21.34-6.62-21.56-21.57m21.56 21.57c-16.01-1.73-23.6-5.02-21.56-21.57m0 0c.11-16.47.78-29.61 0-43.13m0 43.13c.55-15.18 1.26-31.32 0-43.13m0 0c-1.25-12.58 8.21-20.19 21.56-21.56m-21.56 21.56c.28-12.15 8.17-22.65 21.56-21.56"})),react.createElement("text",{x:49.219,y:27.038,fill:"currentColor",dominantBaseline:"alphabetic",fontFamily:"Inter",fontSize:28,style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(479.012 629.745)"},"Select"),_path9||(_path9=react.createElement("path",{fill:"none",stroke:"currentColor",strokeDasharray:"8 12",strokeLinecap:"round",strokeWidth:4.5,d:"M115.084 542.559c208.53 1.41 416.51.36 825.87 0m0 0c21.78-1.1 33.64 11.95 32 32m0 0c.86 38.46-.18 77.27 0 105.13m0 0c.83 20.85-11.31 31.39-32 32m0 0c-167.36-1.36-334.43-1.2-825.87 0m0 0c-21.14-.47-33.7-11.23-32-32m0 0c-1.15-23.47 1.19-42.58 0-105.13m0 0c.53-20.13 12.01-30.22 32-32"})),react.createElement("text",{y:27.038,fill:"currentColor",dominantBaseline:"alphabetic",fontFamily:"Inter",fontSize:28,style:{whiteSpace:"pre"},transform:"translate(106.671 554.923)"},"FormField"),_path10||(_path10=react.createElement("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeWidth:4,d:"M769.404 965.907c68.78.78 139.85-.56 205.63 0m-205.63 0c62.64-.93 124.66-1.23 205.63 0m0 0c14 .13 22.46 7.88 21.57 21.56m-21.57-21.56c13.61-.87 22.75 6.03 21.57 21.56m0 0c-.35 14.42-1.02 27.03 0 43.13m0-43.13c.91 10.5-.83 20.36 0 43.13m0 0c1.2 14.23-7.85 22.59-21.57 21.57m21.57-21.57c1.98 16-4.93 22.34-21.57 21.57m0 0c-72.02-1.34-145.46-.21-205.63 0m205.63 0c-69.85-.8-137.68-.86-205.63 0m0 0c-12.85-.93-21.99-6.65-21.56-21.57m21.56 21.57c-12.61.59-19.55-6.14-21.56-21.57m0 0c-.11-12.82-1.32-21.53 0-43.13m0 43.13c-1.04-14.2-.83-28.8 0-43.13m0 0c-1.61-15.25 8.35-20.56 21.56-21.56m-21.56 21.56c-.93-13.59 5.67-23.66 21.56-21.56"})),react.createElement("text",{x:49.219,y:27.038,fill:"currentColor",dominantBaseline:"alphabetic",fontFamily:"Inter",fontSize:28,style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(823.004 992.236)"},"Submit"),_path11||(_path11=react.createElement("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeWidth:4,d:"M128.38 803.031c301.67-2.94 603.57-2.01 800.18 0m-800.18 0c221.32.96 442.71 1.28 800.18 0m0 0c14.77.2 19.91 5.79 21.56 21.56m-21.56-21.56c13.24-1.22 23.44 7.94 21.56 21.56m0 0c-1.47 10.98.08 26.1 0 43.13m0-43.13c-.25 16.4 1.28 31.99 0 43.13m0 0c-1.47 12.91-5.78 20.06-21.56 21.57m21.56-21.57c2.28 16.4-7.88 19.73-21.56 21.57m0 0c-187.33-1.47-375.65-2.12-800.18 0m800.18 0c-167.89 1.04-336 .28-800.18 0m0 0c-14.41.2-19.61-5.49-21.56-21.57m21.56 21.57c-16.1-1.35-21.02-5.47-21.56-21.57m0 0c.77-7.72-2.21-19.39 0-43.13m0 43.13c-1.11-13.51-.67-25.9 0-43.13m0 0c1.26-14.55 8.11-22.82 21.56-21.56m-21.56 21.56c2.1-14.79 7.62-22.21 21.56-21.56"})),react.createElement("text",{x:65.625,y:27.038,fill:"currentColor",dominantBaseline:"alphabetic",fontFamily:"Inter",fontSize:28,style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(462.846 829.36)"},"Checkbox"),_path12||(_path12=react.createElement("path",{fill:"none",stroke:"currentColor",strokeDasharray:"8 12",strokeLinecap:"round",strokeWidth:4.5,d:"M115.325 742.174c223.51-2.11 447.1-2.97 825.87 0m0 0c20.5-.02 32.78 11.06 32 32m0 0c-1.85 31.51.78 65.8 0 105.13m0 0c-.08 21.67-10.38 30.46-32 32m0 0c-173.86 1.72-349.41.43-825.87 0m0 0c-19.61 1.74-30.17-12.14-32-32m0 0c1.24-22.04-1.34-49.2 0-105.13m0 0c-1.31-22.1 9.71-31.54 32-32"})),react.createElement("text",{y:27.038,fill:"currentColor",dominantBaseline:"alphabetic",fontFamily:"Inter",fontSize:28,style:{whiteSpace:"pre"},transform:"translate(106.912 754.539)"},"FormField"))};var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",code:"code",ul:"ul",li:"li",h3:"h3"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"Documentation/Forms"}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"формы",children:"Формы"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["В качестве библиотеки для управления формами в проекте используется ",(0,jsx_runtime.jsx)(_components.code,{children:"react-hook-form"}),".\nОна предоставляет удобные и гибкие способы работы с формами, используя хуки. В большинстве\nслучаев это будут простые формы и каждый раз вызывать хуки и регистрировать поле в форме утомительно.\nПредлагаю немного оптимизировать и добавить возможность создавать формы в декларативном стиле."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Библиотека предоставляет встроенный компонент ",(0,jsx_runtime.jsx)(_components.code,{children:"Controller"}),', который может "слушать" поле в объекте\nформы по имени и пробрасывать необходимые для контроля свойства.']}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Компонент можно использовать из коробки, но как по мне лучше создать компонент ",(0,jsx_runtime.jsx)(_components.code,{children:"FormField"})," на основе ",(0,jsx_runtime.jsx)(_components.code,{children:"Controller"}),",\nгде можно икапсулировать дополнительную логику, например:"]}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"вывод ошибок валидации"}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"подсказку"}),"\n"]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Для валидации данных в проекте используются ",(0,jsx_runtime.jsx)(_components.code,{children:"yup"}),". ",(0,jsx_runtime.jsx)(_components.code,{children:"yup"})," проверяет все правила и возвращает первую ошибку или массив\nошибок (в зависимости от настройки свойства ",(0,jsx_runtime.jsx)(_components.code,{children:"criteria"})," в хуке ",(0,jsx_runtime.jsx)(_components.code,{children:"useForm"}),"), которые будут выводится под полем."]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"схема",children:"Схема"}),"\n",(0,jsx_runtime.jsx)("div",{style:{display:"flex",justifyContent:"center",margin:"50px 0"},children:(0,jsx_runtime.jsx)("div",{style:{width:"75%"},children:(0,jsx_runtime.jsx)(docs_forms,{})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"компонент-formfield",children:"Компонент FormField"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Компонент ",(0,jsx_runtime.jsx)(_components.code,{children:"FormField"})," как и ",(0,jsx_runtime.jsx)(_components.code,{children:"Controller"})," работает исключительно в контексте формы. Имеет обязательное поле ",(0,jsx_runtime.jsx)(_components.code,{children:"name"})," и ",(0,jsx_runtime.jsx)(_components.code,{children:"component"}),"."]}),"\n",(0,jsx_runtime.jsx)(storybook.NG,{text:'\n  <Form>\n      <FormField name="text-field" component={TextField} />\n      <FormField name="masked-field" component={MaskedField} mask={Number} />\n      <FormField name="select" component={Select} options={[{ label: \'label\', value: \'value\' }]} />\n      <FormField name="checkbox" component={Checkbox} />\n\n      <Button type="submit">Submit</Button>\n  </Form>\n'}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Все свойства, которые мы передаем в ",(0,jsx_runtime.jsx)(_components.code,{children:"FormField"})," пробрасываются для поля, которое установлено в свойстве component.\nЧтобы не ловить непонятные ошибки в рантайме, для компонента ",(0,jsx_runtime.jsx)(_components.code,{children:"FormField"})," настроена типизация:"]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"При передаче какого либо компонента поля в свойство component - Typescript подскажет какие обязательные свойства надо заполнить\nдля переданного компонента."}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Например, у компонента ",(0,jsx_runtime.jsx)(_components.code,{children:"MaskedField"})," есть обязательное свойство ",(0,jsx_runtime.jsx)(_components.code,{children:"mask"})," или у компонента ",(0,jsx_runtime.jsx)(_components.code,{children:"Select"})," - ",(0,jsx_runtime.jsx)(_components.code,{children:"options"})," и без заполнения\nэтих свойств не пройдет компиляция."]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"пример-использования",children:"Пример использования"}),"\n",(0,jsx_runtime.jsx)(storybook.NG,{text:'\n  interface ITestForm {\n      textField: string;\n      maskedTextField: string;\n      select: IEntityType;\n      checkbox: boolean;\n  }\n\n  const validationSchema = yup.object({\n      textField: yup.string().required(\'error text for required\'),\n      maskedTextField: yup.string().required(\'error text for required\'),\n      select: yup.object().required(\'error text for required\'),\n      checkbox: yup.boolean(),\n  });\n\n  const initialValues: ITestForm = {\n      textField: "",\n      maskedTextField: "",\n      select: null,\n      checkbox: false,\n  };\n\n  function TestForm() {\n      const testForm = useForm<ITestForm>({\n          validationSchema,\n          initialValues,\n      });\n\n      const handleSubmit = testForm.handleSubmit(\n          (values) => console.log(values)\n      );\n\n      return (\n        <Form \n            {...testForm}\n            onSubmit={handleSubmit}\n        >\n            <FormField name="textField" placeholder="textField" component={TextField} />\n            <FormField name="maskedTextField" component={MaskedField} mask={Number} />\n            <FormField name="select" component={Select} options={[{ label: \'label\', value: \'value\' }]} />\n            <FormField name="checkbox" component={Checkbox} label="show test" />\n\n            <Button type="submit">Submit</Button>\n        </Form>\n      );\n  }\n'}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["При такой реализации мы теряем оптимизацию ",(0,jsx_runtime.jsx)(_components.code,{children:"react-hook-form"}),", которая построена на ссылках и значительно уменьшает количество\nперерендеров, но для простых форм это не критично. Но если форма содержит сложный компонент и он требует оптимизаций, то никто\nне запрещает воспользоваться методами, которые возвращает хук ",(0,jsx_runtime.jsx)(_components.code,{children:"useForm"})," и описать форму в императивном стиле."]})]})}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Documentation/Forms",tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const forms_stories=componentMeta,__namedExportsOrder=["__page"]},"./node_modules/next/dist/compiled/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/next/dist/compiled/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/next/dist/compiled/react/cjs/react-jsx-runtime.production.min.js")}}]);