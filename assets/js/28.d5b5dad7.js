(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{490:function(e,t,a){"use strict";a.r(t);var s=a(23),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"element-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#element-api"}},[e._v("#")]),e._v(" Element API")]),e._v(" "),a("p",[a("code",[e._v("Element")]),e._v(" objects are a type of "),a("code",[e._v("Node")]),e._v(" in a Slate document that contain other "),a("code",[e._v("Element")]),e._v(" nodes or "),a("code",[e._v("Text")]),e._v(" nodes.")]),e._v(" "),a("div",{staticClass:"language-typescript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("interface")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Element")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  children"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" Node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/en/slate/api/nodes/element.html#element-behavior-types"}},[e._v("Behavior Types")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/en/slate/api/nodes/element.html#block-vs-inline"}},[e._v("Block vs. Inline")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/en/slate/api/nodes/element.html#void-vs-not-void"}},[e._v("Void vs Not Void")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/en/slate/api/nodes/element.html#rendering-void-elements"}},[e._v("Rendering Void Elements")])],1)])],1)])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/en/slate/api/nodes/element.html#static-methods"}},[e._v("Static methods")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/en/slate/api/nodes/element.html#retrieval-methods"}},[e._v("Retrieval methods")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/en/slate/api/nodes/element.html#check-methods"}},[e._v("Check methods")])],1)])],1)]),e._v(" "),a("h2",{attrs:{id:"element-behavior-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#element-behavior-types"}},[e._v("#")]),e._v(" Element Behavior Types")]),e._v(" "),a("p",[e._v("Element nodes behave differently depending on the "),a("RouterLink",{attrs:{to:"/en/slate/api/nodes/editor.html#schema-specific-instance-methods-to-override"}},[e._v("Slate editor's configuration")]),e._v(". An element can be:")],1),e._v(" "),a("ul",[a("li",[e._v('"block" or "inline" as defined by '),a("code",[e._v("editor.isInline")])]),e._v(" "),a("li",[e._v('either "void" or "not void" as defined by '),a("code",[e._v("editor.isVoid")])])]),e._v(" "),a("h3",{attrs:{id:"block-vs-inline"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#block-vs-inline"}},[e._v("#")]),e._v(" Block vs. Inline")]),e._v(" "),a("p",[e._v('A "block" element can only be siblings with other "block" elements. An "inline" node can be siblings with '),a("code",[e._v("Text")]),e._v(' nodes or other "inline" elements.')]),e._v(" "),a("h3",{attrs:{id:"void-vs-not-void"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#void-vs-not-void"}},[e._v("#")]),e._v(" Void vs Not Void")]),e._v(" "),a("p",[e._v('In a not "void" element, Slate handles the rendering of its '),a("code",[e._v("children")]),e._v(" (e.g. in a paragraph where the "),a("code",[e._v("Text")]),e._v(" and "),a("code",[e._v("Inline")]),e._v(' children are rendered by Slate). In a "void" element, the '),a("code",[e._v("children")]),e._v(" are rendered by the "),a("code",[e._v("Element")]),e._v("'s render code.")]),e._v(" "),a("h4",{attrs:{id:"rendering-void-elements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rendering-void-elements"}},[e._v("#")]),e._v(" Rendering Void Elements")]),e._v(" "),a("p",[e._v("Void Elements must")]),e._v(" "),a("ul",[a("li",[e._v("always have one empty child text node (for selection)")]),e._v(" "),a("li",[e._v("render using "),a("code",[e._v("attributes")]),e._v(" and "),a("code",[e._v("children")]),e._v(" (so, their outermost HTML element "),a("strong",[e._v("can't")]),e._v(" be an HTML void element)")]),e._v(" "),a("li",[e._v("set "),a("code",[e._v("contentEditable={false}")]),e._v(" (for Firefox)")])]),e._v(" "),a("p",[e._v("Typical rendering code will resemble this "),a("code",[e._v("thematic-break")]),e._v(" (horizontal rule) element:")]),e._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("return")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("div "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("...")]),e._v("attributes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" contentEditable"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("children"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("hr "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br")])]),a("h2",{attrs:{id:"static-methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#static-methods"}},[e._v("#")]),e._v(" Static methods")]),e._v(" "),a("h3",{attrs:{id:"retrieval-methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#retrieval-methods"}},[e._v("#")]),e._v(" Retrieval methods")]),e._v(" "),a("h4",{attrs:{id:"element-matches-element-element-props-partial-element-boolean"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#element-matches-element-element-props-partial-element-boolean"}},[e._v("#")]),e._v(" "),a("code",[e._v("Element.matches(element: Element, props: Partial<Element>) => boolean")])]),e._v(" "),a("p",[e._v("Check if an element matches a set of "),a("code",[e._v("props")]),e._v(". Note: This checks custom properties, but it does not ensure that any children are equivalent.")]),e._v(" "),a("h3",{attrs:{id:"check-methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#check-methods"}},[e._v("#")]),e._v(" Check methods")]),e._v(" "),a("h4",{attrs:{id:"element-isancestor-value-any-value-is-ancestor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#element-isancestor-value-any-value-is-ancestor"}},[e._v("#")]),e._v(" "),a("code",[e._v("Element.isAncestor(value: any) => value is Ancestor")])]),e._v(" "),a("p",[e._v("Check if a value implements the 'Ancestor' interface.")]),e._v(" "),a("h4",{attrs:{id:"element-iselement-value-any-value-is-element"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#element-iselement-value-any-value-is-element"}},[e._v("#")]),e._v(" "),a("code",[e._v("Element.isElement(value: any) => value is Element")])]),e._v(" "),a("p",[e._v("Check if a "),a("code",[e._v("value")]),e._v(" implements the "),a("code",[e._v("Element")]),e._v(" interface.")]),e._v(" "),a("h4",{attrs:{id:"element-iselementlist-value-any-value-is-element"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#element-iselementlist-value-any-value-is-element"}},[e._v("#")]),e._v(" "),a("code",[e._v("Element.isElementList(value: any) => value is Element[]")])]),e._v(" "),a("p",[e._v("Check if a "),a("code",[e._v("value")]),e._v(" is an array of "),a("code",[e._v("Element")]),e._v(" objects.")]),e._v(" "),a("h4",{attrs:{id:"element-iselementtype-t-extends-element-value-any-elementval-string-elementkey-string-type-value-is-t"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#element-iselementtype-t-extends-element-value-any-elementval-string-elementkey-string-type-value-is-t"}},[e._v("#")]),e._v(" "),a("code",[e._v("Element.isElementType<T Extends Element>(value: any, elementVal: string, ElementKey: string = 'type'): value is T")])]),e._v(" "),a("p",[e._v("Check if a value implements the "),a("code",[e._v("Element")]),e._v(" interface and has elementKey with selected value.\nDefault it check to "),a("code",[e._v("type")]),e._v(" key value")])])}),[],!1,null,null,null);t.default=n.exports}}]);