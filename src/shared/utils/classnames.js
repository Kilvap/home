
const classNames = function() {

    let classes = [];

    for (var i = 0; i < arguments.length; i++) {
        classes.push(arguments[i]);
    }

    return classes.join(" ");
};

export default classNames;
