export class Trainer {
    constructor(private _username: string, private _birth: string, private _picture: string, private _hobby: string ) { }

   
    public get username(): string { return this._username; }
    public get birth(): string { return this._birth; }
    public get picture(): string { return this._picture; }
    public get hobby(): string { return this._hobby; }
    getAge(): number {
        const now: Date = new Date();
        const age: number = now.getFullYear() - Number.parseInt(this.birth.split('-')[0]);
        
        console.log(this._birth);
        console.log(now)
        console.log(age);   
        
        return age;
    }
    public set username(value: string) {  this._username = value; }
    public set birth(value: string) {  this._birth = value; }
    public set picture(value: string) {  this._picture = value; }
    public set hobby(value: string) {  this._hobby = value; }
    
}
