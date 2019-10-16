/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { AmThemeService } from '../../service/am-theme.service';
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
export { ColorSwitcherComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3Itc3dpdGNoZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1tYXRlcmlhbC10aGVtZS1zd2l0Y2hlci8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnQvY29sb3Itc3dpdGNoZXIvY29sb3Itc3dpdGNoZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFFTixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFaEU7SUFhRSxnQ0FBb0IsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBTnpDLGVBQVUsR0FBVyxFQUFFLENBQUM7UUFFeEIsV0FBTSxHQUFhLEVBQUUsQ0FBQztRQUV0Qix1QkFBa0IsR0FBWSxJQUFJLENBQUM7SUFFVSxDQUFDOzs7O0lBRXZELHlDQUFROzs7SUFBUjtRQUFBLGlCQW9CQztRQW5CQyxJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUMzQixJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxPQUFPOzs7O1lBQUMsVUFBQSxVQUFVLElBQUksT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBNUIsQ0FBNEIsRUFBQyxDQUFDO1lBRS9FLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxFQUFFLEVBQUU7Z0JBQzFCLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLFNBQVM7Ozs7Z0JBQUMsVUFBQSxVQUFVLElBQUksT0FBQSxLQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsRUFBNUIsQ0FBNEIsRUFBQyxDQUFDO2FBQ3ZGO1NBQ0Y7YUFBTTtZQUNMLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxFQUFFLEVBQUU7Z0JBQzFCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNsQztTQUNGO1FBRUQsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDL0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ25DO1FBRUQsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLEVBQUUsRUFBRTtZQUMxQixJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ3ZEO0lBQ0gsQ0FBQzs7Ozs7SUFFRCw4Q0FBYTs7OztJQUFiLFVBQWMsVUFBa0I7UUFDOUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0lBQy9CLENBQUM7O2dCQXhDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtvQkFDbkMsdzZCQUE4Qzs7aUJBRS9DOzs7O2dCQU5RLGNBQWM7Ozs2QkFTcEIsS0FBSzt5QkFFTCxLQUFLO3FDQUVMLEtBQUs7O0lBK0JSLDZCQUFDO0NBQUEsQUExQ0QsSUEwQ0M7U0FyQ1ksc0JBQXNCOzs7SUFFakMsNENBQWlDOztJQUVqQyx3Q0FBK0I7O0lBRS9CLG9EQUE0Qzs7Ozs7SUFFaEMsZ0RBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT25Jbml0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBbVRoZW1lU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2UvYW0tdGhlbWUuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FtLXRoZW1lLWNvbG9yLXN3aXRjaGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbG9yLXN3aXRjaGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY29sb3Itc3dpdGNoZXIuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIENvbG9yU3dpdGNoZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIGNvbG9yVGhlbWU6IHN0cmluZyA9ICcnO1xuXG4gIEBJbnB1dCgpIHRoZW1lczogc3RyaW5nW10gPSBbXTtcblxuICBASW5wdXQoKSBpc1VzZUxpYnJhcnlUaGVtZXM6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYW1UaGVtZVNlcnZpY2U6IEFtVGhlbWVTZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5pc1VzZUxpYnJhcnlUaGVtZXMpIHtcbiAgICAgIHRoaXMuYW1UaGVtZVNlcnZpY2UudGhlbWVzLmZvckVhY2goY29sb3JUaGVtZSA9PiB0aGlzLnRoZW1lcy5wdXNoKGNvbG9yVGhlbWUpKTtcblxuICAgICAgaWYgKHRoaXMuY29sb3JUaGVtZSA9PT0gJycpIHtcbiAgICAgICAgdGhpcy5hbVRoZW1lU2VydmljZS5jb2xvclRoZW1lJC5zdWJzY3JpYmUoY29sb3JUaGVtZSA9PiB0aGlzLmNvbG9yVGhlbWUgPSBjb2xvclRoZW1lKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuY29sb3JUaGVtZSA9PT0gJycpIHtcbiAgICAgICAgdGhpcy5jb2xvclRoZW1lID0gdGhpcy50aGVtZXNbMF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMudGhlbWVzLmluZGV4T2YodGhpcy5jb2xvclRoZW1lKSA9PT0gLTEpIHtcbiAgICAgIHRoaXMudGhlbWVzLnB1c2godGhpcy5jb2xvclRoZW1lKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb2xvclRoZW1lICE9PSAnJykge1xuICAgICAgdGhpcy5hbVRoZW1lU2VydmljZS5jb2xvclRoZW1lJC5uZXh0KHRoaXMuY29sb3JUaGVtZSk7XG4gICAgfVxuICB9XG5cbiAgc2V0Q29sb3JUaGVtZShjb2xvclRoZW1lOiBzdHJpbmcpIHtcbiAgICB0aGlzLmFtVGhlbWVTZXJ2aWNlLmNvbG9yVGhlbWUkLm5leHQoY29sb3JUaGVtZSk7XG4gICAgdGhpcy5jb2xvclRoZW1lID0gY29sb3JUaGVtZTtcbiAgfVxuXG59XG4iXX0=