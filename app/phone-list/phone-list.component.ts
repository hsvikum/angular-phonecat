'use strict';

// Register `phoneList` component, along with its associated controller and template
class PhoneListController {
  phones: any[];
  orderProp: string;
  query: string | undefined;

  static $inject = ['Phone'];
  constructor(Phone: any) {
    this.phones = Phone.query();
    this.orderProp = 'age';
  }
}

angular.
  module('phoneList').
  component('phoneList', {
    templateUrl: 'app/phone-list/phone-list.template.html',
    controller: PhoneListController
  });
