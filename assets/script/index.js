/* 
    Assignment 2
    Shape Factory

*/

'use strict';

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
}

const shape = new Shape('beep', 'boop');
console.log(shape.shapeName, shape.shapeColor);