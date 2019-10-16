/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostBinding } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { AmThemeService } from '../service/am-theme.service';
var ActiveDirective = /** @class */ (function () {
    function ActiveDirective(overlayContainer, amThemeService) {
        this.overlayContainer = overlayContainer;
        this.amThemeService = amThemeService;
    }
    /**
     * @return {?}
     */
    ActiveDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.amThemeService.colorTheme$.subscribe((/**
         * @param {?} colorTheme
         * @return {?}
         */
        function (colorTheme) {
            _this.amThemeService.isDark$.subscribe((/**
             * @param {?} isDark
             * @return {?}
             */
            function (isDark) {
                _this.setTheme(colorTheme, isDark);
            }));
        }));
    };
    /**
     * @param {?} colorTheme
     * @param {?} isDark
     * @return {?}
     */
    ActiveDirective.prototype.setTheme = /**
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
    ActiveDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[amThemeActive]'
                },] }
    ];
    /** @nocollapse */
    ActiveDirective.ctorParameters = function () { return [
        { type: OverlayContainer },
        { type: AmThemeService }
    ]; };
    ActiveDirective.propDecorators = {
        themeActiveCssClass: [{ type: HostBinding, args: ['class',] }]
    };
    return ActiveDirective;
}());
export { ActiveDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItbWF0ZXJpYWwtdGhlbWUtc3dpdGNoZXIvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlL2FjdGl2ZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsV0FBVyxFQUVaLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXhELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUU3RDtJQVNFLHlCQUNVLGdCQUFrQyxFQUNsQyxjQUE4QjtRQUQ5QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtJQUNwQyxDQUFDOzs7O0lBRUwsa0NBQVE7OztJQUFSO1FBQUEsaUJBTUM7UUFMQyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxVQUFVO1lBQ25ELEtBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLFNBQVM7Ozs7WUFBQyxVQUFDLE1BQU07Z0JBQzNDLEtBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ3BDLENBQUMsRUFBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFFRCxrQ0FBUTs7Ozs7SUFBUixVQUFTLFVBQVUsRUFBRSxNQUFNOztZQUNyQixLQUFLLEdBQUcsVUFBVSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztRQUV0RCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDOztZQUUzQixnQkFBZ0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxTQUFTO1FBQzlFLElBQUksZ0JBQWdCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUM1QyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQTtTQUMvQzthQUNJO1lBQ0gsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO1NBQzVCO1FBRUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQzs7Z0JBcENGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2lCQUM1Qjs7OztnQkFOUSxnQkFBZ0I7Z0JBRWhCLGNBQWM7OztzQ0FTcEIsV0FBVyxTQUFDLE9BQU87O0lBK0J0QixzQkFBQztDQUFBLEFBdENELElBc0NDO1NBbkNZLGVBQWU7OztJQUUxQixtQ0FBaUI7O0lBRWpCLDhDQUEwQzs7Ozs7SUFHeEMsMkNBQTBDOzs7OztJQUMxQyx5Q0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEhvc3RCaW5kaW5nLFxuICBPbkluaXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE92ZXJsYXlDb250YWluZXIgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5cbmltcG9ydCB7IEFtVGhlbWVTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZS9hbS10aGVtZS5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2FtVGhlbWVBY3RpdmVdJ1xufSlcbmV4cG9ydCBjbGFzcyBBY3RpdmVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIG9sZFRoZW1lOiBzdHJpbmc7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpIHRoZW1lQWN0aXZlQ3NzQ2xhc3M7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBvdmVybGF5Q29udGFpbmVyOiBPdmVybGF5Q29udGFpbmVyLFxuICAgIHByaXZhdGUgYW1UaGVtZVNlcnZpY2U6IEFtVGhlbWVTZXJ2aWNlXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5hbVRoZW1lU2VydmljZS5jb2xvclRoZW1lJC5zdWJzY3JpYmUoKGNvbG9yVGhlbWUpID0+IHtcbiAgICAgIHRoaXMuYW1UaGVtZVNlcnZpY2UuaXNEYXJrJC5zdWJzY3JpYmUoKGlzRGFyaykgPT4ge1xuICAgICAgICB0aGlzLnNldFRoZW1lKGNvbG9yVGhlbWUsIGlzRGFyayk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHNldFRoZW1lKGNvbG9yVGhlbWUsIGlzRGFyaykge1xuICAgIGxldCB0aGVtZSA9IGNvbG9yVGhlbWUgKyAoaXNEYXJrID8gJy1kYXJrJyA6ICctbGlnaHQnKTtcblxuICAgIHRoaXMudGhlbWVBY3RpdmVDc3NDbGFzcyA9IHRoZW1lO1xuXG4gICAgY29uc3Qgb3ZlcmxheUNsYXNzTGlzdCA9IHRoaXMub3ZlcmxheUNvbnRhaW5lci5nZXRDb250YWluZXJFbGVtZW50KCkuY2xhc3NMaXN0XG4gICAgaWYgKG92ZXJsYXlDbGFzc0xpc3QuY29udGFpbnModGhpcy5vbGRUaGVtZSkpIHtcbiAgICAgIG92ZXJsYXlDbGFzc0xpc3QucmVwbGFjZSh0aGlzLm9sZFRoZW1lLCB0aGVtZSlcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBvdmVybGF5Q2xhc3NMaXN0LmFkZCh0aGVtZSlcbiAgICB9XG5cbiAgICB0aGlzLm9sZFRoZW1lID0gdGhlbWU7XG4gIH1cblxufVxuIl19