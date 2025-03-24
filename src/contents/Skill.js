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
      <div className="condiv skill ">
        <h1 className="subtopic">My Skills</h1>

        <ul className="flex space-x-2 ">
          <button
            className={`button1 ${
              this.state.activeSkill === "HTML&CSS" ? "bg-blue-400 text-white" : "bg-gray-300"
            }`}
            onClick={() => this.setActiveSkill("HTML&CSS")}
          >
            HTML&CSS
          </button>
          <button
            className={`button1 ${
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
          <button
            className={`button1 ${
              this.state.activeSkill === "REACT" ? "bg-green-400 text-white" : "bg-gray-300"
            }`}
            onClick={() => this.setActiveSkill("REACT")}
          >
            REACT
          </button>
          <button
            className={`button2 ${
              this.state.activeSkill === "BOOTSTRAP" ? "bg-green-400 text-white" : "bg-gray-300"
            }` }
            onClick={() => this.setActiveSkill("BOOTSTRAP")}
          >
            BOOTSTRAP
          </button>
        </ul>

        {this.state.activeSkill && (
          <div className="mt-4 p-4 border rounded-lg bg-gray-100 flex flex-col items-center">
            {this.state.activeSkill === "HTML&CSS" && (
              <>
                <img  style={{ width: '150px', height: 'auto', display: 'block', margin: '10px auto' }}  src="/image/HTML5.png" alt="skill" />
                <p style={{textIndent:'5%'}}>กำหนดการแสดงผลข้อมูลภายในเว็บเพจ แสดงผลบนโปรแกรมบราวเซอร์ โดยใช้ HTML กำหนดโครงร่างแสดงข้อมูลต่างๆ 
                  <br/>เช่น แสดงส่วนหัวข้อ ส่วนเนื้อหา ส่วนท้าย ข้อมูลนำเข้า แบบฟอร์ม ตัวอักษร รูปภาพ และใช้ CSS ช่วยในการกำหนดเพิ่มความสวยงามให้กับเว็บเพจ เช่น รูปแบบสี ขนาด อนิเมชันเคลื่อนไหวและอื่นๆ ในเบื้องต้น</p>
              </>
            )}
            {this.state.activeSkill === "PHP" && (
              <>
                <img style={{ width: '200px', height: 'auto', display: 'block', margin: '10px auto' }}  src="/image/PHP.png" alt="PHP" />
                <p style={{textIndent:'5%'}}>ใช้สำหรับจัดทำเว็บไซต์ และแสดงผลออกมาในรูปแบบ HTML โดยมีรากฐานโครงสร้างคำสั่งมาจากภาษา ภาษาซี ภาษาจาวา และ ภาษาเพิร์ล ซึ่ง PHP จะง่ายต่อการเรียนรู้ </p>
              </>
            )}
            {this.state.activeSkill === "GITHUB" && (
              <>
                <img style={{ width: '150px', height: 'auto', display: 'block', margin: '10px auto' }}  src="/image/github.png" alt="Github" />
                <p style={{textIndent:'5%'}}>เว็บเซิร์ฟเวอร์ที่ให้บริการในการฝากไฟล์ Git ที่ทำงานบนเว็บไซต์เป็นเครื่องมือจัดเก็บเวอร์ชันในการติดตามโค้ดที่เรียกว่า Source Code
                  และเมื่อต้องการพัฒนาเพิ่มฟีเจอร์ หรือแก้ไขปัญหาบางส่วน สามารถ Clone มาพัฒนาได้ทันที</p>
              </>
            )}
            {this.state.activeSkill === "JAVASCRIPT" && (
              <>
                <img style={{ width: '250px', height: 'auto', display: 'block', margin: '10px auto' }}  src="/image/javascript.png" alt="javascript" />
                <p style={{textIndent:'5%'}}>การสร้างเว็บเพจให้ทำงานแบบไดนามิกได้ผลลัพธ์ตามเงื่อนไขหรือข้อกำหนดต่างๆ จะอยู่ในรูปแบบโมดูลฟังก์ชัน 
                  และนำองค์ประกอบที่เรียกว่าไลบรารีที่มีอยู่ใน JavaScript มาช่วยในการพัฒนาแอปพลิเคชันบนเว็บบราวเซอร์</p>
              </>
            )}
            {this.state.activeSkill === "REACT" && (
              <>
                <img style={{ width: '150px', height: 'auto', display: 'block', margin: '10px auto' }}  src="/image/React.png" alt="javascript" />
                <p style={{textIndent:'5%'}}>ไลบรารีของภาษา JavaScript ใช้เพื่อสร้างเว็บแอปพลิเคชันฝั่งไคลเอนต์ เพื่อสร้างส่วนติดต่อกับผู้ใช้ในแบบไดนามิก JSX เมื่ออัปเดตบางส่วนของแอปโดยที่แอปจะไม่ทำการโหลดหน้าเว็บขึ้นมาใหม่ทั้งหมด
                  ในขั้นตอนการพัฒนาเว็บแอปจะสะดวกและรวดเร็วยิ่งขึ้น</p>
              </>
            )}
            {this.state.activeSkill === "BOOTSTRAP" && (
              <>
                <img style={{ width: '150px', height: 'auto', display: 'block', margin: '10px auto' }}  src="/image/Bootstrap.png" alt="javascript" />
                <p style={{textIndent:'5%'}}>หากปรับแต่งเว็บเพจด้วย CSS โดยตรงจะต้องใช้เวลาค่อนข้างพอสมควร หากนำ CSS เฟรมเวิร์กมาช่วยจัดรูปแบบ Style ของเว็บเพจ ที่ประกอบด้วย Grid และ Flexbox ที่รองรับการจัดโครงร่างของเว็บเพจแบบ Responsive 
                  ซึ่งให้สามารถเปิดบนอุปกรณ์ที่มีขนาดหน้าจอที่ต่างกันได้ โดยรูปแบบ CSS เฟรมเวิร์กโค้ดจะดูน้อยและจัดการได้ง่าย</p>
              </>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default Skill;
