interface Mapper {
    [key: string]: MapperElement;
}

interface MapperElement {
    valueStack: Array<any>;
    handlerStack: Array<(value: any) => void>;
}

export class EventBus {
    private static mapper: Mapper = {};

    public static set(key: number, value: any, removeValueAfterSet = true, clearValueStackBeforeSet = false) {
        const mainKey = EventBus.buildMainKey(key);
        if (!this.getMapperElement(mainKey)) {
            this.initializeMapperWithDefaultValue(mainKey, value);
        } else {
            if (clearValueStackBeforeSet) {
                this.clearValueStack(mainKey);
            }
            this.addValue(mainKey, value);
            if (this.isValueStackFilled(mainKey)) {
                this.callEveryHandler(mainKey);
                if (removeValueAfterSet) {
                    this.popLastElement(mainKey);
                }
            }
        }
    }

    public static get(key: number, handler: (value: any) => void, removeValueAfterGet = true, clearHandlerStackBeforeGet = false) {
        const mainKey = EventBus.buildMainKey(key);
        if (this.getMapperElement(mainKey)) {
            if (clearHandlerStackBeforeGet) {
                this.clearHandlerStack(mainKey);
            }
            this.addHandler(mainKey, handler);
            if (this.isValueStackFilled(mainKey)) {
                this.callHandler(handler, mainKey);
                if (removeValueAfterGet) {
                    this.popLastElement(mainKey);
                }
            }
        } else {
            this.initializeMapperWithDefaultHandler(mainKey, handler);
        }
    }

//----------------private methods----------------
//----------------private methods----------------
//----------------private methods----------------

    private static clearValueStack(mainKey: string) {
        this.getMapperElement(mainKey).valueStack = [];
    }

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

    private static clearHandlerStack(mainKey: string) {
        this.getMapperElement(mainKey).handlerStack = [];
    }
}
