import { Injectable, Component, Input, Directive, HostBinding, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatGridListModule, MatIconModule, MatMenuModule, MatSlideToggleModule, MatTooltipModule } from '@angular/material';
import { OverlayContainer, OverlayModule } from '@angular/cdk/overlay';
import { BehaviorSubject } from 'rxjs';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AmThemeService = /** @class */ (function () {
    function AmThemeService() {
        this.themes = [
            'deeppurple-amber',
            'indigo-pink',
            'pink-bluegrey',
            'purple-green',
        ];
        this.colorTheme$ = new BehaviorSubject('indigo-pink');
        this.isDark$ = new BehaviorSubject(false);
    }
    AmThemeService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    AmThemeService.ctorParameters = function () { return []; };
    return AmThemeService;
}());
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
var ColorSwitcherComponent = /** @class */ (function () {
    function ColorSwitcherComponent(amThemeService) {
        this.amThemeService = amThemeService;
        this.colorTheme = '';
        this.themes = [];
        this.isUseLibraryThemes = true;
    }
    /**
     * @return {?}
     */
    ColorSwitcherComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.isUseLibraryThemes) {
            this.amThemeService.themes.forEach((/**
             * @param {?} colorTheme
             * @return {?}
             */
            function (colorTheme) { return _this.themes.push(colorTheme); }));
            if (this.colorTheme === '') {
                this.amThemeService.colorTheme$.subscribe((/**
                 * @param {?} colorTheme
                 * @return {?}
                 */
                function (colorTheme) { return _this.colorTheme = colorTheme; }));
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
    };
    /**
     * @param {?} colorTheme
     * @return {?}
     */
    ColorSwitcherComponent.prototype.setColorTheme = /**
     * @param {?} colorTheme
     * @return {?}
     */
    function (colorTheme) {
        this.amThemeService.colorTheme$.next(colorTheme);
        this.colorTheme = colorTheme;
    };
    ColorSwitcherComponent.decorators = [
        { type: Component, args: [{
                    selector: 'am-theme-color-switcher',
                    template: "<button *ngIf=\"themes.length > 1\" mat-icon-button [mat-menu-trigger-for]=\"themeSwitcher\" matTooltip=\"Switch themes\"\n    tabindex=\"-1\">\n    <mat-icon class=\"auto-flip\">format_color_fill</mat-icon>\n</button>\n\n<mat-menu #themeSwitcher=\"matMenu\">\n    <mat-grid-list cols=\"2\" class=\"switcher-container\">\n        <mat-grid-tile *ngFor=\"let theme of themes\">\n            <button mat-button class=\"switcher\" (click)=\"$event.stopPropagation(); setColorTheme(theme)\">\n                <div [attr.class]=\"'switcher-primary ' + theme\">\n                    <div [attr.class]=\"'switcher-accent ' + theme\"></div>\n                    <div [attr.class]=\"'switcher-warn ' + theme\"></div>\n                    <mat-icon *ngIf=\"colorTheme===theme\" class=\"center switcher-check\">brush</mat-icon>\n                </div>\n            </button>\n        </mat-grid-tile>\n    </mat-grid-list>\n</mat-menu>",
                    styles: [".switcher-container{width:96px;height:96px;margin:0 8px;padding:0!important}.switcher{width:48px;min-width:48px!important;height:48px;padding:0!important;position:relative}.switcher-primary{width:38px;height:38px;margin:5px;border-radius:50%;position:absolute;top:0;left:0}.switcher-accent{width:20px;height:20px;border-radius:50%;position:absolute;top:10%;left:10%}.switcher-warn{width:15px;height:15px;border-radius:50%;position:absolute;top:0;left:0}.switcher-check{color:#fff;font-size:28px;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}"]
                }] }
    ];
    /** @nocollapse */
    ColorSwitcherComponent.ctorParameters = function () { return [
        { type: AmThemeService }
    ]; };
    ColorSwitcherComponent.propDecorators = {
        colorTheme: [{ type: Input }],
        themes: [{ type: Input }],
        isUseLibraryThemes: [{ type: Input }]
    };
    return ColorSwitcherComponent;
}());
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
var DarkSwitcherComponent = /** @class */ (function () {
    function DarkSwitcherComponent(amThemeService) {
        this.amThemeService = amThemeService;
        this.isDark = false;
    }
    /**
     * @return {?}
     */
    DarkSwitcherComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.amThemeService.isDark$.next(this.isDark);
    };
    /**
     * @param {?} isDark
     * @return {?}
     */
    DarkSwitcherComponent.prototype.toggleIsDark = /**
     * @param {?} isDark
     * @return {?}
     */
    function (isDark) {
        this.amThemeService.isDark$.next(isDark);
    };
    DarkSwitcherComponent.decorators = [
        { type: Component, args: [{
                    selector: 'am-theme-dark-switcher',
                    template: "<mat-slide-toggle [checked]=\"isDark\" (click)=\"$event.stopPropagation();\" (change)=\"toggleIsDark($event.checked)\"\n    matTooltip=\"Is Dark?\"></mat-slide-toggle>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    DarkSwitcherComponent.ctorParameters = function () { return [
        { type: AmThemeService }
    ]; };
    DarkSwitcherComponent.propDecorators = {
        isDark: [{ type: Input }]
    };
    return DarkSwitcherComponent;
}());
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
var ContainerDirective = /** @class */ (function () {
    function ContainerDirective(overlayContainer, amThemeService) {
        this.overlayContainer = overlayContainer;
        this.amThemeService = amThemeService;
        this.colorTheme = '';
    }
    /**
     * @return {?}
     */
    ContainerDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.colorTheme !== '') {
            if (typeof this.isDark !== 'undefined') {
                this.setTheme(this.colorTheme, this.isDark);
            }
            else {
                this.amThemeService.isDark$.subscribe((/**
                 * @param {?} isDark
                 * @return {?}
                 */
                function (isDark) {
                    _this.setTheme(_this.colorTheme, isDark);
                }));
            }
        }
        else {
            this.amThemeService.colorTheme$.subscribe((/**
             * @param {?} colorTheme
             * @return {?}
             */
            function (colorTheme) {
                if (typeof _this.isDark !== 'undefined') {
                    _this.setTheme(colorTheme, _this.isDark);
                }
                else {
                    _this.amThemeService.isDark$.subscribe((/**
                     * @param {?} isDark
                     * @return {?}
                     */
                    function (isDark) {
                        _this.setTheme(colorTheme, isDark);
                    }));
                }
            }));
        }
    };
    /**
     * @param {?} colorTheme
     * @param {?} isDark
     * @return {?}
     */
    ContainerDirective.prototype.setTheme = /**
     * @param {?} colorTheme
     * @param {?} isDark
     * @return {?}
     */
    function (colorTheme, isDark) {
        /** @type {?} */
        var theme = colorTheme + (isDark ? '-dark' : '-light');
        this.themeActiveCssClass = theme;
        /** @type {?} */
        var overlayClassList = this.overlayContainer.getContainerElement().classList;
        if (overlayClassList.contains(this.oldTheme)) {
            overlayClassList.replace(this.oldTheme, theme);
        }
        else {
            overlayClassList.add(theme);
        }
        this.oldTheme = theme;
    };
    ContainerDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[amThemeContainer]'
                },] }
    ];
    /** @nocollapse */
    ContainerDirective.ctorParameters = function () { return [
        { type: OverlayContainer },
        { type: AmThemeService }
    ]; };
    ContainerDirective.propDecorators = {
        colorTheme: [{ type: Input }],
        isDark: [{ type: Input }],
        themeActiveCssClass: [{ type: HostBinding, args: ['class',] }]
    };
    return ContainerDirective;
}());
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
var ActiveDirective = /** @class */ (function () {
    function ActiveDirective(overlayContainer, amThemeService) {
        this.overlayContainer = overlayContainer;
        this.amThemeService = amThemeService;
    }
    /**
     * @return {?}
     */
    ActiveDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.amThemeService.colorTheme$.subscribe((/**
         * @param {?} colorTheme
         * @return {?}
         */
        function (colorTheme) {
            _this.amThemeService.isDark$.subscribe((/**
             * @param {?} isDark
             * @return {?}
             */
            function (isDark) {
                _this.setTheme(colorTheme, isDark);
            }));
        }));
    };
    /**
     * @param {?} colorTheme
     * @param {?} isDark
     * @return {?}
     */
    ActiveDirective.prototype.setTheme = /**
     * @param {?} colorTheme
     * @param {?} isDark
     * @return {?}
     */
    function (colorTheme, isDark) {
        /** @type {?} */
        var theme = colorTheme + (isDark ? '-dark' : '-light');
        this.themeActiveCssClass = theme;
        /** @type {?} */
        var overlayClassList = this.overlayContainer.getContainerElement().classList;
        if (overlayClassList.contains(this.oldTheme)) {
            overlayClassList.replace(this.oldTheme, theme);
        }
        else {
            overlayClassList.add(theme);
        }
        this.oldTheme = theme;
    };
    ActiveDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[amThemeActive]'
                },] }
    ];
    /** @nocollapse */
    ActiveDirective.ctorParameters = function () { return [
        { type: OverlayContainer },
        { type: AmThemeService }
    ]; };
    ActiveDirective.propDecorators = {
        themeActiveCssClass: [{ type: HostBinding, args: ['class',] }]
    };
    return ActiveDirective;
}());
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
var CustomDirective = /** @class */ (function () {
    function CustomDirective(overlayContainer) {
        this.overlayContainer = overlayContainer;
        this.colorTheme = '';
        this.isDark = false;
    }
    /**
     * @return {?}
     */
    CustomDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setTheme(this.colorTheme, this.isDark);
    };
    /**
     * @param {?} colorTheme
     * @param {?} isDark
     * @return {?}
     */
    CustomDirective.prototype.setTheme = /**
     * @param {?} colorTheme
     * @param {?} isDark
     * @return {?}
     */
    function (colorTheme, isDark) {
        /** @type {?} */
        var theme = colorTheme + (isDark ? '-dark' : '-light');
        this.themeActiveCssClass = theme;
        /** @type {?} */
        var overlayClassList = this.overlayContainer.getContainerElement().classList;
        if (overlayClassList.contains(this.oldTheme)) {
            overlayClassList.replace(this.oldTheme, theme);
        }
        else {
            overlayClassList.add(theme);
        }
        this.oldTheme = theme;
    };
    CustomDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[amThemeCustom]'
                },] }
    ];
    /** @nocollapse */
    CustomDirective.ctorParameters = function () { return [
        { type: OverlayContainer }
    ]; };
    CustomDirective.propDecorators = {
        colorTheme: [{ type: Input }],
        isDark: [{ type: Input }],
        themeActiveCssClass: [{ type: HostBinding, args: ['class',] }]
    };
    return CustomDirective;
}());
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
var DarkDirective = /** @class */ (function () {
    function DarkDirective(overlayContainer, amThemeService) {
        this.overlayContainer = overlayContainer;
        this.amThemeService = amThemeService;
    }
    /**
     * @return {?}
     */
    DarkDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.amThemeService.colorTheme$.subscribe((/**
         * @param {?} colorTheme
         * @return {?}
         */
        function (colorTheme) {
            _this.setTheme(colorTheme);
        }));
    };
    /**
     * @param {?} colorTheme
     * @return {?}
     */
    DarkDirective.prototype.setTheme = /**
     * @param {?} colorTheme
     * @return {?}
     */
    function (colorTheme) {
        /** @type {?} */
        var theme = colorTheme + '-dark';
        this.themeActiveCssClass = theme;
        /** @type {?} */
        var overlayClassList = this.overlayContainer.getContainerElement().classList;
        if (overlayClassList.contains(this.oldTheme)) {
            overlayClassList.replace(this.oldTheme, theme);
        }
        else {
            overlayClassList.add(theme);
        }
        this.oldTheme = theme;
    };
    DarkDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[amThemeDark]'
                },] }
    ];
    /** @nocollapse */
    DarkDirective.ctorParameters = function () { return [
        { type: OverlayContainer },
        { type: AmThemeService }
    ]; };
    DarkDirective.propDecorators = {
        themeActiveCssClass: [{ type: HostBinding, args: ['class',] }]
    };
    return DarkDirective;
}());
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
var LightDirective = /** @class */ (function () {
    function LightDirective(overlayContainer, amThemeService) {
        this.overlayContainer = overlayContainer;
        this.amThemeService = amThemeService;
    }
    /**
     * @return {?}
     */
    LightDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.amThemeService.colorTheme$.subscribe((/**
         * @param {?} colorTheme
         * @return {?}
         */
        function (colorTheme) {
            _this.setTheme(colorTheme);
        }));
    };
    /**
     * @param {?} colorTheme
     * @return {?}
     */
    LightDirective.prototype.setTheme = /**
     * @param {?} colorTheme
     * @return {?}
     */
    function (colorTheme) {
        /** @type {?} */
        var theme = colorTheme + '-light';
        this.themeActiveCssClass = theme;
        /** @type {?} */
        var overlayClassList = this.overlayContainer.getContainerElement().classList;
        if (overlayClassList.contains(this.oldTheme)) {
            overlayClassList.replace(this.oldTheme, theme);
        }
        else {
            overlayClassList.add(theme);
        }
        this.oldTheme = theme;
    };
    LightDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[amThemeLight]'
                },] }
    ];
    /** @nocollapse */
    LightDirective.ctorParameters = function () { return [
        { type: OverlayContainer },
        { type: AmThemeService }
    ]; };
    LightDirective.propDecorators = {
        themeActiveCssClass: [{ type: HostBinding, args: ['class',] }]
    };
    return LightDirective;
}());
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
var AngularMaterialThemeSwitcherModule = /** @class */ (function () {
    function AngularMaterialThemeSwitcherModule() {
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
    return AngularMaterialThemeSwitcherModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AmThemeService, AngularMaterialThemeSwitcherModule, ColorSwitcherComponent as ɵa, DarkSwitcherComponent as ɵb, ContainerDirective as ɵc, ActiveDirective as ɵd, CustomDirective as ɵe, DarkDirective as ɵf, LightDirective as ɵg };
//# sourceMappingURL=sheyxneo-angular-material-theme-switcher.js.map
