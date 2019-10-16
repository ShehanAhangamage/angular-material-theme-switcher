/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostBinding, Input } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
export class CustomDirective {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzaGV5eG5lby9hbmd1bGFyLW1hdGVyaWFsLXRoZW1lLXN3aXRjaGVyLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZS9jdXN0b20uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFdBQVcsRUFDWCxLQUFLLEVBRU4sTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFJeEQsTUFBTSxPQUFPLGVBQWU7Ozs7SUFVMUIsWUFDVSxnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQVBuQyxlQUFVLEdBQVcsRUFBRSxDQUFDO1FBRXhCLFdBQU0sR0FBWSxLQUFLLENBQUM7SUFNN0IsQ0FBQzs7OztJQUVMLFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzlDLENBQUM7Ozs7OztJQUVELFFBQVEsQ0FBQyxVQUFVLEVBQUUsTUFBTTs7WUFDckIsS0FBSyxHQUFHLFVBQVUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7UUFFdEQsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEtBQUssQ0FBQzs7Y0FFM0IsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLG1CQUFtQixFQUFFLENBQUMsU0FBUztRQUM5RSxJQUFJLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDNUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUE7U0FDL0M7YUFDSTtZQUNILGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtTQUM1QjtRQUVELElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7OztZQW5DRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjthQUM1Qjs7OztZQUhRLGdCQUFnQjs7O3lCQVF0QixLQUFLO3FCQUVMLEtBQUs7a0NBRUwsV0FBVyxTQUFDLE9BQU87Ozs7SUFOcEIsbUNBQWlCOztJQUVqQixxQ0FBaUM7O0lBRWpDLGlDQUFpQzs7SUFFakMsOENBQTBDOzs7OztJQUd4QywyQ0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT25Jbml0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBPdmVybGF5Q29udGFpbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2FtVGhlbWVDdXN0b21dJ1xufSlcbmV4cG9ydCBjbGFzcyBDdXN0b21EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIG9sZFRoZW1lOiBzdHJpbmc7XG5cbiAgQElucHV0KCkgY29sb3JUaGVtZTogc3RyaW5nID0gJyc7XG5cbiAgQElucHV0KCkgaXNEYXJrOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpIHRoZW1lQWN0aXZlQ3NzQ2xhc3M7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBvdmVybGF5Q29udGFpbmVyOiBPdmVybGF5Q29udGFpbmVyXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zZXRUaGVtZSh0aGlzLmNvbG9yVGhlbWUsIHRoaXMuaXNEYXJrKTtcbiAgfVxuXG4gIHNldFRoZW1lKGNvbG9yVGhlbWUsIGlzRGFyaykge1xuICAgIGxldCB0aGVtZSA9IGNvbG9yVGhlbWUgKyAoaXNEYXJrID8gJy1kYXJrJyA6ICctbGlnaHQnKTtcblxuICAgIHRoaXMudGhlbWVBY3RpdmVDc3NDbGFzcyA9IHRoZW1lO1xuXG4gICAgY29uc3Qgb3ZlcmxheUNsYXNzTGlzdCA9IHRoaXMub3ZlcmxheUNvbnRhaW5lci5nZXRDb250YWluZXJFbGVtZW50KCkuY2xhc3NMaXN0XG4gICAgaWYgKG92ZXJsYXlDbGFzc0xpc3QuY29udGFpbnModGhpcy5vbGRUaGVtZSkpIHtcbiAgICAgIG92ZXJsYXlDbGFzc0xpc3QucmVwbGFjZSh0aGlzLm9sZFRoZW1lLCB0aGVtZSlcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBvdmVybGF5Q2xhc3NMaXN0LmFkZCh0aGVtZSlcbiAgICB9XG5cbiAgICB0aGlzLm9sZFRoZW1lID0gdGhlbWU7XG4gIH1cblxufVxuIl19