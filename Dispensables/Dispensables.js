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
    title: 'Comment',
    definition: 'While comments are generally considered a valuable tool for explaining complex logic, documenting code, and providing context for future developers, certain patterns of commenting can indicate underlying problems in the code.',
    sign: 'A method is filled with explanatory comments.',
    reason: 'Comments are usually created with the best of intentions, when the author realizes that his or her code isn’t intuitive or obvious. In such cases, comments are like a deodorant masking the smell of fishy code that could be improved.',
    treatment: [
        {
            treat:'If a comment is intended to explain a complex expression, the expression should be split into understandable subexpressions using Extract Variable'
        },
        {
            treat: 'If a comment explains a section of code, this section can be turned into a separate method via Extract Method. The name of the new method can be taken from the comment text itself, most likely.'
        },
        {
            treat: 'If a method has already been extracted, but comments are still necessary to explain what the method does, give the method a self-explanatory name. Use the Rename Method for this'
        },
        {
            treat: 'If you need to assert rules about a state that’s necessary for the system to work, use Introduce Assertion'
        }
    ],
    image: [
        badImage = [
            {
                bad: '../Asset/Comment/Comment.png'
            },
        
        ],
        fixImage =  [
            {
                fix: '../Asset/Comment/Comment(Fix).png'
            },
        ]
    ]
}
    ],
    [
{
    title: 'Duplicate Code',
    definition: 'Duplicate code refers to sections of code that are repeated in multiple places within a codebase.',
    sign: 'Two code fragments look almost identical',
    reason: 'Duplication usually occurs when multiple programmers are working on different parts of the same program at the same time. Since they`re working on different tasks, they may be unaware their colleague has already written similar code that could be repurposed for their own needs <br/> Theres also more subtle duplication, when specific parts of code look different but actually perform the same job. This kind of duplication can be hard to find and fix Sometimes duplication is purposeful. When rushing to meet deadlines and the existing code is <i><b>almost right</b></i> for the job, novice programmers may not be able to resist the temptation of copying and pasting the relevant code. And in some cases, the programmer is simply too lazy to de-clutter.',
    treatment: [
        {   
            treat:'If the same code is found in two or more methods in the same class: use Extract Method and place calls for the new method in both places.'
        },
        {
            treat: 'If a large number of conditional expressions are present and perform the same code (differing only in their conditions), merge these operators into a single condition using Consolidate Conditional Expression and use Extract Method to place the condition in a separate method with an easy-to-understand name.'
        },
        {
            treat: 'If the same code is performed in all branches of a conditional expression: place the identical code outside of the condition tree by using Consolidate Duplicate Conditional Fragments'
        }
    ],
    image: [
        badImage = [
            {
                bad: '../Asset/Duplicate Code/DuplicateC.png'
            },
        
        ],
        fixImage =  [
            {
                fix: '../Asset/Duplicate Code/DuplicateC(Fix).png'
            },
        ]
    ]
}
    ],
    [
        {
            title: 'Lazy Class',
            definition: 'It`s a class that doesn`t carry out enough responsibilities or functionality to warrant its presence in the codebase.',
            sign: 'Understanding and maintaining classes always costs time and money. So if a class doesn`t do enough to earn your attention, it should be deleted.',
            reason: 'Perhaps a class was designed to be fully functional but after some of the refactoring it has become ridiculously small Or perhaps it was designed to support future development work that never got done',
            treatment: [
                {
                    treat:'Components that are near-useless should be given the Inline Class treatment'
                },
                {
                    treat: 'For subclasses with few functions, try Collapse Hierarchy'
                }
            ],
            image: [
                badImage = [
                    {
                        bad: '../Asset/Lazy Class/LazyC.png'
                    },
                
                ],
                fixImage =  [
                    {
                        fix: '../Asset/Lazy Class/LazyC(Fix).png'
                    },
                ]
            ]
        }
    ],
    [
        {
            title: 'Data Class',
            definition: 'Data class refers to a class that primarily stores data without containing any significant business logic or behavior. While data classes are not inherently bad, they can become problematic if they lack cohesion or if their responsibilities could be better managed by simpler data structures or built-in language feature',
            sign: 'A data class refers to a class that contains only fields and crude methods for accessing them (getters and setters). These are simply containers for data used by other classes. These classes don`t contain any additional functionality and can`t independently operate on the data that they own.',
            reason: 'It`s a normal thing when a newly created class contains only a few public fields (and maybe even a handful of getters/setters). But the true power of objects is that they can contain behavior types or operations on their data',
            treatment: [
                {
                    treat:'If a class contains public fields, use Encapsulate Field to hide them from direct access and require that access be performed via getters and setters only'
                },
                {
                    treat: 'Use Encapsulate Collection for data stored in collections (such as arrays)'
                },
                {
                    treat: 'Review the client code that uses the class. In it, you may find functionality that would be better located in the data class itself. If this is the case, use Move Method and Extract Method to migrate this functionality to the data class'
                },
                {
                    treat: 'After the class has been filled with well thought-out methods, you may want to get rid of old methods for data access that give overly broad access to the class data. For this, the Remove Setting Method and Hide Method may be helpful'
                }
            ],
            image: [
                badImage = [
                    {
                        bad: '../Asset/Data Class/DataC.png'
                    },
                
                ],
                fixImage =  [
                    {
                        fix: '../Asset/Data Class/DataC(Fix).png'
                    },
                ]
            ]
        }
    ],
    [
        {
            title: 'Dead Code',
            definition: 'Dead code refers to sections of code that are no longer executed and serve no purpose in the current version of the software',
            sign: 'A variable, parameter, field, method or class is no longer used (usually because it`s obsolete)',
            reason: 'When requirements for the software have changed or corrections have been made, nobody had time to clean up the old code. Such code could also be found in complex conditionals, when one of the branches becomes unreachable (due to error or other circumstances).',
            treatment: [
                {
                    treat:'Delete unused code and unneeded files'
                },
                {
                    treat: 'In the case of an unnecessary class, Inline Class or Collapse Hierarchy can be applied if a subclass or superclass is used.'
                },
                {
                    treat: 'To remove unneeded parameters, use Remove Parameter'
                }
            ],
            image: [
                badImage = [
                    {
                        bad: '../Asset/Dead Class/DeadC.png'
                    },
                
                ],
                fixImage =  [
                    {
                        fix: '../Asset/Dead Class/DeadC(Fix).png'
                    },
                ]
            ]
        }
    ],
    [
        {
            title: 'Speculative Generality',
            definition: 'Speculative generality refers to the practice of adding unnecessary complexity to a system by anticipating future requirements or functionality that may never materialize. This occurs when developers introduce abstractions, design patterns, or flexibility into the codebase without a concrete present need',
            sign: 'There`s an unused class, method, field or parameter.',
            reason: 'Sometimes code is created “just in case” to support anticipated future features that never get implemented. As a result, code becomes hard to understand and support.',
            treatment: [
                {
                    treat:'For removing unused abstract classes, try Collapse Hierarchy'
                },
                {
                    treat: 'Unnecessary delegation of functionality to another class can be eliminated via Inline Class.'
                },
                {
                    treat: 'Unused methods? Use Inline Method to get rid of them'
                },
                {
                    treat: 'Methods with unused parameters should be given a look with the help of Remove Parameter'
                },
                {
                    treat: 'Unused fields can be simply deleted'
                }
            ],
            image: [
                badImage = [
                    {
                        bad: '../Asset/Speculative Generality/SpeculativeG.png'
                    },
                
                ],
                fixImage =  [
                    {
                        fix: '../Asset/Speculative Generality/SpeculativeG(Fix).png'
                    },
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