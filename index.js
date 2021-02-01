const pricingData = {
    100: {
        views: '8K',
        price: 8,
        level: 0
    }
    ,
    200: {
        views: '50K',
        price: 12,
        level: '25%'
    }
    ,
    300: {
        views: '100K',
        price: 16,
        level: '50%'
    }
    ,
    400: {
        views: '500K',
        price: 24,
        level: '75%'
    }
    ,
    500: {
        views: '1M',
        price: 36,
        level: '100%'
    }
};
const discount = document.getElementById('discount');
const rangeInput = document.getElementById('price-range');
const views = document.getElementById('page-views');
const price = document.getElementById('price');

rangeInput.addEventListener('change', (e) => handleRange(e.target.value));
discount.addEventListener('change', handleSwitch);

function handleRange(value) {
    const infos = pricingData[value];
    const isYearly = discount.checked;
    rangeInput.style.background = `linear-gradient(to right, rgb(163, 243, 234) ${infos.level}, rgb(236, 243, 253) ${infos.level})`;
    views.textContent = infos.views;
    price.textContent = (isYearly ? infos.price * .75 : infos.price).toFixed(2).toString();
}
function handleSwitch() {
    handleRange(rangeInput.value);
}