import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'sweering'})

export class SweeringPipe implements PipeTransform {
    _bad_words = [
        'poo',
        'afternoon'
    ];
    transform(value: string): string {
        for (const bad of this._bad_words) {
            value = value.replace(bad, 'ohhdaer');
        }
        return value;
    }
}
