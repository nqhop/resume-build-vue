<template>
  <div class="resume">
    <div class="resume_left">
      <div class="resume_profile">
        <!-- <img :src="resume.avatar" alt="profile_pic" /> -->
        <img src="@/assets/avatar0.png" alt="profile_pic" />
      </div>
      <div class="resume_content">
        <div class="resume_item resume_info">
          <div class="title">
            <p class="bold">{{ resume.firstName }} {{ resume.lastName }}</p>
            <p class="regular">{{ resume.jobtitle }}</p>
          </div>
          <ul>
            <li>
              <div class="icon">
                <svg-icon
                  class="svg-icon"
                  type="mdi"
                  :path="mdiMapMarkerOutline"
                ></svg-icon>
              </div>
              <div class="data">
                <!-- 21 Street, Texas <br />
                USA -->
                {{ resume.address }}, {{ resume.city }} <br />
                {{ resume.country }}
              </div>
            </li>
            <li>
              <div class="icon">
                <svg-icon
                  class="svg-icon"
                  type="mdi"
                  :path="mdiPhone"
                ></svg-icon>
              </div>
              <div class="data">{{ resume.phoneNumber }}</div>
            </li>
            <li>
              <div class="icon">
                <svg-icon
                  class="svg-icon"
                  type="mdi"
                  :path="mdiEmail"
                ></svg-icon>
              </div>
              <div class="data">{{ resume.email }}</div>
            </li>
            <li>
              <div class="icon">
                <svg-icon
                  class="svg-icon"
                  type="mdi"
                  :path="mdiLinkVariant"
                ></svg-icon>
              </div>
              <div class="data">{{ resume.profileLink }}</div>
            </li>
          </ul>
        </div>
        <div class="resume_item resume_skills">
          <div class="title">
            <p class="bold">skill's</p>
          </div>
          <ul v-for="skill in resume.skills" :key="skill.id">
            <li>
              <div class="skill_name">{{ skill.skillName }}</div>
              <div class="skill_progress">
                <!-- <span style="width: 80%"></span> -->
                <span :style="{ width: getProgress(skill.level) }"></span>
              </div>
              <div class="skill_per">{{ getProgress(skill.level) }}</div>
            </li>
          </ul>
        </div>
        <div class="resume_item resume_social">
          <div class="title">
            <p class="bold">Social</p>
          </div>
          <ul>
            <li>
              <div class="icon">
                <svg-icon class="svg-icon" type="mdi" :path="mdiFacebook"></svg-icon>
              </div>
              <div class="data">
                <p class="semi-bold">Facebook</p>
                <p>Stephen@facebook</p>
              </div>
            </li>
            <li>
              <div class="icon">
                <svg-icon class="svg-icon" type="mdi" :path="mdiTwitter"></svg-icon>
              </div>
              <div class="data">
                <p class="semi-bold">Twitter</p>
                <p>Stephen@twitter</p>
              </div>
            </li>
            <li>
              <div class="icon">
                <svg-icon class="svg-icon" type="mdi" :path="mdiYoutube"></svg-icon>
              </div>
              <div class="data">
                <p class="semi-bold">Youtube</p>
                <p>Stephen@youtube</p>
              </div>
            </li>
            <li>
              <div class="icon">
                <svg-icon class="svg-icon" type="mdi" :path="mdiLinkedin"></svg-icon>
              </div>
              <div class="data">
                <p class="semi-bold">Linkedin</p>
                <p>Stephen@linkedin</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="resume_right">
      <div class="resume_item resume_about">
        <div class="title">
          <p class="bold">About us</p>
        </div>
        <p>
          {{ resume.summary }}
        </p>
      </div>
      <div class="resume_item resume_work">
        <div class="title">
          <p class="bold">Work Experience</p>
        </div>
        <ul>
          <li>
            <div class="date">2013 - 2015</div>
            <div class="info">
              <p class="semi-bold">Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nostrum, voluptatibus!
              </p>
            </div>
          </li>
          <li>
            <div class="date">2015 - 2017</div>
            <div class="info">
              <p class="semi-bold">Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nostrum, voluptatibus!
              </p>
            </div>
          </li>
          <li>
            <div class="date">2017 - Present</div>
            <div class="info">
              <p class="semi-bold">Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nostrum, voluptatibus!
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div class="resume_item resume_education">
        <div class="title">
          <p class="bold">Education</p>
        </div>
        <ul>
          <li>
            <div class="date">2010 - 2013</div>
            <div class="info">
              <p class="semi-bold">Web Designing (Texas University)</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nostrum, voluptatibus!
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nostrum, voluptatibus!
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nostrum, voluptatibus!
              </p>
            </div>
          </li>
          <li>
            <div class="date">2000 - 2010</div>
            <div class="info">
              <p class="semi-bold">Texas International School</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nostrum, voluptatibus!
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div class="resume_item resume_hobby">
        <div class="title">
          <p class="bold">Hobby</p>
        </div>
        <ul>
          <li><i class="fas fa-book"></i></li>
          <li><i class="fas fa-gamepad"></i></li>
          <li><i class="fas fa-music"></i></li>
          <li><i class="fab fa-pagelines"></i></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiMapMarkerOutline } from "@mdi/js";
import { mdiPhone } from "@mdi/js";
import { mdiEmail } from "@mdi/js";
import { mdiLinkVariant } from "@mdi/js";

import { mdiFacebook } from "@mdi/js";
import { mdiTwitter } from "@mdi/js";
import { mdiYoutube } from "@mdi/js";
import { mdiLinkedin } from "@mdi/js";
export default {
  data() {
    return {
      mdiMapMarkerOutline: mdiMapMarkerOutline,
      mdiPhone: mdiPhone,
      mdiEmail: mdiEmail,
      mdiLinkVariant: mdiLinkVariant,
      mdiFacebook: mdiFacebook,
      mdiTwitter: mdiTwitter,
      mdiYoutube: mdiYoutube,
      mdiLinkedin,
      mdiLinkedin,
    };
  },
  computed: {
    currendResumeId() {
      return this.$store.getters["getCurrendResumeId"];
    },
    resume() {
      return this.$store.getters["resumes/getResumeById"];
    },
  },
  methods: {
    getProgress(level) {
      const levels = ["Beginner", "Moderate", "Good", "Very good", "Excellent"];
      const levelsProgess = [20, 40, 60, 80, 100];
      for (let i = 0; i < levels.length; i++) {
        if (level == levels[i]) {
          return levelsProgess[i] + "%";
        }
      }
      return "80%";
    },
  },
  components: {
    SvgIcon,
  },
  created() {
    console.log("currendResumeId:" + this.currendResumeId);
    console.log(
      "getFirstNameById:" + this.$store.getters["resumes/getFirstNameById"]
    );
    console.log("resume: " + this.resume.jobtitle);
  },
};
</script>
<style>
.bold {
  font-weight: 700;
  font-size: 20px;
  text-transform: uppercase;
}

.semi-bold {
  font-weight: 500;
  font-size: 16px;
}

.resume {
  width: 100%;
  height: 100%;
  display: flex;
  margin: 50px auto;
}

.resume .resume_left {
  /* width: 280px; */
  width: 33.33%;
  /*background: #0bb5f4;*/
}

.resume .resume_left .resume_profile {
  /* width: 100%; */
  height: 25%;
}

.resume .resume_left .resume_profile img {
  width: 100%;
  height: 100%;
}

.resume .resume_left .resume_content {
  padding: 0 16px;
}

.resume .title {
  margin-bottom: 20px;
}

.resume .resume_left .bold {
  color: #fff;
}

.resume .resume_left .regular {
  color: #b1eaff;
}

.resume .resume_item {
  padding: 25px 0;
  border-bottom: 2px solid #b1eaff;
}

.resume .resume_left .resume_item:last-child,
.resume .resume_right .resume_item:last-child {
  border-bottom: 0px;
}

.resume .resume_left ul li {
  display: flex;
  margin-bottom: 10px;
  align-items: center;
}

.resume .resume_left ul li:last-child {
  margin-bottom: 0;
}

.resume .resume_left ul li .icon {
  width: 35px;
  min-width: 35px;
  height: 35px;
  background: #fff;
  color: #0bb5f4;
  border-radius: 50%;
  margin-right: 15px;
  font-size: 16px;
  position: relative;
  /* display: flex; */
}

.resume .icon i,
.resume .resume_right .resume_hobby ul li i {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.resume .resume_left ul li .data {
  color: #b1eaff;
}

.resume .resume_left .resume_skills ul li {
  display: flex;
  margin-bottom: 10px;
  color: #b1eaff;
  justify-content: space-between;
  align-items: center;
}

.resume .resume_left .resume_skills ul li .skill_name {
  width: 25%;
}

.resume .resume_left .resume_skills ul li .skill_progress {
  width: 60%;
  margin: 0 5px;
  height: 5px;
  background: #009fd9;
  position: relative;
}

.resume .resume_left .resume_skills ul li .skill_per {
  width: 15%;
}

.resume .resume_left .resume_skills ul li .skill_progress span {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: #fff;
}

.resume .resume_left .resume_social .semi-bold {
  color: #fff;
  margin-bottom: 3px;
}

.resume .resume_right {
  /* width: 520px; */
  width: 66.66%;
  background: #fff;
  padding: 25px;
}

.resume .resume_right .bold {
  color: #0bb5f4;
}

.resume .resume_right .resume_work ul,
.resume .resume_right .resume_education ul {
  padding-left: 40px;
  overflow: hidden;
}

.resume .resume_right ul li {
  position: relative;
}

.resume .resume_right ul li .date {
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 15px;
}

.resume .resume_right ul li .info {
  margin-bottom: 20px;
}

.resume .resume_right ul li:last-child .info {
  margin-bottom: 0;
}

.resume .resume_right .resume_work ul li:before,
.resume .resume_right .resume_education ul li:before {
  content: "";
  position: absolute;
  top: 5px;
  left: -25px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  border: 2px solid #0bb5f4;
  /* border: 2px solid red; */
}

.resume .resume_right .resume_work ul li:after,
.resume .resume_right .resume_education ul li:after {
  content: "";
  position: absolute;
  top: 14px;
  left: -21px;
  width: 2px;
  height: 115px;
  background: #0bb5f4;
}

.resume .resume_right .resume_hobby ul {
  display: flex;
  justify-content: space-between;
}

.resume .resume_right .resume_hobby ul li {
  width: 80px;
  height: 80px;
  border: 2px solid #0bb5f4;
  border-radius: 50%;
  position: relative;
  color: #0bb5f4;
}

.resume .resume_right .resume_hobby ul li i {
  font-size: 30px;
}

.resume .resume_right .resume_hobby ul li:before {
  content: "";
  position: absolute;
  top: 40px;
  right: -52px;
  width: 50px;
  height: 2px;
  background: #0bb5f4;
}

.resume .resume_right .resume_hobby ul li:last-child:before {
  display: none;
}

/* my css */
.resume_content {
  background-color: yellowgreen;
}
.icon .svg-icon {
  margin: auto;
  height: 35px;
  display: flex;
  margin: auto;
  height: 35px;
}
</style>
