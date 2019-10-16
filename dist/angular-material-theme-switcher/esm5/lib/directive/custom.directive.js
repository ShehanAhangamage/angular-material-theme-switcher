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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzaGV5eG5lby9hbmd1bGFyLW1hdGVyaWFsLXRoZW1lLXN3aXRjaGVyLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZS9jdXN0b20uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFdBQVcsRUFDWCxLQUFLLEVBRU4sTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQ7SUFhRSx5QkFDVSxnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQVBuQyxlQUFVLEdBQVcsRUFBRSxDQUFDO1FBRXhCLFdBQU0sR0FBWSxLQUFLLENBQUM7SUFNN0IsQ0FBQzs7OztJQUVMLGtDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7Ozs7O0lBRUQsa0NBQVE7Ozs7O0lBQVIsVUFBUyxVQUFVLEVBQUUsTUFBTTs7WUFDckIsS0FBSyxHQUFHLFVBQVUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7UUFFdEQsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEtBQUssQ0FBQzs7WUFFM0IsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLG1CQUFtQixFQUFFLENBQUMsU0FBUztRQUM5RSxJQUFJLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDNUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUE7U0FDL0M7YUFDSTtZQUNILGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtTQUM1QjtRQUVELElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7O2dCQW5DRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtpQkFDNUI7Ozs7Z0JBSFEsZ0JBQWdCOzs7NkJBUXRCLEtBQUs7eUJBRUwsS0FBSztzQ0FFTCxXQUFXLFNBQUMsT0FBTzs7SUEwQnRCLHNCQUFDO0NBQUEsQUFyQ0QsSUFxQ0M7U0FsQ1ksZUFBZTs7O0lBRTFCLG1DQUFpQjs7SUFFakIscUNBQWlDOztJQUVqQyxpQ0FBaUM7O0lBRWpDLDhDQUEwQzs7Ozs7SUFHeEMsMkNBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE9uSW5pdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgT3ZlcmxheUNvbnRhaW5lciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1thbVRoZW1lQ3VzdG9tXSdcbn0pXG5leHBvcnQgY2xhc3MgQ3VzdG9tRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcblxuICBvbGRUaGVtZTogc3RyaW5nO1xuXG4gIEBJbnB1dCgpIGNvbG9yVGhlbWU6IHN0cmluZyA9ICcnO1xuXG4gIEBJbnB1dCgpIGlzRGFyazogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKSB0aGVtZUFjdGl2ZUNzc0NsYXNzO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgb3ZlcmxheUNvbnRhaW5lcjogT3ZlcmxheUNvbnRhaW5lclxuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc2V0VGhlbWUodGhpcy5jb2xvclRoZW1lLCB0aGlzLmlzRGFyayk7XG4gIH1cblxuICBzZXRUaGVtZShjb2xvclRoZW1lLCBpc0RhcmspIHtcbiAgICBsZXQgdGhlbWUgPSBjb2xvclRoZW1lICsgKGlzRGFyayA/ICctZGFyaycgOiAnLWxpZ2h0Jyk7XG5cbiAgICB0aGlzLnRoZW1lQWN0aXZlQ3NzQ2xhc3MgPSB0aGVtZTtcblxuICAgIGNvbnN0IG92ZXJsYXlDbGFzc0xpc3QgPSB0aGlzLm92ZXJsYXlDb250YWluZXIuZ2V0Q29udGFpbmVyRWxlbWVudCgpLmNsYXNzTGlzdFxuICAgIGlmIChvdmVybGF5Q2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMub2xkVGhlbWUpKSB7XG4gICAgICBvdmVybGF5Q2xhc3NMaXN0LnJlcGxhY2UodGhpcy5vbGRUaGVtZSwgdGhlbWUpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgb3ZlcmxheUNsYXNzTGlzdC5hZGQodGhlbWUpXG4gICAgfVxuXG4gICAgdGhpcy5vbGRUaGVtZSA9IHRoZW1lO1xuICB9XG5cbn1cbiJdfQ==