import { OnInit } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { AmThemeService } from '../service/am-theme.service';
export declare class LightDirective implements OnInit {
    private overlayContainer;
    private amThemeService;
    oldTheme: string;
    themeActiveCssClass: any;
    constructor(overlayContainer: OverlayContainer, amThemeService: AmThemeService);
    ngOnInit(): void;
    setTheme(colorTheme: any): void;
}
