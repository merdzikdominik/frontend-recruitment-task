export const increment = () => {
    let counts = localStorage.getItem('counter');
    localStorage.setItem('counter', ++counts);
    // console.log(counts);
}

export const resetCountsHandler = () => {
    localStorage.setItem('counter', 0);
}
