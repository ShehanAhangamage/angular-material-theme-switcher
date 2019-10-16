/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostBinding, Input } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
export class CustomDirective {
    /**
     * @param {?} overlayContainer
     */
    constructor(overlayContainer) {
        this.overlayContainer = overlayContainer;
        this.colorTheme = '';
        this.isDark = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setTheme(this.colorTheme, this.isDark);
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
CustomDirective.decorators = [
    { type: Directive, args: [{
                selector: '[amThemeCustom]'
            },] }
];
/** @nocollapse */
CustomDirective.ctorParameters = () => [
    { type: OverlayContainer }
];
CustomDirective.propDecorators = {
    colorTheme: [{ type: Input }],
    isDark: [{ type: Input }],
    themeActiveCssClass: [{ type: HostBinding, args: ['class',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItbWF0ZXJpYWwtdGhlbWUtc3dpdGNoZXIvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlL2N1c3RvbS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsV0FBVyxFQUNYLEtBQUssRUFFTixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUl4RCxNQUFNLE9BQU8sZUFBZTs7OztJQVUxQixZQUNVLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBUG5DLGVBQVUsR0FBVyxFQUFFLENBQUM7UUFFeEIsV0FBTSxHQUFZLEtBQUssQ0FBQztJQU03QixDQUFDOzs7O0lBRUwsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7Ozs7O0lBRUQsUUFBUSxDQUFDLFVBQVUsRUFBRSxNQUFNOztZQUNyQixLQUFLLEdBQUcsVUFBVSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztRQUV0RCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDOztjQUUzQixnQkFBZ0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxTQUFTO1FBQzlFLElBQUksZ0JBQWdCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUM1QyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQTtTQUMvQzthQUNJO1lBQ0gsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO1NBQzVCO1FBRUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQzs7O1lBbkNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2FBQzVCOzs7O1lBSFEsZ0JBQWdCOzs7eUJBUXRCLEtBQUs7cUJBRUwsS0FBSztrQ0FFTCxXQUFXLFNBQUMsT0FBTzs7OztJQU5wQixtQ0FBaUI7O0lBRWpCLHFDQUFpQzs7SUFFakMsaUNBQWlDOztJQUVqQyw4Q0FBMEM7Ozs7O0lBR3hDLDJDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBPbkluaXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE92ZXJsYXlDb250YWluZXIgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYW1UaGVtZUN1c3RvbV0nXG59KVxuZXhwb3J0IGNsYXNzIEN1c3RvbURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgb2xkVGhlbWU6IHN0cmluZztcblxuICBASW5wdXQoKSBjb2xvclRoZW1lOiBzdHJpbmcgPSAnJztcblxuICBASW5wdXQoKSBpc0Rhcms6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJykgdGhlbWVBY3RpdmVDc3NDbGFzcztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG92ZXJsYXlDb250YWluZXI6IE92ZXJsYXlDb250YWluZXJcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnNldFRoZW1lKHRoaXMuY29sb3JUaGVtZSwgdGhpcy5pc0RhcmspO1xuICB9XG5cbiAgc2V0VGhlbWUoY29sb3JUaGVtZSwgaXNEYXJrKSB7XG4gICAgbGV0IHRoZW1lID0gY29sb3JUaGVtZSArIChpc0RhcmsgPyAnLWRhcmsnIDogJy1saWdodCcpO1xuXG4gICAgdGhpcy50aGVtZUFjdGl2ZUNzc0NsYXNzID0gdGhlbWU7XG5cbiAgICBjb25zdCBvdmVybGF5Q2xhc3NMaXN0ID0gdGhpcy5vdmVybGF5Q29udGFpbmVyLmdldENvbnRhaW5lckVsZW1lbnQoKS5jbGFzc0xpc3RcbiAgICBpZiAob3ZlcmxheUNsYXNzTGlzdC5jb250YWlucyh0aGlzLm9sZFRoZW1lKSkge1xuICAgICAgb3ZlcmxheUNsYXNzTGlzdC5yZXBsYWNlKHRoaXMub2xkVGhlbWUsIHRoZW1lKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIG92ZXJsYXlDbGFzc0xpc3QuYWRkKHRoZW1lKVxuICAgIH1cblxuICAgIHRoaXMub2xkVGhlbWUgPSB0aGVtZTtcbiAgfVxuXG59XG4iXX0=