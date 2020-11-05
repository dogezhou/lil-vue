import { reactive, watch } from './runtime-core'


export const consoleCarMoving = () => {
    // use modulo to make car moving in a loop
    const mod = (x: number, y: number) => ((x % y) + y) % y

    const MAX_ROAD_LENGTH = 10

    const cars = [
        reactive({
            position: 0,
            speed: 2,
        }),
        reactive({
            position: 3,
            speed: 1,
        })
    ]

    setInterval(() => {
        for (const car of cars) {
            car.position = mod(car.position + car.speed, MAX_ROAD_LENGTH)
        }
    }, 1000)

    let callCount = 0
    watch(() => {
        const road = '_'.repeat(MAX_ROAD_LENGTH).split("")
        for (const car of cars) {
            road[car.position] = '🚗'
        }

        console.clear()
        console.log(road.reverse().join(''))
        console.log(`callCount: ${++callCount}`)
    })
}

export const testDependencyTracking = () => {
    const r1 = reactive({ x: 0})
    const r2 = reactive({ x: 0})

    setInterval(() => {
        r1.x++
    }, 1000)

    setInterval(() => {
        r2.x--
    }, 6000)

    watch(() => {
        console.log(`r1.x: ${r1.x}`)
    })

    watch(() => {
        console.log(`r2.x: ${r2.x}`)
    })
}
