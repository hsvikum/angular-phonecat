import * as angular from 'angular';

angular.
  module('core.phone').
  component('multiply', {
    bindings: {
        message: '='
    },
    template: `
        <div>
            <span>{{$ctrl.message}}</span> -- <input type="text" ng-model="$ctrl.message" placeholder="message"/><br/>
            <input type="text" ng-model="$ctrl.x" placeholder="x"/> *
            <input type="text" ng-model="$ctrl.y" placeholder="y"/> = 
            <input type="text" ng-model="$ctrl.z" placeholder="answer"/>
            <button ng-click="$ctrl.calc()">Multiply</button>
        </div>
    `,
    controller: function() {
        var that = this;
        this.x = this.y = this.z = 0;
        this.calc = function() {
            that.z = that.y * that.x;
        };
      }
});


import { Directive, ElementRef, Injector, Input} from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';

@Directive({
  selector: 'multiply'
})
export class MultiplyDirective extends UpgradeComponent {

  @Input() message!: String;
  constructor(elementRef: ElementRef, injector: Injector) {
    super('multiply', elementRef, injector);
  }
}