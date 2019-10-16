/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostBinding, Input } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { AmThemeService } from '../service/am-theme.service';
export class ContainerDirective {
    /**
     * @param {?} overlayContainer
     * @param {?} amThemeService
     */
    constructor(overlayContainer, amThemeService) {
        this.overlayContainer = overlayContainer;
        this.amThemeService = amThemeService;
        this.colorTheme = '';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.colorTheme !== '') {
            if (typeof this.isDark !== 'undefined') {
                this.setTheme(this.colorTheme, this.isDark);
            }
            else {
                this.amThemeService.isDark$.subscribe((/**
                 * @param {?} isDark
                 * @return {?}
                 */
                (isDark) => {
                    this.setTheme(this.colorTheme, isDark);
                }));
            }
        }
        else {
            this.amThemeService.colorTheme$.subscribe((/**
             * @param {?} colorTheme
             * @return {?}
             */
            (colorTheme) => {
                if (typeof this.isDark !== 'undefined') {
                    this.setTheme(colorTheme, this.isDark);
                }
                else {
                    this.amThemeService.isDark$.subscribe((/**
                     * @param {?} isDark
                     * @return {?}
                     */
                    (isDark) => {
                        this.setTheme(colorTheme, isDark);
                    }));
                }
            }));
        }
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
ContainerDirective.decorators = [
    { type: Directive, args: [{
                selector: '[amThemeContainer]'
            },] }
];
/** @nocollapse */
ContainerDirective.ctorParameters = () => [
    { type: OverlayContainer },
    { type: AmThemeService }
];
ContainerDirective.propDecorators = {
    colorTheme: [{ type: Input }],
    isDark: [{ type: Input }],
    themeActiveCssClass: [{ type: HostBinding, args: ['class',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbmVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItbWF0ZXJpYWwtdGhlbWUtc3dpdGNoZXIvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlL2NvbnRhaW5lci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsV0FBVyxFQUNYLEtBQUssRUFFTixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV4RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFLN0QsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7SUFVN0IsWUFDVSxnQkFBa0MsRUFDbEMsY0FBOEI7UUFEOUIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFSL0IsZUFBVSxHQUFXLEVBQUUsQ0FBQztJQVM3QixDQUFDOzs7O0lBRUwsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxFQUFFLEVBQUU7WUFDMUIsSUFBSSxPQUFPLElBQUksQ0FBQyxNQUFNLEtBQUssV0FBVyxFQUFFO2dCQUN0QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQzdDO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLFNBQVM7Ozs7Z0JBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtvQkFDL0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUN6QyxDQUFDLEVBQUMsQ0FBQzthQUNKO1NBQ0Y7YUFBTTtZQUNMLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLFNBQVM7Ozs7WUFBQyxDQUFDLFVBQVUsRUFBRSxFQUFFO2dCQUN2RCxJQUFJLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxXQUFXLEVBQUU7b0JBQ3RDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztpQkFDeEM7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsU0FBUzs7OztvQkFBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO3dCQUMvQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQztvQkFDcEMsQ0FBQyxFQUFDLENBQUM7aUJBQ0o7WUFDSCxDQUFDLEVBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7Ozs7O0lBRUQsUUFBUSxDQUFDLFVBQVUsRUFBRSxNQUFNOztZQUNyQixLQUFLLEdBQUcsVUFBVSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztRQUV0RCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDOztjQUUzQixnQkFBZ0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxTQUFTO1FBQzlFLElBQUksZ0JBQWdCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUM1QyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQTtTQUMvQzthQUNJO1lBQ0gsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO1NBQzVCO1FBRUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQzs7O1lBdERGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2FBQy9COzs7O1lBTlEsZ0JBQWdCO1lBRWhCLGNBQWM7Ozt5QkFTcEIsS0FBSztxQkFFTCxLQUFLO2tDQUVMLFdBQVcsU0FBQyxPQUFPOzs7O0lBTnBCLHNDQUFpQjs7SUFFakIsd0NBQWlDOztJQUVqQyxvQ0FBeUI7O0lBRXpCLGlEQUEwQzs7Ozs7SUFHeEMsOENBQTBDOzs7OztJQUMxQyw0Q0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT25Jbml0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBPdmVybGF5Q29udGFpbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuXG5pbXBvcnQgeyBBbVRoZW1lU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2UvYW0tdGhlbWUuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1thbVRoZW1lQ29udGFpbmVyXSdcbn0pXG5leHBvcnQgY2xhc3MgQ29udGFpbmVyRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcblxuICBvbGRUaGVtZTogc3RyaW5nO1xuXG4gIEBJbnB1dCgpIGNvbG9yVGhlbWU6IHN0cmluZyA9ICcnO1xuXG4gIEBJbnB1dCgpIGlzRGFyazogYm9vbGVhbjtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJykgdGhlbWVBY3RpdmVDc3NDbGFzcztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG92ZXJsYXlDb250YWluZXI6IE92ZXJsYXlDb250YWluZXIsXG4gICAgcHJpdmF0ZSBhbVRoZW1lU2VydmljZTogQW1UaGVtZVNlcnZpY2VcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5jb2xvclRoZW1lICE9PSAnJykge1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLmlzRGFyayAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy5zZXRUaGVtZSh0aGlzLmNvbG9yVGhlbWUsIHRoaXMuaXNEYXJrKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYW1UaGVtZVNlcnZpY2UuaXNEYXJrJC5zdWJzY3JpYmUoKGlzRGFyaykgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0VGhlbWUodGhpcy5jb2xvclRoZW1lLCBpc0RhcmspO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hbVRoZW1lU2VydmljZS5jb2xvclRoZW1lJC5zdWJzY3JpYmUoKGNvbG9yVGhlbWUpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmlzRGFyayAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aGlzLnNldFRoZW1lKGNvbG9yVGhlbWUsIHRoaXMuaXNEYXJrKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmFtVGhlbWVTZXJ2aWNlLmlzRGFyayQuc3Vic2NyaWJlKChpc0RhcmspID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0VGhlbWUoY29sb3JUaGVtZSwgaXNEYXJrKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgc2V0VGhlbWUoY29sb3JUaGVtZSwgaXNEYXJrKSB7XG4gICAgbGV0IHRoZW1lID0gY29sb3JUaGVtZSArIChpc0RhcmsgPyAnLWRhcmsnIDogJy1saWdodCcpO1xuXG4gICAgdGhpcy50aGVtZUFjdGl2ZUNzc0NsYXNzID0gdGhlbWU7XG5cbiAgICBjb25zdCBvdmVybGF5Q2xhc3NMaXN0ID0gdGhpcy5vdmVybGF5Q29udGFpbmVyLmdldENvbnRhaW5lckVsZW1lbnQoKS5jbGFzc0xpc3RcbiAgICBpZiAob3ZlcmxheUNsYXNzTGlzdC5jb250YWlucyh0aGlzLm9sZFRoZW1lKSkge1xuICAgICAgb3ZlcmxheUNsYXNzTGlzdC5yZXBsYWNlKHRoaXMub2xkVGhlbWUsIHRoZW1lKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIG92ZXJsYXlDbGFzc0xpc3QuYWRkKHRoZW1lKVxuICAgIH1cblxuICAgIHRoaXMub2xkVGhlbWUgPSB0aGVtZTtcbiAgfVxuXG59XG4iXX0=