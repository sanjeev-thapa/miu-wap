function printNumbers(from, to) {
    const timerId = setInterval(() => {
        if (from >= to)
            clearInterval(timerId);

        console.log(from++);
    }, 1000);
}

printNumbers(2, 8);