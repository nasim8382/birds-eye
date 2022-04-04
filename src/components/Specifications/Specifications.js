import React from "react";
import mavic from "../../images/mavic-2.jpg";

const Specifications = () => {
  return (
    <div className="text-center">
      <img src={mavic} alt="drone" />
      <div className="py-16 text--center text-teal-700">
        <h2 className="text-3xl text-purple-500 mb-3">Aircraft</h2>
        <p className="text-semibold text-2xl mb-2">Weight (Battery & Propellers Included) : 907 g</p>
        <p className="text-semibold text-2xl mb-2">Max Ascent Speed : 5 m/s (S-mode), 4 m/s (P-mode)</p>
        <p className="text-semibold text-2xl  mb-2">Max Descent Speed : 3 m/s (S-mode), 3 m/s (P-mode)</p>
        <p className="text-semibold text-2xl  mb-2">Max Speed : Max Flight Time (no wind): 31 minutes (at a consistent 25 kph), Max Hovering Time (no wind): 29 minutes</p>
        <p className="text-semibold text-2xl  mb-2">Max Tilt Angle : 35° (S-mode, with remote controller) 25° (P-mode)</p>
        <p className="text-semibold text-2xl  mb-2">Max Angular Speed : 200°/s</p>
        <p className="text-semibold text-2xl  mb-2">Max Wind Speed Resistance : 29–38 kph</p>
        <p className="text-semibold text-2xl  mb-2">Max Flight Time : 31 minutes (at a consistent 25 kph)</p>
        <p className="text-semibold text-2xl  mb-2">Operating Temperature Range : -10°C to 40°C</p>
        <p className="text-semibold text-2xl  mb-2">Satellite Positioning Systems : GPS+GLONASS</p>

        <h2 className="text-3xl text-purple-500 mt-10 mb-3">Gimbal</h2>
        <p className="text-semibold text-2xl  mb-2">Stabilization : Stabilization: 3-axis (tilt, roll, pan), Mechanical Range: Tilt: -135–45° Pan: -100–100°</p>
        <p className="text-semibold text-2xl  mb-2">Controllable Range : Tilt: -90–30° Pan: -75–75°</p>
        <p className="text-semibold text-2xl  mb-2">Max Controllable Angular Speed : 120° /s</p>
        <p className="text-semibold text-2xl  mb-2">Angular Vibration Range : ±0.01°</p>

        <h2 className="text-3xl text-purple-500 mt-10 mb-3">Camera</h2>
        <p className="text-semibold text-2xl  mb-2">Sensor : 1” CMOS
        Effective Pixels: 20 million</p>
        <p className="text-semibold text-2xl  mb-2">Lens : FOV: about 77°
        35 mm Format Equivalent: 28 mm
        Aperture: f/2.8–f/11
        Shooting Range: 1 m to ∞</p>
        <p className="text-semibold text-2xl  mb-2">Electronic Shutter Speed : Electronic Shutter: 8–1/8000s</p>
        <p className="text-semibold text-2xl  mb-2">ISO Range : Video: 100-6400 Photo: 100-3200 (auto) 100-12800 (manual)</p>
        <p className="text-semibold text-2xl  mb-2">Image Size : 5472×3648</p>
        <p className="text-semibold text-2xl  mb-2">Max Video Bitrate : 100Mbps</p>
        <p className="text-semibold text-2xl  mb-2">Photo : JPEG / DNG (RAW)</p>
        <p className="text-semibold text-2xl  mb-2">Video : MP4 / MOV (MPEG-4 AVC/H.264, HEVC/H.265)</p>

        <h2 className="text-3xl text-purple-500 mt-10 mb-3">Charger</h2>
        <p className="text-semibold text-2xl  mb-2">Voltage : Voltage: 17.6 ± 0.1 V
        Input: 100-240 V, 50/60 Hz, 1.8A
        Output: Main: 17.6 V ⎓ 3.41 A or 17.0 V ⎓ 3.53 A USB: 5 V⎓2 A</p>
        <p className="text-semibold text-2xl  mb-2">Rated Power : 60 W</p>

        <h2 className="text-3xl text-purple-500 mt-10 mb-3">App / Live View</h2>
        <p className="text-semibold text-2xl  mb-2">Mobile App : OcuSync 2.0</p>
        <p className="text-semibold text-2xl  mb-2">Latency : 120 - 130 ms</p>
      </div>
    </div>
  );
};

export default Specifications;
