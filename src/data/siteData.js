const newsItems = [
  { date: "Oct 2026:", html: "Released the <a href=\"https://arxiv.org/abs/2610.03924\" target=\"_blank\" rel=\"noreferrer\"><b>arXiv preprint</b></a> of \"Barrier-Shaped Recurrent Reinforcement Learning for Autonomous Landing on a Heaving Ship Deck\", submitted to <b>IEEE ICRA 2027</b>." },
  { date: "Jul 2026:", html: "Received the <b>Director’s Gold Medal</b> at IIT Kanpur’s 59th Convocation, recognising outstanding all-round achievement and leadership." },
  {date: "May 2026:", html: "Defended my <a href=\"assets/documents/218070866.pdf\" target=\"_blank\" rel=\"noreferrer\">master’s thesis</a>, \"Safe and Robust Autonomous Landing of a Quadrotor on an Emulated Ship Deck: Barrier Function-based Model Predictive Control and Reinforcement Learning Approaches\"." },
  {date: "March 2026:", html: "Received <a href=\"https://vertipedia.vtol.org/biographies/getBiography/biographyID/213?_gl=1*qluf33*_ga*MTA2MzU5NjcxMC4xNzgxNjcyNTk0*_ga_B756Q7WGPS*czE3ODQ4NzYwMDckbzIkZzEkdDE3ODQ4NzYxNjYkajYwJGwwJGgw\"><b>Dr. Richard M. Carlson Scholarship</b></a> (Masters Category) from the <a href=\"https://vtol.org/education/vertical-flight-foundation-scholarships/featured-biographies?studentID=593\"><b>Vertical Flight Society</b></a> for exceptional work on vertical flight technology" },
  {date: "Sept 2025:", html: "Received the <b>IndiaAI Fellowship</b> for the second time to continue my research on reinforcement learning for autonomous UAV ship-deck landing." },
  { date: "Aug 2025:", html: "Started my master’s studies in Aerospace Engineering at IIT Kanpur." },
  { date: "Aug 2025:", html: "Completed a ten-week <b>SURF research internship at Caltech</b> (May–August 2025) in <a href=\"https://mce.caltech.edu/people/adames\" target=\"_blank\" rel=\"noreferrer\">Prof. Aaron Ames’</a> AMBER Lab, comparing model-based and reinforcement-learning approaches to bipedal walking. <a href=\"https://iitk-my.sharepoint.com/:p:/g/personal/ritwiks21_iitk_ac_in/EWgJas-eFXNJkl--Yyn25y0BRrzuttYj6Jd9-Zl6wnjJ7g?e=0tlKi2\" target=\"_blank\" rel=\"noreferrer\">Presentation</a>." },
  { date: "March 2025:", html: "Received the <a href=\"https://vertipedia.vtol.org/biographies/getBiography/biographyID/31?_gl=1*uib3t9*_ga*MTk2MjAwNzQ2Ni4xNzE2ODk1MDQz*_ga_B756Q7WGPS*MTc0MzY2OTc0Ni4xMDQuMS4xNzQzNjcwMDgwLjAuMC4w\"><b>Frank N. Piasecki Scholarship</b></a> (UG Category) from the <a href=\"https://vtol.org/education/vertical-flight-foundation-scholarships/featured-biographies?studentID=593\"><b>Vertical Flight Society</b></a> for exceptional work on vertical flight technology" },
  { date: "Jan 2025:", html: "Received IIT Kanpur’s <b>Academic Excellence Award</b> for outstanding academic performance." },
  { date: "Aug 2024:", html: "My first first-author paper, <a href=\"https://proceedings.vtol.org/81/autonomy-and-uas/vision-based-landing-of-uav-on-simulated-ship-deck-with-roll--pitch-and-sway-motions\" target=\"_blank\" rel=\"noreferrer\">\"Vision-Based Landing of UAV on Simulated Ship Deck with Roll Pitch and Sway Motions\"</a>, was accepted for <b>VFS Forum 81</b> (2025)." },
  { date: "Nov 2024:", html: "Defended my final <a href=\"assets/documents/ugp-report.pdf\" target=\"_blank\" rel=\"noreferrer\"><b>B.Tech. thesis</b></a> before the undergraduate committee." },
  { date: "Nov 2024:", html: "Completed the Modern Controls (EE650) <a href=\"https://github.com/s-ritwik/Linear_tracking_drone_state_feedback\" target=\"_blank\" rel=\"noreferrer\">mini-project</a> on drone tracking with a state-feedback controller under <a href=\"https://www.iitk.ac.in/new/twinkle-tripathy\">Dr. Twinkle Tripathy</a>." },
  { date: "Oct 2024:", html: "Selected as <b>one of ten undergraduate recipients nationwide</b> of the <a href=\"https://www.linkedin.com/posts/indian-institute-of-technology-kanpur_iitkstudents-studentawards-iitkanpur-activity-7290965951477354498-UfYm?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADm6vi4BYTnHgdJW-i4MMnFUNc5tLEnj7jc\"><b>IndiaAI Fellowship</b></a>." },
  { date: "Aug 2024:", html: "Our paper, <a href=\"https://arc.aiaa.org/doi/epdf/10.2514/6.2025-2345\" target=\"_blank\" rel=\"noreferrer\">\"Vision-Based Autonomous Ship Deck Landing of an Unmanned Aerial Vehicle using Fractal ArUco Markers\"</a>, was accepted for <b>AIAA SciTech 2025</b>." },
  { date: "Jul 2024:", html: "Received the <b>Skylark Award and Scholarship</b>, awarded to one undergraduate from the final and pre-final years." },
  { date: "Jul 2024:", html: "Completed summer internship with <a href=\"https://endureair.tech/\">Endure Air</a>" },
  { date: "Nov 2023:", html: "Defended my first B.Tech. thesis before the undergraduate committee." },
  { date: "Aug 2023:", html: "Joined the Helicopter and VTOL Laboratory at IIT Kanpur to work under guidance of <a href=\"https://home.iitk.ac.in/~abhish/\">Dr. Abhishek</a>" },
  { date: "Aug 2023:", html: "Completed <b>SURGE research internship</b> " },
  { date: "May 2023:", html: "Promoted to Aeromodelling Club coordinator and Football team Vice-Captain" },
  { date: "Aug 2021:", html: "Joined IIT Kanpur as an undergraduate in the Department of Aerospace Engineering." },
];

// Sort by an explicit month index instead of browser-dependent date parsing.
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const updateMonth = ({ date }) => {
  const [month, year] = date.replace(":", "").split(/\s+/);
  return Number(year) * 12 + monthNames.indexOf(month.slice(0, 3));
};
export const updates = [...newsItems].sort((first, second) => updateMonth(second) - updateMonth(first));

export const publications = [
  `<b>R. Shankar</b>, C. Prachand, A. Abhishek, S.R. Sahoo, <a href="https://arxiv.org/abs/2610.03924" target="_blank" rel="noreferrer">"Barrier-Shaped Recurrent Reinforcement Learning for Autonomous Landing on a Heaving Ship Deck"</a>, <b>Under review, IEEE ICRA 2027</b>; arXiv:2610.03924`,
  `<b>R. Shankar</b>, C. Prachand, J. Singh, A. Abhishek, K.S. Venkatesh, <a href="https://vtol.org/store/product/visionbased-landing-of-uav-on-simulated-ship-deck-with-roll-pitch-and-sway-motions-19759.cfm">"Vision-Based Landing of UAV on Simulated Ship Deck with Roll Pitch and Sway Motions"</a>, 2025 Vertical Flight Society, Forum 81`,
  `C. Prachand, R. Rustagi, <b>R. Shankar</b>, J. Singh, A. Abhishek, K.S. Venkatesh, <a href="https://arc.aiaa.org/doi/epdf/10.2514/6.2025-2345" target="_blank" rel="noreferrer">"Vision-Based Autonomous Ship Deck Landing of an Unmanned Aerial Vehicle using Fractal ArUco Markers"</a>, 2025 AIAA`,
  `<b>R. Shankar*</b>, C. Prachand*, A. Abhishek, K.S. Venkatesh, "Autonomous Quadrotor Landing on a Heaving Ship Deck Using Prediction, Receding-Horizon Optimisation, and Safety Filtering", <b>Manuscript under preparation for T-RO</b>`,
];

export const heroResearchImages = [
  "assets/images/research/1_vff.jpeg",
  "assets/images/research/2_Thesis_group.jpeg",
  "assets/images/research/2_amber.jpeg",
  "assets/images/research/3_leg.jpeg",
  "assets/images/research/4_thesis_candid.jpeg",
  "assets/images/research/4_twin.jpeg",
  "assets/images/research/5_RSD.jpeg",
  "assets/images/research/6_amber_bot.jpeg",
  "assets/images/research/7_cal_ppt.jpeg",
  "assets/images/research/8_g1.jpeg",
  "assets/images/research/9_lab_group.jpeg",
  "assets/images/research/go2.jpeg",
];

const projectCatalog = [
  {
    titleHtml: "Barrier Function-Optimised Model Predictive Controller Using GRU For Autonomous UAV Quadrotor Landing On A Heaving Ship-Deck Emulator",
    modalTitleHtml: "Barrier Function-Optimised Model Predictive Controller Using GRU For Autonomous UAV Quadrotor Landing On A Heaving Ship-Deck Emulator",
    image: "assets/images/CBF_MPC_heave.png",
    alt: "CBF MPC GRU UAV landing on a heaving ship-deck emulator",
    descriptionHtml: `<p>Mentor: Dr <a href="https://home.iitk.ac.in/~abhish/" target="_blank">Abhishek</a><br> GRU + EKF | MPC/QP | Control Barrier Functions | ROS2 | Gazebo | PX4</p>`,
    modalHtml: `<p>Developed a vision-based autonomous landing pipeline for a UAV quadrotor on a moving platform. Designed a hybrid GRU + EKF model to predict real-time heave motion at 20 Hz from a 40-second time window, achieving 6-second-ahead predictions within +/-11% average error on an NVIDIA Jetson GPU. Used the predictions in a QP/MPC trajectory planner and integrated a Control Barrier Function for safe descent commitment before validating the pipeline in ROS2, Gazebo, and hardware experiments.</p>`,
    links: [
      { label: "Experiment Video 1", href: "https://www.youtube.com/watch?v=UTXU86pZSDA" },
      { label: "Experiment Video 2", href: "https://www.youtube.com/watch?v=_4y6GI-JtU8" },
    ],
  },
  {
    titleHtml: "Barrier-Shaped Recurrent Reinforcement Learning for Autonomous Landing on a Heaving Ship Deck",
    modalTitleHtml: "Barrier-Shaped Recurrent Reinforcement Learning for Autonomous Landing on a Heaving Ship Deck",
    image: "assets/images/RL_heave.png",
    alt: "Recurrent reinforcement-learning quadrotor landing on a heaving deck emulator",
    descriptionHtml: `<p>Advisors: Dr <a href="https://home.iitk.ac.in/~abhish/" target="_blank" rel="noreferrer">Abhishek</a> and Dr <a href="https://home.iitk.ac.in/~srsahoo/" target="_blank" rel="noreferrer">S. R. Sahoo</a><br> Recurrent PPO | Asymmetric Actor-Critic | CBF Safety Filtering | Isaac Lab | Onboard Vision<br><b>51 hardware landings; under review at ICRA 2027.</b></p>`,
    modalHtml: `<p>Developed a GRU-based landing policy trained with asymmetric actor-critic reinforcement learning: the critic receives 6 s of future recorded ship heave during training, while the deployed actor uses only onboard-available deck-relative observations. Trained across 4,096 Isaac Lab environments using a batched PX4-like cascaded controller, then fine-tuned with the vision pipeline in the loop.</p><p>Used a control-barrier-function stopping margin both to shape the training reward and to check the deployed descent at 20 Hz. When the margin is violated, the runtime filter aborts to hover and retries. Deployed the policy, fractal ArUco / MEKF state estimator, and filter on an NVIDIA Jetson Orin Nano, commanding an ArduCopter autopilot and proximity-based thrust cutoff.</p><ul><li>All 51 hardware trials reached the deck: 31 with motion capture and 20 with onboard vision, replaying recorded ship heave at 0.70 m peak-to-peak.</li><li>Median time to contact was 6.5 s with motion capture and 7.3 s with vision; 77% and 50% landed on the first descent, respectively.</li><li>The barrier-shaped reward reduced median simulated contact speed from 0.077 to 0.044 m/s compared with training without that reward.</li><li>30/31 motion-capture trials and 19/20 vision trials met the 0.5 m/s deck-relative speed criterion at thrust cutoff. Cutoff speed and subsequent physical contact speed are reported separately in the paper.</li></ul><p>Validation covers laboratory heave motion, not full six-degree-of-freedom sea states or ship air-wake. The filter depends on the accuracy and timeliness of its state estimates; it is not an unconditional crash-proof guarantee.</p>`,
    links: [
      { label: "Paper / arXiv", href: "https://arxiv.org/abs/2610.03924" },
      { label: "Code", href: "https://github.com/s-ritwik/uav_rl" },
      { label: "Supplementary Video", href: "https://youtu.be/S5hDkrSZJt4" },
    ],
  },
  {
    titleHtml: "RL-Optimised UAV Quadrotor Landing On A Moving Ship-Deck Emulator",
    modalTitleHtml: "RL-Optimised UAV Quadrotor Landing On A Moving Ship-Deck Emulator",
    image: "assets/images/RL_sway.png",
    alt: "RL-optimised UAV landing on a moving ship-deck emulator",
    descriptionHtml: `<p>Mentor: Dr <a href="https://home.iitk.ac.in/~abhish/" target="_blank">Abhishek</a><br> Reinforcement Learning | IsaacSim | PX4 | Cascaded Control | Moving Platform Landing</p>`,
    modalHtml: `<p>Built a PX4-compatible reinforcement learning stack in IsaacSim with a parallelisable PX4-like cascaded controller for quadrotors. Demonstrated autonomous landings on a moving platform under sinusoidal motion up to 0.2 Hz frequency and 55 cm amplitude.</p>`,
    links: [
      { label: "Experiment Video 1", href: "https://www.youtube.com/watch?v=cQChESdLzrM" },
      { label: "Experiment Video 2", href: "https://www.youtube.com/watch?v=pRaUoR9tWNc" },
    ],
  },
  {
    titleHtml: "A Comparative Study of Model-Based and<br>Reinforcement Learning Control Paradigms for<br>Planar Biped Walking",
    modalTitleHtml: "Reward ablation study for Amber",
    image: "assets/images/research-amber.png",
    alt: "pexels-photo-24457.jpg",
    descriptionHtml: `<p>Mentor: Dr <a href="http://ames.caltech.edu/" target="_blank">Aaron Ames</a><br> Reinforcement Learning | Control Theory | Isaac Sim | Bipedal Locomotion</p>`,
    modalHtml: `<p>Created a RL training stack from scratch for Amber robot. Used LIP based future foot position estimates and a bezier spline with a custom IK solver to implement a classical controller for walking. I also used the RL training stack to train a baseline RL and a LIP+RL policy and compared them on the basis of robustness, performance and sample efficiency</p>`,
    links: [
      { label: "Presentation", href: "https://iitk-my.sharepoint.com/:p:/g/personal/ritwiks21_iitk_ac_in/EWgJas-eFXNJkl--Yyn25y0BRrzuttYj6Jd9-Zl6wnjJ7g?e=0tlKi2" },
    ],
  },
  {
    titleHtml: "Autonomous Landing On A Moving Ship-Deck",
    modalTitleHtml: "Autonomous Landing On A Moving Ship-Deck",
    image: "assets/images/research-auto-landing.png",
    alt: "Vision-based autonomous quadrotor landing on a moving ship-deck emulator",
    descriptionHtml: `<p>Advisors: Dr <a href="https://home.iitk.ac.in/~abhish/" target="_blank" rel="noreferrer">Abhishek</a> and Dr <a href="https://home.iitk.ac.in/~venkats/research.html" target="_blank" rel="noreferrer">K. S. Venkatesh</a><br> Fractal ArUco | Pose Estimation | EKF | Vision-Based Control | Hardware Validation<br><b>AIAA SciTech 2025 and VFS Forum 81 papers.</b></p>`,
    modalHtml: `<p>Developed a vision-based autonomous quadrotor landing pipeline using fractal ArUco markers to maintain deck-pose tracking across changing heights through touchdown. Combined marker-based pose estimates with an Extended Kalman Filter and used the resulting estimates for tracking and landing control.</p><p>Built a four-degree-of-freedom deck emulator capable of roll, pitch, heave, and sway. Evaluated vision-based pose estimation against motion capture and demonstrated hardware tracking and landing on different quadrotors under roll, pitch, and sway motions. This earlier perception-and-control work is distinct from the later prediction-based and recurrent-RL heave-landing projects.</p><p>Related publications: <i>Vision-Based Autonomous Ship Deck Landing of an Unmanned Aerial Vehicle using Fractal ArUco Markers</i> (AIAA SciTech 2025) and <i>Vision-Based Landing of UAV on Simulated Ship Deck with Roll Pitch and Sway Motions</i> (Vertical Flight Society, Forum 81, 2025).</p>`,
    links: [
      { label: "AIAA SciTech 2025 Paper", href: "https://arc.aiaa.org/doi/epdf/10.2514/6.2025-2345" },
      { label: "VFS Forum 81 Paper", href: "https://proceedings.vtol.org/81/autonomy-and-uas/vision-based-landing-of-uav-on-simulated-ship-deck-with-roll--pitch-and-sway-motions" },
      { label: "Experiment video", href: "https://www.youtube.com/watch?v=i8-IYC9-ZgQ" },
    ],
  },
  {
    titleHtml: "Heave Estimation Using Deep Learning Networks",
    modalTitleHtml: "Heave Estimation Of A Ship-Deck Using Deep Learning Models",
    image: "assets/images/research-heave-estimation.jpg",
    alt: "pexels-photo-24457.jpg",
    descriptionHtml: `<p>Mentor: Dr <a href="https://www.engineering.cornell.edu/faculty-directory/sandip-tiwari" target="_blank">Sandip Tiwari</a><br> Information Theory | Machine Learning | ROS | Gazebo</p>`,
    modalHtml: `<p>Explored statistical models such as ARIMA and deep learning models such as LSTM, GRU, and TCN for time-series prediction of ocean heave and ship-deck motion. This work was completed under Dr. Sandip Tiwari, Cornell University, and the project report is available.</p>`,
    links: [{ label: "Project Report", href: "assets/documents/ee798-project-report.pdf" }],
  },
  // {
  //   titleHtml: "CUDA-Accelerated Inverse Kinematics for Bipedal Gait Generation",
  //   modalTitleHtml: "CUDA-Accelerated Inverse Kinematics for Bipedal Gait Generation",
  //   image: "assets/images/research-cusadi.svg",
  //   alt: "Schematic CPU illustration for the GPU-accelerated inverse-kinematics project",
  //   descriptionHtml: `<p>Advisor: <a href="https://mce.caltech.edu/people/adames" target="_blank" rel="noreferrer">Dr. Aaron Ames</a>, Caltech<br>April 2025<br>CUDA | CusADi | CasADi | Pinocchio | Differential IK<br><b>Eightfold speedup in inverse kinematics and gait generation.</b></p>`,
  //   modalHtml: `<p>Accelerated inverse-kinematics computation and bipedal gait generation by reproducing CusADi, achieving an eightfold speedup. Built a differential inverse-kinematics solver by constructing a custom CasADi SX graph on top of Pinocchio’s kinematics API.</p><p>This computational project complements the bipedal locomotion work in Caltech’s AMBER Lab. The repository contains the implementation; the thumbnail is a schematic illustration, not an experimental result.</p>`,
  //   links: [
  //     { label: "Code / CusADi", href: "https://github.com/s-ritwik/cusadi.git" },
  //     { label: "Advisor", href: "https://mce.caltech.edu/people/adames" },
  //   ],
  // },
  // {
  //   titleHtml: "Comprehensive eVTOL Design",
  //   modalTitleHtml: "Comprehensive eVTOL Design",
  //   image: "assets/images/research-evtol.svg",
  //   alt: "Schematic eight-rotor aircraft illustration for the tilt-eVTOL design project",
  //   descriptionHtml: `<p>Advisor: <a href="https://sites.google.com/site/drmuralidamodaran" target="_blank" rel="noreferrer">Dr. Murali Damodaran</a>, National University of Singapore<br>January–May 2025 · AE668<br>BEMT | ANSYS Fluent | Structural Analysis | Flight Control<br><b>Eight-rotor tilt-eVTOL sizing, analysis, and control.</b></p>`,
  //   modalHtml: `<p>Completed a comprehensive eight-rotor tilt-eVTOL design project for AE668, Computational Aeromechanics and Control of UAVs, under Dr. Murali Damodaran.</p><ul><li>Sized the aircraft using Blade Element Momentum Theory and explored trade-offs in rotor radius, RPM, and cruise speed.</li><li>Performed ANSYS Fluent CFD to quantify bi-wing interference and analysed structural deflection in helicopter mode.</li><li>Built a cascaded attitude-stability controller with an outer proportional loop, inner PID loop, tilt-angle gain scheduling, and motor mixing.</li></ul><p>The repository contains the project work. The thumbnail is a schematic illustration, not a rendering of the final aircraft geometry.</p>`,
  //   links: [
  //     { label: "Code / VFS Design", href: "https://github.com/s-ritwik/VFS_IIT_KANPUR" },
  //     { label: "Advisor", href: "https://sites.google.com/site/drmuralidamodaran" },
  //   ],
  // },
  // {
  //   titleHtml: "CL-QP Satellite Attitude Stabilisation",
  //   modalTitleHtml: "CL-QP Satellite Attitude Stabilisation",
  //   image: "assets/images/research-satellite.svg",
  //   alt: "Schematic satellite illustration for the low-Earth-orbit attitude-control project",
  //   descriptionHtml: `<p>Advisor: <a href="https://sites.google.com/view/dipakgiri/group" target="_blank" rel="noreferrer">Dr. D. K. Giri</a>, IIT Kanpur<br>August–November 2025 · AE642<br>Control Lyapunov Functions | QP | MPC | Magnetorquers<br><b>0.4% average pointing error in the project evaluation.</b></p>`,
  //   modalHtml: `<p>Formulated nadir-pointing attitude stabilisation for a satellite in low Earth orbit using magnetorquer actuation in the local vertical/local horizontal (LVLH) frame, for AE642, Satellite Dynamics and Attitude Control.</p><p>Designed a receding-horizon Control Lyapunov–Quadratic Program (CL-QP) model predictive controller. The optimisation minimises quadratic control effort while imposing a discrete Control Lyapunov Function condition across the prediction horizon. The project evaluation achieved an average pointing error of 0.4%, as reported in my résumé.</p><p>The repository contains the control implementation. The thumbnail is a schematic illustration, not a hardware photograph or a plot of measured results.</p>`,
  //   links: [
  //     { label: "Code / Satellite Control", href: "https://github.com/s-ritwik/SADC" },
  //     { label: "Advisor", href: "https://sites.google.com/view/dipakgiri/group" },
  //   ],
  // },
  {
    titleHtml: "4-DOF Parallel Manipulator",
    modalTitleHtml: "4-DOF Parallel Manipulator",
    image: "assets/images/research-stewart-platform.png",
    alt: "stewart_full.png",
    descriptionHtml: `<p>Embedded + Hardware Design | Matlab | R-Pi | Arduino<br></p>`,
    modalHtml: `<p>Embedded + Hardware Design | Matlab | R-Pi | Arduino<br></p>`,
    links: [{ label: "s-ritwik/Stewart-Platform", href: "https://github.com/s-ritwik/Stewart-Platform" }],
  },
  {
    titleHtml: "ENDURE AIR<br>Design Optimisation for Agricultural Drones",
    modalTitleHtml: "ENDURE AIR<br>Design Optimisation for Agricultural Drones",
    image: "assets/images/research-endure-air.png",
    alt: "tandemwith-payload.32-768x421.png",
    descriptionHtml: `<p>Matlab | Helicopter theory | Design optimisation Algorithm</p>`,
    modalHtml: `<p>I developed an advanced design optimisation tool for electric tandem rotor aircraft, applying Blade Element Momentum Theory and Gaussian quadrature. Leveraging my coding skills, I reduced the computational complexity significantly and customised it for various propeller designs. This tool was instrumental in redesigning the Sabal-10 kg tandem rotor into a 10-litre capacity agricultural drone, optimising for endurance, spray area, weight, and cost. I validated the optimisation code through field tests on Sabal-10, using the rotorcraft parameters calculated from the optimisation code.</p>`,
    links: [],
  },
  {
    titleHtml: "Aeromodelling Club<br>FPV Quadcopter",
    modalTitleHtml: "Aeromodelling Club<br>FPV Quadcopter",
    image: "assets/images/research-field-test.jpg",
    alt: "fpv.jpg",
    descriptionHtml: `<p>I mentored 5 Students to make a long-range FPV drone.</p>`,
    modalHtml: `<p>I mentored 5 Students to make a long-range FPV drone.</p>`,
    links: [{ label: "Field test video", href: "https://www.youtube.com/watch?v=7kBycfKQKLI&t=325s" }],
  },
];

// Lead with the latest paper, followed by barrier-function MPC, Caltech, and published vision work.
const featuredProjectTitles = [
  "Barrier-Shaped Recurrent Reinforcement Learning for Autonomous Landing on a Heaving Ship Deck",
  "Barrier Function-Optimised Model Predictive Controller Using GRU For Autonomous UAV Quadrotor Landing On A Heaving Ship-Deck Emulator",
  "A Comparative Study of Model-Based and<br>Reinforcement Learning Control Paradigms for<br>Planar Biped Walking",
  "Autonomous Landing On A Moving Ship-Deck",
];
const projectRank = ({ titleHtml }) => {
  const rank = featuredProjectTitles.indexOf(titleHtml);
  return rank === -1 ? featuredProjectTitles.length : rank;
};
export const researchProjects = [...projectCatalog].sort((first, second) => projectRank(first) - projectRank(second));
