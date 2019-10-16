import { BehaviorSubject } from 'rxjs';
export declare class AmThemeService {
    themes: string[];
    colorTheme$: BehaviorSubject<string>;
    isDark$: BehaviorSubject<boolean>;
    constructor();
}
