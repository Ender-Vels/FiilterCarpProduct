let data= [
    {
        price: 12000000,
        size: 21934,
        beds: 7,
        baths: 4,
        img:'https://static.realting.com/uploads/images/3f1/445e22c2280ba1273ef81a36f446a.webp',
        location: 'La Mer',
        city:'Dubai',
        type: 'Villa' },
    {
        price: 3000500,
        size: 21934,
        beds: 7,
        baths: 3,
        img:'https://static.realting.com/uploads/images/3f1/445e22c2280ba1273ef81a36f446a.webp',
        location: 'Dubai Marina',
        city:'Dubai',
        type: 'Villa',
    },
    {
        price: 9000000,
        size: 5894,
        beds: 2,
        baths: 2,
        img: 'https://loftybuildinggroup.com.au/wp-content/uploads/2021/07/creative-home-new-design-1-1024x683.jpeg',
        location: 'Downtown',
        city:'Dubai',
        type: 'Apartment'
    },
    {
        price: 7000000,
        size: 5894,
        beds: 2,
        baths: 2,
        img: 'https://static.realting.com/uploads/images/3f1/445e22c2280ba1273ef81a36f446a.webp',
        location: 'Downtown',
        city:'Dubai',
        type: 'Apartment'
    },
    {
        price: 6000000,
        size: 4094,
        beds: 2,
        baths: 2,
        img: 'https://alberta75.ca/wp-content/uploads/2021/07/Environment-2-Alberta-75.jpg',
        location: 'Downtown',
        city:'Dubai',
        type: 'Villa'
    },
    {
        price: 9000000,
        size: 5894,
        beds: 2,
        baths: 2,
        img: 'https://www.brownstoner.com/wp-content/uploads/2016/06/buying-a-coop-2-1.jpg',
        location: 'Downtown',
        city:'Dubai',
        type: 'Apartment'
    },
    {
        price: 7000000,
        size: 5894,
        beds: 2,
        baths: 2,
        img: 'https://alberta75.ca/wp-content/uploads/2021/07/Environment-2-Alberta-75.jpg',
        location: 'Downtown',
        city:'Dubai',
        type: 'Apartment'
    },
    {
        price: 9000000,
        size: 5894,
        beds: 2,
        baths: 2,
        img: 'https://alberta75.ca/wp-content/uploads/2021/07/Environment-2-Alberta-75.jpg',
        location: 'Downtown',
        city:'Dubai',
        type: 'Villa'
    },
    {
        price: 9000000,
        size: 5894,
        beds: 2,
        baths: 2,
        img: 'https://alberta75.ca/wp-content/uploads/2021/07/Environment-2-Alberta-75.jpg',
        location: 'Downtown',
        city:'Dubai',
        type: 'Apartment'
    },
    {
        price: 9000000,
        size: 5894,
        beds: 2,
        baths: 2,
        img: 'https://alberta75.ca/wp-content/uploads/2021/07/Environment-2-Alberta-75.jpg',
        location: 'Downtown',
        city:'Dubai',
        type: 'Villa'
    },
    {
        price: 9000000,
        size: 5894,
        beds: 2,
        baths: 2,
        img: 'https://alberta75.ca/wp-content/uploads/2021/07/Environment-2-Alberta-75.jpg',
        location: 'Downtown',
        city:'Dubai',
        type: 'Villa'
    },
    {
        price: 90000,
        size: 5894,
        beds: 2,
        baths: 2,
        img: 'https://alberta75.ca/wp-content/uploads/2021/07/Environment-2-Alberta-75.jpg',
        location: 'Downtown',
        city:'Dubai',
        type: 'Villa'
    },
]

function renders(base){
    let container = document.getElementById('filter_data');
    container.innerHTML = '';
    base.forEach(prop=>{
        container.innerHTML += `<div class="data"><div class="data_card">
    <a href="#">
        <div class="data_card_img">
            <img src="${prop.img}" alt="">
        </div>
        <div class="global_data">
            <div class="data_card_price">
                <span class="sum"> AED ${prop.price.toLocaleString()}</span>
            </div>
            <div class="data_card_location">
                <span>${prop.location},${prop.city}</span>
            </div>

            <div class="other_data_card">
                <div class="allData">
                    <span class="type">${prop.type}</span> - <span class="bed" >${prop.beds} Beds</span> - <span class="bath">${prop.baths} Bath</span> - <span class="sq">${prop.size} sq. ft.</span>
                </div>
            </div>
        </div>
    </a>
</div>
</div>`
    })


}


/*
*
*            minPriceValue:minPrice,
            maxPriceValue:maxPrice,
            minSqValue:minSq,
            maxSqValue:maxSq,
            bedValue:bed,
            bathValue: bath,
            Area:area,
            Type:type,
*
*
* */



// Функція для рендерингу даних в DOM
function rendersFilterByPrice(data) {
    let html = "";
    data.forEach(item => {
        html += `
            <div class="data"><div class="data_card">
                <a href="#">
                <div class="data_card_img">
                <img src="${item.img}" alt="">
                </div>
            <div class="global_data">
                <div class="data_card_price">
                    <span class="sum"> AED ${item.price.toLocaleString()}</span>
                </div>
                <div class="data_card_location">
                    <span>${item.location},${item.city}</span>
                </div>

                <div class="other_data_card">
                    <div class="allData">
                        <span class="type">${item.type}</span> - <span class="bed">${item.beds} Beds</span> - <span class="bath">${item.baths} Bath</span> - <span class="sq">${item.size} sq. ft.</span>
                    </div>
                </div>
            </div>
        </a>
        </div>
        </div>`;
    });
    $("#filter_data").html(html);
}



// Обробка зміни значення select "sort"



function render(datas, filters) {
    const filterData = datas.filter(item => {
        // Умова для перевірки цін
        if (filters.maxPriceValue === filters.minPriceValue) {
            return item.price < filters.minPriceValue &&
                item.size >= filters.minSqValue &&
                item.beds >= filters.bedValue &&
                item.baths >= filters.bathValue &&
                (filters.Area.includes('All') || filters.Area.includes(item.location)) &&
                (filters.Type.includes('All') || filters.Type.includes(item.type));
        }

        // Умова для перевірки площі
        if (filters.maxSqValue === filters.minSqValue) {
            return item.size < filters.minSqValue &&
                item.price >= filters.minPriceValue &&
                item.price <= filters.maxPriceValue &&
                item.beds >= filters.bedValue &&
                item.baths >= filters.bathValue &&
                (filters.Area.includes('All') || filters.Area.includes(item.location)) &&
                (filters.Type.includes('All') || filters.Type.includes(item.type));
        }

        // Загальні умови для фільтрації
        const priceCondition = item.price >= filters.minPriceValue && item.price <= filters.maxPriceValue;
        let sizeCondition;
        if(filters.maxSqValue<10000){
            sizeCondition=item.size >= filters.minSqValue && item.size <= filters.maxSqValue;
        }
        else{
            sizeCondition=item.size >= filters.minSqValue;
        }
        const commonConditions = sizeCondition && item.beds >= filters.bedValue && item.baths >= filters.bathValue;

        return priceCondition && commonConditions &&
            (filters.Area.includes('All') || filters.Area.includes(item.location)) &&
            (filters.Type.includes('All') || filters.Type.includes(item.type));
    });



    // Відображення відфільтрованих даних
    const filter_data = document.getElementById("filter_data");
    filter_data.innerHTML = ''; // Очищення попереднього контенту
    filterData.forEach((item) => {
        const card = document.createElement("div");
        card.classList.add("data_card");
        card.innerHTML = `
            <div class="data"><div class="data_card">
                <a href="#">
                <div class="data_card_img">
                <img src="${item.img}" alt="">
                </div>
            <div class="global_data">
                <div class="data_card_price">
                    <span class="sum"> AED ${item.price.toLocaleString()}</span>
                </div>
                <div class="data_card_location">
                    <span>${item.location},${item.city}</span>
                </div>

                <div class="other_data_card">
                    <div class="allData">
                        <span class="type">${item.type}</span> - <span class="bed">${item.beds} Beds</span> - <span class="bath">${item.baths} Bath</span> - <span class="sq">${item.size} sq. ft.</span>
                    </div>
                </div>
            </div>
        </a>
        </div>
        </div>`;
        filter_data.appendChild(card);
    });
    FiltData=filterData

}



