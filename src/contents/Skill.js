import React, { Component } from 'react';

class Skill extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSkill: null,
    };
  }

  setActiveSkill = (skill) => {
    this.setState({ activeSkill: skill });
  };

  render() {
    return (
      <div className="condiv skill">
        <h1 className="subtopic">My Skills</h1>

        <ul className="flex space-x-2">
          <button
            className={`button1 ${
              this.state.activeSkill === "HTML&CSS" ? "bg-blue-400 text-white" : "bg-gray-300"
            }`}
            onClick={() => this.setActiveSkill("HTML&CSS")}
          >
            HTML&CSS
          </button>
          <button
            className={`button2 ${
              this.state.activeSkill === "PHP" ? "bg-green-400 text-white" : "bg-gray-300"
            }`}
            onClick={() => this.setActiveSkill("PHP")}
          >
            PHP
          </button>
          <button
            className={`button1 ${
              this.state.activeSkill === "GITHUB" ? "bg-green-400 text-white" : "bg-gray-300"
            }`}
            onClick={() => this.setActiveSkill("GITHUB")}
          >
            GITHUB
          </button>
          <button
            className={`button3 ${
              this.state.activeSkill === "JAVASCRIPT" ? "bg-green-400 text-white" : "bg-gray-300"
            }`}
            onClick={() => this.setActiveSkill("JAVASCRIPT")}
          >
            JAVASCRIPT
          </button>
        </ul>

        {this.state.activeSkill && (
          <div className="mt-4 p-4 border rounded-lg bg-gray-100 flex flex-col items-center">
            {this.state.activeSkill === "HTML&CSS" && (
              <>
                <img src="/image/HTML5.png" />
                <p>กำหนดการแสดงผลข้อมูลภายในเว็บเพจ แสดงผลบนโปรแกรมบราวเซอร์ โดยใช้ HTML กำหนดโครงร่างแสดงข้อมูลต่างๆ 
                  <br/>เช่น แสดงส่วนหัวข้อ ส่วนเนื้อหา ส่วนท้าย ข้อมูลนำเข้า แบบฟอร์ม ตัวอักษร รูปภาพ และใช้ CSS ช่วยในการกำหนดเพิ่มความสวยงามให้กับเว็บเพจ เช่น รูปแบบสี ขนาด อนิเมชันเคลื่อนไหวและอื่นๆ ในเบื้องต้น</p>
              </>
            )}
            {this.state.activeSkill === "PHP" && (
              <>
                <img src="/image/PHP.png" alt="PHP" />
                <p>PHP ใช้สำหรับการพัฒนาเว็บฝั่งเซิร์ฟเวอร์</p>
              </>
            )}
            {this.state.activeSkill === "GITHUB" && (
              <>
                <img src="/image/github.png" alt="Github" />
                <p>เว็บเซิร์ฟเวอร์ที่ให้บริการในการฝากไฟล์ Git ที่ทำงานบนเว็บไซต์เป็นเครื่องมือจัดเก็บเวอร์ชันในการติดตามโค้ดที่เรียกว่า Source Code
                  และเมื่อต้องการพัฒนาเพิ่มฟีเจอร์ หรือแก้ไขปัญหาบางส่วน สามารถ Clone มาพัฒนาได้ทันที</p>
              </>
            )}
            {this.state.activeSkill === "JAVASCRIPT" && (
              <>
                <img src="/image/javascript.png" alt="javascript" />
                <p>การสร้างเว็บเพจให้ทำงานแบบไดนามิกได้ผลลัพธ์ตามเงื่อนไขหรือข้อกำหนดต่างๆ จะอยู่ในรูปแบบโมดูลฟังก์ชัน 
                  และนำองค์ประกอบที่เรียกว่าไลบรารีที่มีอยู่ใน JavaScript มาช่วยในการพัฒนาแอปพลิเคชันบนเว็บบราวเซอร์</p>
              </>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default Skill;
