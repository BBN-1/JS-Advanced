
class Rectangle {

    constructor(width,height,color){

        this.width = Number(width),
        this.height = Number(height),
        this.color = color

    }

    calcArea(){
        let area = this.width * this.height
        return area
    }


}