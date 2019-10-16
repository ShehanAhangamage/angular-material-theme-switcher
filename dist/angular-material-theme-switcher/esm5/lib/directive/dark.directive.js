/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostBinding } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { AmThemeService } from '../service/am-theme.service';
var DarkDirective = /** @class */ (function () {
    function DarkDirective(overlayContainer, amThemeService) {
        this.overlayContainer = overlayContainer;
        this.amThemeService = amThemeService;
    }
    /**
     * @return {?}
     */
    DarkDirective.prototype.ngOnInit = /**
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
    DarkDirective.prototype.setTheme = /**
     * @param {?} colorTheme
     * @return {?}
     */
    function (colorTheme) {
        /** @type {?} */
        var theme = colorTheme + '-dark';
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
    DarkDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[amThemeDark]'
                },] }
    ];
    /** @nocollapse */
    DarkDirective.ctorParameters = function () { return [
        { type: OverlayContainer },
        { type: AmThemeService }
    ]; };
    DarkDirective.propDecorators = {
        themeActiveCssClass: [{ type: HostBinding, args: ['class',] }]
    };
    return DarkDirective;
}());
export { DarkDirective };
if (false) {
    /** @type {?} */
    DarkDirective.prototype.oldTheme;
    /** @type {?} */
    DarkDirective.prototype.themeActiveCssClass;
    /**
     * @type {?}
     * @private
     */
    DarkDirective.prototype.overlayContainer;
    /**
     * @type {?}
     * @private
     */
    DarkDirective.prototype.amThemeService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFyay5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2hleXhuZW8vYW5ndWxhci1tYXRlcmlhbC10aGVtZS1zd2l0Y2hlci8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmUvZGFyay5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsV0FBVyxFQUVaLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXhELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUU3RDtJQVNFLHVCQUNVLGdCQUFrQyxFQUNsQyxjQUE4QjtRQUQ5QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtJQUNwQyxDQUFDOzs7O0lBRUwsZ0NBQVE7OztJQUFSO1FBQUEsaUJBSUM7UUFIQyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxVQUFVO1lBQ25ELEtBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDNUIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELGdDQUFROzs7O0lBQVIsVUFBUyxVQUFVOztZQUNiLEtBQUssR0FBRyxVQUFVLEdBQUcsT0FBTztRQUVoQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDOztZQUUzQixnQkFBZ0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxTQUFTO1FBQzlFLElBQUksZ0JBQWdCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUM1QyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQTtTQUMvQzthQUNJO1lBQ0gsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO1NBQzVCO1FBRUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQzs7Z0JBbENGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtpQkFDMUI7Ozs7Z0JBTlEsZ0JBQWdCO2dCQUVoQixjQUFjOzs7c0NBU3BCLFdBQVcsU0FBQyxPQUFPOztJQTZCdEIsb0JBQUM7Q0FBQSxBQXBDRCxJQW9DQztTQWpDWSxhQUFhOzs7SUFFeEIsaUNBQWlCOztJQUVqQiw0Q0FBMEM7Ozs7O0lBR3hDLHlDQUEwQzs7Ozs7SUFDMUMsdUNBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBIb3N0QmluZGluZyxcbiAgT25Jbml0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBPdmVybGF5Q29udGFpbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuXG5pbXBvcnQgeyBBbVRoZW1lU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2UvYW0tdGhlbWUuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1thbVRoZW1lRGFya10nXG59KVxuZXhwb3J0IGNsYXNzIERhcmtEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIG9sZFRoZW1lOiBzdHJpbmc7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpIHRoZW1lQWN0aXZlQ3NzQ2xhc3M7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBvdmVybGF5Q29udGFpbmVyOiBPdmVybGF5Q29udGFpbmVyLFxuICAgIHByaXZhdGUgYW1UaGVtZVNlcnZpY2U6IEFtVGhlbWVTZXJ2aWNlXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5hbVRoZW1lU2VydmljZS5jb2xvclRoZW1lJC5zdWJzY3JpYmUoKGNvbG9yVGhlbWUpID0+IHtcbiAgICAgIHRoaXMuc2V0VGhlbWUoY29sb3JUaGVtZSk7XG4gICAgfSk7XG4gIH1cblxuICBzZXRUaGVtZShjb2xvclRoZW1lKSB7XG4gICAgbGV0IHRoZW1lID0gY29sb3JUaGVtZSArICctZGFyayc7XG5cbiAgICB0aGlzLnRoZW1lQWN0aXZlQ3NzQ2xhc3MgPSB0aGVtZTtcblxuICAgIGNvbnN0IG92ZXJsYXlDbGFzc0xpc3QgPSB0aGlzLm92ZXJsYXlDb250YWluZXIuZ2V0Q29udGFpbmVyRWxlbWVudCgpLmNsYXNzTGlzdFxuICAgIGlmIChvdmVybGF5Q2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMub2xkVGhlbWUpKSB7XG4gICAgICBvdmVybGF5Q2xhc3NMaXN0LnJlcGxhY2UodGhpcy5vbGRUaGVtZSwgdGhlbWUpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgb3ZlcmxheUNsYXNzTGlzdC5hZGQodGhlbWUpXG4gICAgfVxuXG4gICAgdGhpcy5vbGRUaGVtZSA9IHRoZW1lO1xuICB9XG5cbn1cbiJdfQ==