import { palette } from "../theme/GlobalStyle"

export const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * palette.length);
    return palette[randomIndex];
}