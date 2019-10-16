/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostBinding } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { AmThemeService } from '../service/am-theme.service';
export class LightDirective {
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
            this.setTheme(colorTheme);
        }));
    }
    /**
     * @param {?} colorTheme
     * @return {?}
     */
    setTheme(colorTheme) {
        /** @type {?} */
        let theme = colorTheme + '-light';
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
LightDirective.decorators = [
    { type: Directive, args: [{
                selector: '[amThemeLight]'
            },] }
];
/** @nocollapse */
LightDirective.ctorParameters = () => [
    { type: OverlayContainer },
    { type: AmThemeService }
];
LightDirective.propDecorators = {
    themeActiveCssClass: [{ type: HostBinding, args: ['class',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlnaHQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNoZXl4bmVvL2FuZ3VsYXItbWF0ZXJpYWwtdGhlbWUtc3dpdGNoZXIvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlL2xpZ2h0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxXQUFXLEVBRVosTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFeEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBSzdELE1BQU0sT0FBTyxjQUFjOzs7OztJQU16QixZQUNVLGdCQUFrQyxFQUNsQyxjQUE4QjtRQUQ5QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtJQUNwQyxDQUFDOzs7O0lBRUwsUUFBUTtRQUNOLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLFVBQVUsRUFBRSxFQUFFO1lBQ3ZELElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDNUIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxVQUFVOztZQUNiLEtBQUssR0FBRyxVQUFVLEdBQUcsUUFBUTtRQUVqQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDOztjQUUzQixnQkFBZ0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxTQUFTO1FBQzlFLElBQUksZ0JBQWdCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUM1QyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQTtTQUMvQzthQUNJO1lBQ0gsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO1NBQzVCO1FBRUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQzs7O1lBbENGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2FBQzNCOzs7O1lBTlEsZ0JBQWdCO1lBRWhCLGNBQWM7OztrQ0FTcEIsV0FBVyxTQUFDLE9BQU87Ozs7SUFGcEIsa0NBQWlCOztJQUVqQiw2Q0FBMEM7Ozs7O0lBR3hDLDBDQUEwQzs7Ozs7SUFDMUMsd0NBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBIb3N0QmluZGluZyxcbiAgT25Jbml0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBPdmVybGF5Q29udGFpbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuXG5pbXBvcnQgeyBBbVRoZW1lU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2UvYW0tdGhlbWUuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1thbVRoZW1lTGlnaHRdJ1xufSlcbmV4cG9ydCBjbGFzcyBMaWdodERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgb2xkVGhlbWU6IHN0cmluZztcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJykgdGhlbWVBY3RpdmVDc3NDbGFzcztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG92ZXJsYXlDb250YWluZXI6IE92ZXJsYXlDb250YWluZXIsXG4gICAgcHJpdmF0ZSBhbVRoZW1lU2VydmljZTogQW1UaGVtZVNlcnZpY2VcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmFtVGhlbWVTZXJ2aWNlLmNvbG9yVGhlbWUkLnN1YnNjcmliZSgoY29sb3JUaGVtZSkgPT4ge1xuICAgICAgdGhpcy5zZXRUaGVtZShjb2xvclRoZW1lKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNldFRoZW1lKGNvbG9yVGhlbWUpIHtcbiAgICBsZXQgdGhlbWUgPSBjb2xvclRoZW1lICsgJy1saWdodCc7XG5cbiAgICB0aGlzLnRoZW1lQWN0aXZlQ3NzQ2xhc3MgPSB0aGVtZTtcblxuICAgIGNvbnN0IG92ZXJsYXlDbGFzc0xpc3QgPSB0aGlzLm92ZXJsYXlDb250YWluZXIuZ2V0Q29udGFpbmVyRWxlbWVudCgpLmNsYXNzTGlzdFxuICAgIGlmIChvdmVybGF5Q2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMub2xkVGhlbWUpKSB7XG4gICAgICBvdmVybGF5Q2xhc3NMaXN0LnJlcGxhY2UodGhpcy5vbGRUaGVtZSwgdGhlbWUpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgb3ZlcmxheUNsYXNzTGlzdC5hZGQodGhlbWUpXG4gICAgfVxuXG4gICAgdGhpcy5vbGRUaGVtZSA9IHRoZW1lO1xuICB9XG5cbn1cbiJdfQ==