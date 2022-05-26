(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{507:function(t,s,a){"use strict";a.r(s);var e=a(23),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"using-typescript"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-typescript"}},[t._v("#")]),t._v(" Using TypeScript")]),t._v(" "),a("p",[t._v("Slate supports typing of one Slate document model (ie. one set of custom "),a("code",[t._v("Editor")]),t._v(", "),a("code",[t._v("Element")]),t._v(" and "),a("code",[t._v("Text")]),t._v(" types). If you need to support more than one document model, see the section Multiple Document Models.")]),t._v(" "),a("p",[a("strong",[t._v("Warning:")]),t._v(" You must define "),a("code",[t._v("CustomTypes")]),t._v(", annotate "),a("code",[t._v("useState")]),t._v(", and annotate the editor's initial state when using TypeScript or Slate will display typing errors.")]),t._v(" "),a("h2",{attrs:{id:"migrating-from-0-47-x"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#migrating-from-0-47-x"}},[t._v("#")]),t._v(" Migrating from 0.47.x")]),t._v(" "),a("p",[t._v("When migrating from 0.47.x, read the guide below first. Also keep in mind these common migration issues:")]),t._v(" "),a("ul",[a("li",[t._v("When referring to "),a("code",[t._v("node.type")]),t._v(", you may see the error "),a("code",[t._v("Property 'type' does not exist on type 'Node'")]),t._v(". To fix this, you need to add code like "),a("code",[t._v("Element.isElement(node) && node.type === 'paragraph'")]),t._v(". This is necessary because a "),a("code",[t._v("Node")]),t._v(" can be an "),a("code",[t._v("Element")]),t._v(" or "),a("code",[t._v("Text")]),t._v(" and "),a("code",[t._v("Text")]),t._v(" does not have a "),a("code",[t._v("type")]),t._v(" property.")]),t._v(" "),a("li",[t._v("Be careful when you define the CustomType for "),a("code",[t._v("Editor")]),t._v(". Make sure to define the CustomType for "),a("code",[t._v("Editor")]),t._v(" as "),a("code",[t._v("BaseEditor & ...")]),t._v(". It should not be "),a("code",[t._v("Editor & ...")])])]),t._v(" "),a("h2",{attrs:{id:"defining-editor-element-and-text-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#defining-editor-element-and-text-types"}},[t._v("#")]),t._v(" Defining "),a("code",[t._v("Editor")]),t._v(", "),a("code",[t._v("Element")]),t._v(" and "),a("code",[t._v("Text")]),t._v(" Types")]),t._v(" "),a("p",[t._v("To define a custom "),a("code",[t._v("Element")]),t._v(" or "),a("code",[t._v("Text")]),t._v(" type, extend the "),a("code",[t._v("CustomTypes")]),t._v(" interface in the "),a("code",[t._v("slate")]),t._v(" module like this.")]),t._v(" "),a("div",{staticClass:"language-typescript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// This example is for an Editor with `ReactEditor` and `HistoryEditor`")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" BaseEditor "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'slate'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ReactEditor "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'slate-react'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" HistoryEditor "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'slate-history'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CustomElement")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'paragraph'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" children"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" CustomText"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CustomText")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" text"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" bold"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("declare")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("module")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'slate'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CustomTypes")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Editor"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" BaseEditor "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" ReactEditor "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" HistoryEditor\n    Element"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" CustomElement\n    Text"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" CustomText\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br")])]),a("h2",{attrs:{id:"annotations-in-the-editor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#annotations-in-the-editor"}},[t._v("#")]),t._v(" Annotations in the Editor")]),t._v(" "),a("p",[t._v("Annotate the editor's initial value w/ "),a("code",[t._v("Descendant[]")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-tsx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-tsx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" React"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" useMemo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" useState "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'react'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" createEditor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Descendant "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'slate'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Slate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Editable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" withReact "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'slate-react'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" initialValue"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Descendant"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'paragraph'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    children"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" text"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'A line of text in a paragraph.'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("App")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" editor "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("useMemo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("withReact")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createEditor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Slate")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("editor")]),a("span",{pre:!0,attrs:{class:"token script language-javascript"}},[a("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("editor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),a("span",{pre:!0,attrs:{class:"token script language-javascript"}},[a("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("initialValue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n      ")]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Editable")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),a("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n    ")]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Slate")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br")])]),a("h2",{attrs:{id:"best-practices-for-element-and-text-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#best-practices-for-element-and-text-types"}},[t._v("#")]),t._v(" Best Practices for "),a("code",[t._v("Element")]),t._v(" and "),a("code",[t._v("Text")]),t._v(" Types")]),t._v(" "),a("p",[t._v("While you can define types directly in the "),a("code",[t._v("CustomTypes")]),t._v(" interface, best practice is to define and export each type separately so that you can reference individual types like a "),a("code",[t._v("ParagraphElement")]),t._v(".")]),t._v(" "),a("p",[t._v("Using best practices, the custom types might look something like:")]),t._v(" "),a("div",{staticClass:"language-typescript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// This example is for an Editor with `ReactEditor` and `HistoryEditor`")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" BaseEditor "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'slate'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ReactEditor "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'slate-react'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" HistoryEditor "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'slate-history'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CustomEditor")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" BaseEditor "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" ReactEditor "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" HistoryEditor\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ParagraphElement")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'paragraph'")]),t._v("\n  children"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" CustomText"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HeadingElement")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'heading'")]),t._v("\n  level"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),t._v("\n  children"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" CustomText"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CustomElement")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ParagraphElement "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" HeadingElement\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FormattedText")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" text"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" bold"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CustomText")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" FormattedText\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("declare")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("module")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'slate'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CustomTypes")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Editor"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" CustomEditor\n    Element"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" CustomElement\n    Text"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" CustomText\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br")])]),a("p",[t._v("In this example, "),a("code",[t._v("CustomText")]),t._v(" is equal to "),a("code",[t._v("FormattedText")]),t._v(" but in a real editor, there can be more types of text like text in a code block which may not allow formatting for example.")]),t._v(" "),a("h2",{attrs:{id:"why-is-the-type-definition-unusual"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#why-is-the-type-definition-unusual"}},[t._v("#")]),t._v(" Why Is The Type Definition Unusual")]),t._v(" "),a("p",[t._v("Because it gets asked often, this section explains why Slate's type definition is atypical.")]),t._v(" "),a("p",[t._v("Slate needs to support a feature called type discrimination which is available when using union types (e.g. "),a("code",[t._v("ParagraphElement | HeadingElement")]),t._v("). This allows a user to narrow a type. If presented with code like "),a("code",[t._v("if (node.type === 'paragraph') { ... }")]),t._v(" the inside of the block, will narrow the type of node to "),a("code",[t._v("ParagraphElement")]),t._v(".")]),t._v(" "),a("p",[t._v("Slate also needs a way to allow developers to get their custom types into Slate. This is done through declaration merging which is a feature of an "),a("code",[t._v("interface")]),t._v(".")]),t._v(" "),a("p",[t._v("Slate combines a union type and an interface in order to use both features.")]),t._v(" "),a("p",[t._v("For more information see "),a("a",{attrs:{href:"https://github.com/ianstormtaylor/slate/issues/3725",target:"_blank",rel:"noopener noreferrer"}},[t._v("Proposal: Add Custom TypeScript Types to Slate"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"multiple-document-models"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multiple-document-models"}},[t._v("#")]),t._v(" Multiple Document Models")]),t._v(" "),a("p",[t._v("At the moment, Slate supports types for a single document model at a time. For example, it cannot support two different Rich Text Editor with different document schemas.")]),t._v(" "),a("p",[t._v("Slate's TypeScript support was designed this way because typing for one document schema was better than none. The goal is to eventually support typing for multiple editor definitions and there is currently an in progress PR built by the creator of Slate.")]),t._v(" "),a("p",[t._v("One workaround for supporting multiple document models is to create each editor in a separate package and then import them. This hasn't been tested but should work.")]),t._v(" "),a("h2",{attrs:{id:"extending-other-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#extending-other-types"}},[t._v("#")]),t._v(" Extending Other Types")]),t._v(" "),a("p",[t._v("Currently there is also support for extending other types but these haven't been tested as thoroughly as the ones documented above:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("Selection")])]),t._v(" "),a("li",[a("code",[t._v("Range")])]),t._v(" "),a("li",[a("code",[t._v("Point")])])]),t._v(" "),a("p",[t._v("Feel free to extend these types but extending these types should be considered experimental. Please report bugs on GitHub issues.")]),t._v(" "),a("h2",{attrs:{id:"typescript-examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#typescript-examples"}},[t._v("#")]),t._v(" TypeScript Examples")]),t._v(" "),a("p",[t._v("For some examples of how to use types, see "),a("code",[t._v("packages/slate-react/src/custom-types.ts")]),t._v(" in the slate repository.")])])}),[],!1,null,null,null);s.default=n.exports}}]);