/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { AmThemeService } from '../../service/am-theme.service';
var DarkSwitcherComponent = /** @class */ (function () {
    function DarkSwitcherComponent(amThemeService) {
        this.amThemeService = amThemeService;
        this.isDark = false;
    }
    /**
     * @return {?}
     */
    DarkSwitcherComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.amThemeService.isDark$.next(this.isDark);
    };
    /**
     * @param {?} isDark
     * @return {?}
     */
    DarkSwitcherComponent.prototype.toggleIsDark = /**
     * @param {?} isDark
     * @return {?}
     */
    function (isDark) {
        this.amThemeService.isDark$.next(isDark);
    };
    DarkSwitcherComponent.decorators = [
        { type: Component, args: [{
                    selector: 'am-theme-dark-switcher',
                    template: "<mat-slide-toggle [checked]=\"isDark\" (click)=\"$event.stopPropagation();\" (change)=\"toggleIsDark($event.checked)\"\n    matTooltip=\"Is Dark?\"></mat-slide-toggle>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    DarkSwitcherComponent.ctorParameters = function () { return [
        { type: AmThemeService }
    ]; };
    DarkSwitcherComponent.propDecorators = {
        isDark: [{ type: Input }]
    };
    return DarkSwitcherComponent;
}());
export { DarkSwitcherComponent };
if (false) {
    /** @type {?} */
    DarkSwitcherComponent.prototype.isDark;
    /**
     * @type {?}
     * @private
     */
    DarkSwitcherComponent.prototype.amThemeService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFyay1zd2l0Y2hlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2hleXhuZW8vYW5ndWxhci1tYXRlcmlhbC10aGVtZS1zd2l0Y2hlci8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnQvZGFyay1zd2l0Y2hlci9kYXJrLXN3aXRjaGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBRU4sTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRWhFO0lBU0UsK0JBQW9CLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUZ6QyxXQUFNLEdBQVksS0FBSyxDQUFDO0lBRXFCLENBQUM7Ozs7SUFFdkQsd0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNoRCxDQUFDOzs7OztJQUVELDRDQUFZOzs7O0lBQVosVUFBYSxNQUFlO1FBQzFCLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMzQyxDQUFDOztnQkFqQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx3QkFBd0I7b0JBQ2xDLG1MQUE2Qzs7aUJBRTlDOzs7O2dCQU5RLGNBQWM7Ozt5QkFTcEIsS0FBSzs7SUFZUiw0QkFBQztDQUFBLEFBbkJELElBbUJDO1NBZFkscUJBQXFCOzs7SUFFaEMsdUNBQWlDOzs7OztJQUVyQiwrQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPbkluaXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFtVGhlbWVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZS9hbS10aGVtZS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW0tdGhlbWUtZGFyay1zd2l0Y2hlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXJrLXN3aXRjaGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGFyay1zd2l0Y2hlci5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRGFya1N3aXRjaGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBpc0Rhcms6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFtVGhlbWVTZXJ2aWNlOiBBbVRoZW1lU2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5hbVRoZW1lU2VydmljZS5pc0RhcmskLm5leHQodGhpcy5pc0RhcmspO1xuICB9XG5cbiAgdG9nZ2xlSXNEYXJrKGlzRGFyazogYm9vbGVhbikge1xuICAgIHRoaXMuYW1UaGVtZVNlcnZpY2UuaXNEYXJrJC5uZXh0KGlzRGFyayk7XG4gIH1cblxufVxuIl19