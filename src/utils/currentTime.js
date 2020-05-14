
export const currentTime = () => {
    const today = new Date();
    const time = (today.getHours())%12 + " : " + today.getMinutes() + " : " + today.getSeconds();
    return time;
}