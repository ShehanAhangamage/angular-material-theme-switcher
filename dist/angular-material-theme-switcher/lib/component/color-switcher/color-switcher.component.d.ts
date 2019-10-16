import { OnInit } from '@angular/core';
import { AmThemeService } from '../../service/am-theme.service';
export declare class ColorSwitcherComponent implements OnInit {
    private amThemeService;
    colorTheme: string;
    themes: string[];
    isUseLibraryThemes: boolean;
    constructor(amThemeService: AmThemeService);
    ngOnInit(): void;
    setColorTheme(colorTheme: string): void;
}
