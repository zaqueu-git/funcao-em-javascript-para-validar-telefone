function phone(value) {
    if (/^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/g.test(value)) {
        return true;
    };
    return false;
}