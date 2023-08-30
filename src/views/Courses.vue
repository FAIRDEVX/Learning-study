<template>
    <main class="courses-page">
        <h1>Courses</h1>
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="card mb-3" style="max-width: 580px;" @click="ToggleCard ">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="https://i.pinimg.com/originals/10/c6/c5/10c6c574f4bccf69ab2fba2c7ad3ff9f.jpg"
                                    class="img-fluid rounded-start" alt="Learning strategy">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">แบบเรียน กไก่ - ฮนกฮูก สำหรับเด็กอนุบาล</h5>
                                    <p class="card-text">สนับสนุนพัฒนาการเด็กไทย
                                        เพื่อให้เรียนรู้เกี่ยวกับ เพลง และ สัตว์ ต่างๆ
                                        เป็ด ลิง กบ ช้าง เต่า แมงมุม..</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <iframe v-if="showIframe" width="560" height="315"
                        src="https://www.youtube.com/embed/TyuU2Yd1dLI?autoplay=1&mute=1" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                        
                    <div class="col-md-10">
                        <div v-if="showTitleCard" class="card-body-title">
                            <h5 class="card-title">แบบเรียน กไก่ - ฮนกฮูก สำหรับเด็กอนุบาล</h5>
                            <p class="card-text">ช่องเพลงเด็ก
                                สนับสนุนพัฒนาการเด็กไทย
                                เพื่อให้เรียนรู้เกี่ยวกับ เพลง และ สัตว์ ต่างๆ
                                เป็ด ลิง กบ ช้าง เต่า แมงมุม
                                เราทำเป็นเพลงออกมามากมายเพื่อให้เรียนรู้
                                ผ่านเพลงได้ง่าย ส่งเสริมพัฒนาการ และอารมณ์
                                ของเด็กไทย มีทั้งเพลงช้าง เพลงเป็ด เพลงเต่า
                                เพลงกบเอยทำไมจึงร้อง เพลงรถไฟ เพลงแมงมุมลาย
                                เพลงหนอนผีเสื้อ เพลงลิงเจี๊ยก เจี๊ยก และยังมี
                                เพลงสำหรับกล่อมนอน เพลงฟังก่อนนอน
                                เพลงกล่อมเด็กอีกด้วย ทั้งเพลง นกขมิ้นเหลืองอ่อน
                                เพลง เจ้านกกาเหว่าเอย อีกทั้งเพลงพื้นบ้าน
                                ก็มีให้ฟังเพื่อร่วมอนุรักษ์วัฒนธรรมพื้นบ้านสืบไป
                                เช่น เพลงรีรี ข้าวสาร เพลงแม่งูเอ๋ย กินน้ำบ่อไหน
                                ทั้งเด็กอนุบาล เด็กก่อนวัยเรียน เด็กปฐมวัย
                                จะได้เรียนรู้ไปพร้อมๆกัน..</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    data() {
        return {
            showIframe: false,
            showTitleCard: false
        }
    },
    methods: {
        ToggleCard() {
            this.showIframe = !this.showIframe;
            this.showTitleCard = !this.showTitleCard;
        }
    }
}
</script>

<style scoped>
.card {
    display: flex;
    flex-direction: row;
    cursor: pointer;
}

@media (max-width: 768px) {
    .card {
        max-width: 100%;
        flex-direction: column;
    }

    .card img {
        width: 100%;
        height: auto;
    }

    iframe {
        width: 100%;
        height: auto;
    }
}
</style>