/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostBinding } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { AmThemeService } from '../service/am-theme.service';
export class ActiveDirective {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzaGV5eG5lby9hbmd1bGFyLW1hdGVyaWFsLXRoZW1lLXN3aXRjaGVyLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZS9hY3RpdmUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFdBQVcsRUFFWixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV4RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFLN0QsTUFBTSxPQUFPLGVBQWU7Ozs7O0lBTTFCLFlBQ1UsZ0JBQWtDLEVBQ2xDLGNBQThCO1FBRDlCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBQ3BDLENBQUM7Ozs7SUFFTCxRQUFRO1FBQ04sSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsU0FBUzs7OztRQUFDLENBQUMsVUFBVSxFQUFFLEVBQUU7WUFDdkQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsU0FBUzs7OztZQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7Z0JBQy9DLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ3BDLENBQUMsRUFBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFFRCxRQUFRLENBQUMsVUFBVSxFQUFFLE1BQU07O1lBQ3JCLEtBQUssR0FBRyxVQUFVLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1FBRXRELElBQUksQ0FBQyxtQkFBbUIsR0FBRyxLQUFLLENBQUM7O2NBRTNCLGdCQUFnQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLFNBQVM7UUFDOUUsSUFBSSxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQzVDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFBO1NBQy9DO2FBQ0k7WUFDSCxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7U0FDNUI7UUFFRCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDOzs7WUFwQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7YUFDNUI7Ozs7WUFOUSxnQkFBZ0I7WUFFaEIsY0FBYzs7O2tDQVNwQixXQUFXLFNBQUMsT0FBTzs7OztJQUZwQixtQ0FBaUI7O0lBRWpCLDhDQUEwQzs7Ozs7SUFHeEMsMkNBQTBDOzs7OztJQUMxQyx5Q0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEhvc3RCaW5kaW5nLFxuICBPbkluaXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE92ZXJsYXlDb250YWluZXIgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5cbmltcG9ydCB7IEFtVGhlbWVTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZS9hbS10aGVtZS5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2FtVGhlbWVBY3RpdmVdJ1xufSlcbmV4cG9ydCBjbGFzcyBBY3RpdmVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIG9sZFRoZW1lOiBzdHJpbmc7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpIHRoZW1lQWN0aXZlQ3NzQ2xhc3M7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBvdmVybGF5Q29udGFpbmVyOiBPdmVybGF5Q29udGFpbmVyLFxuICAgIHByaXZhdGUgYW1UaGVtZVNlcnZpY2U6IEFtVGhlbWVTZXJ2aWNlXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5hbVRoZW1lU2VydmljZS5jb2xvclRoZW1lJC5zdWJzY3JpYmUoKGNvbG9yVGhlbWUpID0+IHtcbiAgICAgIHRoaXMuYW1UaGVtZVNlcnZpY2UuaXNEYXJrJC5zdWJzY3JpYmUoKGlzRGFyaykgPT4ge1xuICAgICAgICB0aGlzLnNldFRoZW1lKGNvbG9yVGhlbWUsIGlzRGFyayk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHNldFRoZW1lKGNvbG9yVGhlbWUsIGlzRGFyaykge1xuICAgIGxldCB0aGVtZSA9IGNvbG9yVGhlbWUgKyAoaXNEYXJrID8gJy1kYXJrJyA6ICctbGlnaHQnKTtcblxuICAgIHRoaXMudGhlbWVBY3RpdmVDc3NDbGFzcyA9IHRoZW1lO1xuXG4gICAgY29uc3Qgb3ZlcmxheUNsYXNzTGlzdCA9IHRoaXMub3ZlcmxheUNvbnRhaW5lci5nZXRDb250YWluZXJFbGVtZW50KCkuY2xhc3NMaXN0XG4gICAgaWYgKG92ZXJsYXlDbGFzc0xpc3QuY29udGFpbnModGhpcy5vbGRUaGVtZSkpIHtcbiAgICAgIG92ZXJsYXlDbGFzc0xpc3QucmVwbGFjZSh0aGlzLm9sZFRoZW1lLCB0aGVtZSlcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBvdmVybGF5Q2xhc3NMaXN0LmFkZCh0aGVtZSlcbiAgICB9XG5cbiAgICB0aGlzLm9sZFRoZW1lID0gdGhlbWU7XG4gIH1cblxufVxuIl19