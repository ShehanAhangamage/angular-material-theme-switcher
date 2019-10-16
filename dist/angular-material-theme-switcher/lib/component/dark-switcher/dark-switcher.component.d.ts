import { OnInit } from '@angular/core';
import { AmThemeService } from '../../service/am-theme.service';
export declare class DarkSwitcherComponent implements OnInit {
    private amThemeService;
    isDark: boolean;
    constructor(amThemeService: AmThemeService);
    ngOnInit(): void;
    toggleIsDark(isDark: boolean): void;
}
