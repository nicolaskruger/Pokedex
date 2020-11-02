
export class Pokemon {
    name:string;
    type:Array<string>=[];
    description:string;
    img:string;
    static types:string[]=[
        "grass",
        "poison",
        "fire",
        "water",
        "bug",
        "flying",
        "normal",
        "electric",
        "ground"
    ]
    static color:{[id:string]:string}={
        "grass":"green",
        "poison":"purple",
        "fire":"orange",
        "water":"lightblue",
        "bug":"darkgreen",
        "flying":"gray",
        "normal":"darkgray",
        "electric":"yellow",
        "ground":"darkgoldenrod"
    }
    private inv:boolean = false;
    constructor(type:string[]=["Water"],
                name:string="Squardle",
                description:string="When it retracts its long neck into its shell, it squirts out water with vigorous force.",
                img:string="https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png") {
        this.name = name;
        this.description = description;
        this.img = img;
        this.type = type.map(s => s.toLowerCase());
    }
    setInv(b:boolean){
        this.inv=b;
    }
    clone(){
        return new Pokemon(this.type,this.name,this.description,this.img);
    }
    stringFy(){
        return [this.name,this.description,this.img];
    }
    selectFy(){
        return Pokemon.types.map(t => this.type.includes(t));
    }
    get Inv(){
        return this.inv ?"inv":'';
    }
}