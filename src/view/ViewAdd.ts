import {View} from './View'
export class ViewAdd extends  View{
    constructor(elemente:HTMLElement) {
        super(elemente);
    }
    protected template(b:boolean){
        if(b){
            if(this.element.classList.contains("inv")){
                this.element.classList.add("inv");
            }
        }else{
            this.element.classList.remove("inv");
        }
        return this.element.innerHTML;
    }
}