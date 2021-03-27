export const footer = () => {
    const date = new Date();
    const writer = 'Flanell';

    return( 
        `<div class="footer"><div>&copy; ${writer} ${date.getFullYear()}</div></div>`
    );
}
