import React, {useState} from 'react';

const useTutorialSteps = () => {
    const [steps, setSteps] = useState([{
        element: '#title1',
        popover: {
            title: 'Title 1',
            description: 'I\'m the body or a description of the popover',
        }
    },
        {
            element: '#title2',
            popover: {
                title: 'Title 2',
                description: 'I\'m the body or a description of the popover',
            }
        },
        {
            element: '#title3',
            popover: {
                title: 'Title 3',
                description: 'I\'m the body or a description of the popover',

            }
        },
        {
            element: '#title4',
            popover: {
                title: 'Title 4',
                description: 'I\'m the body or a description of the popover',
            }
        }
    ]);

    return [steps];
};

export default useTutorialSteps;