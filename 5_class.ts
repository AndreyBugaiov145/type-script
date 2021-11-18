class TypeScript {
    version: string

    constructor(version: string) {
        this.version = version

    }

    info(name: string) {
        return `[${name}]:Type script ${this.version}`
    }

}

class Car {
    readonly model :string
    readonly number :number = 4

    constructor(theModel) {
      this.model =theModel // перезапишеться только в конструкторе
    }
}

class Car1 {
    readonly number :number = 4

    constructor(readonly model:string) { } //короткая запись класса Car
}

//========

class Animal {
    protected vois:string = ''
    public color :string ='blacck'
    private go(){
        console.log('goooo')
    }
}

class Cat extends Animal{
    public serVois(vois:string):void{
        this.vois = vois
    }
}

const cat = new Cat()

console.log(cat.color)

abstract class Component {
    abstract render():void
    abstract info():void
    echo(){
        console.log('echoo')
    }
}

class AppComponent extends Component{
     render() {
         console.log('render')
     }
     info() {
         return 'info'
     }
}

let obj = new AppComponent

obj.echo()