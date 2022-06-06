export const incrementHandler = () => {
    let counts = localStorage.getItem('counter');
    localStorage.setItem('counter', ++counts);
};

export const resetCountsHandler = () => {
    localStorage.setItem('counter', 0);
};
