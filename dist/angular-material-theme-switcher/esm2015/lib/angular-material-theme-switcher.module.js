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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1tYXRlcmlhbC10aGVtZS1zd2l0Y2hlci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2hleXhuZW8vYW5ndWxhci1tYXRlcmlhbC10aGVtZS1zd2l0Y2hlci8iLCJzb3VyY2VzIjpbImxpYi9hbmd1bGFyLW1hdGVyaWFsLXRoZW1lLXN3aXRjaGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUNMLGVBQWUsRUFDZixpQkFBaUIsRUFDakIsYUFBYSxFQUNiLGFBQWEsRUFDYixvQkFBb0IsRUFDcEIsZ0JBQWdCLEVBQ2pCLE1BQU0sbUJBQW1CLENBQUM7QUFFM0IsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXJELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQzdGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBRTFGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzNELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUU3RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFvQzVELE1BQU0sT0FBTyxrQ0FBa0M7OztZQWpDOUMsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRTtvQkFDWixzQkFBc0I7b0JBQ3RCLHFCQUFxQjtvQkFDckIsa0JBQWtCO29CQUNsQixlQUFlO29CQUNmLGVBQWU7b0JBQ2YsYUFBYTtvQkFDYixjQUFjO2lCQUNmO2dCQUNELFNBQVMsRUFBRTtvQkFDVCxjQUFjO2lCQUNmO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLGFBQWE7b0JBQ2IsZUFBZTtvQkFDZixpQkFBaUI7b0JBQ2pCLGFBQWE7b0JBQ2IsYUFBYTtvQkFDYixvQkFBb0I7b0JBQ3BCLGdCQUFnQjtpQkFDakI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLHNCQUFzQjtvQkFDdEIscUJBQXFCO29CQUNyQixrQkFBa0I7b0JBQ2xCLGVBQWU7b0JBQ2YsZUFBZTtvQkFDZixhQUFhO29CQUNiLGNBQWM7aUJBQ2Y7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7XG4gIE1hdEJ1dHRvbk1vZHVsZSxcbiAgTWF0R3JpZExpc3RNb2R1bGUsXG4gIE1hdEljb25Nb2R1bGUsXG4gIE1hdE1lbnVNb2R1bGUsXG4gIE1hdFNsaWRlVG9nZ2xlTW9kdWxlLFxuICBNYXRUb29sdGlwTW9kdWxlXG59IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcblxuaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jZGsvb3ZlcmxheVwiO1xuXG5pbXBvcnQgeyBDb2xvclN3aXRjaGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnQvY29sb3Itc3dpdGNoZXIvY29sb3Itc3dpdGNoZXIuY29tcG9uZW50JztcbmltcG9ydCB7IERhcmtTd2l0Y2hlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50L2Rhcmstc3dpdGNoZXIvZGFyay1zd2l0Y2hlci5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBDb250YWluZXJEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZS9jb250YWluZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IEFjdGl2ZURpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlL2FjdGl2ZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ3VzdG9tRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmUvY3VzdG9tLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBEYXJrRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmUvZGFyay5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTGlnaHREaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZS9saWdodC5kaXJlY3RpdmUnO1xuXG5pbXBvcnQgeyBBbVRoZW1lU2VydmljZSB9IGZyb20gJy4vc2VydmljZS9hbS10aGVtZS5zZXJ2aWNlJztcblxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBDb2xvclN3aXRjaGVyQ29tcG9uZW50LFxuICAgIERhcmtTd2l0Y2hlckNvbXBvbmVudCxcbiAgICBDb250YWluZXJEaXJlY3RpdmUsXG4gICAgQWN0aXZlRGlyZWN0aXZlLFxuICAgIEN1c3RvbURpcmVjdGl2ZSxcbiAgICBEYXJrRGlyZWN0aXZlLFxuICAgIExpZ2h0RGlyZWN0aXZlXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIEFtVGhlbWVTZXJ2aWNlXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgT3ZlcmxheU1vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0R3JpZExpc3RNb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXRNZW51TW9kdWxlLFxuICAgIE1hdFNsaWRlVG9nZ2xlTW9kdWxlLFxuICAgIE1hdFRvb2x0aXBNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIENvbG9yU3dpdGNoZXJDb21wb25lbnQsXG4gICAgRGFya1N3aXRjaGVyQ29tcG9uZW50LFxuICAgIENvbnRhaW5lckRpcmVjdGl2ZSxcbiAgICBBY3RpdmVEaXJlY3RpdmUsXG4gICAgQ3VzdG9tRGlyZWN0aXZlLFxuICAgIERhcmtEaXJlY3RpdmUsXG4gICAgTGlnaHREaXJlY3RpdmVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBBbmd1bGFyTWF0ZXJpYWxUaGVtZVN3aXRjaGVyTW9kdWxlIHsgfVxuIl19