/**
 * compile template and create renderer
 */
import LilVue from "../lil-vue/lil-vue";

class Compiler {
    private el: string | HTMLElement

    constructor(el: string | HTMLElement, private vm: LilVue) {
        if (el instanceof HTMLElement) {
            if (Compiler.isElementNode(el)) {
                this.el = el
            } else {
                throw Error('el参数为字符串或者 dom 元素')
            }
        } else if (typeof el === "string") {
            this.el = document.querySelector<HTMLElement>(el)
        }
    }

    // 是否为 html 元素节点
    private static isElementNode(node: HTMLElement) {
        return node.nodeType === 1;
    }

    compile(node: HTMLElement) {

    }
}