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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlnaHQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1tYXRlcmlhbC10aGVtZS1zd2l0Y2hlci8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmUvbGlnaHQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFdBQVcsRUFFWixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV4RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFN0Q7SUFTRSx3QkFDVSxnQkFBa0MsRUFDbEMsY0FBOEI7UUFEOUIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7SUFDcEMsQ0FBQzs7OztJQUVMLGlDQUFROzs7SUFBUjtRQUFBLGlCQUlDO1FBSEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsVUFBVTtZQUNuRCxLQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzVCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCxpQ0FBUTs7OztJQUFSLFVBQVMsVUFBVTs7WUFDYixLQUFLLEdBQUcsVUFBVSxHQUFHLFFBQVE7UUFFakMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEtBQUssQ0FBQzs7WUFFM0IsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLG1CQUFtQixFQUFFLENBQUMsU0FBUztRQUM5RSxJQUFJLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDNUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUE7U0FDL0M7YUFDSTtZQUNILGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtTQUM1QjtRQUVELElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7O2dCQWxDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtpQkFDM0I7Ozs7Z0JBTlEsZ0JBQWdCO2dCQUVoQixjQUFjOzs7c0NBU3BCLFdBQVcsU0FBQyxPQUFPOztJQTZCdEIscUJBQUM7Q0FBQSxBQXBDRCxJQW9DQztTQWpDWSxjQUFjOzs7SUFFekIsa0NBQWlCOztJQUVqQiw2Q0FBMEM7Ozs7O0lBR3hDLDBDQUEwQzs7Ozs7SUFDMUMsd0NBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBIb3N0QmluZGluZyxcbiAgT25Jbml0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBPdmVybGF5Q29udGFpbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuXG5pbXBvcnQgeyBBbVRoZW1lU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2UvYW0tdGhlbWUuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1thbVRoZW1lTGlnaHRdJ1xufSlcbmV4cG9ydCBjbGFzcyBMaWdodERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgb2xkVGhlbWU6IHN0cmluZztcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJykgdGhlbWVBY3RpdmVDc3NDbGFzcztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG92ZXJsYXlDb250YWluZXI6IE92ZXJsYXlDb250YWluZXIsXG4gICAgcHJpdmF0ZSBhbVRoZW1lU2VydmljZTogQW1UaGVtZVNlcnZpY2VcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmFtVGhlbWVTZXJ2aWNlLmNvbG9yVGhlbWUkLnN1YnNjcmliZSgoY29sb3JUaGVtZSkgPT4ge1xuICAgICAgdGhpcy5zZXRUaGVtZShjb2xvclRoZW1lKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNldFRoZW1lKGNvbG9yVGhlbWUpIHtcbiAgICBsZXQgdGhlbWUgPSBjb2xvclRoZW1lICsgJy1saWdodCc7XG5cbiAgICB0aGlzLnRoZW1lQWN0aXZlQ3NzQ2xhc3MgPSB0aGVtZTtcblxuICAgIGNvbnN0IG92ZXJsYXlDbGFzc0xpc3QgPSB0aGlzLm92ZXJsYXlDb250YWluZXIuZ2V0Q29udGFpbmVyRWxlbWVudCgpLmNsYXNzTGlzdFxuICAgIGlmIChvdmVybGF5Q2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMub2xkVGhlbWUpKSB7XG4gICAgICBvdmVybGF5Q2xhc3NMaXN0LnJlcGxhY2UodGhpcy5vbGRUaGVtZSwgdGhlbWUpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgb3ZlcmxheUNsYXNzTGlzdC5hZGQodGhlbWUpXG4gICAgfVxuXG4gICAgdGhpcy5vbGRUaGVtZSA9IHRoZW1lO1xuICB9XG5cbn1cbiJdfQ==