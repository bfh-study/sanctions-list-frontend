import { SlSearchSanctionEntityInfoModel } from "./sl-search-sanction-entity-info.model";

export class SlSearchSanctionEntityModel {

    private country: String;

    private _entityInfo: SlSearchSanctionEntityInfoModel[];

    public constructor(data: any) {
        this.country = data.country;
        this._entityInfo = new Array<SlSearchSanctionEntityInfoModel>();
        data.entityInfoList.forEach(element => {
            this._entityInfo.push(new SlSearchSanctionEntityInfoModel(element));
        });
    }

    get entityInfo():SlSearchSanctionEntityInfoModel[] {
        return this._entityInfo;
    }
}
