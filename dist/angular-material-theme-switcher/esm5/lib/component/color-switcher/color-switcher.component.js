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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3Itc3dpdGNoZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNoZXl4bmVvL2FuZ3VsYXItbWF0ZXJpYWwtdGhlbWUtc3dpdGNoZXIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50L2NvbG9yLXN3aXRjaGVyL2NvbG9yLXN3aXRjaGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBRU4sTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRWhFO0lBYUUsZ0NBQW9CLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQU56QyxlQUFVLEdBQVcsRUFBRSxDQUFDO1FBRXhCLFdBQU0sR0FBYSxFQUFFLENBQUM7UUFFdEIsdUJBQWtCLEdBQVksSUFBSSxDQUFDO0lBRVUsQ0FBQzs7OztJQUV2RCx5Q0FBUTs7O0lBQVI7UUFBQSxpQkFvQkM7UUFuQkMsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDM0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsT0FBTzs7OztZQUFDLFVBQUEsVUFBVSxJQUFJLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQTVCLENBQTRCLEVBQUMsQ0FBQztZQUUvRSxJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssRUFBRSxFQUFFO2dCQUMxQixJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxTQUFTOzs7O2dCQUFDLFVBQUEsVUFBVSxJQUFJLE9BQUEsS0FBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLEVBQTVCLENBQTRCLEVBQUMsQ0FBQzthQUN2RjtTQUNGO2FBQU07WUFDTCxJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssRUFBRSxFQUFFO2dCQUMxQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDbEM7U0FDRjtRQUVELElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQy9DLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUNuQztRQUVELElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxFQUFFLEVBQUU7WUFDMUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUN2RDtJQUNILENBQUM7Ozs7O0lBRUQsOENBQWE7Ozs7SUFBYixVQUFjLFVBQWtCO1FBQzlCLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztJQUMvQixDQUFDOztnQkF4Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx5QkFBeUI7b0JBQ25DLHc2QkFBOEM7O2lCQUUvQzs7OztnQkFOUSxjQUFjOzs7NkJBU3BCLEtBQUs7eUJBRUwsS0FBSztxQ0FFTCxLQUFLOztJQStCUiw2QkFBQztDQUFBLEFBMUNELElBMENDO1NBckNZLHNCQUFzQjs7O0lBRWpDLDRDQUFpQzs7SUFFakMsd0NBQStCOztJQUUvQixvREFBNEM7Ozs7O0lBRWhDLGdEQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE9uSW5pdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQW1UaGVtZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlL2FtLXRoZW1lLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhbS10aGVtZS1jb2xvci1zd2l0Y2hlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb2xvci1zd2l0Y2hlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NvbG9yLXN3aXRjaGVyLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDb2xvclN3aXRjaGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBjb2xvclRoZW1lOiBzdHJpbmcgPSAnJztcblxuICBASW5wdXQoKSB0aGVtZXM6IHN0cmluZ1tdID0gW107XG5cbiAgQElucHV0KCkgaXNVc2VMaWJyYXJ5VGhlbWVzOiBib29sZWFuID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFtVGhlbWVTZXJ2aWNlOiBBbVRoZW1lU2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMuaXNVc2VMaWJyYXJ5VGhlbWVzKSB7XG4gICAgICB0aGlzLmFtVGhlbWVTZXJ2aWNlLnRoZW1lcy5mb3JFYWNoKGNvbG9yVGhlbWUgPT4gdGhpcy50aGVtZXMucHVzaChjb2xvclRoZW1lKSk7XG5cbiAgICAgIGlmICh0aGlzLmNvbG9yVGhlbWUgPT09ICcnKSB7XG4gICAgICAgIHRoaXMuYW1UaGVtZVNlcnZpY2UuY29sb3JUaGVtZSQuc3Vic2NyaWJlKGNvbG9yVGhlbWUgPT4gdGhpcy5jb2xvclRoZW1lID0gY29sb3JUaGVtZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmNvbG9yVGhlbWUgPT09ICcnKSB7XG4gICAgICAgIHRoaXMuY29sb3JUaGVtZSA9IHRoaXMudGhlbWVzWzBdO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLnRoZW1lcy5pbmRleE9mKHRoaXMuY29sb3JUaGVtZSkgPT09IC0xKSB7XG4gICAgICB0aGlzLnRoZW1lcy5wdXNoKHRoaXMuY29sb3JUaGVtZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY29sb3JUaGVtZSAhPT0gJycpIHtcbiAgICAgIHRoaXMuYW1UaGVtZVNlcnZpY2UuY29sb3JUaGVtZSQubmV4dCh0aGlzLmNvbG9yVGhlbWUpO1xuICAgIH1cbiAgfVxuXG4gIHNldENvbG9yVGhlbWUoY29sb3JUaGVtZTogc3RyaW5nKSB7XG4gICAgdGhpcy5hbVRoZW1lU2VydmljZS5jb2xvclRoZW1lJC5uZXh0KGNvbG9yVGhlbWUpO1xuICAgIHRoaXMuY29sb3JUaGVtZSA9IGNvbG9yVGhlbWU7XG4gIH1cblxufVxuIl19