import { SlSearchSanctionEntityInfoModel } from "./sl-search-sanction-entity-info.model";
import { SlSearchSanctionProgramModel } from "./sl-search-sanction-program.model";

export class SlSearchSanctionEntityModel {

    private country: String;

    private _entityInfo: SlSearchSanctionEntityInfoModel[];
    private _sanctionProgram: SlSearchSanctionProgramModel;

    public constructor(data: any) {
        this.country = data.country;
        this._entityInfo = new Array<SlSearchSanctionEntityInfoModel>();
        data.entityInfoList.forEach(element => {
            this._entityInfo.push(new SlSearchSanctionEntityInfoModel(element));
        });
        this._sanctionProgram = new SlSearchSanctionProgramModel(data.sanctionProgram);
    }

    get entityInfo():SlSearchSanctionEntityInfoModel[] {
        return this._entityInfo;
    }

    get sanctionProgram():SlSearchSanctionProgramModel {
        return this._sanctionProgram;
    }
}
