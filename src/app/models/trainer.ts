export class Trainer {
    constructor(private _username: string, private _birth: Date, private _picture: string, private _hobby: string ) { }

   
    public get username(): string {
        return this._username;
    }
    public get birth(): Date {
        return this._birth;
    }
    public get picture(): string {
        return this._picture;
    }
    public get hobby(): string {
        return this._hobby;
    }
    getAge(): number {
        const now: Date = new Date();
        const age: number = now.getFullYear() - new Date (this._birth).getFullYear();
        return age;
    }
    public set username(value: string) {  this._username = value; }
    public set birth(value: Date) {  this._birth = value; }
    public set picture(value: string) {  this._picture = value; }
    public set hobby(value: string) {  this._hobby = value; }
    
    
}
