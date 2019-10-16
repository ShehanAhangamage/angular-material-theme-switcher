import { Injectable, Component, Input, Directive, HostBinding, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatGridListModule, MatIconModule, MatMenuModule, MatSlideToggleModule, MatTooltipModule } from '@angular/material';
import { OverlayContainer, OverlayModule } from '@angular/cdk/overlay';
import { BehaviorSubject } from 'rxjs';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AmThemeService {
    constructor() {
        this.themes = [
            'deeppurple-amber',
            'indigo-pink',
            'pink-bluegrey',
            'purple-green',
        ];
        this.colorTheme$ = new BehaviorSubject('indigo-pink');
        this.isDark$ = new BehaviorSubject(false);
    }
}
AmThemeService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AmThemeService.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    AmThemeService.prototype.themes;
    /** @type {?} */
    AmThemeService.prototype.colorTheme$;
    /** @type {?} */
    AmThemeService.prototype.isDark$;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ColorSwitcherComponent {
    /**
     * @param {?} amThemeService
     */
    constructor(amThemeService) {
        this.amThemeService = amThemeService;
        this.colorTheme = '';
        this.themes = [];
        this.isUseLibraryThemes = true;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.isUseLibraryThemes) {
            this.amThemeService.themes.forEach((/**
             * @param {?} colorTheme
             * @return {?}
             */
            colorTheme => this.themes.push(colorTheme)));
            if (this.colorTheme === '') {
                this.amThemeService.colorTheme$.subscribe((/**
                 * @param {?} colorTheme
                 * @return {?}
                 */
                colorTheme => this.colorTheme = colorTheme));
            }
        }
        else {
            if (this.colorTheme === '') {
                this.colorTheme = this.themes[0];
            }
        }
        if (this.themes.indexOf(this.colorTheme) === -1) {
            this.themes.push(this.colorTheme);
        }
        if (this.colorTheme !== '') {
            this.amThemeService.colorTheme$.next(this.colorTheme);
        }
    }
    /**
     * @param {?} colorTheme
     * @return {?}
     */
    setColorTheme(colorTheme) {
        this.amThemeService.colorTheme$.next(colorTheme);
        this.colorTheme = colorTheme;
    }
}
ColorSwitcherComponent.decorators = [
    { type: Component, args: [{
                selector: 'am-theme-color-switcher',
                template: "<button *ngIf=\"themes.length > 1\" mat-icon-button [mat-menu-trigger-for]=\"themeSwitcher\" matTooltip=\"Switch themes\"\n    tabindex=\"-1\">\n    <mat-icon class=\"auto-flip\">format_color_fill</mat-icon>\n</button>\n\n<mat-menu #themeSwitcher=\"matMenu\">\n    <mat-grid-list cols=\"2\" class=\"switcher-container\">\n        <mat-grid-tile *ngFor=\"let theme of themes\">\n            <button mat-button class=\"switcher\" (click)=\"$event.stopPropagation(); setColorTheme(theme)\">\n                <div [attr.class]=\"'switcher-primary ' + theme\">\n                    <div [attr.class]=\"'switcher-accent ' + theme\"></div>\n                    <div [attr.class]=\"'switcher-warn ' + theme\"></div>\n                    <mat-icon *ngIf=\"colorTheme===theme\" class=\"center switcher-check\">brush</mat-icon>\n                </div>\n            </button>\n        </mat-grid-tile>\n    </mat-grid-list>\n</mat-menu>",
                styles: [".switcher-container{width:96px;height:96px;margin:0 8px;padding:0!important}.switcher{width:48px;min-width:48px!important;height:48px;padding:0!important;position:relative}.switcher-primary{width:38px;height:38px;margin:5px;border-radius:50%;position:absolute;top:0;left:0}.switcher-accent{width:20px;height:20px;border-radius:50%;position:absolute;top:10%;left:10%}.switcher-warn{width:15px;height:15px;border-radius:50%;position:absolute;top:0;left:0}.switcher-check{color:#fff;font-size:28px;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}"]
            }] }
];
/** @nocollapse */
ColorSwitcherComponent.ctorParameters = () => [
    { type: AmThemeService }
];
ColorSwitcherComponent.propDecorators = {
    colorTheme: [{ type: Input }],
    themes: [{ type: Input }],
    isUseLibraryThemes: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ColorSwitcherComponent.prototype.colorTheme;
    /** @type {?} */
    ColorSwitcherComponent.prototype.themes;
    /** @type {?} */
    ColorSwitcherComponent.prototype.isUseLibraryThemes;
    /**
     * @type {?}
     * @private
     */
    ColorSwitcherComponent.prototype.amThemeService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DarkSwitcherComponent {
    /**
     * @param {?} amThemeService
     */
    constructor(amThemeService) {
        this.amThemeService = amThemeService;
        this.isDark = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.amThemeService.isDark$.next(this.isDark);
    }
    /**
     * @param {?} isDark
     * @return {?}
     */
    toggleIsDark(isDark) {
        this.amThemeService.isDark$.next(isDark);
    }
}
DarkSwitcherComponent.decorators = [
    { type: Component, args: [{
                selector: 'am-theme-dark-switcher',
                template: "<mat-slide-toggle [checked]=\"isDark\" (click)=\"$event.stopPropagation();\" (change)=\"toggleIsDark($event.checked)\"\n    matTooltip=\"Is Dark?\"></mat-slide-toggle>",
                styles: [""]
            }] }
];
/** @nocollapse */
DarkSwitcherComponent.ctorParameters = () => [
    { type: AmThemeService }
];
DarkSwitcherComponent.propDecorators = {
    isDark: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    DarkSwitcherComponent.prototype.isDark;
    /**
     * @type {?}
     * @private
     */
    DarkSwitcherComponent.prototype.amThemeService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ContainerDirective {
    /**
     * @param {?} overlayContainer
     * @param {?} amThemeService
     */
    constructor(overlayContainer, amThemeService) {
        this.overlayContainer = overlayContainer;
        this.amThemeService = amThemeService;
        this.colorTheme = '';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.colorTheme !== '') {
            if (typeof this.isDark !== 'undefined') {
                this.setTheme(this.colorTheme, this.isDark);
            }
            else {
                this.amThemeService.isDark$.subscribe((/**
                 * @param {?} isDark
                 * @return {?}
                 */
                (isDark) => {
                    this.setTheme(this.colorTheme, isDark);
                }));
            }
        }
        else {
            this.amThemeService.colorTheme$.subscribe((/**
             * @param {?} colorTheme
             * @return {?}
             */
            (colorTheme) => {
                if (typeof this.isDark !== 'undefined') {
                    this.setTheme(colorTheme, this.isDark);
                }
                else {
                    this.amThemeService.isDark$.subscribe((/**
                     * @param {?} isDark
                     * @return {?}
                     */
                    (isDark) => {
                        this.setTheme(colorTheme, isDark);
                    }));
                }
            }));
        }
    }
    /**
     * @param {?} colorTheme
     * @param {?} isDark
     * @return {?}
     */
    setTheme(colorTheme, isDark) {
        /** @type {?} */
        let theme = colorTheme + (isDark ? '-dark' : '-light');
        this.themeActiveCssClass = theme;
        /** @type {?} */
        const overlayClassList = this.overlayContainer.getContainerElement().classList;
        if (overlayClassList.contains(this.oldTheme)) {
            overlayClassList.replace(this.oldTheme, theme);
        }
        else {
            overlayClassList.add(theme);
        }
        this.oldTheme = theme;
    }
}
ContainerDirective.decorators = [
    { type: Directive, args: [{
                selector: '[amThemeContainer]'
            },] }
];
/** @nocollapse */
ContainerDirective.ctorParameters = () => [
    { type: OverlayContainer },
    { type: AmThemeService }
];
ContainerDirective.propDecorators = {
    colorTheme: [{ type: Input }],
    isDark: [{ type: Input }],
    themeActiveCssClass: [{ type: HostBinding, args: ['class',] }]
};
if (false) {
    /** @type {?} */
    ContainerDirective.prototype.oldTheme;
    /** @type {?} */
    ContainerDirective.prototype.colorTheme;
    /** @type {?} */
    ContainerDirective.prototype.isDark;
    /** @type {?} */
    ContainerDirective.prototype.themeActiveCssClass;
    /**
     * @type {?}
     * @private
     */
    ContainerDirective.prototype.overlayContainer;
    /**
     * @type {?}
     * @private
     */
    ContainerDirective.prototype.amThemeService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ActiveDirective {
    /**
     * @param {?} overlayContainer
     * @param {?} amThemeService
     */
    constructor(overlayContainer, amThemeService) {
        this.overlayContainer = overlayContainer;
        this.amThemeService = amThemeService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.amThemeService.colorTheme$.subscribe((/**
         * @param {?} colorTheme
         * @return {?}
         */
        (colorTheme) => {
            this.amThemeService.isDark$.subscribe((/**
             * @param {?} isDark
             * @return {?}
             */
            (isDark) => {
                this.setTheme(colorTheme, isDark);
            }));
        }));
    }
    /**
     * @param {?} colorTheme
     * @param {?} isDark
     * @return {?}
     */
    setTheme(colorTheme, isDark) {
        /** @type {?} */
        let theme = colorTheme + (isDark ? '-dark' : '-light');
        this.themeActiveCssClass = theme;
        /** @type {?} */
        const overlayClassList = this.overlayContainer.getContainerElement().classList;
        if (overlayClassList.contains(this.oldTheme)) {
            overlayClassList.replace(this.oldTheme, theme);
        }
        else {
            overlayClassList.add(theme);
        }
        this.oldTheme = theme;
    }
}
ActiveDirective.decorators = [
    { type: Directive, args: [{
                selector: '[amThemeActive]'
            },] }
];
/** @nocollapse */
ActiveDirective.ctorParameters = () => [
    { type: OverlayContainer },
    { type: AmThemeService }
];
ActiveDirective.propDecorators = {
    themeActiveCssClass: [{ type: HostBinding, args: ['class',] }]
};
if (false) {
    /** @type {?} */
    ActiveDirective.prototype.oldTheme;
    /** @type {?} */
    ActiveDirective.prototype.themeActiveCssClass;
    /**
     * @type {?}
     * @private
     */
    ActiveDirective.prototype.overlayContainer;
    /**
     * @type {?}
     * @private
     */
    ActiveDirective.prototype.amThemeService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomDirective {
    /**
     * @param {?} overlayContainer
     */
    constructor(overlayContainer) {
        this.overlayContainer = overlayContainer;
        this.colorTheme = '';
        this.isDark = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setTheme(this.colorTheme, this.isDark);
    }
    /**
     * @param {?} colorTheme
     * @param {?} isDark
     * @return {?}
     */
    setTheme(colorTheme, isDark) {
        /** @type {?} */
        let theme = colorTheme + (isDark ? '-dark' : '-light');
        this.themeActiveCssClass = theme;
        /** @type {?} */
        const overlayClassList = this.overlayContainer.getContainerElement().classList;
        if (overlayClassList.contains(this.oldTheme)) {
            overlayClassList.replace(this.oldTheme, theme);
        }
        else {
            overlayClassList.add(theme);
        }
        this.oldTheme = theme;
    }
}
CustomDirective.decorators = [
    { type: Directive, args: [{
                selector: '[amThemeCustom]'
            },] }
];
/** @nocollapse */
CustomDirective.ctorParameters = () => [
    { type: OverlayContainer }
];
CustomDirective.propDecorators = {
    colorTheme: [{ type: Input }],
    isDark: [{ type: Input }],
    themeActiveCssClass: [{ type: HostBinding, args: ['class',] }]
};
if (false) {
    /** @type {?} */
    CustomDirective.prototype.oldTheme;
    /** @type {?} */
    CustomDirective.prototype.colorTheme;
    /** @type {?} */
    CustomDirective.prototype.isDark;
    /** @type {?} */
    CustomDirective.prototype.themeActiveCssClass;
    /**
     * @type {?}
     * @private
     */
    CustomDirective.prototype.overlayContainer;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DarkDirective {
    /**
     * @param {?} overlayContainer
     * @param {?} amThemeService
     */
    constructor(overlayContainer, amThemeService) {
        this.overlayContainer = overlayContainer;
        this.amThemeService = amThemeService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.amThemeService.colorTheme$.subscribe((/**
         * @param {?} colorTheme
         * @return {?}
         */
        (colorTheme) => {
            this.setTheme(colorTheme);
        }));
    }
    /**
     * @param {?} colorTheme
     * @return {?}
     */
    setTheme(colorTheme) {
        /** @type {?} */
        let theme = colorTheme + '-dark';
        this.themeActiveCssClass = theme;
        /** @type {?} */
        const overlayClassList = this.overlayContainer.getContainerElement().classList;
        if (overlayClassList.contains(this.oldTheme)) {
            overlayClassList.replace(this.oldTheme, theme);
        }
        else {
            overlayClassList.add(theme);
        }
        this.oldTheme = theme;
    }
}
DarkDirective.decorators = [
    { type: Directive, args: [{
                selector: '[amThemeDark]'
            },] }
];
/** @nocollapse */
DarkDirective.ctorParameters = () => [
    { type: OverlayContainer },
    { type: AmThemeService }
];
DarkDirective.propDecorators = {
    themeActiveCssClass: [{ type: HostBinding, args: ['class',] }]
};
if (false) {
    /** @type {?} */
    DarkDirective.prototype.oldTheme;
    /** @type {?} */
    DarkDirective.prototype.themeActiveCssClass;
    /**
     * @type {?}
     * @private
     */
    DarkDirective.prototype.overlayContainer;
    /**
     * @type {?}
     * @private
     */
    DarkDirective.prototype.amThemeService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LightDirective {
    /**
     * @param {?} overlayContainer
     * @param {?} amThemeService
     */
    constructor(overlayContainer, amThemeService) {
        this.overlayContainer = overlayContainer;
        this.amThemeService = amThemeService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.amThemeService.colorTheme$.subscribe((/**
         * @param {?} colorTheme
         * @return {?}
         */
        (colorTheme) => {
            this.setTheme(colorTheme);
        }));
    }
    /**
     * @param {?} colorTheme
     * @return {?}
     */
    setTheme(colorTheme) {
        /** @type {?} */
        let theme = colorTheme + '-light';
        this.themeActiveCssClass = theme;
        /** @type {?} */
        const overlayClassList = this.overlayContainer.getContainerElement().classList;
        if (overlayClassList.contains(this.oldTheme)) {
            overlayClassList.replace(this.oldTheme, theme);
        }
        else {
            overlayClassList.add(theme);
        }
        this.oldTheme = theme;
    }
}
LightDirective.decorators = [
    { type: Directive, args: [{
                selector: '[amThemeLight]'
            },] }
];
/** @nocollapse */
LightDirective.ctorParameters = () => [
    { type: OverlayContainer },
    { type: AmThemeService }
];
LightDirective.propDecorators = {
    themeActiveCssClass: [{ type: HostBinding, args: ['class',] }]
};
if (false) {
    /** @type {?} */
    LightDirective.prototype.oldTheme;
    /** @type {?} */
    LightDirective.prototype.themeActiveCssClass;
    /**
     * @type {?}
     * @private
     */
    LightDirective.prototype.overlayContainer;
    /**
     * @type {?}
     * @private
     */
    LightDirective.prototype.amThemeService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AngularMaterialThemeSwitcherModule {
}
AngularMaterialThemeSwitcherModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    ColorSwitcherComponent,
                    DarkSwitcherComponent,
                    ContainerDirective,
                    ActiveDirective,
                    CustomDirective,
                    DarkDirective,
                    LightDirective
                ],
                providers: [
                    AmThemeService
                ],
                imports: [
                    CommonModule,
                    OverlayModule,
                    MatButtonModule,
                    MatGridListModule,
                    MatIconModule,
                    MatMenuModule,
                    MatSlideToggleModule,
                    MatTooltipModule
                ],
                exports: [
                    ColorSwitcherComponent,
                    DarkSwitcherComponent,
                    ContainerDirective,
                    ActiveDirective,
                    CustomDirective,
                    DarkDirective,
                    LightDirective
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AmThemeService, AngularMaterialThemeSwitcherModule, ColorSwitcherComponent as ɵa, DarkSwitcherComponent as ɵb, ContainerDirective as ɵc, ActiveDirective as ɵd, CustomDirective as ɵe, DarkDirective as ɵf, LightDirective as ɵg };
//# sourceMappingURL=angular-material-theme-switcher.js.map
