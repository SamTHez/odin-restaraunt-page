import "./style.css";
import { homePage } from './home';
import { aboutPage } from './about';
import { menuPage } from './menu';

const pageContent = document.getElementById("content");
const pages = [homePage, aboutPage, menuPage];

let activePage = null;

function removeChildren(parent) {
    let children = parent.childNodes;
    let childrenToRemove = [];
    for(let i=0; i<children.length; i++) {
        
        if(children[i].childNodes.length>0) {
            childrenToRemove.concat(removeChildren(children[i]));
        }
        childrenToRemove.push(children[i]);
    }

    if(parent==pageContent) {
        while(childrenToRemove.length>0) {
            childrenToRemove[childrenToRemove.length-1].remove();
            childrenToRemove.pop();
        }
    } else {
        return(childrenToRemove);
    }
}

function initTabSwitching(page) {
    let tabs = page.pageTabs;
    let targetPages = pages;
    console.log(targetPages[0]);
    for(let i=0; i<tabs.length; i++) {
        tabs[i].addEventListener("click", ()=>{console.log(pages[i]); setupPage(targetPages[i]);});
    }
}

function setupPage(page) {
    console.log(`Start setup`);
    if(activePage) {
        console.log(`About to remove`);
        removeChildren(pageContent);
        
    }
    activePage = page;
    console.log(`About to Initialize`);
    activePage.initPage();
    console.log(`Initializing Event Listeners`);
    initTabSwitching(activePage);
}

setupPage(homePage);
console.log(activePage);



