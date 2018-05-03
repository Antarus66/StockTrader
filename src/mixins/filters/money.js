export default {
    filters: {
        money(value) {
            const dotted = value.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
            return `$${dotted}`;
        }
    }
};