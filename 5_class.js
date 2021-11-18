var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var TypeScript = /** @class */ (function () {
    function TypeScript(version) {
        this.version = version;
    }
    TypeScript.prototype.info = function (name) {
        return "[" + name + "]:Type script " + this.version;
    };
    return TypeScript;
}());
var Car = /** @class */ (function () {
    function Car(theModel) {
        this.number = 4;
        this.model = theModel; // перезапишеться только в конструкторе
    }
    return Car;
}());
var Car1 = /** @class */ (function () {
    function Car1(model) {
        this.model = model;
        this.number = 4;
    } //короткая запись класса Car
    return Car1;
}());
//========
var Animal = /** @class */ (function () {
    function Animal() {
        this.vois = '';
        this.color = 'blacck';
    }
    Animal.prototype.go = function () {
        console.log('goooo');
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.serVois = function (vois) {
        this.vois = vois;
    };
    return Cat;
}(Animal));
var cat = new Cat();
console.log(cat.color);
var Component = /** @class */ (function () {
    function Component() {
    }
    Component.prototype.echo = function () {
        console.log('echoo');
    };
    return Component;
}());
var AppComponent = /** @class */ (function (_super) {
    __extends(AppComponent, _super);
    function AppComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppComponent.prototype.render = function () {
        console.log('render');
    };
    AppComponent.prototype.info = function () {
        return 'info';
    };
    return AppComponent;
}(Component));
var obj = new AppComponent;
obj.echo();
