export interface Ingredient {
    ingredient: string;
    measure: string;
}
export interface Instruction {
    instruction: string;
    photo: string;
}
export class Recipe {
    public title: string;
    public description: string;
    public feed_this_many: number;
    public prepration_time: number;
    public ingredients: Ingredient[];
    public instructions: Instruction[];
    public cover_photo: string;
    constructor(t: string, d: string, feeds: number, pt: number, ingr: Ingredient[], inst: Instruction[], cp: string) {
        this.title = t;
        this.description = d;
        this.feed_this_many = feeds;
        this.prepration_time = pt;
        this.ingredients = ingr;
        this.instructions = inst;
        this.cover_photo = cp;
    }
    public static createBlank() {
        return new Recipe('', '', 1, 1, null, null, null);
    }
}
