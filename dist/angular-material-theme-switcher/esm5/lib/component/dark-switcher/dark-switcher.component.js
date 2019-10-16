/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { AmThemeService } from '../../service/am-theme.service';
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
export { DarkSwitcherComponent };
if (false) {
    /** @type {?} */
    DarkSwitcherComponent.prototype.isDark;
    /**
     * @type {?}
     * @private
     */
    DarkSwitcherComponent.prototype.amThemeService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFyay1zd2l0Y2hlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLW1hdGVyaWFsLXRoZW1lLXN3aXRjaGVyLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudC9kYXJrLXN3aXRjaGVyL2Rhcmstc3dpdGNoZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFFTixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFaEU7SUFTRSwrQkFBb0IsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBRnpDLFdBQU0sR0FBWSxLQUFLLENBQUM7SUFFcUIsQ0FBQzs7OztJQUV2RCx3Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2hELENBQUM7Ozs7O0lBRUQsNENBQVk7Ozs7SUFBWixVQUFhLE1BQWU7UUFDMUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzNDLENBQUM7O2dCQWpCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtvQkFDbEMsbUxBQTZDOztpQkFFOUM7Ozs7Z0JBTlEsY0FBYzs7O3lCQVNwQixLQUFLOztJQVlSLDRCQUFDO0NBQUEsQUFuQkQsSUFtQkM7U0FkWSxxQkFBcUI7OztJQUVoQyx1Q0FBaUM7Ozs7O0lBRXJCLCtDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE9uSW5pdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQW1UaGVtZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlL2FtLXRoZW1lLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhbS10aGVtZS1kYXJrLXN3aXRjaGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Rhcmstc3dpdGNoZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kYXJrLXN3aXRjaGVyLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBEYXJrU3dpdGNoZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIGlzRGFyazogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYW1UaGVtZVNlcnZpY2U6IEFtVGhlbWVTZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmFtVGhlbWVTZXJ2aWNlLmlzRGFyayQubmV4dCh0aGlzLmlzRGFyayk7XG4gIH1cblxuICB0b2dnbGVJc0RhcmsoaXNEYXJrOiBib29sZWFuKSB7XG4gICAgdGhpcy5hbVRoZW1lU2VydmljZS5pc0RhcmskLm5leHQoaXNEYXJrKTtcbiAgfVxuXG59XG4iXX0=