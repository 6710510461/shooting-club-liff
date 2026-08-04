const STUDENT_AFFILIATIONS = [
      "คณะแพทยศาสตร์",
      "คณะทันตแพทยศาสตร์",
      "คณะเภสัชศาสตร์",
      "คณะพยาบาลศาสตร์",
      "คณะเทคนิคการแพทย์",
      "คณะการแพทย์แผนไทย",
      "คณะวิศวกรรมศาสตร์",
      "คณะวิทยาศาสตร์",
      "คณะทรัพยากรธรรมชาติ",
      "คณะอุตสาหกรรมเกษตร",
      "คณะสัตวแพทยศาสตร์",
      "คณะวิทยาการจัดการ",
      "คณะศิลปศาสตร์",
      "คณะนิติศาสตร์",
      "คณะเศรษฐศาสตร์",
      "วิทยาลัยนานาชาติ",
      "บัณฑิตวิทยาลัย"
    ];

const STUDENT_AFFILIATION_TRANSLATIONS = {
  "คณะแพทยศาสตร์":
    "Faculty of Medicine",

  "คณะทันตแพทยศาสตร์":
    "Faculty of Dentistry",

  "คณะเภสัชศาสตร์":
    "Faculty of Pharmaceutical Sciences",

  "คณะพยาบาลศาสตร์":
    "Faculty of Nursing",

  "คณะเทคนิคการแพทย์":
    "Faculty of Medical Technology",

  "คณะการแพทย์แผนไทย":
    "Faculty of Traditional Thai Medicine",

  "คณะวิศวกรรมศาสตร์":
    "Faculty of Engineering",

  "คณะวิทยาศาสตร์":
    "Faculty of Science",

  "คณะทรัพยากรธรรมชาติ":
    "Faculty of Natural Resources",

  "คณะอุตสาหกรรมเกษตร":
    "Faculty of Agro-Industry",

  "คณะสัตวแพทยศาสตร์":
    "Faculty of Veterinary Science",

  "คณะวิทยาการจัดการ":
    "Faculty of Management Sciences",

  "คณะศิลปศาสตร์":
    "Faculty of Liberal Arts",

  "คณะนิติศาสตร์":
    "Faculty of Law",

  "คณะเศรษฐศาสตร์":
    "Faculty of Economics",

  "วิทยาลัยนานาชาติ":
    "International College",

  "บัณฑิตวิทยาลัย":
    "Graduate School"
};

    const PERSONNEL_GROUPS = [
      {
        label: "ส่วนงานนโยบายและบริหารกลาง",
        items: [
          "สำนักงานอธิการบดี",
          "กองพัฒนานักศึกษา",
          "กองกลาง",
          "กองคลัง",
          "กองนโยบาย ยุทธศาสตร์ และแผน",
          "กองบริหารทรัพยากรบุคคล",
          "ศูนย์กิจการนานาชาติและสื่อสารองค์กร",
          "ศูนย์บริหารจัดการคุณภาพองค์กร",
          "สำนักกฎหมาย",
          "หอประวัติ ม.อ."
        ]
      },
      {
        label: "คณะและส่วนงานจัดการศึกษา",
        items: [
          "คณะวิศวกรรมศาสตร์",
          "คณะวิทยาศาสตร์",
          "คณะแพทยศาสตร์",
          "คณะพยาบาลศาสตร์",
          "คณะวิทยาการจัดการ",
          "คณะทรัพยากรธรรมชาติ",
          "คณะเภสัชศาสตร์",
          "คณะทันตแพทยศาสตร์",
          "คณะอุตสาหกรรมเกษตร",
          "คณะศิลปศาสตร์",
          "คณะนิติศาสตร์",
          "คณะเทคนิคการแพทย์",
          "คณะสัตวแพทยศาสตร์",
          "คณะการจัดการสิ่งแวดล้อม",
          "คณะการแพทย์แผนไทย",
          "คณะเศรษฐศาสตร์",
          "วิทยาลัยนานาชาติ วิทยาเขตหาดใหญ่",
          "บัณฑิตวิทยาลัย"
        ]
      },
      {
        label: "ส่วนงานสนับสนุน บริการวิชาการ และสถาบันวิจัย",
        items: [
          "สำนักนวัตกรรมดิจิทัลและระบบอัจฉริยะ",
          "สำนักทรัพยากรการเรียนรู้คุณหญิงหลง อรรถกระวีสุนทร",
          "สำนักวิจัยและพัฒนา",
          "สถาบันทรัพยากรมนุษย์",
          "สถาบันสันติศึกษา",
          "สถาบันนโยบายสาธารณะ",
          "สถาบันฮาลาล"
        ]
      }
    ];
const PERSONNEL_GROUP_TRANSLATIONS = {
  "ส่วนงานนโยบายและบริหารกลาง":
    "Policy and Central Administration",

  "คณะและส่วนงานจัดการศึกษา":
    "Faculties and Academic Units",

  "ส่วนงานสนับสนุน บริการวิชาการ และสถาบันวิจัย":
    "Support, Academic Service and Research Units"
};

const PERSONNEL_UNIT_TRANSLATIONS = {
  "สำนักงานอธิการบดี":
    "Office of the President",

  "กองพัฒนานักศึกษา":
    "Student Development Division",

  "กองกลาง":
    "Central Administration Division",

  "กองคลัง":
    "Finance Division",

  "กองนโยบาย ยุทธศาสตร์ และแผน":
    "Policy, Strategy and Planning Division",

  "กองบริหารทรัพยากรบุคคล":
    "Human Resources Management Division",

  "ศูนย์กิจการนานาชาติและสื่อสารองค์กร":
    "International Affairs and Corporate Communication Center",

  "ศูนย์บริหารจัดการคุณภาพองค์กร":
    "Organizational Quality Management Center",

  "สำนักกฎหมาย":
    "Legal Affairs Office",

  "หอประวัติ ม.อ.":
    "PSU Archives",

  "คณะวิศวกรรมศาสตร์":
    "Faculty of Engineering",

  "คณะวิทยาศาสตร์":
    "Faculty of Science",

  "คณะแพทยศาสตร์":
    "Faculty of Medicine",

  "คณะพยาบาลศาสตร์":
    "Faculty of Nursing",

  "คณะวิทยาการจัดการ":
    "Faculty of Management Sciences",

  "คณะทรัพยากรธรรมชาติ":
    "Faculty of Natural Resources",

  "คณะเภสัชศาสตร์":
    "Faculty of Pharmaceutical Sciences",

  "คณะทันตแพทยศาสตร์":
    "Faculty of Dentistry",

  "คณะอุตสาหกรรมเกษตร":
    "Faculty of Agro-Industry",

  "คณะศิลปศาสตร์":
    "Faculty of Liberal Arts",

  "คณะนิติศาสตร์":
    "Faculty of Law",

  "คณะเทคนิคการแพทย์":
    "Faculty of Medical Technology",

  "คณะสัตวแพทยศาสตร์":
    "Faculty of Veterinary Science",

  "คณะการจัดการสิ่งแวดล้อม":
    "Faculty of Environmental Management",

  "คณะการแพทย์แผนไทย":
    "Faculty of Traditional Thai Medicine",

  "คณะเศรษฐศาสตร์":
    "Faculty of Economics",

  "วิทยาลัยนานาชาติ วิทยาเขตหาดใหญ่":
    "International College, Hat Yai Campus",

  "บัณฑิตวิทยาลัย":
    "Graduate School",

  "สำนักนวัตกรรมดิจิทัลและระบบอัจฉริยะ":
    "Office of Digital Innovation and Intelligent Systems",

  "สำนักทรัพยากรการเรียนรู้คุณหญิงหลง อรรถกระวีสุนทร":
    "Khunying Long Athakravisunthorn Learning Resources Center",

  "สำนักวิจัยและพัฒนา":
    "Research and Development Office",

  "สถาบันทรัพยากรมนุษย์":
    "Human Resources Institute",

  "สถาบันสันติศึกษา":
    "Institute for Peace Studies",

  "สถาบันนโยบายสาธารณะ":
    "Public Policy Institute",

  "สถาบันฮาลาล":
    "Halal Institute"
};
