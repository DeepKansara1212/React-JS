
function customRender(reactElement, container) {

    /*
    // To create an element
    const domElement = document.createElement(reactElement.type) 

    // To insert the details about the element
    domElement.innerHTML = reactElement.children

    // To set the attributes
    // Here we have set the attribute one by one, that is not an appropriate way
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    // Add all into the container
    container.appendChild(domElement) 

    */

    const domElement = document.createElement(reactElement.type)

    domElement.innerHTML = reactElement.children

    // To solve the issue we facing earlier
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;

        domElement.setAttribute(prop, reactElement.props[prop]) 
    }

    container.appendChild(domElement);
}

// This type of objects are provided through react, but here we make custom react so we have to pass it
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
} 

const mainContainer = document.getElementById('root')

customRender(reactElement, mainContainer)