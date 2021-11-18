interface Rect {
    readonly id: string
    color?: string
    size: {
        width: number,
        heigth: number
    }
}

const rect1:Rect = {
    id:'SDFSDF',
    size :{
        width :20,
        heigth:30
    },
    color :'ccc'
}

const rect2:Rect = {
    id:'32423423f',
    size :{
        width :20,
        heigth:30
    }

}
rect2. color='black'
rect2. id='black' // fail

const rect3  = {} as Rect

const rect4  =<Rect> {}

//================

interface RectWithArea extends Rect{
    getArea:()=>number
}

const rect5 :RectWithArea = {
    id:'32423423f',
    size :{
        width :20,
        heigth:30
    },
    getArea(){
        return 15
    }
}

//================

interface IClock {
    time: Date

    setTime(date: Date): void
}

class Clock implements IClock{
    time :  Date = new Date()
    setTime(date: Date) {
        this.time = date
    }
}

//============

interface Styles {
    [key:string] : string
}

const css : Styles = {
    border : '1px solid silver',
    margin : '2px'
}