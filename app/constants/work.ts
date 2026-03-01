import * as THREE from "three";
import { WorkTimelinePoint } from "../types";

export const WORK_TIMELINE: WorkTimelinePoint[] = [

	{ point: new THREE.Vector3(0, 0, 0),
    year: '2021',
    title: 'Thapar University',
    subtitle: 'Mechatronics Engineering',
    position: 'right',
  },
	 {
    point: new THREE.Vector3(-4, -4, -3),
    year: '2023',
    title: 'Codeasia',
    subtitle: 'Data Analyst Intern',
    position: 'left',
  },
	


  {
    point: new THREE.Vector3(1, 1, -12),
    year: new Date().toLocaleDateString('default', { year: 'numeric' }),
    title: 'Monash Univerity',
    subtitle: 'Artificial Intelligence',
    position: 'right',
  }
]
