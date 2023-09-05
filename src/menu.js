import menu from './assets/menu-items.json';

const menuPage = (() => {
    const pageContent = document.getElementById("content");
    const tabNames = ["Home", "About Us", "Menu"];
    const numSections = 5;
    const sectionNames = ["Starters", "Steak", "Seafood", "Sides", "Desserts"];

    let pageTabs = [];

    function initPage() {
        pageTabs.length = 0;
        const header = document.createElement("div");
        header.id = "header";
        pageContent.appendChild(header);

        const headerTitle = document.createElement("h1");
        headerTitle.classList.add("header-title");
        headerTitle.innerText = "Le Restaurant";
        header.appendChild(headerTitle);

        const headerTabs = document.createElement("div");
        headerTabs.id = "header-tabs";
        header.appendChild(headerTabs);

        for(let i=0; i<tabNames.length; i++) {
            let newTab = document.createElement("h2");
            newTab.classList.add("page-tab");
            if(i==2) {newTab.classList.add("active-tab")};
            newTab.innerText = tabNames[i];
            headerTabs.appendChild(newTab);
            pageTabs.push(newTab);
        }

        const main = document.createElement("div");
        main.id = "main";
        pageContent.appendChild(main);

        const pageTitle = document.createElement("h1");
        pageTitle.classList.add("page-title");
        pageTitle.innerText = "Menu";
        main.appendChild(pageTitle);
        
        const pageMenu = document.createElement("div");
        pageMenu.id = "page-menu";
        main.appendChild(pageMenu);

        // Create Menu Sections
        for(let i=0; i<numSections; i++) {
            let newHeading = document.createElement("h2");
            newHeading.classList.add("menu-heading");
            newHeading.innerText = sectionNames[i];
            pageMenu.appendChild(newHeading);
        }

        for(let i=0; i<numSections; i++) {
            let newSection = document.createElement("div");
            newSection.classList.add("menu-section");
            pageMenu.appendChild(newSection);
        }

        const sections = document.getElementsByClassName("menu-section");
        let sectionNum = 0;

        for(const section in menu) {
            for(let i=0; i<menu[section].length; i++) {
                let dish = document.createElement("div");
                dish.classList.add("dish");
                sections[sectionNum].appendChild(dish);

                let dishName = document.createElement("h3");
                dishName.classList.add("dish-name");
                dishName.innerText = menu[section][i].name;
                dish.appendChild(dishName);

                let dishPrice = document.createElement("h3");
                dishPrice.classList.add("dish-price");
                dishPrice.innerText = menu[section][i].price;
                dish.appendChild(dishPrice)

                let dishDesc = document.createElement("p");
                dishDesc.classList.add("dish-desc");
                dishDesc.innerText = menu[section][i].desc;
                dish.appendChild(dishDesc);
            }
            sectionNum++;
        }


        const footer = document.createElement("div");
        footer.id = "footer";
        pageContent.appendChild(footer);

        console.log("Initialization Complete");
    }

    return { initPage:initPage, pageTabs:pageTabs};
})();

export { menuPage };