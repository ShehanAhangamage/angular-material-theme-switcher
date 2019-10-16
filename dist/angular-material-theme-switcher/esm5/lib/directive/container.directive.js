/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostBinding, Input } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { AmThemeService } from '../service/am-theme.service';
var ContainerDirective = /** @class */ (function () {
    function ContainerDirective(overlayContainer, amThemeService) {
        this.overlayContainer = overlayContainer;
        this.amThemeService = amThemeService;
        this.colorTheme = '';
    }
    /**
     * @return {?}
     */
    ContainerDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.colorTheme !== '') {
            if (typeof this.isDark !== 'undefined') {
                this.setTheme(this.colorTheme, this.isDark);
            }
            else {
                this.amThemeService.isDark$.subscribe((/**
                 * @param {?} isDark
                 * @return {?}
                 */
                function (isDark) {
                    _this.setTheme(_this.colorTheme, isDark);
                }));
            }
        }
        else {
            this.amThemeService.colorTheme$.subscribe((/**
             * @param {?} colorTheme
             * @return {?}
             */
            function (colorTheme) {
                if (typeof _this.isDark !== 'undefined') {
                    _this.setTheme(colorTheme, _this.isDark);
                }
                else {
                    _this.amThemeService.isDark$.subscribe((/**
                     * @param {?} isDark
                     * @return {?}
                     */
                    function (isDark) {
                        _this.setTheme(colorTheme, isDark);
                    }));
                }
            }));
        }
    };
    /**
     * @param {?} colorTheme
     * @param {?} isDark
     * @return {?}
     */
    ContainerDirective.prototype.setTheme = /**
     * @param {?} colorTheme
     * @param {?} isDark
     * @return {?}
     */
    function (colorTheme, isDark) {
        /** @type {?} */
        var theme = colorTheme + (isDark ? '-dark' : '-light');
        this.themeActiveCssClass = theme;
        /** @type {?} */
        var overlayClassList = this.overlayContainer.getContainerElement().classList;
        if (overlayClassList.contains(this.oldTheme)) {
            overlayClassList.replace(this.oldTheme, theme);
        }
        else {
            overlayClassList.add(theme);
        }
        this.oldTheme = theme;
    };
    ContainerDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[amThemeContainer]'
                },] }
    ];
    /** @nocollapse */
    ContainerDirective.ctorParameters = function () { return [
        { type: OverlayContainer },
        { type: AmThemeService }
    ]; };
    ContainerDirective.propDecorators = {
        colorTheme: [{ type: Input }],
        isDark: [{ type: Input }],
        themeActiveCssClass: [{ type: HostBinding, args: ['class',] }]
    };
    return ContainerDirective;
}());
export { ContainerDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbmVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzaGV5eG5lby9hbmd1bGFyLW1hdGVyaWFsLXRoZW1lLXN3aXRjaGVyLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZS9jb250YWluZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFdBQVcsRUFDWCxLQUFLLEVBRU4sTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFeEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRTdEO0lBYUUsNEJBQ1UsZ0JBQWtDLEVBQ2xDLGNBQThCO1FBRDlCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBUi9CLGVBQVUsR0FBVyxFQUFFLENBQUM7SUFTN0IsQ0FBQzs7OztJQUVMLHFDQUFROzs7SUFBUjtRQUFBLGlCQW9CQztRQW5CQyxJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssRUFBRSxFQUFFO1lBQzFCLElBQUksT0FBTyxJQUFJLENBQUMsTUFBTSxLQUFLLFdBQVcsRUFBRTtnQkFDdEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUM3QztpQkFBTTtnQkFDTCxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxTQUFTOzs7O2dCQUFDLFVBQUMsTUFBTTtvQkFDM0MsS0FBSSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUN6QyxDQUFDLEVBQUMsQ0FBQzthQUNKO1NBQ0Y7YUFBTTtZQUNMLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLFNBQVM7Ozs7WUFBQyxVQUFDLFVBQVU7Z0JBQ25ELElBQUksT0FBTyxLQUFJLENBQUMsTUFBTSxLQUFLLFdBQVcsRUFBRTtvQkFDdEMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2lCQUN4QztxQkFBTTtvQkFDTCxLQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxTQUFTOzs7O29CQUFDLFVBQUMsTUFBTTt3QkFDM0MsS0FBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUM7b0JBQ3BDLENBQUMsRUFBQyxDQUFDO2lCQUNKO1lBQ0gsQ0FBQyxFQUFDLENBQUM7U0FDSjtJQUNILENBQUM7Ozs7OztJQUVELHFDQUFROzs7OztJQUFSLFVBQVMsVUFBVSxFQUFFLE1BQU07O1lBQ3JCLEtBQUssR0FBRyxVQUFVLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1FBRXRELElBQUksQ0FBQyxtQkFBbUIsR0FBRyxLQUFLLENBQUM7O1lBRTNCLGdCQUFnQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLFNBQVM7UUFDOUUsSUFBSSxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQzVDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFBO1NBQy9DO2FBQ0k7WUFDSCxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7U0FDNUI7UUFFRCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDOztnQkF0REYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7aUJBQy9COzs7O2dCQU5RLGdCQUFnQjtnQkFFaEIsY0FBYzs7OzZCQVNwQixLQUFLO3lCQUVMLEtBQUs7c0NBRUwsV0FBVyxTQUFDLE9BQU87O0lBNkN0Qix5QkFBQztDQUFBLEFBeERELElBd0RDO1NBckRZLGtCQUFrQjs7O0lBRTdCLHNDQUFpQjs7SUFFakIsd0NBQWlDOztJQUVqQyxvQ0FBeUI7O0lBRXpCLGlEQUEwQzs7Ozs7SUFHeEMsOENBQTBDOzs7OztJQUMxQyw0Q0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT25Jbml0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBPdmVybGF5Q29udGFpbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuXG5pbXBvcnQgeyBBbVRoZW1lU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2UvYW0tdGhlbWUuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1thbVRoZW1lQ29udGFpbmVyXSdcbn0pXG5leHBvcnQgY2xhc3MgQ29udGFpbmVyRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcblxuICBvbGRUaGVtZTogc3RyaW5nO1xuXG4gIEBJbnB1dCgpIGNvbG9yVGhlbWU6IHN0cmluZyA9ICcnO1xuXG4gIEBJbnB1dCgpIGlzRGFyazogYm9vbGVhbjtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJykgdGhlbWVBY3RpdmVDc3NDbGFzcztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG92ZXJsYXlDb250YWluZXI6IE92ZXJsYXlDb250YWluZXIsXG4gICAgcHJpdmF0ZSBhbVRoZW1lU2VydmljZTogQW1UaGVtZVNlcnZpY2VcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5jb2xvclRoZW1lICE9PSAnJykge1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLmlzRGFyayAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy5zZXRUaGVtZSh0aGlzLmNvbG9yVGhlbWUsIHRoaXMuaXNEYXJrKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYW1UaGVtZVNlcnZpY2UuaXNEYXJrJC5zdWJzY3JpYmUoKGlzRGFyaykgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0VGhlbWUodGhpcy5jb2xvclRoZW1lLCBpc0RhcmspO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hbVRoZW1lU2VydmljZS5jb2xvclRoZW1lJC5zdWJzY3JpYmUoKGNvbG9yVGhlbWUpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmlzRGFyayAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aGlzLnNldFRoZW1lKGNvbG9yVGhlbWUsIHRoaXMuaXNEYXJrKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmFtVGhlbWVTZXJ2aWNlLmlzRGFyayQuc3Vic2NyaWJlKChpc0RhcmspID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0VGhlbWUoY29sb3JUaGVtZSwgaXNEYXJrKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgc2V0VGhlbWUoY29sb3JUaGVtZSwgaXNEYXJrKSB7XG4gICAgbGV0IHRoZW1lID0gY29sb3JUaGVtZSArIChpc0RhcmsgPyAnLWRhcmsnIDogJy1saWdodCcpO1xuXG4gICAgdGhpcy50aGVtZUFjdGl2ZUNzc0NsYXNzID0gdGhlbWU7XG5cbiAgICBjb25zdCBvdmVybGF5Q2xhc3NMaXN0ID0gdGhpcy5vdmVybGF5Q29udGFpbmVyLmdldENvbnRhaW5lckVsZW1lbnQoKS5jbGFzc0xpc3RcbiAgICBpZiAob3ZlcmxheUNsYXNzTGlzdC5jb250YWlucyh0aGlzLm9sZFRoZW1lKSkge1xuICAgICAgb3ZlcmxheUNsYXNzTGlzdC5yZXBsYWNlKHRoaXMub2xkVGhlbWUsIHRoZW1lKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIG92ZXJsYXlDbGFzc0xpc3QuYWRkKHRoZW1lKVxuICAgIH1cblxuICAgIHRoaXMub2xkVGhlbWUgPSB0aGVtZTtcbiAgfVxuXG59XG4iXX0=