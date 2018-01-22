// Drum Arrays
let kicks = new Array(16).fill(false);
let snares = new Array(16).fill(false);
let hiHats = new Array(16).fill(false);
let rideCymbals = new Array(16).fill(false);

const toggleDrum = function(drums, index) {
    if (!drums || index < 0 || index > 15) {
        return;
    }

    if (drums === 'kicks') {
        kicks[index] = true;
    } else if (drums === 'snares') {
        snares[index] = true;
    } else if (drums === 'hiHats') {
        hiHats[index] = true;
    } else if (drums === 'rideCymbals') {
        rideCymbals[index] = true;
    } else {
        return;
    }
    console.log(drums);
};

const clear = (drums) => {
    drums.fill(false);
};

const invert = drums => {
    // make method to get arrayname from arraystring (kicks instead of 'kicks')
    for (let i=0; i < drums.length; i++) {
        drums[i] = !drums[i];
        console.log(drums[i]);
    }
};

