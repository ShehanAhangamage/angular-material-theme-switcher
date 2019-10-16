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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItbWF0ZXJpYWwtdGhlbWUtc3dpdGNoZXIvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlL2FjdGl2ZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsV0FBVyxFQUVaLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXhELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUs3RCxNQUFNLE9BQU8sZUFBZTs7Ozs7SUFNMUIsWUFDVSxnQkFBa0MsRUFDbEMsY0FBOEI7UUFEOUIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7SUFDcEMsQ0FBQzs7OztJQUVMLFFBQVE7UUFDTixJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxVQUFVLEVBQUUsRUFBRTtZQUN2RCxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxTQUFTOzs7O1lBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtnQkFDL0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDcEMsQ0FBQyxFQUFDLENBQUM7UUFDTCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQUVELFFBQVEsQ0FBQyxVQUFVLEVBQUUsTUFBTTs7WUFDckIsS0FBSyxHQUFHLFVBQVUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7UUFFdEQsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEtBQUssQ0FBQzs7Y0FFM0IsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLG1CQUFtQixFQUFFLENBQUMsU0FBUztRQUM5RSxJQUFJLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDNUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUE7U0FDL0M7YUFDSTtZQUNILGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtTQUM1QjtRQUVELElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7OztZQXBDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjthQUM1Qjs7OztZQU5RLGdCQUFnQjtZQUVoQixjQUFjOzs7a0NBU3BCLFdBQVcsU0FBQyxPQUFPOzs7O0lBRnBCLG1DQUFpQjs7SUFFakIsOENBQTBDOzs7OztJQUd4QywyQ0FBMEM7Ozs7O0lBQzFDLHlDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgSG9zdEJpbmRpbmcsXG4gIE9uSW5pdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgT3ZlcmxheUNvbnRhaW5lciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcblxuaW1wb3J0IHsgQW1UaGVtZVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlL2FtLXRoZW1lLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYW1UaGVtZUFjdGl2ZV0nXG59KVxuZXhwb3J0IGNsYXNzIEFjdGl2ZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgb2xkVGhlbWU6IHN0cmluZztcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJykgdGhlbWVBY3RpdmVDc3NDbGFzcztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG92ZXJsYXlDb250YWluZXI6IE92ZXJsYXlDb250YWluZXIsXG4gICAgcHJpdmF0ZSBhbVRoZW1lU2VydmljZTogQW1UaGVtZVNlcnZpY2VcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmFtVGhlbWVTZXJ2aWNlLmNvbG9yVGhlbWUkLnN1YnNjcmliZSgoY29sb3JUaGVtZSkgPT4ge1xuICAgICAgdGhpcy5hbVRoZW1lU2VydmljZS5pc0RhcmskLnN1YnNjcmliZSgoaXNEYXJrKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0VGhlbWUoY29sb3JUaGVtZSwgaXNEYXJrKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgc2V0VGhlbWUoY29sb3JUaGVtZSwgaXNEYXJrKSB7XG4gICAgbGV0IHRoZW1lID0gY29sb3JUaGVtZSArIChpc0RhcmsgPyAnLWRhcmsnIDogJy1saWdodCcpO1xuXG4gICAgdGhpcy50aGVtZUFjdGl2ZUNzc0NsYXNzID0gdGhlbWU7XG5cbiAgICBjb25zdCBvdmVybGF5Q2xhc3NMaXN0ID0gdGhpcy5vdmVybGF5Q29udGFpbmVyLmdldENvbnRhaW5lckVsZW1lbnQoKS5jbGFzc0xpc3RcbiAgICBpZiAob3ZlcmxheUNsYXNzTGlzdC5jb250YWlucyh0aGlzLm9sZFRoZW1lKSkge1xuICAgICAgb3ZlcmxheUNsYXNzTGlzdC5yZXBsYWNlKHRoaXMub2xkVGhlbWUsIHRoZW1lKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIG92ZXJsYXlDbGFzc0xpc3QuYWRkKHRoZW1lKVxuICAgIH1cblxuICAgIHRoaXMub2xkVGhlbWUgPSB0aGVtZTtcbiAgfVxuXG59XG4iXX0=