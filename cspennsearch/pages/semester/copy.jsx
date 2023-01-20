import { LiquidSwipe } from './liquidSwipe';
// import Semester from '.';
// import Home from '../index';

export default function Semester(){
    const componentsToRender = [] // Add components you want to render.
    const backgroundColors = [] // Add background colors for each component.

    return (
        <div>
            <p>Hello</p>
        <LiquidSwipe
            components={componentsToRender}
            colors={backgroundColors}
        />
        </div>
    );
}