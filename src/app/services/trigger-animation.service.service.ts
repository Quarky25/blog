import { Injectable } from '@angular/core';
import { animation, style, animate, trigger, transition, useAnimation} from '@angular/animations';
import { transitionAnimation } from './transition-animation.service.service';


export const triggerAnimation = trigger('openClose', [
  transition('open => closed', [
    useAnimation(transitionAnimation, {
      params: {
        height: 0,
        time: '1s',
      },
     
    }),
  ]),
]);