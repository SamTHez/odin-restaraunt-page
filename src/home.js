const homePage = (() => {
    const pageContent = document.getElementById("content");
    const tabNames = ["Home", "About Us", "Menu"];
    
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
            if(i==0) {newTab.classList.add("active-tab")};
            newTab.innerText = tabNames[i];
            headerTabs.appendChild(newTab);
            pageTabs.push(newTab);
        }

        const main = document.createElement("div");
        main.id = "main";
        pageContent.appendChild(main);

        const mainImg = document.createElement("img");
        mainImg.id = "main-img";
        mainImg.src = "src/assets/restaurant-welcome.jpg";
        main.appendChild(mainImg);

        const mainText = document.createElement("p");
        mainText.id = "main-text";
        mainText.innerText = `Welcome to Le Restaurant, where culinary artistry meets refined elegance. Step into a world of gastronomic delight, where our expert chefs have curated a menu that dances on the palate. \
        The opulent ambiance and attentive service set the stage for an unforgettable dining experience. Indulge in meticulously crafted dishes that embody our commitment to excellence. \
        At Le Restaurant, every detail converges to create a symphony of flavors and sophistication, ensuring a dining experience that is truly unparalleled.`;
        main.appendChild(mainText);

        const footer = document.createElement("div");
        footer.id = "footer";
        pageContent.appendChild(footer);

        console.log("Initialization Complete")
    }

    return { initPage:initPage, pageTabs:pageTabs};
})();

export { homePage };