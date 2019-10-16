/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
var AmThemeService = /** @class */ (function () {
    function AmThemeService() {
        this.themes = [
            'deeppurple-amber',
            'indigo-pink',
            'pink-bluegrey',
            'purple-green',
        ];
        this.colorTheme$ = new BehaviorSubject('indigo-pink');
        this.isDark$ = new BehaviorSubject(false);
    }
    AmThemeService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    AmThemeService.ctorParameters = function () { return []; };
    return AmThemeService;
}());
export { AmThemeService };
if (false) {
    /** @type {?} */
    AmThemeService.prototype.themes;
    /** @type {?} */
    AmThemeService.prototype.colorTheme$;
    /** @type {?} */
    AmThemeService.prototype.isDark$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW0tdGhlbWUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzaGV5eG5lby9hbmd1bGFyLW1hdGVyaWFsLXRoZW1lLXN3aXRjaGVyLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2UvYW0tdGhlbWUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXZDO0lBYUU7UUFWQSxXQUFNLEdBQWE7WUFDakIsa0JBQWtCO1lBQ2xCLGFBQWE7WUFDYixlQUFlO1lBQ2YsY0FBYztTQUNmLENBQUM7UUFFRixnQkFBVyxHQUFHLElBQUksZUFBZSxDQUFTLGFBQWEsQ0FBQyxDQUFDO1FBQ3pELFlBQU8sR0FBRyxJQUFJLGVBQWUsQ0FBVSxLQUFLLENBQUMsQ0FBQztJQUU5QixDQUFDOztnQkFibEIsVUFBVTs7OztJQWVYLHFCQUFDO0NBQUEsQUFmRCxJQWVDO1NBZFksY0FBYzs7O0lBRXpCLGdDQUtFOztJQUVGLHFDQUF5RDs7SUFDekQsaUNBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFtVGhlbWVTZXJ2aWNlIHtcblxuICB0aGVtZXM6IHN0cmluZ1tdID0gW1xuICAgICdkZWVwcHVycGxlLWFtYmVyJyxcbiAgICAnaW5kaWdvLXBpbmsnLFxuICAgICdwaW5rLWJsdWVncmV5JyxcbiAgICAncHVycGxlLWdyZWVuJyxcbiAgXTtcblxuICBjb2xvclRoZW1lJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPignaW5kaWdvLXBpbmsnKTtcbiAgaXNEYXJrJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbn1cbiJdfQ==