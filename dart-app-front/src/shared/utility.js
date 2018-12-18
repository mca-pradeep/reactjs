export const updateObject = (oldState, updateProp) => {
    return {
        ...oldState,
        ...updateProp
    };
};

export const checkValidity = (value, rules) => {
    let isValid = true;

    if (!rules) {
        return true;
    }

    if (rules.required) {
        isValid = value.trim() !== '' && isValid;
    }

    if (rules.minLength) {
        isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
        isValid = value.length <= rules.maxLength && isValid;
    }

    if (rules.isEmail) {
        //TODO JTI code this rule
        isValid = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(value) && isValid;
    }

    if (rules.isNumeric) {
        //TODO JTI code this rule
        isValid = /^[-+]?(\d+|\d+\.\d*|\d*\.\d+)$/.test(value) && isValid;
    }

    return isValid;
}
