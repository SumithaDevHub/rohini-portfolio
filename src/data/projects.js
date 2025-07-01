const projects = [
  {
    title: "RFID-Based Attendance System",
    category: "IoT",
    problem:
      "Manual attendance tracking is slow, error-prone, and inefficient for large groups.",
    solution:
      "Built an automated attendance system using Arduino and RFID tags with unique identifiers. The system triggers LED and buzzer feedback for users, interfaces seamlessly with a user database, and reliably records attendance in real time.",
    techStack: ["Arduino", "RFID", "Database", "C++"],
  },
  {
    title: "AI-Based Air Quality Monitoring and Suggestion System",
    category: "AI",
    problem:
      "Traditional air quality monitors often use single-pollutant sensors or costly hardware, limiting accuracy and accessibility.",
    solution:
      "Developed a real-time AQI monitoring system on Maixduino, integrating multiple sensors (CO, PM2.5, PM10, methane, H₂S, ozone) for comprehensive data capture. Implemented an on-device neural network to predict and categorize AQI.",
    techStack: ["Maixduino", "Neural Networks", "IoT", "Multi-sensor"],
  },
  {
    title: "Edge AI Powered Surveillance: Intelligent Threat Detection",
    category: "AI",
    problem:
      "Slow threat detection in conflict zones due to cloud-dependent surveillance creates dangerous delays and security risks.",
    solution:
      "Created an Edge AI-powered weapon detection system on Sipeed Maixduino, processing video locally with YOLOv2 achieving 90%+ accuracy. Integrated LoRa and Wi-Fi to send alerts up to 10 km.",
    techStack: ["YOLOv2", "Edge AI", "LoRa", "Wi-Fi", "Computer Vision"],
  },
];

export default projects;
