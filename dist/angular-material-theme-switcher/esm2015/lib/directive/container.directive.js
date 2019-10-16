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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbmVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzaGV5eG5lby9hbmd1bGFyLW1hdGVyaWFsLXRoZW1lLXN3aXRjaGVyLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZS9jb250YWluZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFdBQVcsRUFDWCxLQUFLLEVBRU4sTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFeEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBSzdELE1BQU0sT0FBTyxrQkFBa0I7Ozs7O0lBVTdCLFlBQ1UsZ0JBQWtDLEVBQ2xDLGNBQThCO1FBRDlCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBUi9CLGVBQVUsR0FBVyxFQUFFLENBQUM7SUFTN0IsQ0FBQzs7OztJQUVMLFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssRUFBRSxFQUFFO1lBQzFCLElBQUksT0FBTyxJQUFJLENBQUMsTUFBTSxLQUFLLFdBQVcsRUFBRTtnQkFDdEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUM3QztpQkFBTTtnQkFDTCxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxTQUFTOzs7O2dCQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7b0JBQy9DLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFDekMsQ0FBQyxFQUFDLENBQUM7YUFDSjtTQUNGO2FBQU07WUFDTCxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxTQUFTOzs7O1lBQUMsQ0FBQyxVQUFVLEVBQUUsRUFBRTtnQkFDdkQsSUFBSSxPQUFPLElBQUksQ0FBQyxNQUFNLEtBQUssV0FBVyxFQUFFO29CQUN0QyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQ3hDO3FCQUFNO29CQUNMLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLFNBQVM7Ozs7b0JBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTt3QkFDL0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUM7b0JBQ3BDLENBQUMsRUFBQyxDQUFDO2lCQUNKO1lBQ0gsQ0FBQyxFQUFDLENBQUM7U0FDSjtJQUNILENBQUM7Ozs7OztJQUVELFFBQVEsQ0FBQyxVQUFVLEVBQUUsTUFBTTs7WUFDckIsS0FBSyxHQUFHLFVBQVUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7UUFFdEQsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEtBQUssQ0FBQzs7Y0FFM0IsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLG1CQUFtQixFQUFFLENBQUMsU0FBUztRQUM5RSxJQUFJLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDNUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUE7U0FDL0M7YUFDSTtZQUNILGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtTQUM1QjtRQUVELElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7OztZQXRERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjthQUMvQjs7OztZQU5RLGdCQUFnQjtZQUVoQixjQUFjOzs7eUJBU3BCLEtBQUs7cUJBRUwsS0FBSztrQ0FFTCxXQUFXLFNBQUMsT0FBTzs7OztJQU5wQixzQ0FBaUI7O0lBRWpCLHdDQUFpQzs7SUFFakMsb0NBQXlCOztJQUV6QixpREFBMEM7Ozs7O0lBR3hDLDhDQUEwQzs7Ozs7SUFDMUMsNENBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE9uSW5pdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgT3ZlcmxheUNvbnRhaW5lciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcblxuaW1wb3J0IHsgQW1UaGVtZVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlL2FtLXRoZW1lLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYW1UaGVtZUNvbnRhaW5lcl0nXG59KVxuZXhwb3J0IGNsYXNzIENvbnRhaW5lckRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgb2xkVGhlbWU6IHN0cmluZztcblxuICBASW5wdXQoKSBjb2xvclRoZW1lOiBzdHJpbmcgPSAnJztcblxuICBASW5wdXQoKSBpc0Rhcms6IGJvb2xlYW47XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpIHRoZW1lQWN0aXZlQ3NzQ2xhc3M7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBvdmVybGF5Q29udGFpbmVyOiBPdmVybGF5Q29udGFpbmVyLFxuICAgIHByaXZhdGUgYW1UaGVtZVNlcnZpY2U6IEFtVGhlbWVTZXJ2aWNlXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMuY29sb3JUaGVtZSAhPT0gJycpIHtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5pc0RhcmsgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMuc2V0VGhlbWUodGhpcy5jb2xvclRoZW1lLCB0aGlzLmlzRGFyayk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmFtVGhlbWVTZXJ2aWNlLmlzRGFyayQuc3Vic2NyaWJlKChpc0RhcmspID0+IHtcbiAgICAgICAgICB0aGlzLnNldFRoZW1lKHRoaXMuY29sb3JUaGVtZSwgaXNEYXJrKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYW1UaGVtZVNlcnZpY2UuY29sb3JUaGVtZSQuc3Vic2NyaWJlKChjb2xvclRoZW1lKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5pc0RhcmsgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhpcy5zZXRUaGVtZShjb2xvclRoZW1lLCB0aGlzLmlzRGFyayk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5hbVRoZW1lU2VydmljZS5pc0RhcmskLnN1YnNjcmliZSgoaXNEYXJrKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFRoZW1lKGNvbG9yVGhlbWUsIGlzRGFyayk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHNldFRoZW1lKGNvbG9yVGhlbWUsIGlzRGFyaykge1xuICAgIGxldCB0aGVtZSA9IGNvbG9yVGhlbWUgKyAoaXNEYXJrID8gJy1kYXJrJyA6ICctbGlnaHQnKTtcblxuICAgIHRoaXMudGhlbWVBY3RpdmVDc3NDbGFzcyA9IHRoZW1lO1xuXG4gICAgY29uc3Qgb3ZlcmxheUNsYXNzTGlzdCA9IHRoaXMub3ZlcmxheUNvbnRhaW5lci5nZXRDb250YWluZXJFbGVtZW50KCkuY2xhc3NMaXN0XG4gICAgaWYgKG92ZXJsYXlDbGFzc0xpc3QuY29udGFpbnModGhpcy5vbGRUaGVtZSkpIHtcbiAgICAgIG92ZXJsYXlDbGFzc0xpc3QucmVwbGFjZSh0aGlzLm9sZFRoZW1lLCB0aGVtZSlcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBvdmVybGF5Q2xhc3NMaXN0LmFkZCh0aGVtZSlcbiAgICB9XG5cbiAgICB0aGlzLm9sZFRoZW1lID0gdGhlbWU7XG4gIH1cblxufVxuIl19