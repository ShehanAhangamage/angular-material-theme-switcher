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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlnaHQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1tYXRlcmlhbC10aGVtZS1zd2l0Y2hlci8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmUvbGlnaHQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFdBQVcsRUFFWixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV4RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFLN0QsTUFBTSxPQUFPLGNBQWM7Ozs7O0lBTXpCLFlBQ1UsZ0JBQWtDLEVBQ2xDLGNBQThCO1FBRDlCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBQ3BDLENBQUM7Ozs7SUFFTCxRQUFRO1FBQ04sSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsU0FBUzs7OztRQUFDLENBQUMsVUFBVSxFQUFFLEVBQUU7WUFDdkQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM1QixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLFVBQVU7O1lBQ2IsS0FBSyxHQUFHLFVBQVUsR0FBRyxRQUFRO1FBRWpDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxLQUFLLENBQUM7O2NBRTNCLGdCQUFnQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLFNBQVM7UUFDOUUsSUFBSSxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQzVDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFBO1NBQy9DO2FBQ0k7WUFDSCxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7U0FDNUI7UUFFRCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDOzs7WUFsQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7YUFDM0I7Ozs7WUFOUSxnQkFBZ0I7WUFFaEIsY0FBYzs7O2tDQVNwQixXQUFXLFNBQUMsT0FBTzs7OztJQUZwQixrQ0FBaUI7O0lBRWpCLDZDQUEwQzs7Ozs7SUFHeEMsMENBQTBDOzs7OztJQUMxQyx3Q0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEhvc3RCaW5kaW5nLFxuICBPbkluaXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE92ZXJsYXlDb250YWluZXIgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5cbmltcG9ydCB7IEFtVGhlbWVTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZS9hbS10aGVtZS5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2FtVGhlbWVMaWdodF0nXG59KVxuZXhwb3J0IGNsYXNzIExpZ2h0RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcblxuICBvbGRUaGVtZTogc3RyaW5nO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKSB0aGVtZUFjdGl2ZUNzc0NsYXNzO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgb3ZlcmxheUNvbnRhaW5lcjogT3ZlcmxheUNvbnRhaW5lcixcbiAgICBwcml2YXRlIGFtVGhlbWVTZXJ2aWNlOiBBbVRoZW1lU2VydmljZVxuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuYW1UaGVtZVNlcnZpY2UuY29sb3JUaGVtZSQuc3Vic2NyaWJlKChjb2xvclRoZW1lKSA9PiB7XG4gICAgICB0aGlzLnNldFRoZW1lKGNvbG9yVGhlbWUpO1xuICAgIH0pO1xuICB9XG5cbiAgc2V0VGhlbWUoY29sb3JUaGVtZSkge1xuICAgIGxldCB0aGVtZSA9IGNvbG9yVGhlbWUgKyAnLWxpZ2h0JztcblxuICAgIHRoaXMudGhlbWVBY3RpdmVDc3NDbGFzcyA9IHRoZW1lO1xuXG4gICAgY29uc3Qgb3ZlcmxheUNsYXNzTGlzdCA9IHRoaXMub3ZlcmxheUNvbnRhaW5lci5nZXRDb250YWluZXJFbGVtZW50KCkuY2xhc3NMaXN0XG4gICAgaWYgKG92ZXJsYXlDbGFzc0xpc3QuY29udGFpbnModGhpcy5vbGRUaGVtZSkpIHtcbiAgICAgIG92ZXJsYXlDbGFzc0xpc3QucmVwbGFjZSh0aGlzLm9sZFRoZW1lLCB0aGVtZSlcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBvdmVybGF5Q2xhc3NMaXN0LmFkZCh0aGVtZSlcbiAgICB9XG5cbiAgICB0aGlzLm9sZFRoZW1lID0gdGhlbWU7XG4gIH1cblxufVxuIl19