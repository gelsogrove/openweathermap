export class Weather {
    date :number;
    temp_min: number;
    temp_max: number;
    humidity : number;
    description :string;
    icon:string

    constructor(properties?: Partial<Weather>) {
        Object.assign(this, properties);
    }
}