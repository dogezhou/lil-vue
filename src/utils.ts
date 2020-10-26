/**
 * helper functions
 */
const debounce = function (fn: () => any, delay: number) {
    let timer: number = null
    return function () {
        if( timer ) {
            clearTimeout(timer)
        }
        const ctx = this
        const args = arguments
        timer = setTimeout(function () {
            fn.apply(ctx, args)
        })
    }
}

export {
    debounce
}