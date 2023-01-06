export const addScroll = () => {
    const html = document.querySelector('html');
    if (html) {
        html.style.overflow = 'auto';
    }
}

export const removeScroll = () => {
    const html = document.querySelector('html');
    if (html) {
        html.style.overflow = 'hidden';
    }
}