const aboutPage = (() => {
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
            if(i==1) {newTab.classList.add("active-tab")};
            newTab.innerText = tabNames[i];
            headerTabs.appendChild(newTab);
            pageTabs.push(newTab);
        }

        const main = document.createElement("div");
        main.id = "main";
        pageContent.appendChild(main);

        const pageTitle = document.createElement("h1");
        pageTitle.classList.add("page-title");
        pageTitle.innerText = "Our Story";
        main.appendChild(pageTitle);

        const ownerBlock = document.createElement("div");
        ownerBlock.id = "owner-block";
        main.appendChild(ownerBlock);

        const ownerText = document.createElement("p");
        ownerText.id = "owner-text";
        ownerText.innerText = `In the heart of a bustling city, the idea for Le Restaurant was conceived by a visionary culinary maestro, Chef Henri Leclair.\
        With a lifetime of expertise and an insatiable passion for the art of cooking, Chef Henri embarked on a journey to create a dining establishment that would redefine gastronomy. \
        Guided by a relentless pursuit of perfection, he meticulously designed every facet of the restaurant, from the opulent décor to the intricate menu offerings.\n
        Late nights and early mornings were dedicated to crafting dishes that would transcend mere sustenance and elevate dining to an unparalleled experience. \
        Countless trials and tastings later, Chef Henri curated a menu that harmonized flavors in ways previously unimagined. \
        Each ingredient was a note in a symphony, carefully composed to evoke emotions through taste. As Le Restaurant took shape, \
        its walls seemed to radiate the passion and dedication infused by its creator. \n\n When the doors finally swung open, Le Restaurant beckoned diners with an aura of sophistication. \
        Chef Henri's meticulous touch was evident in every plate that left the kitchen, and as the aroma of his masterpieces wafted through the air, a new chapter in the culinary world had been written. \
        'Le Restaurant' wasn't just a place to dine; it was a testament to the unyielding commitment of Chef Henri to his craft, an embodiment of his lifelong devotion to the art of exquisite cuisine.`
        ownerBlock.appendChild(ownerText);

        const ownerImg = document.createElement("img");
        ownerImg.id = "owner-img";
        ownerImg.src = "/src/assets/head-chef.jpg";
        ownerBlock.appendChild(ownerImg);

        const foundingBlock = document.createElement("div");
        foundingBlock.id = "founding-block";
        main.appendChild(foundingBlock);

        const foundingImg = document.createElement("img");
        foundingImg.id = "founding-img";
        foundingImg.src = "/src/assets/restaurant-pic.jpg";
        foundingBlock.appendChild(foundingImg);

        const foundingText = document.createElement("p");
        foundingText.id = "founding-text";
        foundingText.innerText = `Word of Le Restaurant's extraordinary fare spread like wildfire, drawing food aficionados from far and wide. \
        The name became synonymous with culinary innovation, and reservations at the restaurant became highly sought-after. With each passing year, \
        Chef Henri continued to push the boundaries of gastronomy, introducing seasonal menus that showcased his unwavering creativity. \
        Behind the scenes, his kitchen hummed with the synchronized rhythm of a culinary orchestra, \
        where each chef played their part in bringing Chef Henri's vision to life.\n
        As time wove its tapestry, Le Restaurant not only retained its acclaim but amplified it. Awards and accolades adorned its walls, \
        testaments to Chef Henri's enduring legacy. The restaurant had grown beyond its name to embody an experience that lingered in the hearts and palates of its guests. \
        Chef Henri's journey had birthed not just a restaurant but a beacon of culinary excellence, a place where passion and artistry converged to create a \
        symphony of flavors that would resonate through time.`
        foundingBlock.appendChild(foundingText);

        const footer = document.createElement("div");
        footer.id = "footer";
        pageContent.appendChild(footer);

        console.log("Initialization Complete")
    }

    return { initPage:initPage, pageTabs:pageTabs};
})();

export { aboutPage };