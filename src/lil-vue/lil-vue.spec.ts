import LilVue from "./lil-vue";

const testLilVue = () => {
    const app = new LilVue({
        el: '#app',
        setup() {
            console.log('hello, setup!')
        }
    })
}

export {
    testLilVue
}