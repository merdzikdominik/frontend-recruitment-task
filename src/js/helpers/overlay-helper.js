export const overlayInitHandler = () => {
    const overlayNode = document.createElement('overlay-window');
    document.body.prepend(overlayNode);
};


export const overlayCloseHandler = () => {
    const overlay = document.querySelector('overlay-window');
    document.body.removeChild(overlay);
};
