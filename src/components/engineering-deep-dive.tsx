import Reveal from "@/components/reveal";

const ODOMETRY_LINES = [
  "// per-loop dead-wheel deltas (metres)",
  "dL = (encL - prevL) * (2 * PI * r / CPR)",
  "dR = (encR - prevR) * (2 * PI * r / CPR)",
  "dS = (encS - prevS) * (2 * PI * r / CPR)",
  "",
  "// body-frame displacement",
  "dx = (dL + dR) / 2",
  "dy = dS",
  "dTheta = (dR - dL) / trackWidth",
  "",
  "// field-frame pose update",
  "x += dx * cos(theta) - dy * sin(theta)",
  "y += dx * sin(theta) + dy * cos(theta)",
  "theta += dTheta",
];

const VISION_STAGES = [
  {
    step: "01",
    name: "Capture",
    detail: "Limelight 3A · 1280×800 @ 60 fps, global shutter",
  },
  {
    step: "02",
    name: "Threshold",
    detail: "HSV retro-reflective tape isolation with contour fitting",
  },
  {
    step: "03",
    name: "Localize",
    detail: "AprilTag 6D pose solve against the field coordinate frame",
  },
  {
    step: "04",
    name: "Stream",
    detail: "NetworkTables bridge → REV Control Hub over DS link",
  },
  {
    step: "05",
    name: "Correct",
    detail: "Road Runner trajectory update from vision pose residual",
  },
];

const EKF = [
  "state  x = [px, py, theta, vx, vy, omega]",
  "",
  "predict  x⁻ = f(x, u)        // odometry motion model",
  "         P⁻ = F P Fᵀ + Q     // process noise Q",
  "",
  "update   K = P⁻ Hᵀ (H P⁻ Hᵀ + R)⁻¹",
  "         x = x⁻ + K (z - h(x⁻))",
  "         P = (I - K H) P⁻    // vision measurement R",
];

export default function EngineeringDeepDive() {
  return (
    <div className="mt-20">
      <Reveal>
        <div className="flex flex-col gap-4">
          <span className="chip !border-accent/30 !bg-accent/10 !text-accent-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Technical deep-dive
          </span>
          <h3 className="max-w-3xl text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            From sensor noise to field position
          </h3>
          <p className="max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
            The mathematics behind the subsystems — the same models the robot
            runs every 16 ms, written out for scrutiny.
          </p>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <Reveal>
          <div className="glass h-full overflow-hidden rounded-3xl">
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
              <h4 className="text-sm font-semibold text-white">
                Dead-wheel odometry
              </h4>
              <span className="font-mono text-xs text-zinc-500">odometry.java</span>
            </div>
            <pre className="overflow-x-auto px-6 py-5 font-mono text-[12.5px] leading-relaxed text-zinc-300">
              {ODOMETRY_LINES.join("\n")}
            </pre>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="glass h-full overflow-hidden rounded-3xl">
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
              <h4 className="text-sm font-semibold text-white">
                State estimation
              </h4>
              <span className="font-mono text-xs text-zinc-500">ekf.localization</span>
            </div>
            <pre className="overflow-x-auto px-6 py-5 font-mono text-[12.5px] leading-relaxed text-zinc-300">
              {EKF.join("\n")}
            </pre>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <div className="glass mt-6 rounded-3xl p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h4 className="text-sm font-semibold text-white">
              Vision processing pipeline
            </h4>
            <span className="font-mono text-xs text-zinc-500">
              Limelight 3A → Control Hub
            </span>
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-5">
            {VISION_STAGES.map((stage, i) => (
              <div key={stage.step} className="relative">
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                  <div className="font-mono text-xs text-accent">/{stage.step}</div>
                  <div className="mt-2 text-sm font-semibold text-white">
                    {stage.name}
                  </div>
                  <div className="mt-1 text-[11px] leading-relaxed text-zinc-500">
                    {stage.detail}
                  </div>
                </div>
                {i < VISION_STAGES.length - 1 ? (
                  <span className="absolute -right-2 top-1/2 hidden -translate-y-1/2 text-zinc-600 md:block">
                    →
                  </span>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
}
