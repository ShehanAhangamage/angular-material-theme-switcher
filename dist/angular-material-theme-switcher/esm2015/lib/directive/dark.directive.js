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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFyay5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLW1hdGVyaWFsLXRoZW1lLXN3aXRjaGVyLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZS9kYXJrLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxXQUFXLEVBRVosTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFeEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBSzdELE1BQU0sT0FBTyxhQUFhOzs7OztJQU14QixZQUNVLGdCQUFrQyxFQUNsQyxjQUE4QjtRQUQ5QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtJQUNwQyxDQUFDOzs7O0lBRUwsUUFBUTtRQUNOLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLFVBQVUsRUFBRSxFQUFFO1lBQ3ZELElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDNUIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxVQUFVOztZQUNiLEtBQUssR0FBRyxVQUFVLEdBQUcsT0FBTztRQUVoQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDOztjQUUzQixnQkFBZ0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxTQUFTO1FBQzlFLElBQUksZ0JBQWdCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUM1QyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQTtTQUMvQzthQUNJO1lBQ0gsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO1NBQzVCO1FBRUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQzs7O1lBbENGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTthQUMxQjs7OztZQU5RLGdCQUFnQjtZQUVoQixjQUFjOzs7a0NBU3BCLFdBQVcsU0FBQyxPQUFPOzs7O0lBRnBCLGlDQUFpQjs7SUFFakIsNENBQTBDOzs7OztJQUd4Qyx5Q0FBMEM7Ozs7O0lBQzFDLHVDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgSG9zdEJpbmRpbmcsXG4gIE9uSW5pdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgT3ZlcmxheUNvbnRhaW5lciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcblxuaW1wb3J0IHsgQW1UaGVtZVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlL2FtLXRoZW1lLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYW1UaGVtZURhcmtdJ1xufSlcbmV4cG9ydCBjbGFzcyBEYXJrRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcblxuICBvbGRUaGVtZTogc3RyaW5nO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKSB0aGVtZUFjdGl2ZUNzc0NsYXNzO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgb3ZlcmxheUNvbnRhaW5lcjogT3ZlcmxheUNvbnRhaW5lcixcbiAgICBwcml2YXRlIGFtVGhlbWVTZXJ2aWNlOiBBbVRoZW1lU2VydmljZVxuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuYW1UaGVtZVNlcnZpY2UuY29sb3JUaGVtZSQuc3Vic2NyaWJlKChjb2xvclRoZW1lKSA9PiB7XG4gICAgICB0aGlzLnNldFRoZW1lKGNvbG9yVGhlbWUpO1xuICAgIH0pO1xuICB9XG5cbiAgc2V0VGhlbWUoY29sb3JUaGVtZSkge1xuICAgIGxldCB0aGVtZSA9IGNvbG9yVGhlbWUgKyAnLWRhcmsnO1xuXG4gICAgdGhpcy50aGVtZUFjdGl2ZUNzc0NsYXNzID0gdGhlbWU7XG5cbiAgICBjb25zdCBvdmVybGF5Q2xhc3NMaXN0ID0gdGhpcy5vdmVybGF5Q29udGFpbmVyLmdldENvbnRhaW5lckVsZW1lbnQoKS5jbGFzc0xpc3RcbiAgICBpZiAob3ZlcmxheUNsYXNzTGlzdC5jb250YWlucyh0aGlzLm9sZFRoZW1lKSkge1xuICAgICAgb3ZlcmxheUNsYXNzTGlzdC5yZXBsYWNlKHRoaXMub2xkVGhlbWUsIHRoZW1lKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIG92ZXJsYXlDbGFzc0xpc3QuYWRkKHRoZW1lKVxuICAgIH1cblxuICAgIHRoaXMub2xkVGhlbWUgPSB0aGVtZTtcbiAgfVxuXG59XG4iXX0=