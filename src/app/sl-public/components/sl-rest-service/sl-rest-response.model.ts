
export class SlRestResponseModel {

    private maxScore: number;

    private allowed: boolean;

    public constructor(maxScore: number, allowed: boolean) {
        this.maxScore = maxScore;
        this.allowed = allowed;
    }

    public getMaxScore():number {
        return this.maxScore;
    }

    public isAllowed():boolean {
        return this.allowed;
    }
}
