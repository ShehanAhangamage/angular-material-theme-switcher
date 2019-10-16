import { OnInit } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
export declare class CustomDirective implements OnInit {
    private overlayContainer;
    oldTheme: string;
    colorTheme: string;
    isDark: boolean;
    themeActiveCssClass: any;
    constructor(overlayContainer: OverlayContainer);
    ngOnInit(): void;
    setTheme(colorTheme: any, isDark: any): void;
}
