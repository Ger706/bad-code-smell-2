function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

var id = getParameterByName('id');

const data = [
    [
{
    title: 'Divergent Change',
    definition: 'Divergent Change is when many changes are made to a single class. Shotgun Surgery refers to when a single change is made to multiple classes simultaneously.',
    sign: 'You find yourself having to change many unrelated methods when you make changes to a class. For example, when adding a new product type you have to change the methods for finding, displaying, and ordering products.',
    reason: 'Often these divergent modifications are due to poor program structure or copypasta programming.',
    treatment: [
        {
            treat:'Split up the behavior of the class via Extract Class'
        },
        {
            treat: 'If different classes have the same behavior, you may want to combine the classes through inheritance (Extract Superclass and Extract Subclass).'
        }
    ],
    image: [
        badImage = [
            {
                bad: '../Asset/DivCh/DivCh.png'
            }
        ],
        fixImage =  [
            {
                fix: '../Asset/DivCh(Fix)/DivCh1(Fix).png'
            },
            {
                fix: '../Asset/DivCh(Fix)/DivCh2(Fix).png'
            }
        ]
    ]
}
    ],
    [
{
    title: 'Shotgun Surgery',
    definition: 'Shotgun Surgery refers to when a single change is made to multiple classes simultaneously.',
    sign: 'Making any modifications requires that you make many small changes to many different classes.',
    reason: 'A single responsibility has been split up among a large number of classes. This can happen after overzealous application of Divergent Change.',
    treatment: [
        {
            treat:'Use Move Method and Move Field to move existing class behaviors into a single class. If there’s no class appropriate for this, create a new one'
        },
        {
            treat: 'If moving code to the same class leaves the original classes almost empty, try to get rid of these now-redundant classes via Inline Class.'
        }
    ],
    image: [
        badImage = [
            {
                bad: '../Asset/SS/SS1.png'
            },
            {
                bad: '../Asset/SS/SS2.png'
            },
            {
                bad: '../Asset/SS/SS3.png'
            }
        ],
        fixImage =  [
            {
                fix: '../Asset/SS(Fix)/SS1(Fix).png'
            },
            {
                fix: '../Asset/SS(Fix)/SS2(Fix).png'
            },
            {
                fix: '../Asset/SS(Fix)/SS3(Fix).png'
            }
        ]
    ]
}
    ],
    [
        {
            title: 'Parallel Inheritance',
            definition: 'Parallel inheritance hierarchies is a design issue where two or more hierarchies of classes exist in a system, and the structure of one hierarchy mirrors the structure of another. When these hierarchies evolve independently, it often leads to code duplication, maintenance difficulties, and a lack of flexibility.',
            sign: 'Whenever you create a subclass for a class, you find yourself needing to create a subclass for another class.',
            reason: 'All was well as long as the hierarchy stayed small. But with new classes being added, making changes has become harder and harder.',
            treatment: [
                {
                    treat:'You may deduplicate parallel class hierarchies in two steps. First, make instances of one hierarchy refer to instances of another hierarchy. Then, remove the hierarchy in the referred class, by using Move Method and Move Field.'
                }
            ],
            image: [
                badImage = [
                    {
                        bad: '../Asset/PIH/PIH1.png'
                    },
                    {
                        bad: '../Asset/PIH/PIH2.png'
                    },
                    {
                        bad: '../Asset/PIH/PIH3.png'
                    }
                ],
                fixImage =  [
                    {
                        fix: '../Asset/PIH(Fix)/PIH1(Fix).png'
                    },
                    {
                        fix: '../Asset/PIH(Fix)/PIH2(Fix).png'
                    },
                    {
                        fix: '../Asset/PIH(Fix)/PIH3(Fix).png'
                    }
                ]
            ]
        }
    ],
]

function displayData(index) {
    const container = document.getElementById('dataContainer');
    const dataAtIndex = data[index];
    container.innerHTML = '';

    if (dataAtIndex && dataAtIndex.length > 0) {
        const item = dataAtIndex[0];

        const titleDiv = document.createElement('div');
        titleDiv.innerHTML = `<h2> ${item.title} </h2>`;
        titleDiv.classList.add('title');
        container.appendChild(titleDiv);

        const definitionDiv = document.createElement('div');
        definitionDiv.innerHTML = `<strong>Definition:</strong> ${item.definition}`;
        definitionDiv.classList.add('definition');
        container.appendChild(definitionDiv);

        const signDiv = document.createElement('div');
        signDiv.innerHTML = `<strong>Sign:</strong> ${item.sign}`;
        signDiv.classList.add('sign');
        container.appendChild(signDiv);

    
        const reasonDiv = document.createElement('div');
        reasonDiv.innerHTML = `<strong>Reason:</strong> ${item.reason}`;
        reasonDiv.classList.add('reason');
        container.appendChild(reasonDiv);

        const treatmentDiv = document.createElement('div');
        treatmentDiv.innerHTML = `<strong>Treatment:</strong>`;
        treatmentDiv.classList.add('treatment');
        const treatmentList = document.createElement('ul');
        item.treatment.forEach(treatItem => {
            const listItem = document.createElement('li');
            listItem.textContent = treatItem.treat;
            treatmentList.appendChild(listItem);
        });
        treatmentDiv.appendChild(treatmentList);
        container.appendChild(treatmentDiv);

        var divElement = document.createElement('div');
 

        var badDiv = document.createElement('div');
        var badSpan = document.createElement('span');
        badSpan.textContent = 'Bad Code';
        badDiv.appendChild(badSpan);
        item.image[0].forEach(Item => {
            const badImg = document.createElement('img');
            badImg.src = Item.bad;
            badDiv.appendChild(badImg);
        });
        
        var fixDiv = document.createElement('div');
        var fixSpan = document.createElement('span');
        fixSpan.textContent = 'Refactored:'
        fixDiv.appendChild(fixSpan);
        item.image[1].forEach(Item => {
            var fixImg = document.createElement('img');
            fixImg.src = Item.fix;
            fixDiv.appendChild(fixImg);
        });
       

divElement.appendChild(badDiv);
divElement.appendChild(fixDiv);
document.getElementById('imageContainer').appendChild(divElement);
    } else {
        container.textContent = 'No data available at index ' + index;
    }
}
displayData(id-1);
