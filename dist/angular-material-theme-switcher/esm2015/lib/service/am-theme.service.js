/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export class AmThemeService {
    constructor() {
        this.themes = [
            'deeppurple-amber',
            'indigo-pink',
            'pink-bluegrey',
            'purple-green',
        ];
        this.colorTheme$ = new BehaviorSubject('indigo-pink');
        this.isDark$ = new BehaviorSubject(false);
    }
}
AmThemeService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AmThemeService.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    AmThemeService.prototype.themes;
    /** @type {?} */
    AmThemeService.prototype.colorTheme$;
    /** @type {?} */
    AmThemeService.prototype.isDark$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW0tdGhlbWUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItbWF0ZXJpYWwtdGhlbWUtc3dpdGNoZXIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZS9hbS10aGVtZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHdkMsTUFBTSxPQUFPLGNBQWM7SUFZekI7UUFWQSxXQUFNLEdBQWE7WUFDakIsa0JBQWtCO1lBQ2xCLGFBQWE7WUFDYixlQUFlO1lBQ2YsY0FBYztTQUNmLENBQUM7UUFFRixnQkFBVyxHQUFHLElBQUksZUFBZSxDQUFTLGFBQWEsQ0FBQyxDQUFDO1FBQ3pELFlBQU8sR0FBRyxJQUFJLGVBQWUsQ0FBVSxLQUFLLENBQUMsQ0FBQztJQUU5QixDQUFDOzs7WUFibEIsVUFBVTs7Ozs7O0lBR1QsZ0NBS0U7O0lBRUYscUNBQXlEOztJQUN6RCxpQ0FBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQW1UaGVtZVNlcnZpY2Uge1xuXG4gIHRoZW1lczogc3RyaW5nW10gPSBbXG4gICAgJ2RlZXBwdXJwbGUtYW1iZXInLFxuICAgICdpbmRpZ28tcGluaycsXG4gICAgJ3BpbmstYmx1ZWdyZXknLFxuICAgICdwdXJwbGUtZ3JlZW4nLFxuICBdO1xuXG4gIGNvbG9yVGhlbWUkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KCdpbmRpZ28tcGluaycpO1xuICBpc0RhcmskID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxufVxuIl19