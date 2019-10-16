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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFyay1zd2l0Y2hlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLW1hdGVyaWFsLXRoZW1lLXN3aXRjaGVyLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudC9kYXJrLXN3aXRjaGVyL2Rhcmstc3dpdGNoZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFFTixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFPaEUsTUFBTSxPQUFPLHFCQUFxQjs7OztJQUloQyxZQUFvQixjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFGekMsV0FBTSxHQUFZLEtBQUssQ0FBQztJQUVxQixDQUFDOzs7O0lBRXZELFFBQVE7UUFDTixJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2hELENBQUM7Ozs7O0lBRUQsWUFBWSxDQUFDLE1BQWU7UUFDMUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzNDLENBQUM7OztZQWpCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsbUxBQTZDOzthQUU5Qzs7OztZQU5RLGNBQWM7OztxQkFTcEIsS0FBSzs7OztJQUFOLHVDQUFpQzs7Ozs7SUFFckIsK0NBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT25Jbml0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBbVRoZW1lU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2UvYW0tdGhlbWUuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FtLXRoZW1lLWRhcmstc3dpdGNoZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vZGFyay1zd2l0Y2hlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Rhcmstc3dpdGNoZXIuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIERhcmtTd2l0Y2hlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgaXNEYXJrOiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhbVRoZW1lU2VydmljZTogQW1UaGVtZVNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuYW1UaGVtZVNlcnZpY2UuaXNEYXJrJC5uZXh0KHRoaXMuaXNEYXJrKTtcbiAgfVxuXG4gIHRvZ2dsZUlzRGFyayhpc0Rhcms6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmFtVGhlbWVTZXJ2aWNlLmlzRGFyayQubmV4dChpc0RhcmspO1xuICB9XG5cbn1cbiJdfQ==