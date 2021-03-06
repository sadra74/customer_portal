interface Mapper {
    [key: string]: MapperElement;
}

interface MapperElement {
    valueStack: Array<any>;
    handlerStack: Array<(value: any) => void>;
}

export class EventBus {
    private static mapper: Mapper = {};

    public static set(key: number, value: any, removeValueFromValueStackAfterSet = true) {
        const mainKey = EventBus.buildMainKey(key);
        if (!this.getMapperElement(mainKey)) {
            this.initializeMapperWithDefaultValue(mainKey, value);
        } else {
            this.addValue(mainKey, value);
            if (this.isValueStackFilled(mainKey)) {
                this.callEveryHandler(mainKey);
                if (removeValueFromValueStackAfterSet) {
                    this.popLastElement(mainKey);
                }
            }
        }
    }

    public static get(key: number, handler: (value: any) => void, removeValueFromValueStackAfterSet = true) {
        const mainKey = EventBus.buildMainKey(key);
        if (this.getMapperElement(mainKey)) {
            this.addHandler(mainKey, handler);
            if (this.isValueStackFilled(mainKey)) {
                this.callHandler(handler, mainKey);
                if (removeValueFromValueStackAfterSet) {
                    this.popLastElement(mainKey);
                }
            }
        } else {
            this.initializeMapperWithDefaultHandler(mainKey, handler);
        }
    }

    public static clearValueStack(mainKey: string) {
        this.getMapperElement(mainKey).valueStack = [];
    }

    public static clearHandlerStack(mainKey: string) {
        this.getMapperElement(mainKey).handlerStack = [];
    }

//----------------private methods----------------
//----------------private methods----------------
//----------------private methods----------------


    private static callHandler(handler: (value: any) => void, mainKey: string) {
        handler(this.getLastMapperElement(mainKey));
    }

    private static initializeMapperWithDefaultHandler(mainKey: string, handler: (value: any) => void) {
        this.mapper[mainKey] = {valueStack: [], handlerStack: [handler]};
    }

    private static addHandler(mainKey: string, handler: (value: any) => void) {
        this.getMapperElement(mainKey).handlerStack.push(handler);
    }

    private static getLastMapperElement(mainKey: string): MapperElement {
        return this.getMapperElement(mainKey).valueStack[this.getMapperElement(mainKey).valueStack.length - 1];
    }

    private static buildMainKey(key: number) {
        return key.toString();
    }

    private static getMapperElement(mainKey: string): MapperElement {
        return this.mapper[mainKey];
    }

    private static popLastElement(mainKey: string) {
        this.getMapperElement(mainKey).valueStack.pop();
    }

    private static initializeMapperWithDefaultValue(mainKey: string, value: any) {
        this.mapper[mainKey] = {valueStack: [value], handlerStack: []};
    }

    private static addValue(mainKey: string, value: any) {
        this.getMapperElement(mainKey).valueStack.push(value);
    }

    private static isValueStackFilled(mainKey: string) {
        return this.getMapperElement(mainKey).valueStack.length > 0;
    }

    private static callEveryHandler(mainKey: string) {
        this.getMapperElement(mainKey).handlerStack.map(h => h(this.getLastMapperElement(mainKey)));
    }


}
