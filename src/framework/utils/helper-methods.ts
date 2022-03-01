export class HelperMethods {
    static getRandomInt(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    static createAnArrayFromSingleObjectIfItIsNotArrayAlready(obj: any): any[] {
        if (Array.isArray(obj)) {
            return obj;
        } else {
            return [obj];
        }
    }
}
