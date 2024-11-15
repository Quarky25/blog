import { Injectable } from '@angular/core';
import {animation, style, animate, trigger, transition, useAnimation, state} from '@angular/animations'


export const transitionAnimation = animation([
  state(
    'open',
    style({
      height: '{{ height }}',
      
    }),
    
  ),
  state(
    'closed',
    style({
      height: '{{height}}'
    })
  ),
  transition('open => closed', [animate('1s', style({height: '*'}))]),
  transition('closed => open', [animate('1s', style({height: '*'}))]),
  
]);
