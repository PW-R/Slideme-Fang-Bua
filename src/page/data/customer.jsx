const customer =[
	{
        "userId" : 1,
        "id" : 1,
		"name": "คุณเจนนี่ ใจบุญ",
		"address": "ถนนวิภาวดีรังสิต, เขตดอนเมือง, กรุงเทพฯ",
        "price": "2130",
        "date": "เรียกทันที",
		"firstLocation": "สนามบินดอนเมือง",
        "secondLocation": "อนุสาวรีย์ชัยสมรภูมิ",
        "car" : "รถสไลด์ขนาดกลาง",
        "brand" : "Toyota",
        "type" : "Sedan",
        "model" : "Corolla Altis",
        "number" : "กข-1234",
        "note" : "เครื่องยนต์มีปัญหาขณะขับบนทางด่วน",
		"link" : "/pageTwo",
	},
	{
		"userId" : 2,
        "id" : 2,
		"name": "คุณปาจีน ยาจีน",
		"address": "ถนนรัชดาภิเษก, เขตห้วยขวาง, กรุงเทพฯ",
        "price": "1430",
        "date": "13 ตุลาคม 2567 เวลา 13.00 น.",
		"firstLocation": "เอสพลานาด รัชดา",
        "secondLocation": "เซ็นทรัล ลาดพร้าว",
        "car" : "รถสไลด์ขนาดกลาง",
        "brand" : "Mazda",
        "type" : "Hatchback",
        "model" : "Mazda 3",
        "number" : "กทม-4321",
        "note" : "รถสตาร์ทไม่ติดที่ลานจอดรถ",
		"link" : "/pageTwo",
	},
	{
		"userId" : 3,
        "id" : 3,
		"name": "คุณพร สมหวัง",
		"address": "ถนนพหลโยธิน, เขตจตุจักร, กรุงเทพฯ",
        "price": "1250",
        "date": "เรียกทันที",
		"firstLocation": "มหาวิทยาลัยเกษตรศาสตร์",
        "secondLocation": "ฟิวเจอร์พาร์ค รังสิต",
        "car" : "รถสไลด์ 4 ล้อ",
        "brand" : "Isuzu",
        "type" : "Pickup",
        "model" : "D-Max",
        "number" : "ขค-5678",
        "note" : "เครื่องยนต์ร้อนจัดและไม่สามารถขับต่อได้",
		"link" : "/pageTwo",
	},
	{
        "userId" : 4,
        "id" : 4,
		"name": "คุณสมาธิ จิตตั้งมั่น",
		"address": "400/20 ถ.แสร้งว่ามีมิตรภาพ ท่าแร้ง",
        "price": "2540",
        "date": "เรียกทันที",
        "firstLocation":"400/20 ถ.แสร้งว่ามีมิตรภาพ ท่าแร้ง",
        "secondLocation":"191/33 ถ.กำลังบำรุง เจริญกรุง 12",
        "car" : "รถสไลด์ 6 ล้อ",
        "brand" : "Honda",
        "type" : "SUV",
        "model" : "CR-v",
        "number" : "กก-5578",
        "note" : "รถยางแตกบนทางด่วนรั่วจนแบนขับต่อไม่ได้ หม้อระเบิดเกิดเป็นน้ำมันดิบ",
		"link" : "/pageTwo",
	},
	
]
export function customerData() {
    return customer;
}