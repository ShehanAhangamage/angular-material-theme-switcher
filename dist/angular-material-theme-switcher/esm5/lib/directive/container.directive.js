/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostBinding, Input } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { AmThemeService } from '../service/am-theme.service';
var ContainerDirective = /** @class */ (function () {
    function ContainerDirective(overlayContainer, amThemeService) {
        this.overlayContainer = overlayContainer;
        this.amThemeService = amThemeService;
        this.colorTheme = '';
    }
    /**
     * @return {?}
     */
    ContainerDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.colorTheme !== '') {
            if (typeof this.isDark !== 'undefined') {
                this.setTheme(this.colorTheme, this.isDark);
            }
            else {
                this.amThemeService.isDark$.subscribe((/**
                 * @param {?} isDark
                 * @return {?}
                 */
                function (isDark) {
                    _this.setTheme(_this.colorTheme, isDark);
                }));
            }
        }
        else {
            this.amThemeService.colorTheme$.subscribe((/**
             * @param {?} colorTheme
             * @return {?}
             */
            function (colorTheme) {
                if (typeof _this.isDark !== 'undefined') {
                    _this.setTheme(colorTheme, _this.isDark);
                }
                else {
                    _this.amThemeService.isDark$.subscribe((/**
                     * @param {?} isDark
                     * @return {?}
                     */
                    function (isDark) {
                        _this.setTheme(colorTheme, isDark);
                    }));
                }
            }));
        }
    };
    /**
     * @param {?} colorTheme
     * @param {?} isDark
     * @return {?}
     */
    ContainerDirective.prototype.setTheme = /**
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
    ContainerDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[amThemeContainer]'
                },] }
    ];
    /** @nocollapse */
    ContainerDirective.ctorParameters = function () { return [
        { type: OverlayContainer },
        { type: AmThemeService }
    ]; };
    ContainerDirective.propDecorators = {
        colorTheme: [{ type: Input }],
        isDark: [{ type: Input }],
        themeActiveCssClass: [{ type: HostBinding, args: ['class',] }]
    };
    return ContainerDirective;
}());
export { ContainerDirective };
if (false) {
    /** @type {?} */
    ContainerDirective.prototype.oldTheme;
    /** @type {?} */
    ContainerDirective.prototype.colorTheme;
    /** @type {?} */
    ContainerDirective.prototype.isDark;
    /** @type {?} */
    ContainerDirective.prototype.themeActiveCssClass;
    /**
     * @type {?}
     * @private
     */
    ContainerDirective.prototype.overlayContainer;
    /**
     * @type {?}
     * @private
     */
    ContainerDirective.prototype.amThemeService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbmVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItbWF0ZXJpYWwtdGhlbWUtc3dpdGNoZXIvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlL2NvbnRhaW5lci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsV0FBVyxFQUNYLEtBQUssRUFFTixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV4RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFN0Q7SUFhRSw0QkFDVSxnQkFBa0MsRUFDbEMsY0FBOEI7UUFEOUIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFSL0IsZUFBVSxHQUFXLEVBQUUsQ0FBQztJQVM3QixDQUFDOzs7O0lBRUwscUNBQVE7OztJQUFSO1FBQUEsaUJBb0JDO1FBbkJDLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxFQUFFLEVBQUU7WUFDMUIsSUFBSSxPQUFPLElBQUksQ0FBQyxNQUFNLEtBQUssV0FBVyxFQUFFO2dCQUN0QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQzdDO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLFNBQVM7Ozs7Z0JBQUMsVUFBQyxNQUFNO29CQUMzQyxLQUFJLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBQ3pDLENBQUMsRUFBQyxDQUFDO2FBQ0o7U0FDRjthQUFNO1lBQ0wsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsU0FBUzs7OztZQUFDLFVBQUMsVUFBVTtnQkFDbkQsSUFBSSxPQUFPLEtBQUksQ0FBQyxNQUFNLEtBQUssV0FBVyxFQUFFO29CQUN0QyxLQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQ3hDO3FCQUFNO29CQUNMLEtBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLFNBQVM7Ozs7b0JBQUMsVUFBQyxNQUFNO3dCQUMzQyxLQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQztvQkFDcEMsQ0FBQyxFQUFDLENBQUM7aUJBQ0o7WUFDSCxDQUFDLEVBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7Ozs7O0lBRUQscUNBQVE7Ozs7O0lBQVIsVUFBUyxVQUFVLEVBQUUsTUFBTTs7WUFDckIsS0FBSyxHQUFHLFVBQVUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7UUFFdEQsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEtBQUssQ0FBQzs7WUFFM0IsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLG1CQUFtQixFQUFFLENBQUMsU0FBUztRQUM5RSxJQUFJLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDNUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUE7U0FDL0M7YUFDSTtZQUNILGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtTQUM1QjtRQUVELElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7O2dCQXRERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtpQkFDL0I7Ozs7Z0JBTlEsZ0JBQWdCO2dCQUVoQixjQUFjOzs7NkJBU3BCLEtBQUs7eUJBRUwsS0FBSztzQ0FFTCxXQUFXLFNBQUMsT0FBTzs7SUE2Q3RCLHlCQUFDO0NBQUEsQUF4REQsSUF3REM7U0FyRFksa0JBQWtCOzs7SUFFN0Isc0NBQWlCOztJQUVqQix3Q0FBaUM7O0lBRWpDLG9DQUF5Qjs7SUFFekIsaURBQTBDOzs7OztJQUd4Qyw4Q0FBMEM7Ozs7O0lBQzFDLDRDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBPbkluaXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE92ZXJsYXlDb250YWluZXIgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5cbmltcG9ydCB7IEFtVGhlbWVTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZS9hbS10aGVtZS5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2FtVGhlbWVDb250YWluZXJdJ1xufSlcbmV4cG9ydCBjbGFzcyBDb250YWluZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIG9sZFRoZW1lOiBzdHJpbmc7XG5cbiAgQElucHV0KCkgY29sb3JUaGVtZTogc3RyaW5nID0gJyc7XG5cbiAgQElucHV0KCkgaXNEYXJrOiBib29sZWFuO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKSB0aGVtZUFjdGl2ZUNzc0NsYXNzO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgb3ZlcmxheUNvbnRhaW5lcjogT3ZlcmxheUNvbnRhaW5lcixcbiAgICBwcml2YXRlIGFtVGhlbWVTZXJ2aWNlOiBBbVRoZW1lU2VydmljZVxuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLmNvbG9yVGhlbWUgIT09ICcnKSB7XG4gICAgICBpZiAodHlwZW9mIHRoaXMuaXNEYXJrICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aGlzLnNldFRoZW1lKHRoaXMuY29sb3JUaGVtZSwgdGhpcy5pc0RhcmspO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hbVRoZW1lU2VydmljZS5pc0RhcmskLnN1YnNjcmliZSgoaXNEYXJrKSA9PiB7XG4gICAgICAgICAgdGhpcy5zZXRUaGVtZSh0aGlzLmNvbG9yVGhlbWUsIGlzRGFyayk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFtVGhlbWVTZXJ2aWNlLmNvbG9yVGhlbWUkLnN1YnNjcmliZSgoY29sb3JUaGVtZSkgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuaXNEYXJrICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRoaXMuc2V0VGhlbWUoY29sb3JUaGVtZSwgdGhpcy5pc0RhcmspO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuYW1UaGVtZVNlcnZpY2UuaXNEYXJrJC5zdWJzY3JpYmUoKGlzRGFyaykgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRUaGVtZShjb2xvclRoZW1lLCBpc0RhcmspO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBzZXRUaGVtZShjb2xvclRoZW1lLCBpc0RhcmspIHtcbiAgICBsZXQgdGhlbWUgPSBjb2xvclRoZW1lICsgKGlzRGFyayA/ICctZGFyaycgOiAnLWxpZ2h0Jyk7XG5cbiAgICB0aGlzLnRoZW1lQWN0aXZlQ3NzQ2xhc3MgPSB0aGVtZTtcblxuICAgIGNvbnN0IG92ZXJsYXlDbGFzc0xpc3QgPSB0aGlzLm92ZXJsYXlDb250YWluZXIuZ2V0Q29udGFpbmVyRWxlbWVudCgpLmNsYXNzTGlzdFxuICAgIGlmIChvdmVybGF5Q2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMub2xkVGhlbWUpKSB7XG4gICAgICBvdmVybGF5Q2xhc3NMaXN0LnJlcGxhY2UodGhpcy5vbGRUaGVtZSwgdGhlbWUpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgb3ZlcmxheUNsYXNzTGlzdC5hZGQodGhlbWUpXG4gICAgfVxuXG4gICAgdGhpcy5vbGRUaGVtZSA9IHRoZW1lO1xuICB9XG5cbn1cbiJdfQ==