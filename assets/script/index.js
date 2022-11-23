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

function selectAll(selector, parent = document) {
    return parent.querySelectorAll(selector);
}

// Selectors 
const shapeContainer = select('.shape-container');
const submit = select('.submit');
const shapeInput = select('.shape-input');
const colorInput = select('.color-input');
const shapeSelector = select('.shape');
const output = select('span');


class Shape {
    constructor(name, color) {
        this._name = name;
        this._color = color;
        this.getInfo = function() {
            console.log(this._name, this._color);
            return `${this._name} ${this._color}`;
        }
        
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

    

    createShape() {

        const element = document.createElement('div');
        document.querySelector('.shape-container').appendChild(element);
        element.style.cssText += 'background-color:' + this._color;

        // Shape definition
        if (this._name == 'circle') {
            element.classList.add('circle', 'shape');
        } else if (this._name == 'square') {
            element.classList.add('square', 'shape');
        } else {
            throw new TypeError('shapeName is invalid');
        }
    }

    
}

let arr = [];

onEvent('click', submit, function() {
    let shape = new Shape(shapeInput.value, colorInput.value);
    arr.push(shape);
    console.log(arr);
    shape.createShape();
    output.innerHTML = `${shape.shapeColor} ${shape.shapeName} `

    shapeContainer.addEventListener('click', function (e) {
        let target = e.target;
        if (target.matches('div')) {
            
            output.innerHTML = `${shape.getInfo()}`;
        }
    });
    
});


// I'm going to be honest I've been stuck trying to get getInfo() to work for
// over 10hours and I can't seem to get it to return the correct value
// it's returning the properties, but it's barfing out tons of event listeners
// for each shape because my shape constructor is inside of an event listener 
// and I don't know how else to format it... 


