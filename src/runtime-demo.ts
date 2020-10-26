import { reactive, watch } from './runtime-core'

// 取模，让车循环前进
const mod = (x: number, y: number) => ((x % y) + y) % y

const main = () => {
    const MAX_ROAD_LENGTH = 10

    const car = reactive({
        position: 0,
        speed: 2,
    })

    setInterval(() => {
        car.position = mod(car.position + car.speed, MAX_ROAD_LENGTH)
    }, 1000)

    watch(() => {
        const road = '_'.repeat(MAX_ROAD_LENGTH).split("")
        road[car.position] = '🚗'

        console.clear()
        console.log(road.reverse().join(''))
    })
}

main()