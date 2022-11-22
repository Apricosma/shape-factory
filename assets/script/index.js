/* 
    Assignment 2
    Shape Factory

*/
'use strict';

// Utility functions 
function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
}

function select(selector, parent = document) {
    return parent.querySelector(selector);
}

// Selectors 
const shapeContainer = select('.shape-container');
const submit = select('.submit');
const shapeInput = select('.shape-input');
const colorInput = select('.color-input');

class Shape {
    constructor(name, color) {
        this._name = name;
        this._color = color;
    }

    set shapeName(name) {
        if (name instanceof Shape && this._name.length > 0) {
            this._name = name;
        } else {
            throw new TypeError('Shape name is invalid');
        }
    }

    get shapeName() {
        return this._name;
    }

    set shapeColor(color) {
        if (color instanceof Shape && this._color.length > 0) {
            this._color = color;
        } else {
            throw new TypeError('Color is invalid');
        }
    }

    get shapeColor() {
        return this._color;
    }

    getInfo() {
        return [this._name, this._color];
    }

    draw() {
        const element = document.createElement('div');
        document.querySelector('.shape-container').appendChild(element);
        element.classList.add('circle');
    }
}
// const shape = new Shape('beep', 'boop');
// console.log(shape.shapeName, shape.shapeColor);
const shapeName = shapeInput.value;
const shapeColor = colorInput.value;

onEvent('click', submit, function() {
    const shape = new Shape(shapeName, shapeColor);
    shape.draw();
});