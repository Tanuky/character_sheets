// this class exports Characteristics

export class Characteristic {
    key: string;
    value: number;
    bonus: number;

    constructor(inputKey: string, inputValue?: number) {
        this.key = inputKey;
        if (inputValue) {
            // using setValue allow to make verifications
            this.setValue(inputValue);
        } else {
            // default value is correct so no need for verifications 
            this.value = 10;
        }
        this.calculateChracteristicsBonus();
    }

    calculateChracteristicsBonus(): void{
        this.bonus = Math.floor((this.value - 10) / 2)
    }

    getKey (): string {
        return this.key;
    }

    setValue(inputValue: number): void  {
        if (inputValue <= 30 && inputValue >= 0) {
            this.value = inputValue;
        } else {
            if (!this.value) {
                this.value = 10;
            }
        }
        this.calculateChracteristicsBonus();
    }

    getValue (): number {
        return this.value;
    }

    getBonus (): number {
        return this.bonus;
    }

    getBonusAsString ():string {
        if (this.bonus > 0) {
            return '+' + this.bonus;
        } else if (this.bonus) {
            return this.bonus.toString()
        } else {
            return '-'
        }
    }
}