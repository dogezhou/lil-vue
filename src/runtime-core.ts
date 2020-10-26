/**
 * implement vue runtime-core function: ref, reactive, watch, computed
 */
const watchers: Array<() => any> = []
const watch = (callback: () => any) => {
    callback()  // In Vue 3.0, watchers are fired immediately after component mount.
    watchers.push(callback)
}

const reactive = <T extends object>(target: T): T => {
    return new Proxy(target, {
        get(target, key: keyof T) {
            return target[key]
        },
        set(target, key: keyof T, value) {
            target[key] = value
            watchers.forEach(watcher => watcher())
            return true
        },
    })
}

export {
    watch,
    reactive,
}