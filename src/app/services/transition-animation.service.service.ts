import { Injectable } from '@angular/core';
import {animation, style, animate, trigger, transition, useAnimation, state, keyframes, query, stagger} from '@angular/animations'


export const transitionAnimation =  trigger('scrollAnimation', [
  state('expanded', style({
    height: '15vh'
  })),
  state('collapsed', style({
    height: '5vh'
  })),
  transition('expanded <=> collapsed', [
    trigger('scrollAnimation', [
      transition('* => scrolled', [
        query('li', [
          style({ opacity: 0, transform: 'translateY(-20px)' }),
          stagger(50, [
            animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ])
      ]),
      transition('scrolled => *', [
        query('li', [
          stagger(50, [
            animate('300ms ease-in', style({ opacity: 0, transform: 'translateY(-20px)' }))
          ]),
         
        ])
      ])
    ])
  ])
])
