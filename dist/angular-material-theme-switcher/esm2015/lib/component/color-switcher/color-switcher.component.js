/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { AmThemeService } from '../../service/am-theme.service';
export class ColorSwitcherComponent {
    /**
     * @param {?} amThemeService
     */
    constructor(amThemeService) {
        this.amThemeService = amThemeService;
        this.colorTheme = '';
        this.themes = [];
        this.isUseLibraryThemes = true;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.isUseLibraryThemes) {
            this.amThemeService.themes.forEach((/**
             * @param {?} colorTheme
             * @return {?}
             */
            colorTheme => this.themes.push(colorTheme)));
            if (this.colorTheme === '') {
                this.amThemeService.colorTheme$.subscribe((/**
                 * @param {?} colorTheme
                 * @return {?}
                 */
                colorTheme => this.colorTheme = colorTheme));
            }
        }
        else {
            if (this.colorTheme === '') {
                this.colorTheme = this.themes[0];
            }
        }
        if (this.themes.indexOf(this.colorTheme) === -1) {
            this.themes.push(this.colorTheme);
        }
        if (this.colorTheme !== '') {
            this.amThemeService.colorTheme$.next(this.colorTheme);
        }
    }
    /**
     * @param {?} colorTheme
     * @return {?}
     */
    setColorTheme(colorTheme) {
        this.amThemeService.colorTheme$.next(colorTheme);
        this.colorTheme = colorTheme;
    }
}
ColorSwitcherComponent.decorators = [
    { type: Component, args: [{
                selector: 'am-theme-color-switcher',
                template: "<button *ngIf=\"themes.length > 1\" mat-icon-button [mat-menu-trigger-for]=\"themeSwitcher\" matTooltip=\"Switch themes\"\n    tabindex=\"-1\">\n    <mat-icon class=\"auto-flip\">format_color_fill</mat-icon>\n</button>\n\n<mat-menu #themeSwitcher=\"matMenu\">\n    <mat-grid-list cols=\"2\" class=\"switcher-container\">\n        <mat-grid-tile *ngFor=\"let theme of themes\">\n            <button mat-button class=\"switcher\" (click)=\"$event.stopPropagation(); setColorTheme(theme)\">\n                <div [attr.class]=\"'switcher-primary ' + theme\">\n                    <div [attr.class]=\"'switcher-accent ' + theme\"></div>\n                    <div [attr.class]=\"'switcher-warn ' + theme\"></div>\n                    <mat-icon *ngIf=\"colorTheme===theme\" class=\"center switcher-check\">brush</mat-icon>\n                </div>\n            </button>\n        </mat-grid-tile>\n    </mat-grid-list>\n</mat-menu>",
                styles: [".switcher-container{width:96px;height:96px;margin:0 8px;padding:0!important}.switcher{width:48px;min-width:48px!important;height:48px;padding:0!important;position:relative}.switcher-primary{width:38px;height:38px;margin:5px;border-radius:50%;position:absolute;top:0;left:0}.switcher-accent{width:20px;height:20px;border-radius:50%;position:absolute;top:10%;left:10%}.switcher-warn{width:15px;height:15px;border-radius:50%;position:absolute;top:0;left:0}.switcher-check{color:#fff;font-size:28px;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}"]
            }] }
];
/** @nocollapse */
ColorSwitcherComponent.ctorParameters = () => [
    { type: AmThemeService }
];
ColorSwitcherComponent.propDecorators = {
    colorTheme: [{ type: Input }],
    themes: [{ type: Input }],
    isUseLibraryThemes: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ColorSwitcherComponent.prototype.colorTheme;
    /** @type {?} */
    ColorSwitcherComponent.prototype.themes;
    /** @type {?} */
    ColorSwitcherComponent.prototype.isUseLibraryThemes;
    /**
     * @type {?}
     * @private
     */
    ColorSwitcherComponent.prototype.amThemeService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3Itc3dpdGNoZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1tYXRlcmlhbC10aGVtZS1zd2l0Y2hlci8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnQvY29sb3Itc3dpdGNoZXIvY29sb3Itc3dpdGNoZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFFTixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFPaEUsTUFBTSxPQUFPLHNCQUFzQjs7OztJQVFqQyxZQUFvQixjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFOekMsZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUV4QixXQUFNLEdBQWEsRUFBRSxDQUFDO1FBRXRCLHVCQUFrQixHQUFZLElBQUksQ0FBQztJQUVVLENBQUM7Ozs7SUFFdkQsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQzNCLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLE9BQU87Ozs7WUFBQyxVQUFVLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFDLENBQUM7WUFFL0UsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLEVBQUUsRUFBRTtnQkFDMUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsU0FBUzs7OztnQkFBQyxVQUFVLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxFQUFDLENBQUM7YUFDdkY7U0FDRjthQUFNO1lBQ0wsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLEVBQUUsRUFBRTtnQkFDMUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2xDO1NBQ0Y7UUFFRCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtZQUMvQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDbkM7UUFFRCxJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssRUFBRSxFQUFFO1lBQzFCLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDdkQ7SUFDSCxDQUFDOzs7OztJQUVELGFBQWEsQ0FBQyxVQUFrQjtRQUM5QixJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7SUFDL0IsQ0FBQzs7O1lBeENGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyx3NkJBQThDOzthQUUvQzs7OztZQU5RLGNBQWM7Ozt5QkFTcEIsS0FBSztxQkFFTCxLQUFLO2lDQUVMLEtBQUs7Ozs7SUFKTiw0Q0FBaUM7O0lBRWpDLHdDQUErQjs7SUFFL0Isb0RBQTRDOzs7OztJQUVoQyxnREFBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPbkluaXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFtVGhlbWVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZS9hbS10aGVtZS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW0tdGhlbWUtY29sb3Itc3dpdGNoZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vY29sb3Itc3dpdGNoZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jb2xvci1zd2l0Y2hlci5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ29sb3JTd2l0Y2hlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgY29sb3JUaGVtZTogc3RyaW5nID0gJyc7XG5cbiAgQElucHV0KCkgdGhlbWVzOiBzdHJpbmdbXSA9IFtdO1xuXG4gIEBJbnB1dCgpIGlzVXNlTGlicmFyeVRoZW1lczogYm9vbGVhbiA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhbVRoZW1lU2VydmljZTogQW1UaGVtZVNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLmlzVXNlTGlicmFyeVRoZW1lcykge1xuICAgICAgdGhpcy5hbVRoZW1lU2VydmljZS50aGVtZXMuZm9yRWFjaChjb2xvclRoZW1lID0+IHRoaXMudGhlbWVzLnB1c2goY29sb3JUaGVtZSkpO1xuXG4gICAgICBpZiAodGhpcy5jb2xvclRoZW1lID09PSAnJykge1xuICAgICAgICB0aGlzLmFtVGhlbWVTZXJ2aWNlLmNvbG9yVGhlbWUkLnN1YnNjcmliZShjb2xvclRoZW1lID0+IHRoaXMuY29sb3JUaGVtZSA9IGNvbG9yVGhlbWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5jb2xvclRoZW1lID09PSAnJykge1xuICAgICAgICB0aGlzLmNvbG9yVGhlbWUgPSB0aGlzLnRoZW1lc1swXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy50aGVtZXMuaW5kZXhPZih0aGlzLmNvbG9yVGhlbWUpID09PSAtMSkge1xuICAgICAgdGhpcy50aGVtZXMucHVzaCh0aGlzLmNvbG9yVGhlbWUpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNvbG9yVGhlbWUgIT09ICcnKSB7XG4gICAgICB0aGlzLmFtVGhlbWVTZXJ2aWNlLmNvbG9yVGhlbWUkLm5leHQodGhpcy5jb2xvclRoZW1lKTtcbiAgICB9XG4gIH1cblxuICBzZXRDb2xvclRoZW1lKGNvbG9yVGhlbWU6IHN0cmluZykge1xuICAgIHRoaXMuYW1UaGVtZVNlcnZpY2UuY29sb3JUaGVtZSQubmV4dChjb2xvclRoZW1lKTtcbiAgICB0aGlzLmNvbG9yVGhlbWUgPSBjb2xvclRoZW1lO1xuICB9XG5cbn1cbiJdfQ==