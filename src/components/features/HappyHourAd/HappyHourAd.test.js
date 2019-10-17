import React from 'react';
import { shallow } from 'enzyme';
import HappyHourAd from './HappyHourAd';

const select = {
  title: '.title',
  promoDescription: '.promoDescription',
};

const mockProps = {
  title: 'title',
  promoDescription: 'promoDescription',
};

const component = shallow(<HappyHourAd {...mockProps} />);

describe('Component HappyHourAd', () => {
  it('should render without crashing', () => {
    expect(component).toBeTruthy();
  });

  it('should render heading and description', () => {
    expect(component.exists(select.title)).toEqual(true);
    expect(component.exists(select.promoDescription)).toEqual(true);
  });

  // FIXME:
  it('should return empty object if called without required props', () => {
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
    return (new Date(customDate)).getTime();
  }
};

const checkDescriptionAtTime = (time, expectedDescription) => {
  it(`should show correct at ${time}`, () => {
    global.Date = mockDate(`2019-05-14T${time}.135Z`);

    const component = shallow(<HappyHourAd {...mockProps} />);
    const renderedTime = component.find(select.descr).text();
    expect(renderedTime).toEqual(expectedDescription);

    global.Date = trueDate;
  });
};

describe('Component HappyHourAd with mocked Date', () => {
  checkDescriptionAtTime('11:57:58', '122');
  checkDescriptionAtTime('11:59:59', '1');
  checkDescriptionAtTime('13:00:00', 23 * 60 * 60 + '');
});


const checkDescriptionAfterTime = (time, delaySeconds, expectedDescription) => {
  it(`should show correct value ${delaySeconds} seconds after ${time}`, () => {
    global.Date = mockDate(`2019-05-14T${time}.135Z`);
    jest.useFakeTimers();

    const component = shallow(<HappyHourAd {...mockProps} />);
    const newTime = new Date();
    newTime.setSeconds(newTime.getSeconds() + delaySeconds);
    global.Date = mockDate(newTime.getTime());

    jest.advanceTimersByTime(delaySeconds * 1000);
    const renderedTime = component.find(select.descr).text();
    expect(renderedTime).toEqual(expectedDescription);

    global.Date = trueDate;
    jest.useRealTimers();
  });
};

describe('Component HappyHourAd with mocked Date and delay', () => {
  checkDescriptionAfterTime('11:57:58', 2, '120');
  checkDescriptionAfterTime('11:59:58', 1, '1');
  checkDescriptionAfterTime('13:00:00', 60 * 60, 22 * 60 * 60 + '');
});

describe('Component HappyHourAd with information about promotion with mocked Title', () => {
  checkDescriptionAtTime('12:00:00', '122');
  checkDescriptionAtTime('12:25:59', '1');
  checkDescriptionAtTime('12:59:59', 23 * 60 * 60 + '');

  it('should render heading and description', () => {
    expect(component.exists(mockProps.title)).toEqual(true);
    expect(component.exists(mockProps.promoDescription)).toEqual(true);
  });

});

