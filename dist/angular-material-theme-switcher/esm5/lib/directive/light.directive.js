/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostBinding } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { AmThemeService } from '../service/am-theme.service';
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
export { LightDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlnaHQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNoZXl4bmVvL2FuZ3VsYXItbWF0ZXJpYWwtdGhlbWUtc3dpdGNoZXIvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlL2xpZ2h0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxXQUFXLEVBRVosTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFeEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRTdEO0lBU0Usd0JBQ1UsZ0JBQWtDLEVBQ2xDLGNBQThCO1FBRDlCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBQ3BDLENBQUM7Ozs7SUFFTCxpQ0FBUTs7O0lBQVI7UUFBQSxpQkFJQztRQUhDLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLFVBQVU7WUFDbkQsS0FBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM1QixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsaUNBQVE7Ozs7SUFBUixVQUFTLFVBQVU7O1lBQ2IsS0FBSyxHQUFHLFVBQVUsR0FBRyxRQUFRO1FBRWpDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxLQUFLLENBQUM7O1lBRTNCLGdCQUFnQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLFNBQVM7UUFDOUUsSUFBSSxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQzVDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFBO1NBQy9DO2FBQ0k7WUFDSCxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7U0FDNUI7UUFFRCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDOztnQkFsQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7aUJBQzNCOzs7O2dCQU5RLGdCQUFnQjtnQkFFaEIsY0FBYzs7O3NDQVNwQixXQUFXLFNBQUMsT0FBTzs7SUE2QnRCLHFCQUFDO0NBQUEsQUFwQ0QsSUFvQ0M7U0FqQ1ksY0FBYzs7O0lBRXpCLGtDQUFpQjs7SUFFakIsNkNBQTBDOzs7OztJQUd4QywwQ0FBMEM7Ozs7O0lBQzFDLHdDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgSG9zdEJpbmRpbmcsXG4gIE9uSW5pdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgT3ZlcmxheUNvbnRhaW5lciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcblxuaW1wb3J0IHsgQW1UaGVtZVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlL2FtLXRoZW1lLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYW1UaGVtZUxpZ2h0XSdcbn0pXG5leHBvcnQgY2xhc3MgTGlnaHREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIG9sZFRoZW1lOiBzdHJpbmc7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpIHRoZW1lQWN0aXZlQ3NzQ2xhc3M7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBvdmVybGF5Q29udGFpbmVyOiBPdmVybGF5Q29udGFpbmVyLFxuICAgIHByaXZhdGUgYW1UaGVtZVNlcnZpY2U6IEFtVGhlbWVTZXJ2aWNlXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5hbVRoZW1lU2VydmljZS5jb2xvclRoZW1lJC5zdWJzY3JpYmUoKGNvbG9yVGhlbWUpID0+IHtcbiAgICAgIHRoaXMuc2V0VGhlbWUoY29sb3JUaGVtZSk7XG4gICAgfSk7XG4gIH1cblxuICBzZXRUaGVtZShjb2xvclRoZW1lKSB7XG4gICAgbGV0IHRoZW1lID0gY29sb3JUaGVtZSArICctbGlnaHQnO1xuXG4gICAgdGhpcy50aGVtZUFjdGl2ZUNzc0NsYXNzID0gdGhlbWU7XG5cbiAgICBjb25zdCBvdmVybGF5Q2xhc3NMaXN0ID0gdGhpcy5vdmVybGF5Q29udGFpbmVyLmdldENvbnRhaW5lckVsZW1lbnQoKS5jbGFzc0xpc3RcbiAgICBpZiAob3ZlcmxheUNsYXNzTGlzdC5jb250YWlucyh0aGlzLm9sZFRoZW1lKSkge1xuICAgICAgb3ZlcmxheUNsYXNzTGlzdC5yZXBsYWNlKHRoaXMub2xkVGhlbWUsIHRoZW1lKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIG92ZXJsYXlDbGFzc0xpc3QuYWRkKHRoZW1lKVxuICAgIH1cblxuICAgIHRoaXMub2xkVGhlbWUgPSB0aGVtZTtcbiAgfVxuXG59XG4iXX0=