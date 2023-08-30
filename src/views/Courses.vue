<template>
    <main class="courses-page">
        <h1>Courses</h1>
        <div class="container">
            <div class="row">
                <div class="col-lg-6">

                    <!-- Card 1 Video-->
                    <div class="card mb-3" style="max-width: 580px;" @click="ToggleCardVideo">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="https://i.pinimg.com/originals/10/c6/c5/10c6c574f4bccf69ab2fba2c7ad3ff9f.jpg"
                                    class="img-fluid rounded-start" alt="แบบเรียน ก-ฮ">
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

                    <!-- Card 2 VideoYotube-->
                    <div class="card mb-3" style="max-width: 580px;" @click="ToggleCardYoutube">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="https://i.ytimg.com/vi/nknJ74CHwHM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBl40jgD-2imu2IcSrAmaKtq60MkQ"
                                    class="img-fluid rounded-start" alt="แบบเรียน ABC Song A-Z">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">ABC Song|Phonics Song|A-Z 26 Letters</h5>
                                    <p class="card-text">สนับสนุนพัฒนาการเด็กไทย
                                        เพื่อให้เรียนรู้เกี่ยวกับ คำศัพท์ a b c..</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Card 3 Carousel -->
                    <div class="card mb-3" style="max-width: 580px;" @click="ToggleCardCarousel">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="https://cache-igetweb-v2.mt108.info/uploads/images-cache/8218/filemanager/217521d8e5461e3537a315fe83c9cf47_full.jpg"
                                    class="img-fluid rounded-start" alt="Learning strategy">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">บรรยากาศการเรียนการสอน</h5>
                                    <p class="card-text">เราจะมาแสดงรูปภาพของนักเรียนที่กำลังเรียนรู้ ตั้งใจ
                                        สนุกสนานกับบรรยากาศการเรียนการสอนในห้องเรียน</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Card 4 WebGL-->
                    <div class="card mb-3" style="max-width: 580px;" @click="ToggleCardWebGL">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="https://www.codeproject.com/KB/showcase/1100502/image001.png"
                                    class="img-fluid rounded-start" alt="Learning strategy">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">WebGL (เว็บจีแอล)</h5>
                                    <p class="card-text">WebGL is a JavaScript API for rendering interactive 2D and 3D
                                        graphics within any compatible web browser without the use of plug-ins.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <!-- Video -->
                <div class="col">
                    <video v-if="showIframe" width="560" height="315" controls>
                        <source src="/public/video/Learning.mp4" type="video/mp4">
                    </video>

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

                    <!-- Video Youtube -->
                    <iframe v-if="showIframeYoutube" width="560" height="315"
                        src="https://www.youtube.com/embed/3pZ6lMlqImA?autoplay=1&mute=1" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>

                    <div class="col-md-10">
                        <div v-if="showTitleCardYoutube" class="card-body-title">
                            <h5 class="card-title">ABC Song | Phonics Song | A-Z 26 Letters</h5>
                            <p class="card-text">ช่องเพลงเด็ก
                                สนับสนุนพัฒนาการเด็กไทย
                                เพื่อให้เรียนรู้เกี่ยวกับ คำศัพท์ a b c คำศัพท์ต่างๆ ..</p>
                        </div>
                    </div>

                    <!-- Carousel -->
                    <div v-if="showIframeCarousel" id="carouselExampleSlidesOnly" class="carousel slide"
                        data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="https://thepotential.org/wp-content/uploads/2020/05/%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%A3%E0%B8%B9%E0%B9%89%E0%B8%AA%E0%B8%B6%E0%B8%81%E0%B8%AA%E0%B9%88%E0%B8%A7%E0%B8%99%E0%B8%AB%E0%B8%99%E0%B8%B6%E0%B9%88%E0%B8%87%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B8%A3%E0%B8%B9%E0%B9%89cover.jpg"
                                    class="d-block w-100" alt="Learning" width="560" height="315">
                            </div>
                            <div class="carousel-item">
                                <img src="https://campus.campus-star.com/app/uploads/2016/12/3-education-denmark.jpg"
                                    class="d-block w-100" alt="Learning fun" width="560" height="315">
                            </div>
                            <div class="carousel-item">
                                <img src="https://elearning.yru.ac.th/home/pluginfile.php/2673/course/overviewfiles/students-classroom-background_1308-51397.jpg"
                                    class="d-block w-100" alt="Learning with friend" width="560" height="315">
                            </div>

                            <a class="carousel-control-prev" href="#carouselExampleSlidesOnly" role="button"
                                data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleSlidesOnly" role="button"
                                data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </a>

                        </div>
                    </div>

                    <div class="col-md-10">
                        <div v-if="showTitleCardCarousel" class="card-body-title">
                            <h5 class="card-title">บรรยากาศการเรียนการสอน</h5>
                            <p class="card-text">มาสนุกกับการเรียน การสอนกับพ้องเพื่อนด้วยกัน...</p>
                        </div>
                    </div>

                    <!-- WebGL -->
                    <iframe v-if="showIframeWegGL" width="560" height="315" src="http://127.0.0.1:5500/index.html"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>

                    <div class="col-md-10">
                        <div v-if="showTitleCardWebGL" class="card-body-title">
                            <h5 class="card-title">WebGL (เว็บจีแอล)</h5>
                            <p class="card-text">WebGL is a JavaScript API for rendering interactive 2D and 3D graphics
                                within any compatible web browser without the use of plug-ins. WebGL is fully integrated
                                with other web standards, allowing GPU-accelerated usage of physics and image processing and
                                effects as part of the web page canvas.</p>
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
            showIframe: true,
            showTitleCard: true,
            showIframeYoutube: false,
            showTitleCardYoutube: false,
            showIframeCarousel: false,
            showTitleCardCarousel: false,
            showIframeWegGL: false,
            showTitleCardWebGL: false
        }
    },
    methods: {
        ToggleCardVideo() {
            this.showIframe = !this.showIframe;
            this.showTitleCard = !this.showTitleCard;

            // ซ่อน Card อื่นๆ
            this.showIframeYoutube = false;
            this.showTitleCardYoutube = false;
            this.showIframeCarousel = false;
            this.showTitleCardCarousel = false;
            this.showIframeWegGL = false;
            this.showTitleCardWebGL = false;
        },
        ToggleCardYoutube() {
            this.showIframeYoutube = !this.showIframeYoutube;
            this.showTitleCardYoutube = !this.showTitleCardYoutube;

            // ซ่อน Card อื่นๆ
            this.showIframe = false;
            this.showTitleCard = false;
            this.showIframeCarousel = false;
            this.showTitleCardCarousel = false;
            this.showIframeWegGL = false;
            this.showTitleCardWebGL = false;
        },
        ToggleCardCarousel() {
            this.showIframeCarousel = !this.showIframeCarousel;
            this.showTitleCardCarousel = !this.showTitleCardCarousel;

            // ซ่อน Card อื่นๆ
            this.showIframe = false;
            this.showTitleCard = false;
            this.showIframeYoutube = false;
            this.showTitleCardYoutube = false;
            this.showIframeWegGL = false;
            this.showTitleCardWebGL = false;
        },
        ToggleCardWebGL() {
            this.showIframeWegGL = !this.showIframeWegGL;
            this.showTitleCardWebGL = !this.showTitleCardWebGL;

            // ซ่อน Card อื่นๆ
            this.showIframe = false;
            this.showTitleCard = false;
            this.showIframeYoutube = false;
            this.showTitleCardYoutube = false;
            this.showIframeCarousel = false;
            this.showTitleCardCarousel = false;
        }
    }
}
</script>

<style scoped>
.courses-page {
    background-color: #f5f5f5;
}

.card {
    display: flex;
    flex-direction: row;
    cursor: pointer;
}

.card-title {
    font-size: 1.25rem;
}

.card-text {
    font-size: 1rem;
}

.card-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.card img {
    object-fit: cover;
    max-height: 150px;
}

iframe {
    width: 100%;
    aspect-ratio: 16 / 9;
}

video {
    width: 100%;
    aspect-ratio: 16 / 9;
}

.carousel-inner img {
    width: 100%;
    aspect-ratio: 16 / 9;
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
