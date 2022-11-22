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
const shapeSelector = select('.shape');

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

    createShape() {

        const element = document.createElement('div');
        document.querySelector('.shape-container').appendChild(element);

        // Shape definition
        if (this._name == 'circle'.trim()) {
            element.classList.add('circle', 'shape');
        } else if (this._name == 'square') {
            element.classList.add('square', 'shape');
        } else {
            throw new TypeError('shapeName is invalid');
        }

        // Color definition
        document.querySelector('.shape').style.backgroundColor = this._color;
        console.log(this._color);

    }
}

// onEvent('click', submit, function() {
//     const shape = new Shape(shapeInput.value, colorInput.value);

//     let arr = [];
//     arr.push(shape);
//     console.log(arr);

//     // console.log(shape);
//     shape.createShape();
// });

let arr = [];
onEvent('click', submit, function() {
    const shape = new Shape(shapeInput.value, colorInput.value);
    arr.push(shape);
    console.log(arr);
    shape.createShape();
});