const d = document

const get = {
    Id(item) {
        return d.getElementById(item);
    },
    Classes(item) {
        return d.getElementsByClassName(item);
    },
    Query(item) {
        return d.querySelector(item);
    },
    Queries(item) {
        return d.querySelectorAll(item);
    },
    Date() {
        return new Date().getTime();
    },
    Session(id) {
        return JSON.parse(sessionStorage.getItem(id));
    },
    Local(id) {
        return JSON.parse(localStorage.getItem(id));
    }
}

const set = {
    Local(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },
    Session(key, value) {
        sessionStorage.setItem(key, JSON.stringify(value));
    }
}

const del = {
    fromLocal(key) {
        localStorage.removeItem(key)
    },
    fromSession(key) {
        sessionStorage.removeItem(key)
    },
    fromArray(arr, elem) {
        arr.pull(elem)
    },
    element(item) {
        item.remove()
    }
}

function listen(event, func) {
    d.addEventListener(event, func);
}

function truncate(str, maxLength) {
    if (str.length > maxLength) {
        str = `${str.substring(0, --maxLength)}...`
    }
    return str
}

export {
    d,
    get,
    set,
    listen,
    del,
    truncate,
}