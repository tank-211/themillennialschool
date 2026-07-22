// Central photo registry — all real school photos, categorized for gallery.
//import campusExterior from "@/assets/school/campus-entrance.jpeg";
import campusEntrance from "@/assets/school/campus-entrance.jpeg";
import classroomPrimary from "@/assets/school/classroom-primary.png";
//import classroomWriting from "@/assets/school/classroom-writing.jpg";
import preprimaryClass from "@/assets/school/preprimary-class.jpeg";
//import yogaActivity from "@/assets/school/yoga-activity.jpg";
import homeHero from "@/assets/school/home-hero.png";
//import smartClassroom from "@/assets/school/smart-classroom.png";
import computerLab1 from "@/assets/school/computer-lab-1.png";
import computerLab2 from "@/assets/school/computer-lab-2.png";
import library1 from "@/assets/school/library-1.jpeg";
import library2 from "@/assets/school/library-2.png";
import corridorStairs from "@/assets/school/corridor-stairs.jpeg";
import corridorPreprimary from "@/assets/school/corridor-preprimary.jpeg";
import corridorSuccess from "@/assets/school/corridor-success.jpeg";
import cctvMonitoring from "@/assets/school/cctv-monitoring.jpeg";
import scienceLab1 from "@/assets/school/science-lab-1.jpeg";
import scienceLab2 from "@/assets/school/science-lab-2.jpeg";
import chemistryLab1 from "@/assets/school/chemistry-lab-1.jpeg";
import chemistryLab2 from "@/assets/school/chemistry-lab-2.jpeg";
import chemistryLab3 from "@/assets/school/chemistry-lab-3.jpeg";
import biologyLab1 from "@/assets/school/biology-lab-1.jpeg";
import biologyLab2 from "@/assets/school/biology-lab-2.jpeg";

export type GalleryCategory = "Campus" | "Classrooms" | "Library" | "Computer Lab" | "Science Lab" | "Activities" | "Facilities";

export interface Photo {
  src: string;
  alt: string;
  category: GalleryCategory;
}

export const photos = {
  hero: homeHero,
  //campusExterior: campusExterior,
  campusEntrance: campusEntrance,
  classroomPrimary: classroomPrimary,
  //classroomWriting: classroomWriting,
  preprimaryClass: preprimaryClass,
  //yogaActivity: yogaActivity,
  //smartClassroom: smartClassroom,
  computerLab: computerLab1,
  computerLab2: computerLab2,
  library: library1,
  library2: library2,
  corridorStairs: corridorStairs,
  corridorPreprimary: corridorPreprimary,
  corridorSuccess: corridorSuccess,
  cctvMonitoring: cctvMonitoring,
  scienceLab: scienceLab1,
  scienceLab2: scienceLab2,
  chemistryLab: chemistryLab1,
  chemistryLab2: chemistryLab2,
  chemistryLab3: chemistryLab3,
  biologyLab: biologyLab1,
  biologyLab2: biologyLab2,
};

export const gallery: Photo[] = [
  { src: homeHero, alt: "School building with playground and basketball court", category: "Campus" },
  //{ src: campusExterior, alt: "School building exterior with playground and basketball court", category: "Campus" },
  { src: campusEntrance, alt: "The Millennial School entrance with mural", category: "Campus" },
  { src: corridorStairs, alt: "Rainbow staircase with inspirational quotes", category: "Campus" },
  { src: corridorPreprimary, alt: "Bright pre-primary corridor with decorations", category: "Campus" },
  { src: corridorSuccess, alt: "Corridor with 'Steps of Success' display board", category: "Campus" },
  { src: cctvMonitoring, alt: "CCTV monitoring screen for campus-wide safety", category: "Facilities" },
  //{ src: smartClassroom, alt: "Smart classroom with mounted display and student desks", category: "Classrooms" },
  { src: classroomPrimary, alt: "Students seated attentively in a primary classroom", category: "Classrooms" },
  //{ src: classroomWriting, alt: "Teacher guiding students during a writing lesson", category: "Classrooms" },
  { src: preprimaryClass, alt: "Pre-primary teacher with young learners around an activity table", category: "Classrooms" },
  { src: library1, alt: "School library shelves stocked with reference books", category: "Library" },
  { src: library2, alt: "Colourful library collection organised in glass cabinets", category: "Library" },
  { src: computerLab1, alt: "Computer lab with rows of desktops and monitors", category: "Computer Lab" },
  { src: computerLab2, alt: "Computer lab workstations with printer and study posters", category: "Computer Lab" },
  //{ src: yogaActivity, alt: "Students in a yoga session on the school veranda", category: "Activities" },
  { src: scienceLab1, alt: "Science lab with glassware, shelves and periodic table", category: "Science Lab" },
  { src: scienceLab2, alt: "Science lab entrance signage", category: "Science Lab" },
  { src: chemistryLab1, alt: "Chemistry lab reagent shelves with glassware", category: "Science Lab" },
  { src: chemistryLab2, alt: "Chemistry lab workbench with measuring cylinder and burner", category: "Science Lab" },
  { src: chemistryLab3, alt: "Chemistry lab signage with respiratory system chart", category: "Science Lab" },
  { src: biologyLab1, alt: "Biology lab with anatomical models and specimens", category: "Science Lab" },
  { src: biologyLab2, alt: "Biology lab anatomy charts on display", category: "Science Lab" },
];