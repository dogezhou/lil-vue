/**
 * compile template and create renderer
 */
import LilVue from "../lil-vue/lil-vue";

class Compiler {
    private readonly el: string | HTMLElement

    constructor(el: string | HTMLElement, private vm: LilVue) {
        if (el instanceof HTMLElement && Compiler.isElementNode(el)) {
                this.el = el
        } else if (typeof el === "string") {
            this.el = document.querySelector<HTMLElement>(el)
        } else {
            throw new Error('Pass a string or HTMLElement to el')
        }
        const fragment = Compiler.nodeToFragment(this.el)
        this.compile(fragment)
        this.el.appendChild(fragment)
    }

    /**
     * Is node a Node.ELEMENT_NODE, such as: <p> <div>
     * https://developer.mozilla.org/zh-CN/docs/Web/API/Node/nodeType
     */
    static isElementNode(node: Node) {
        return node.nodeType === 1;
    }

    /**
     * Convert HTMLElement to DocumentFragment
     * https://developer.mozilla.org/zh-CN/docs/Web/API/DocumentFragment
     */
    static nodeToFragment(node: HTMLElement) {
        const fragment = document.createDocumentFragment()
        let firstChild = node.firstChild
        while (firstChild) {
            fragment.appendChild(firstChild)
            firstChild = node.firstChild
        }
        return fragment
    }

    /**
     * Compile the template - entry function
     */
    compile(node: DocumentFragment | Node) {
        const childNodes = node.childNodes
        childNodes.forEach(child => {
            if (Compiler.isElementNode(child)) {
                this.compile(child)
            } else {
                this.compileText(child)
            }
        })
    }

    /**
     *  Compile the text node, such as: 'Hello {{name}}'
     */
    compileText(node: Node) {
        const content = node.textContent
        // 匹配 {{}}
        if (/\{\{(.+?)\}\}/.test(content)) {
            // TODO: 处理模板花括号语法
        }
    }
}