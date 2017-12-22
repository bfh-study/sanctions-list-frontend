export class NavbarItem {
    private _name: string;
    private _path: string;

    constructor(name: string, path: string) {
        this._name = name;
        this._path = path;
    }

    get name(): string{
        return this._name;
    }

    get path(): string{
        return this._path;
    }
}
