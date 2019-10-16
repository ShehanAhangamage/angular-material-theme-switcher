/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { AmThemeService } from '../../service/am-theme.service';
export class DarkSwitcherComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFyay1zd2l0Y2hlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2hleXhuZW8vYW5ndWxhci1tYXRlcmlhbC10aGVtZS1zd2l0Y2hlci8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnQvZGFyay1zd2l0Y2hlci9kYXJrLXN3aXRjaGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBRU4sTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBT2hFLE1BQU0sT0FBTyxxQkFBcUI7Ozs7SUFJaEMsWUFBb0IsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBRnpDLFdBQU0sR0FBWSxLQUFLLENBQUM7SUFFcUIsQ0FBQzs7OztJQUV2RCxRQUFRO1FBQ04sSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNoRCxDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxNQUFlO1FBQzFCLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7WUFqQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLG1MQUE2Qzs7YUFFOUM7Ozs7WUFOUSxjQUFjOzs7cUJBU3BCLEtBQUs7Ozs7SUFBTix1Q0FBaUM7Ozs7O0lBRXJCLCtDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE9uSW5pdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQW1UaGVtZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlL2FtLXRoZW1lLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhbS10aGVtZS1kYXJrLXN3aXRjaGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Rhcmstc3dpdGNoZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kYXJrLXN3aXRjaGVyLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBEYXJrU3dpdGNoZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIGlzRGFyazogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYW1UaGVtZVNlcnZpY2U6IEFtVGhlbWVTZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmFtVGhlbWVTZXJ2aWNlLmlzRGFyayQubmV4dCh0aGlzLmlzRGFyayk7XG4gIH1cblxuICB0b2dnbGVJc0RhcmsoaXNEYXJrOiBib29sZWFuKSB7XG4gICAgdGhpcy5hbVRoZW1lU2VydmljZS5pc0RhcmskLm5leHQoaXNEYXJrKTtcbiAgfVxuXG59XG4iXX0=