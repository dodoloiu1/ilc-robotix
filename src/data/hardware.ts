export type Subsystem = {
  id: string;
  code: string;
  name: string;
  tagline: string;
  summary: string;
  bullets: string[];
  specs: string[];
};

export type HardwareItem = {
  name: string;
  role: string;
  vendor: string;
};

export const SUBSYSTEMS: Subsystem[] = [
  {
    id: "localization",
    code: "01",
    name: "Odometry & Localization",
    tagline: "Knowing exactly where the robot is, every 16 ms",
    summary:
      "Three unpowered odometry pods stream wheel displacement into an Extended Kalman Filter fused with the Control Hub IMU. The pose estimate drives Road Runner trajectories and vision alignment.",
    bullets: [
      "3-wheel dead-wheel odometry with 0.5% drift correction",
      "IMU gyro fusion for heading hold and turn settling",
      "Road Runner 6.3 motion profiles with feedforward tuning",
      "Vision-aided global localization reset at match start",
    ],
    specs: ["goBILDA odometry pods", "BNO055 IMU", "Road Runner", "FTC SDK 10.x"],
  },
  {
    id: "vision",
    code: "02",
    name: "Vision Processing",
    tagline: "From pixels to field coordinates in one pipeline",
    summary:
      "A Limelight 3A runs a retro-reflective tape pipeline with neural detection, streaming AprilTag pose and target pixel offsets over NetworkTables to the robot controller.",
    bullets: [
      "Retro-reflective tape detection at 60 fps",
      "AprilTag 3D pose estimation for field localization",
      "Neural sample detection with on-device inference",
      "NetworkTables bridge to the Control Hub",
    ],
    specs: ["Limelight 3A", "OpenCV", "AprilTag", "NetworkTables"],
  },
  {
    id: "intake",
    code: "03",
    name: "Intake & Turret",
    tagline: "Game-element handling with a rotating end effector",
    summary:
      "A goBILDA dual-wheel intake feeds elements into a 3D-printed transport, while a slip-ring-equipped turret lets the outtake aim continuously without winding cables.",
    bullets: [
      "Dual compliant-wheel intake with current-limited current sensing",
      "Slip-ring turret for unlimited continuous rotation",
      "State-machine intake control with stall detection",
      "Quick-release outtake for specimen clipping",
    ],
    specs: ["goBILDA 3190 rpm motors", "Slip ring", "REV Control Hub", "3D-printed TPU"],
  },
];

export const HARDWARE: HardwareItem[] = [
  { name: "REV Control Hub", role: "Robot controller", vendor: "REV Robotics" },
  { name: "REV Expansion Hub", role: "Servo / sensor hub", vendor: "REV Robotics" },
  { name: "Limelight 3A", role: "Vision processor", vendor: "Limelight Vision" },
  { name: "goBILDA drivetrain", role: "Chassis + motion", vendor: "goBILDA" },
  { name: "goBILDA odometry", role: "Localization", vendor: "goBILDA" },
  { name: "REV SPD20 servos", role: "End effectors", vendor: "REV Robotics" },
];
