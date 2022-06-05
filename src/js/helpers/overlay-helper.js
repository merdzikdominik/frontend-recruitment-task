export const overlayInitHandler = () => {
    const overlayNode = document.createElement('overlay-window');
    document.body.prepend(overlayNode);

    // overlayCloseHandler(overlayNode);

}

// const overlayCloseHandler = (selectedOverlayNode) => {
//     selectedOverlayNode.addEventListener('click', () => {
//         document.body.removeChild(selectedOverlayNode);
//     });
// }
