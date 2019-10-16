/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostBinding } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { AmThemeService } from '../service/am-theme.service';
export class DarkDirective {
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
        let theme = colorTheme + '-dark';
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
DarkDirective.decorators = [
    { type: Directive, args: [{
                selector: '[amThemeDark]'
            },] }
];
/** @nocollapse */
DarkDirective.ctorParameters = () => [
    { type: OverlayContainer },
    { type: AmThemeService }
];
DarkDirective.propDecorators = {
    themeActiveCssClass: [{ type: HostBinding, args: ['class',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFyay5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2hleXhuZW8vYW5ndWxhci1tYXRlcmlhbC10aGVtZS1zd2l0Y2hlci8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmUvZGFyay5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsV0FBVyxFQUVaLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXhELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUs3RCxNQUFNLE9BQU8sYUFBYTs7Ozs7SUFNeEIsWUFDVSxnQkFBa0MsRUFDbEMsY0FBOEI7UUFEOUIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7SUFDcEMsQ0FBQzs7OztJQUVMLFFBQVE7UUFDTixJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxVQUFVLEVBQUUsRUFBRTtZQUN2RCxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzVCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsVUFBVTs7WUFDYixLQUFLLEdBQUcsVUFBVSxHQUFHLE9BQU87UUFFaEMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEtBQUssQ0FBQzs7Y0FFM0IsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLG1CQUFtQixFQUFFLENBQUMsU0FBUztRQUM5RSxJQUFJLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDNUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUE7U0FDL0M7YUFDSTtZQUNILGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtTQUM1QjtRQUVELElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7OztZQWxDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7YUFDMUI7Ozs7WUFOUSxnQkFBZ0I7WUFFaEIsY0FBYzs7O2tDQVNwQixXQUFXLFNBQUMsT0FBTzs7OztJQUZwQixpQ0FBaUI7O0lBRWpCLDRDQUEwQzs7Ozs7SUFHeEMseUNBQTBDOzs7OztJQUMxQyx1Q0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEhvc3RCaW5kaW5nLFxuICBPbkluaXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE92ZXJsYXlDb250YWluZXIgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5cbmltcG9ydCB7IEFtVGhlbWVTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZS9hbS10aGVtZS5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2FtVGhlbWVEYXJrXSdcbn0pXG5leHBvcnQgY2xhc3MgRGFya0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgb2xkVGhlbWU6IHN0cmluZztcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJykgdGhlbWVBY3RpdmVDc3NDbGFzcztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG92ZXJsYXlDb250YWluZXI6IE92ZXJsYXlDb250YWluZXIsXG4gICAgcHJpdmF0ZSBhbVRoZW1lU2VydmljZTogQW1UaGVtZVNlcnZpY2VcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmFtVGhlbWVTZXJ2aWNlLmNvbG9yVGhlbWUkLnN1YnNjcmliZSgoY29sb3JUaGVtZSkgPT4ge1xuICAgICAgdGhpcy5zZXRUaGVtZShjb2xvclRoZW1lKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNldFRoZW1lKGNvbG9yVGhlbWUpIHtcbiAgICBsZXQgdGhlbWUgPSBjb2xvclRoZW1lICsgJy1kYXJrJztcblxuICAgIHRoaXMudGhlbWVBY3RpdmVDc3NDbGFzcyA9IHRoZW1lO1xuXG4gICAgY29uc3Qgb3ZlcmxheUNsYXNzTGlzdCA9IHRoaXMub3ZlcmxheUNvbnRhaW5lci5nZXRDb250YWluZXJFbGVtZW50KCkuY2xhc3NMaXN0XG4gICAgaWYgKG92ZXJsYXlDbGFzc0xpc3QuY29udGFpbnModGhpcy5vbGRUaGVtZSkpIHtcbiAgICAgIG92ZXJsYXlDbGFzc0xpc3QucmVwbGFjZSh0aGlzLm9sZFRoZW1lLCB0aGVtZSlcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBvdmVybGF5Q2xhc3NMaXN0LmFkZCh0aGVtZSlcbiAgICB9XG5cbiAgICB0aGlzLm9sZFRoZW1lID0gdGhlbWU7XG4gIH1cblxufVxuIl19