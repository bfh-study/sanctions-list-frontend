
export class SlSearchSanctionEntityInfoModel {

    private _firstName: String;

    private _lastName: String;

    private _wholeName: String;

    private _gender: String;

    private _title: String;

    private _function: String;

    private _language: String;

    public constructor(data: any) {
        this._firstName = data.firstName;
        this._lastName = data.lastName;
        this._wholeName = data.wholeName;
        this._gender = data.gender == null ? "" : data.gender
        this._title = data.title == null ? "" : data.title 
        this._function = data.function == null ? "" : data.function 
        this._language = data.language == null ? "" : data.language 
    }

    get firstName():String {
        return this._firstName;
    }

    get lastName():String {
        return this._lastName;
    }

    get wholeName():String {
        return this._wholeName;
    }

    get gender():String {
        return this._gender;
    }

    get title():String {
        return this._title;
    }
    
    get function():String {
        return this._function;
    }

    get language():String {
        return this._language;
    }
}
