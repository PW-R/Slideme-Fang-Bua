const notifications = [
       {
            notip : '/img/noti m.svg',
            notim : 'คุณ อมร ส่งข้อความถึงคุณ...',
            notit : '45 นาทีที่แล้ว',
       },
       {
            notip : '/img/noti m.svg',
            notim : 'คุณ สมศรี ส่งข้อความถึงคุณ...',
            notit : '1 ชั่วโมงที่แล้ว',
       },
       {
            notip : '/img/noti r.svg',
            notim : 'คุณ พชร ส่งรีวิวให้คุณ',
            notit : '2 ชั่วโมงที่แล้ว',
       },
       {
            notip : '/img/noti r.svg',
            notim : 'คุณ ศรีสมร ส่งข้อความถึงคุณ...',
            notit : '2 วันที่แล้ว',
       },
      
    ];
    export function fetchNoti() {
        return notifications
      }