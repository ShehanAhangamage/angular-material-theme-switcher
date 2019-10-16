/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostBinding, Input } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
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
export { CustomDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItbWF0ZXJpYWwtdGhlbWUtc3dpdGNoZXIvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlL2N1c3RvbS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsV0FBVyxFQUNYLEtBQUssRUFFTixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RDtJQWFFLHlCQUNVLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBUG5DLGVBQVUsR0FBVyxFQUFFLENBQUM7UUFFeEIsV0FBTSxHQUFZLEtBQUssQ0FBQztJQU03QixDQUFDOzs7O0lBRUwsa0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs7Ozs7SUFFRCxrQ0FBUTs7Ozs7SUFBUixVQUFTLFVBQVUsRUFBRSxNQUFNOztZQUNyQixLQUFLLEdBQUcsVUFBVSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztRQUV0RCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDOztZQUUzQixnQkFBZ0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxTQUFTO1FBQzlFLElBQUksZ0JBQWdCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUM1QyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQTtTQUMvQzthQUNJO1lBQ0gsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO1NBQzVCO1FBRUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQzs7Z0JBbkNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2lCQUM1Qjs7OztnQkFIUSxnQkFBZ0I7Ozs2QkFRdEIsS0FBSzt5QkFFTCxLQUFLO3NDQUVMLFdBQVcsU0FBQyxPQUFPOztJQTBCdEIsc0JBQUM7Q0FBQSxBQXJDRCxJQXFDQztTQWxDWSxlQUFlOzs7SUFFMUIsbUNBQWlCOztJQUVqQixxQ0FBaUM7O0lBRWpDLGlDQUFpQzs7SUFFakMsOENBQTBDOzs7OztJQUd4QywyQ0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT25Jbml0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBPdmVybGF5Q29udGFpbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2FtVGhlbWVDdXN0b21dJ1xufSlcbmV4cG9ydCBjbGFzcyBDdXN0b21EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIG9sZFRoZW1lOiBzdHJpbmc7XG5cbiAgQElucHV0KCkgY29sb3JUaGVtZTogc3RyaW5nID0gJyc7XG5cbiAgQElucHV0KCkgaXNEYXJrOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpIHRoZW1lQWN0aXZlQ3NzQ2xhc3M7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBvdmVybGF5Q29udGFpbmVyOiBPdmVybGF5Q29udGFpbmVyXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zZXRUaGVtZSh0aGlzLmNvbG9yVGhlbWUsIHRoaXMuaXNEYXJrKTtcbiAgfVxuXG4gIHNldFRoZW1lKGNvbG9yVGhlbWUsIGlzRGFyaykge1xuICAgIGxldCB0aGVtZSA9IGNvbG9yVGhlbWUgKyAoaXNEYXJrID8gJy1kYXJrJyA6ICctbGlnaHQnKTtcblxuICAgIHRoaXMudGhlbWVBY3RpdmVDc3NDbGFzcyA9IHRoZW1lO1xuXG4gICAgY29uc3Qgb3ZlcmxheUNsYXNzTGlzdCA9IHRoaXMub3ZlcmxheUNvbnRhaW5lci5nZXRDb250YWluZXJFbGVtZW50KCkuY2xhc3NMaXN0XG4gICAgaWYgKG92ZXJsYXlDbGFzc0xpc3QuY29udGFpbnModGhpcy5vbGRUaGVtZSkpIHtcbiAgICAgIG92ZXJsYXlDbGFzc0xpc3QucmVwbGFjZSh0aGlzLm9sZFRoZW1lLCB0aGVtZSlcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBvdmVybGF5Q2xhc3NMaXN0LmFkZCh0aGVtZSlcbiAgICB9XG5cbiAgICB0aGlzLm9sZFRoZW1lID0gdGhlbWU7XG4gIH1cblxufVxuIl19