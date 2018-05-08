export default {
    filters: {
        money(value) {
            if (!value) {
                return '';
            }

            const dotted = value.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
            return `$${dotted}`;
        }
    }
};