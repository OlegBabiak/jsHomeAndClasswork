let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// 1
let i1 = 0;
while (i1 < arr.length) {
    console.log(arr[i1]);
    i1++;
}

// 2
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// 3
let i2 = 0;
while (i2 < arr.length) {
    if (i2 % 2 !== 0) {
        console.log(arr[i2]);
    }
    i2++;
}

// 4
for (let i = 0; i < arr.length; i++) {
    if (i % 2 !== 0) {
        console.log(arr[i]);
    }
}

// 5
let i3 = 0;
while (i3 < arr.length) {
    if (arr[i3] % 2 === 0) {
        console.log(arr[i3]);
    }
    i3++;
}

// 6
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i]);
    }
}

// 7
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0) {
        arr[i] = "okten";
    }
}

// 8
for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}

// 1r
let i1r = arr.length - 1;
while (i1r >= 0) {
    console.log(arr[i1r]);
    i1r--;
}

// 2r
for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}

// 3r
let i2r = arr.length - 1;
while (i2r >= 0) {
    if (i2r % 2 !== 0) {
        console.log(arr[i2r]);
    }
    i2r--;
}

// 4r
for (let i = arr.length - 1; i >= 0; i--) {
    if (i % 2 !== 0) {
        console.log(arr[i]);
    }
}

// 5r
let i3r = arr.length - 1;
while (i3r >= 0) {
    if (arr[i3r] % 2 === 0) {
        console.log(arr[i3r]);
    }
    i3r--;
}

// 6r
for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i]);
    }
}

// 7r
for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] % 3 === 0) {
        arr[i] = "okten";
    }
}