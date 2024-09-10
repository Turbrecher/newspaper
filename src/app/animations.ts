import { animate, state, style, transition, trigger } from "@angular/animations";

export const slideInAnimation =
    trigger('routeAnimations', [
        state(
            'enter',
            style({
                opacity: '1'
            })
        ),
        state('exit',
            style({
                opacity: '0'
            })
        )
        ,
        transition('* => *', [animate('0.5s')])
    ]);