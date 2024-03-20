/*
    script for ascii.html
    @author Daisy Rong
*/
let timer = null;
let index = 0;
let interval = 250;

// starts the timer and calls animate function
function start_timer() {
    document.getElementById('start_button').disabled = true;
    document.getElementById('animation_list').disabled = true;
    document.getElementById('stop_button').disabled = false;
    timer = setInterval(animate, interval);
}

// displays the animation in textarea
function animate() {
    let animationValue = document.getElementById('animation_list').value;
    let animationArray = ANIMATIONS[animationValue].split("=====\n");
    document.getElementById('viewer').value = animationArray[index];
    index = (index + 1) % animationArray.length;
}

// resets animation and timer
function stop_timer() {
    clearInterval(timer);
    timer = null;
    index = 0;
    let animationValue = document.getElementById('animation_list').value;
    document.getElementById('viewer').value = ANIMATIONS[animationValue];
    document.getElementById('start_button').disabled = false;
    document.getElementById('animation_list').disabled = false;
    document.getElementById('stop_button').disabled = true;
}

// used to switch between different animations
function change_animation() {
    let animationValue = document.getElementById('animation_list').value;
    document.getElementById('viewer').value = ANIMATIONS[animationValue];
}

// used to change font size in textarea
function change_text_size() {
    let sizeValue = document.getElementById('size_list').value;
    document.getElementById('viewer').style.fontSize = sizeValue + "pt";
}

// used to speed up or slow down animation 
function change_speed() {
    if (document.getElementById('turbo_checkbox').checked) {
        interval = 50;
    }
    else {
        interval = 250;
    }
    if (timer != null) {
        clearInterval(timer);
        timer = setInterval(animate, interval);
    }
}
