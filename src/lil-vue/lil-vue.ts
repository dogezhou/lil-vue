/**
 * lil-vue api
 */

interface LiLVueOptions {
    el: string,
    template?: string,
    setup: () => any
}

export default class LilVue {
    constructor(public options: LiLVueOptions) {
    }

}
