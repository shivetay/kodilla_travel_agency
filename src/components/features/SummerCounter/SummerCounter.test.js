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

describe('test 4 -Component HappyHourAd with mocked Date', () => {
 
  checkDescriptionAtday('2020-05-20', 'oneDaySummer');
  checkDescriptionAtday('2020-05-10', 'summerDescription');
  checkDescriptionAtday('2020-10-10', 'summerDescription');
  checkDescriptionAtday('2020-08-10', 'noSummer');
});
