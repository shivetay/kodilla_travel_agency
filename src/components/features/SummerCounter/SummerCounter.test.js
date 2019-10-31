import React from 'react';
import { shallow } from 'enzyme';
import SummerCounter from './SummerCounter';


const select = {
  summerCounter: '.summerCounter',
};

const mockProps = {
  summerDescription: 'summerDescription',
  noSummer: '',
  oneDaySummer: 'oneDaySummer',
};

const component = shallow(<SummerCounter {...mockProps} />);


describe ('test 1 - Component SummerCounter', () => {
  it('should render without crashing', () => {
    expect(component).toBeTruthy();
  });
});

describe('test 2 - should render description', () => {
  it('should render description styles', () => {
    expect(component.exists(select.summerCounter)).toEqual(true);
  });
});

describe('test 3 - should render description from props', () => {
  it('should return empty objc if called without props', () => {
    expect(component).toEqual({});
  });
});

const trueDate = Date;

const mockDate = customDate => class extends Date {
  constructor(...args) {
    if(args.length){
      super(...args);
    } else {
      super(customDate);
    }
    return this;
  }
  static now(){
    return (new Date(customDate)).gettime();
  }
};


const checkDescriptionAtday = (day, expectedDescription) => {

  it(`should show correct at ${day}`, () => {
    global.Date = mockDate(`${day}`);
  
    const component = shallow(<SummerCounter {...mockProps} />);
    const renderedTime = component.find(select.summerCounter).text();
    expect(renderedTime).toEqual(expectedDescription);
  
    global.Date = trueDate;
  });
};

describe('test 4 - Component HappyHourAd with mocked Date', () => {
 
  checkDescriptionAtday('2020-06-20', '1oneDaySummer');
  checkDescriptionAtday('2020-05-10', '42summerDescription');
  checkDescriptionAtday('2020-10-10', '254summerDescription');
  checkDescriptionAtday('2020-08-10', '');
  checkDescriptionAtday('2020-07-10', '');
  checkDescriptionAtday('2020-09-23', '');
  checkDescriptionAtday('2020-09-24', '270summerDescription');
});

