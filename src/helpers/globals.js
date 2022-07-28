export const LENGTH = 100
export const MIN = 50
export const MAX = window.innerHeight - 110
export const WIDTH = (100 - 3) / LENGTH + "%";


export const generateArray = () => {
    let temp = [];
    for (let i = 0; i < LENGTH; i++) {
        temp.push(Math.floor(Math.random() * (MAX - MIN) + MIN));
    }
    return temp
}