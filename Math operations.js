https://www.codewars.com/kata/59c287b16bddd291c700009a/train/javascript

    function iceBrickVolume(radius, bottleLength, rimLength) {
        let h;
        let a;
        let volume;
        { h = bottleLength - rimLength;
            a = (2 * radius) / (2 ** 0.5);
            volume = a * a * h;
        }
        return Math.round(volume);
    }