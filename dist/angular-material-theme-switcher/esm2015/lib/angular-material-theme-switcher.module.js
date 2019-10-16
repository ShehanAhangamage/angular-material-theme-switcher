/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatGridListModule, MatIconModule, MatMenuModule, MatSlideToggleModule, MatTooltipModule } from '@angular/material';
import { OverlayModule } from "@angular/cdk/overlay";
import { ColorSwitcherComponent } from './component/color-switcher/color-switcher.component';
import { DarkSwitcherComponent } from './component/dark-switcher/dark-switcher.component';
import { ContainerDirective } from './directive/container.directive';
import { ActiveDirective } from './directive/active.directive';
import { CustomDirective } from './directive/custom.directive';
import { DarkDirective } from './directive/dark.directive';
import { LightDirective } from './directive/light.directive';
import { AmThemeService } from './service/am-theme.service';
export class AngularMaterialThemeSwitcherModule {
}
AngularMaterialThemeSwitcherModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    ColorSwitcherComponent,
                    DarkSwitcherComponent,
                    ContainerDirective,
                    ActiveDirective,
                    CustomDirective,
                    DarkDirective,
                    LightDirective
                ],
                providers: [
                    AmThemeService
                ],
                imports: [
                    CommonModule,
                    OverlayModule,
                    MatButtonModule,
                    MatGridListModule,
                    MatIconModule,
                    MatMenuModule,
                    MatSlideToggleModule,
                    MatTooltipModule
                ],
                exports: [
                    ColorSwitcherComponent,
                    DarkSwitcherComponent,
                    ContainerDirective,
                    ActiveDirective,
                    CustomDirective,
                    DarkDirective,
                    LightDirective
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1tYXRlcmlhbC10aGVtZS1zd2l0Y2hlci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLW1hdGVyaWFsLXRoZW1lLXN3aXRjaGVyLyIsInNvdXJjZXMiOlsibGliL2FuZ3VsYXItbWF0ZXJpYWwtdGhlbWUtc3dpdGNoZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQ0wsZUFBZSxFQUNmLGlCQUFpQixFQUNqQixhQUFhLEVBQ2IsYUFBYSxFQUNiLG9CQUFvQixFQUNwQixnQkFBZ0IsRUFDakIsTUFBTSxtQkFBbUIsQ0FBQztBQUUzQixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFckQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDN0YsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFFMUYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDckUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRTdELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQW9DNUQsTUFBTSxPQUFPLGtDQUFrQzs7O1lBakM5QyxRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLHNCQUFzQjtvQkFDdEIscUJBQXFCO29CQUNyQixrQkFBa0I7b0JBQ2xCLGVBQWU7b0JBQ2YsZUFBZTtvQkFDZixhQUFhO29CQUNiLGNBQWM7aUJBQ2Y7Z0JBQ0QsU0FBUyxFQUFFO29CQUNULGNBQWM7aUJBQ2Y7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osYUFBYTtvQkFDYixlQUFlO29CQUNmLGlCQUFpQjtvQkFDakIsYUFBYTtvQkFDYixhQUFhO29CQUNiLG9CQUFvQjtvQkFDcEIsZ0JBQWdCO2lCQUNqQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1Asc0JBQXNCO29CQUN0QixxQkFBcUI7b0JBQ3JCLGtCQUFrQjtvQkFDbEIsZUFBZTtvQkFDZixlQUFlO29CQUNmLGFBQWE7b0JBQ2IsY0FBYztpQkFDZjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHtcbiAgTWF0QnV0dG9uTW9kdWxlLFxuICBNYXRHcmlkTGlzdE1vZHVsZSxcbiAgTWF0SWNvbk1vZHVsZSxcbiAgTWF0TWVudU1vZHVsZSxcbiAgTWF0U2xpZGVUb2dnbGVNb2R1bGUsXG4gIE1hdFRvb2x0aXBNb2R1bGVcbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG5pbXBvcnQgeyBPdmVybGF5TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Nkay9vdmVybGF5XCI7XG5cbmltcG9ydCB7IENvbG9yU3dpdGNoZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudC9jb2xvci1zd2l0Y2hlci9jb2xvci1zd2l0Y2hlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGFya1N3aXRjaGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnQvZGFyay1zd2l0Y2hlci9kYXJrLXN3aXRjaGVyLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IENvbnRhaW5lckRpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlL2NvbnRhaW5lci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQWN0aXZlRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmUvYWN0aXZlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBDdXN0b21EaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZS9jdXN0b20uZGlyZWN0aXZlJztcbmltcG9ydCB7IERhcmtEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZS9kYXJrLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBMaWdodERpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlL2xpZ2h0LmRpcmVjdGl2ZSc7XG5cbmltcG9ydCB7IEFtVGhlbWVTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlL2FtLXRoZW1lLnNlcnZpY2UnO1xuXG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIENvbG9yU3dpdGNoZXJDb21wb25lbnQsXG4gICAgRGFya1N3aXRjaGVyQ29tcG9uZW50LFxuICAgIENvbnRhaW5lckRpcmVjdGl2ZSxcbiAgICBBY3RpdmVEaXJlY3RpdmUsXG4gICAgQ3VzdG9tRGlyZWN0aXZlLFxuICAgIERhcmtEaXJlY3RpdmUsXG4gICAgTGlnaHREaXJlY3RpdmVcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgQW1UaGVtZVNlcnZpY2VcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBPdmVybGF5TW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRHcmlkTGlzdE1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdE1lbnVNb2R1bGUsXG4gICAgTWF0U2xpZGVUb2dnbGVNb2R1bGUsXG4gICAgTWF0VG9vbHRpcE1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgQ29sb3JTd2l0Y2hlckNvbXBvbmVudCxcbiAgICBEYXJrU3dpdGNoZXJDb21wb25lbnQsXG4gICAgQ29udGFpbmVyRGlyZWN0aXZlLFxuICAgIEFjdGl2ZURpcmVjdGl2ZSxcbiAgICBDdXN0b21EaXJlY3RpdmUsXG4gICAgRGFya0RpcmVjdGl2ZSxcbiAgICBMaWdodERpcmVjdGl2ZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJNYXRlcmlhbFRoZW1lU3dpdGNoZXJNb2R1bGUgeyB9XG4iXX0=