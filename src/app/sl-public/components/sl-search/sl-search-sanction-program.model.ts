
export class SlSearchSanctionProgramModel {

    private _origin: String;

    private _date: Date;

    public constructor(data: any) {
        this._origin = data.origin;
        this._date = data.date;  }

    get origin():String {
        return this._origin;
    }

    get date():Date {
        return this._date;
    }
}
