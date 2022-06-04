export const overlayInit = () => {
    const overlayNode = document.createElement('overlay-window');
    document.body.prepend(overlayNode);

    overlayClose(overlayNode);
}

const overlayClose = (selectedOverlayNode) => {
    selectedOverlayNode.addEventListener('click', () => {
        document.body.removeChild(selectedOverlayNode);
    });
}
