// !Variables
const infoImage = document.getElementById ( 'info-image' );
const infoHeader = document.getElementById ( 'info-header' );
const infoText = document.getElementById ( 'info-text' );
const btn1 = document.getElementById ( 'salesforce' );
const btn2 = document.getElementById ( 'compliant' );
const btn3 = document.getElementById ( 'scalable' );
const btn4 = document.getElementById ( 'easy' );
const btn5 = document.getElementById ( 'low' );

// !Constructor
function information(image, header, text){
    this.image = image;
    this.header = header;
    this.text - text;
}

// !Objects

const selection2 = new information(
    'https://a45350.actonservice.com/cdnr/forpci56/acton/attachment/45350/f-8a5a3ad7-5b6e-4c15-8e90-aab5c0c7e652/1/-/-/-/-/icon2-light.png',
	'Compliant and Secure',
	'This is a simple demo of the Salesforce UI Kit.'
);
const selection3 = new information(
    'https://a45350.actonservice.com/cdnr/forpci56/acton/attachment/45350/f-65cd2425-7d0b-471e-8dfd-64607caf430a/1/-/-/-/-/icon3-light.png',
	'Scalable to Grow as You Grow',
	'Because Salesforce is a software-as-a-service (SaaS) model, IPS can grow with you as your business grows—as big as you want it to grow—while still minimizing the risk of incorrect payment of claims.'
);
const selection4 = new information(
    'https://a45350.actonservice.com/cdnr/forpci56/acton/attachment/45350/f-909ded33-4a16-4e13-a47c-ab89eb89b468/1/-/-/-/-/icon4-light.png',
	'Easy to Use',
	'Despite our solution’s power, stability, and security, IPS is easy to use. Employers and providers access the solution through user-friendly portals, and detailed and customizable reporting allows for quick comprehension of that data. Other features like automated processing, configurable alerts, automatic audits, and risk assessments add to the ease of use.'
);
const selection5 = new information(
    'https://a45350.actonservice.com/cdnr/forpci56/acton/attachment/45350/f-7a962add-c0e9-4cb3-ab95-13521baccbea/1/-/-/-/-/icon5-light.png',
	'Low Barrier to Entry',
	'The ease of use means you can be up and running with IPS right away, and our competitive pricing lowers the barrier to entry. Our flexible, competitive pricing is PEPM-based and all-inclusive. You won’t pay extra for data transition, data bridges, or upgrades, and we have a la carte services available when needed. You can integrate IPS with other applications you’re already using.'
);

// !Button Event Listeners
btn1.addEventListener ( 'click', () => {
	infoImage.src = selection1.image;
	infoHeader.innerHTML = selection1.header;
	infoText.innerHTML = selection1.text;
});

btn2.addEventListener ( 'click', () => {
	infoImage.src = selection2.image;
	infoHeader.innerHTML = selection2.header;
	infoText.innerHTML = selection2.text;
});

btn3.addEventListener ( 'click', () => {
	infoImage.src = selection3.image;
	infoHeader.innerHTML = selection3.header;
	infoText.innerHTML = selection3.text;
});

btn4.addEventListener ( 'click', () => {
	infoImage.src = selection4.image;
	infoHeader.innerHTML = selection4.header;
	infoText.innerHTML = selection4.text;
});

btn5.addEventListener ( 'click', () => {
	infoImage.src = selection5.image;
	infoHeader.innerHTML = selection5.header;
	infoText.innerHTML = selection5.text;
});