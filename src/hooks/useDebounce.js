const useDebounce = (callBack, timer = 200) => {
    let timeId;
    return function (...args) {
        clearTimeout(timeId);
        timeId = setTimeout(() => {
            callBack.apply(this, args);
        }, timer);
    }
}

export default useDebounce;