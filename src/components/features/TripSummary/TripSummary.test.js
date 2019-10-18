import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component link', () => {
  it('should get correct link', () => {

    const id = 'abc';
    const component = shallow(<TripSummary id={id}/>);
    const renderedLink = component.find('.link').prop('to');
    expect(renderedLink).toEqual(`/trip/${id}`);
  });
  
  it('should throw error if no props', () => {
    const component = shallow (<TripSummary />);
    expect(component).toEqual({});
  });

  it('should render correct src and alt for image', () => {
    const expectedSrc = 'imageSrc';
    const expectedAlt = 'imageAlt';

    const component = shallow(<TripSummary image={expectedSrc} name={expectedAlt} />);

    expect(component.find('.image').prop('src')).toEqual(expectedSrc);
    expect(component.find('.image').prop('alt')).toEqual(expectedAlt);
  });

  it('should render correct name, days and cost', () => {
    const expectedName = 'XYZ';
    const expectedDays = 10;
    const expectedCost = '99';

    const component = shallow(<TripSummary name={expectedName} cost={expectedCost} days={expectedDays} />);

    const renderedName = component.find('.title').text();
    expect(renderedName).toEqual(expectedName);

    const renderedDays = component.find('.details span').at(0).text();
    expect(renderedDays).toEqual(`${expectedDays} days`);

    const renderedCost = component.find('.details span').at(1).text();
    expect(renderedCost).toEqual(`from ${expectedCost}`);
  });

  it('should render tags array correctly', () => {
    const expectedTags = ['one', 'two', 'three'];

    const component = shallow(<TripSummary tags={expectedTags} />);

    const firstTag = component.find('.tags span').at(0).text();
    const secondTag = component.find('.tags span').at(1).text();
    const thirdTag = component.find('.tags span').at(2).text();

    expect(firstTag).toEqual(expectedTags[0]);
    expect(secondTag).toEqual(expectedTags[1]);
    expect(thirdTag).toEqual(expectedTags[2]);
  });
  //zmiana pustej tablicy
  it('should render tags div if tags is truthy', () => {
    const component = shallow(<TripSummary tags={[]} />);

    const renderedTags = component.find('.tags');
    expect(renderedTags).toBeTruthy();
  });
});
